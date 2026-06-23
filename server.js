const express = require('express');
const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'nrg_secret_key_2025';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

const db = new Database(path.join(__dirname, 'database.sqlite'));

// Создание таблиц
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );
  
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    product_name TEXT NOT NULL,
    quantity TEXT,
    description TEXT,
    file_name TEXT,
    status TEXT DEFAULT 'Новая заявка',
    price TEXT DEFAULT 'не указана',
    created_at TEXT DEFAULT (datetime('now')),
    client_name TEXT,
    phone TEXT,
    email TEXT
  );
  
  CREATE TABLE IF NOT EXISTS password_resets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    contact TEXT,
    code TEXT,
    expires_at TEXT
  );
`);

console.log('✅ База данных готова');

function generateToken(userId, username) {
  return jwt.sign({ userId, username }, SECRET_KEY, { expiresIn: '24h' });
}

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Нет токена' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Токен недействителен' });
  }
}

app.post('/api/register', async (req, res) => {
  const { username, password, phone, email } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Логин и пароль обязательны' });
  try {
    const hash = await bcrypt.hash(password, 10);
    const stmt = db.prepare(`INSERT INTO users (username, password_hash, phone, email) VALUES (?, ?, ?, ?)`);
    const info = stmt.run(username, hash, phone || '', email || '');
    const token = generateToken(info.lastInsertRowid, username);
    res.json({ success: true, token, userId: info.lastInsertRowid });
  } catch (err) {
    res.status(400).json({ error: 'Пользователь уже существует' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const stmt = db.prepare(`SELECT * FROM users WHERE username = ?`);
  const user = stmt.get(username);
  if (!user) return res.status(401).json({ error: 'Неверный логин или пароль' });
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: 'Неверный логин или пароль' });
  const token = generateToken(user.id, user.username);
  res.json({ success: true, token, userId: user.id, username: user.username });
});

app.get('/api/user/profile', verifyToken, (req, res) => {
  const userStmt = db.prepare(`SELECT id, username, phone, email FROM users WHERE id = ?`);
  const user = userStmt.get(req.user.userId);
  if (!user) return res.status(404).json({ error: 'Пользователь не найден' });
  const ordersStmt = db.prepare(`SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC`);
  const orders = ordersStmt.all(req.user.userId);
  res.json({ user, orders: orders || [] });
});

app.post('/api/orders', verifyToken, (req, res) => {
  const { product_name, quantity, description, file_name } = req.body;
  const userId = req.user.userId;
  if (!product_name) return res.status(400).json({ error: 'Название товара обязательно' });
  
  const userStmt = db.prepare(`SELECT username, phone, email FROM users WHERE id = ?`);
  const user = userStmt.get(userId);
  
  const stmt = db.prepare(`INSERT INTO orders (user_id, product_name, quantity, description, file_name, client_name, phone, email, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  const info = stmt.run(userId, product_name, quantity, description, file_name, user.username, user.phone, user.email, 'Новая заявка');
  res.json({ success: true, orderId: info.lastInsertRowid });
});

app.post('/api/forgot-password', (req, res) => {
  const { contact } = req.body;
  const userStmt = db.prepare(`SELECT * FROM users WHERE email = ? OR phone = ?`);
  const user = userStmt.get(contact, contact);
  if (!user) return res.status(404).json({ error: 'Пользователь не найден' });
  const code = crypto.randomInt(100000, 999999).toString();
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 15);
  const stmt = db.prepare(`INSERT INTO password_resets (user_id, contact, code, expires_at) VALUES (?, ?, ?, ?)`);
  stmt.run(user.id, contact, code, expires.toISOString());
  console.log(`\n🔐 КОД ВОССТАНОВЛЕНИЯ: ${code}\n`);
  res.json({ success: true });
});

app.post('/api/reset-password', async (req, res) => {
  const { contact, code, newPassword } = req.body;
  const resetStmt = db.prepare(`SELECT * FROM password_resets WHERE contact = ? AND code = ? AND expires_at > datetime('now')`);
  const reset = resetStmt.get(contact, code);
  if (!reset) return res.status(400).json({ error: 'Неверный код' });
  const hash = await bcrypt.hash(newPassword, 10);
  const updateStmt = db.prepare(`UPDATE users SET password_hash = ? WHERE id = ?`);
  updateStmt.run(hash, reset.user_id);
  const deleteStmt = db.prepare(`DELETE FROM password_resets WHERE contact = ?`);
  deleteStmt.run(contact);
  res.json({ success: true });
});

app.get('/api/admin/orders', (req, res) => {
  const stmt = db.prepare(`SELECT * FROM orders ORDER BY created_at DESC`);
  const orders = stmt.all();
  res.json({ orders: orders || [] });
});

app.put('/api/admin/order/:id/status', (req, res) => {
  const { status } = req.body;
  const stmt = db.prepare(`UPDATE orders SET status = ? WHERE id = ?`);
  stmt.run(status, req.params.id);
  res.json({ success: true });
});

app.put('/api/admin/order/:id', (req, res) => {
  const { client_name, phone, email, product_name, quantity, price, description, status } = req.body;
  const stmt = db.prepare(`UPDATE orders SET client_name=?, phone=?, email=?, product_name=?, quantity=?, price=?, description=?, status=? WHERE id=?`);
  stmt.run(client_name, phone, email, product_name, quantity, price, description, status, req.params.id);
  res.json({ success: true });
});

app.delete('/api/admin/order/:id', (req, res) => {
  const stmt = db.prepare(`DELETE FROM orders WHERE id = ?`);
  stmt.run(req.params.id);
  res.json({ success: true });
});

app.get('/videos/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'videos', filename);
  res.sendFile(filepath, (err) => {
    if (err) {
      console.log('Видео не найдено:', filepath);
      res.status(404).send('Video not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Сервер запущен на порту ${PORT}`);
  console.log(`Адрес: http://localhost:${PORT}`);
  console.log(`Админ: login: admin | password: admin\n`);
});
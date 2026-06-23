const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'nrg_secret_key_2025';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS orders (
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
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS password_resets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    contact TEXT,
    code TEXT,
    expires_at TEXT
  )`);
  
  console.log('✅ База данных готова');
});

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
    db.run(`INSERT INTO users (username, password_hash, phone, email) VALUES (?, ?, ?, ?)`,
      [username, hash, phone || '', email || ''],
      function(err) {
        if (err) return res.status(400).json({ error: 'Пользователь уже существует' });
        const token = generateToken(this.lastID, username);
        res.json({ success: true, token, userId: this.lastID });
      });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
    if (err || !user) return res.status(401).json({ error: 'Неверный логин или пароль' });
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: 'Неверный логин или пароль' });
    const token = generateToken(user.id, user.username);
    res.json({ success: true, token, userId: user.id, username: user.username });
  });
});

app.get('/api/user/profile', verifyToken, (req, res) => {
  db.get(`SELECT id, username, phone, email FROM users WHERE id = ?`, [req.user.userId], (err, user) => {
    if (err || !user) return res.status(404).json({ error: 'Пользователь не найден' });
    db.all(`SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC`, [req.user.userId], (err2, orders) => {
      res.json({ user, orders: orders || [] });
    });
  });
});

app.post('/api/orders', verifyToken, (req, res) => {
  const { product_name, quantity, description, file_name } = req.body;
  const userId = req.user.userId;
  
  if (!product_name) return res.status(400).json({ error: 'Название товара обязательно' });
  
  db.get(`SELECT username, phone, email FROM users WHERE id = ?`, [userId], (err, user) => {
    if (err) return res.status(500).json({ error: 'Ошибка получения пользователя' });
    
    db.run(`INSERT INTO orders (user_id, product_name, quantity, description, file_name, client_name, phone, email, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [userId, product_name, quantity, description, file_name, user.username, user.phone, user.email, 'Новая заявка'],
      function(err2) {
        if (err2) {
          console.error('Ошибка создания заявки:', err2);
          return res.status(500).json({ error: 'Ошибка создания заявки', details: err2.message });
        }
        res.json({ success: true, orderId: this.lastID });
      });
  });
});

app.post('/api/forgot-password', (req, res) => {
  const { contact } = req.body;
  db.get(`SELECT * FROM users WHERE email = ? OR phone = ?`, [contact, contact], (err, user) => {
    if (err || !user) return res.status(404).json({ error: 'Пользователь не найден' });
    const code = crypto.randomInt(100000, 999999).toString();
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 15);
    db.run(`INSERT INTO password_resets (user_id, contact, code, expires_at) VALUES (?, ?, ?, ?)`,
      [user.id, contact, code, expires.toISOString()]);
    console.log(`\n🔐 КОД ВОССТАНОВЛЕНИЯ: ${code}\n`);
    res.json({ success: true });
  });
});

app.post('/api/reset-password', async (req, res) => {
  const { contact, code, newPassword } = req.body;
  db.get(`SELECT * FROM password_resets WHERE contact = ? AND code = ? AND expires_at > datetime('now')`, [contact, code], async (err, reset) => {
    if (err || !reset) return res.status(400).json({ error: 'Неверный код' });
    const hash = await bcrypt.hash(newPassword, 10);
    db.run(`UPDATE users SET password_hash = ? WHERE id = ?`, [hash, reset.user_id]);
    db.run(`DELETE FROM password_resets WHERE contact = ?`, [contact]);
    res.json({ success: true });
  });
});

app.get('/api/admin/orders', (req, res) => {
  db.all(`SELECT * FROM orders ORDER BY created_at DESC`, [], (err, orders) => {
    if (err) return res.status(500).json({ error: 'Ошибка' });
    res.json({ orders: orders || [] });
  });
});

app.put('/api/admin/order/:id/status', (req, res) => {
  const { status } = req.body;
  db.run(`UPDATE orders SET status = ? WHERE id = ?`, [status, req.params.id], () => {
    res.json({ success: true });
  });
});

app.put('/api/admin/order/:id', (req, res) => {
  const { client_name, phone, email, product_name, quantity, price, description, status } = req.body;
  db.run(`UPDATE orders SET client_name=?, phone=?, email=?, product_name=?, quantity=?, price=?, description=?, status=? WHERE id=?`,
    [client_name, phone, email, product_name, quantity, price, description, status, req.params.id], () => {
    res.json({ success: true });
  });
});

app.delete('/api/admin/order/:id', (req, res) => {
  db.run(`DELETE FROM orders WHERE id = ?`, [req.params.id], () => {
    res.json({ success: true });
  });
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
  console.log(`
Адрес: http://localhost:${PORT}                     
Админ: login: admin | password: admin
  `);
});
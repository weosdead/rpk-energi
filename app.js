const CATALOG_ITEMS = [
    { id: 1, name: "Термос / термобутылка", price: "уточните у администратора", desc: "Модели уточняйте при заказе, сохраняет тепло до 12ч", image: "images/1.PNG", category: "Термопродукция" },
    { id: 2, name: "Термостакан с логотипом", price: "уточните у администратора", desc: "Стильный металлический стакан, двойные стенки", image: "images/1.PNG", category: "Термопродукция" },
    { id: 3, name: "Подарочный набор (VIP)", price: "уточните у администратора", desc: "Наполнение по желанию: кружка+блокнот+ручка", image: "images/3.PNG", category: "Подарочные наборы" },
    { id: 4, name: "Набор стикеров эпоксидная смола", price: "уточните у администратора", desc: "Объемные, любые формы под ваш дизайн", image: "images/4.PNG", category: "Стикеры / брелоки" },
    { id: 5, name: "Коврик для мыши из экокожи", price: "уточните у администратора", desc: "Размер 80*40см, темно-синий, премиум", image: "images/5.PNG", category: "Коврики" },
    { id: 6, name: "Пробковый коврик с беспроводной зарядкой", price: "уточните у администратора", desc: "«Quercus», натуральный, 45*40см + зарядка 15W", image: "images/6.PNG", category: "Коврики" },
    { id: 7, name: "Сублимационный коврик", price: "уточните у администратора", desc: "22х18 см, под ваше изображение", image: "images/6.PNG", category: "Коврики" },
    { id: 8, name: "Ручки с логотипом", price: "уточните у администратора", desc: "Шариковые, гелевые, металлик", image: "images/8.PNG", category: "Канцелярия" },
    { id: 9, name: "Ежедневник Nota Bene", price: "уточните у администратора", desc: "Зеленый, твердый переплет, офсет", image: "images/9.PNG", category: "Ежедневники" },
    { id: 10, name: "Ежедневник Base Mini", price: "уточните у администратора", desc: "Недатированный, красный, формат А6", image: "images/9.PNG", category: "Ежедневники" },
    { id: 11, name: "Блокнот Velours", price: "уточните у администратора", desc: "Черный с синим, мягкая обложка", image: "images/9.PNG", category: "Ежедневники" },
    { id: 12, name: "Толстовка / свитшот", price: "уточните у администратора", desc: "Печать логотипа, вышивка, любой цвет", image: "images/12.PNG", category: "Одежда" },
    { id: 13, name: "Футболка с принтом", price: "уточните у администратора", desc: "100% хлопок, сублимация или шелкография", image: "images/13.PNG", category: "Одежда" },
    { id: 14, name: "Бейсболка", price: "уточните у администратора", desc: "Вышивка логотипа, разная плотность", image: "images/14.PNG", category: "Одежда" },
    { id: 15, name: "Шоппер с нанесением", price: "уточните у администратора", desc: "Хлопок, прочная сумка для покупок", image: "images/16.PNG", category: "Сумки/рюкзаки" },
    { id: 16, name: "Рюкзак", price: "уточните у администратора", desc: "Компактный или городской, брендирование", image: "images/16.PNG", category: "Сумки/рюкзаки" },
    { id: 17, name: "Настольный светильник с зарядкой", price: "уточните у администратора", desc: "LED, порты USB, стильный дизайн", image: "images/17.PNG", category: "Электроника" },
    { id: 18, name: "Картхолдер / визитница", price: "уточните у администратора", desc: "Натуральная кожа / экокожа, логотип тиснение", image: "images/18 (2).PNG", category: "Аксессуары" },
    { id: 19, name: "Плед с логотипом", price: "уточните у администратора", desc: "Флисовый, размер 150*200, яркие цвета", image: "images/19.PNG", category: "Дом и офис" },
    { id: 20, name: "Календарь-планнер на спирали", price: "уточните у администратора", desc: "А5, макеты под ваш дизайн, синий/белый", image: "images/20.PNG", category: "Полиграфия" },
    { id: 21, name: "Вечный календарь (акрил/фанера)", price: "уточните у администратора", desc: "Прозрачный акрил, настольный, даты вручную", image: "images/20.PNG", category: "Полиграфия" },
    { id: 22, name: "Подарочная коробка/пакет", price: "уточните у администратора", desc: "С печатью, крафт/картон", image: "images/22.PNG", category: "Упаковка" },
    { id: 23, name: "Брелок / ремувка", price: "уточните у администратора", desc: "Эпоксидная смола, металл, пластик", image: "images/23.PNG", category: "Брелоки" },
    { id: 24, name: "Зонтик с кейсом", price: "уточните у администратора", desc: "Белый, синий", image: "24 (2).PNG", category: "Зонтики" },
    { id: 25, name: "Ежедневник Boston", price: "уточните у администратора", desc: "Ежедневник недатированный А5 Boston, искусственная кожа", image: "images/25.PNG", category: "Ежедневники" },
    { id: 26, name: "Ежедневник Megapolis Velvet Flex", price: "уточните у администратора", desc: "Ежедневник недатированный А5 Megapolis Velvet Flex, искусственная кожа, софт-тач", image: "images/25.PNG", category: "Ежедневники" },
    { id: 27, name: "Блокнот на пружинке", price: "уточните у администратора", desc: "Блокнот на пружинке А5, 35л. (обложка под ваш дизайн)", image: "images/25.PNG", category: "Ежедневники" }
];

const SLIDER_ITEMS = CATALOG_ITEMS.slice(0, 5);

let slideInterval = null;
let currentSlide = 0;
let currentSearchTerm = '';
let currentCategory = '';

let currentUserToken = localStorage.getItem('nrg_token') || null;
let currentUser = null;
let userOrders = [];

const PORTFOLIO_ITEMS = [
    { title: "Подарочные боксы Drivee", client: "Drivee", description: "Готовые премиальные боксы с брендированием.", localVideo: "videos/drivee.MP4", posterImage: "images/box-preview.jpg", category: "Подарочные наборы", type: "результат" },
    { title: "Гравировка на металле", client: "Промышленные и сувенирные изделия", description: "Процесс лазерной гравировки на металлических поверхностях", localVideo: "videos/car.MP4", posterImage: "images/engraving-preview.jpg", category: "Аксессуары", type: "процесс" },
    { title: "УФ-печать ёлочных игрушек из акрила", client: "Новогодние коллекции", description: "Процесс нанесения ярких изображений на акриловые заготовки", localVideo: "videos/newyear.MP4", posterImage: "images/toys-preview.jpg", category: "Аксессуары", type: "процесс" },
    { title: "Печать на постерной бумаге", client: "Интерьерная печать", description: "Процесс изготовления постеров любых размеров", localVideo: "videos/poster.MP4", posterImage: "images/poster-preview.jpg", category: "Полиграфия", type: "процесс" },
    { title: "Нанесение на свитшоты под заказ", client: "Брендирование одежды", description: "Качественная печать на свитшотах", localVideo: "videos/ykt.MP4", posterImage: "images/sweatshirt-preview.jpg", category: "Одежда", type: "результат" },
    { title: "УФ-печать на ручках", client: "Деловая сувенирная продукция", description: "Нанесение логотипа на ручки", localVideo: "videos/pen.MP4", posterImage: "images/pen-preview.jpg", category: "Канцелярия", type: "процесс" },
    { title: "Акриловые статуэтки", client: "Награды и сувениры", description: "Эксклюзивные статуэтки из акрила", localVideo: "videos/horse.MP4", posterImage: "images/acrylic-preview.jpg", category: "Аксессуары", type: "процесс" },
    { title: "3D стикеры (эпоксидная смола)", client: "Брендирование и декор", description: "Объёмные стикеры с эффектом 3D", localVideo: "videos/stik.MP4", posterImage: "images/stickers-preview.jpg", category: "Стикеры / брелоки", type: "результат" },
    { title: "Интерьерное оформление", client: "Дизайн пространств", description: "Наклейки, постеры, панно под заказ", localVideo: "videos/room.MP4", posterImage: "images/interior-preview.jpg", category: "Дом и офис", type: "результат" },
    { title: "Печать этикеток с контурной резкой", client: "Упаковка и маркировка", description: "Этикетки любой формы", localVideo: "videos/skif.MP4", posterImage: "images/label-preview.jpg", category: "Полиграфия", type: "процесс" }
];

// Фотогалерея / Портфолио (из презентации)
const PORTFOLIO_PHOTOS = [
    { src: "images/portfolio/5.jpg", title: "Цифровая печать", desc: "Полиграфия" },
    { src: "images/portfolio/8.jpg", title: "Разработка логотипа", desc: "Фирменный стиль" },
    { src: "images/portfolio/11.jpg", title: "Оформление ВК", desc: "Социальные сети" },
    { src: "images/portfolio/12.jpg", title: "Оформление Instagram", desc: "Визуал постов" },
    { src: "images/portfolio/15.jpg", title: "Логотип InvestYakutia", desc: "Ребрендинг" },
    { src: "images/portfolio/16.jpg", title: "Логотип BAR 79", desc: "Ресторан" },
    { src: "images/portfolio/17.jpg", title: "Логотип ILS", desc: "Языковая школа" },
    { src: "images/portfolio/18.jpg", title: "Логотип Q-MART", desc: "Торговая сеть" },
    { src: "images/portfolio/19.jpg", title: "Логотип АВЕНЮ", desc: "Недвижимость" },
    { src: "images/portfolio/20.jpg", title: "Логотип Авто-Мастер", desc: "Автосервис" }
];

let currentLightboxIndex = 0;

function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.startsWith('7')) value = '7' + value.slice(1);
    else if (value.startsWith('8')) value = '7' + value.slice(1);
    else if (!value.startsWith('7') && value.length > 0) value = '7' + value;
    let formatted = '+7';
    if (value.length > 1) formatted += ' ' + value.slice(1, 4);
    if (value.length > 4) formatted += ' ' + value.slice(4, 7);
    if (value.length > 7) formatted += '-' + value.slice(7, 9);
    if (value.length > 9) formatted += '-' + value.slice(9, 11);
    input.value = formatted.trim();
}

function onlyDigitsPrice(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    if (type === 'error') notif.style.backgroundColor = '#dc2626';
    if (type === 'success') notif.style.backgroundColor = '#16a34a';
    if (type === 'info') notif.style.backgroundColor = '#2563eb';
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function isAdmin() {
    return sessionStorage.getItem('admin_nrg') === 'true';
}

function loginAdmin(username, password) {
    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('admin_nrg', 'true');
        updateNavbarAuth();
        showSection('admin-orders');
        showNotification('Вход в админ-панель выполнен', 'success');
        return true;
    }
    showNotification('Неверный логин или пароль администратора', 'error');
    return false;
}

function logoutAdmin() {
    sessionStorage.removeItem('admin_nrg');
    updateNavbarAuth();
    showSection('home');
    showNotification('Вы вышли из админ-панели', 'info');
}

async function apiRequest(endpoint, method, body = null, isFormData = false) {
    const headers = {};
    if (!isFormData) headers['Content-Type'] = 'application/json';
    if (currentUserToken) headers['Authorization'] = `Bearer ${currentUserToken}`;
    const options = { method, headers };
    if (body) {
        if (isFormData) options.body = body;
        else options.body = JSON.stringify(body);
    }
    const response = await fetch(`http://localhost:3000${endpoint}`, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Ошибка запроса');
    return data;
}

async function registerClientAPI(username, password, phone, email) {
    const data = await apiRequest('/api/register', 'POST', { username, password, phone, email });
    if (data.token) {
        currentUserToken = data.token;
        localStorage.setItem('nrg_token', currentUserToken);
        await loadUserProfile();
        return true;
    }
    return false;
}

async function loginClientAPI(username, password) {
    const data = await apiRequest('/api/login', 'POST', { username, password });
    if (data.token) {
        currentUserToken = data.token;
        localStorage.setItem('nrg_token', currentUserToken);
        await loadUserProfile();
        return true;
    }
    return false;
}

async function loadUserProfile() {
    if (!currentUserToken) return null;
    try {
        const data = await apiRequest('/api/user/profile', 'GET');
        currentUser = data.user;
        userOrders = data.orders;
        updateNavbarAuth();
        return data;
    } catch (err) {
        logoutClient();
        return null;
    }
}

function logoutClient() {
    currentUserToken = null;
    currentUser = null;
    userOrders = [];
    localStorage.removeItem('nrg_token');
    updateNavbarAuth();
    showSection('home');
    showNotification('Вы вышли из личного кабинета', 'info');
}

async function submitClientOrder(product_name, quantity, description, file) {
    if (!currentUserToken) {
        showNotification('Для оформления заявки войдите в личный кабинет', 'error');
        showSection('auth');
        return false;
    }
    try {
        let file_name = '';
        if (file) file_name = file.name;
        await apiRequest('/api/orders', 'POST', { product_name, quantity, description, file_name });
        await loadUserProfile();
        showNotification('Заявка отправлена! Статус можно отслеживать в личном кабинете', 'success');
        return true;
    } catch (err) {
        showNotification(err.message, 'error');
        return false;
    }
}

async function requestResetCode(contact) {
    await apiRequest('/api/forgot-password', 'POST', { contact });
}

async function confirmReset(contact, code, newPassword) {
    await apiRequest('/api/reset-password', 'POST', { contact, code, newPassword });
}

async function getAllServerOrders() {
    if (!isAdmin()) return [];
    try {
        const response = await fetch('http://localhost:3000/api/admin/orders', {
            headers: { 'Authorization': `Bearer ${currentUserToken}` }
        });
        if (response.ok) {
            const data = await response.json();
            return data.orders || [];
        }
        return [];
    } catch (err) {
        console.error('Ошибка получения заявок:', err);
        return [];
    }
}

async function updateOrderStatus(id, status) {
    try {
        await fetch(`http://localhost:3000/api/admin/order/${id}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${currentUserToken}` },
            body: JSON.stringify({ status })
        });
        return true;
    } catch (err) {
        console.error('Ошибка обновления статуса:', err);
        return false;
    }
}

async function updateOrderData(id, data) {
    try {
        await fetch(`http://localhost:3000/api/admin/order/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${currentUserToken}` },
            body: JSON.stringify(data)
        });
        return true;
    } catch (err) {
        console.error('Ошибка обновления заявки:', err);
        return false;
    }
}

async function deleteServerOrder(id) {
    try {
        await fetch(`http://localhost:3000/api/admin/order/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${currentUserToken}` }
        });
        return true;
    } catch (err) {
        console.error('Ошибка удаления заявки:', err);
        return false;
    }
}

function updateNavbarAuth() {
    const authLinks = document.getElementById('authLinks');
    const profileLinks = document.getElementById('profileLinks');
    const adminProfileLinks = document.getElementById('adminProfileLinks');
    const profileNameLink = document.getElementById('profileNameLink');
    
    if (isAdmin()) {
        if (authLinks) authLinks.style.display = 'none';
        if (profileLinks) profileLinks.style.display = 'none';
        if (adminProfileLinks) adminProfileLinks.style.display = 'flex';
    } else if (currentUser) {
        if (authLinks) authLinks.style.display = 'none';
        if (profileLinks) {
            profileLinks.style.display = 'flex';
            profileLinks.style.gap = '1.5rem';
        }
        if (adminProfileLinks) adminProfileLinks.style.display = 'none';
        if (profileNameLink) profileNameLink.textContent = currentUser.username;
    } else {
        if (authLinks) authLinks.style.display = 'flex';
        if (profileLinks) profileLinks.style.display = 'none';
        if (adminProfileLinks) adminProfileLinks.style.display = 'none';
    }
}

function openProductModal(item) {
    const oldModal = document.getElementById('productModal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-img">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/600x400/1a1a2a/CCFF00?text=${encodeURIComponent(item.name)}'">
            </div>
            <div class="modal-info">
                <span class="badge-category">${item.category}</span>
                <h2>${escapeHtml(item.name)}</h2>
                <div class="modal-price">${item.price}</div>
                <p>${escapeHtml(item.desc)}</p>
                <button class="btn" style="margin-top: 1rem;" onclick='quickOrder("${item.name.replace(/'/g, "\\'")}"); closeProductModal();'>Заказать →</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').onclick = closeProductModal;
    modal.querySelector('.modal-overlay').onclick = closeProductModal;
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.remove();
    document.body.style.overflow = '';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
        modal.remove();
        document.body.style.overflow = '';
    }
}

function openVideoModal(videoSrc, title, posterImage = null) {
    const oldModal = document.getElementById('videoModal');
    if (oldModal) oldModal.remove();

    let videoPath = videoSrc;
    if (!videoPath.startsWith('videos/') && !videoPath.startsWith('/videos/') && !videoPath.startsWith('./videos/')) {
        videoPath = 'videos/' + videoPath.replace(/^\.?\//, '');
    }
    
    const modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="video-modal-content">
            <button class="modal-close">&times;</button>
            <h3>${escapeHtml(title)}</h3>
            <div class="video-container">
                <video controls class="custom-video" preload="metadata" style="filter:none; brightness:1;">
                    <source src="${videoPath}" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <p class="video-hint">🎬 ${escapeHtml(title)} | Используйте элементы управления видео</p>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    const videoElement = modal.querySelector('video');
    if (videoElement) {
        videoElement.addEventListener('error', function(e) {
            console.error('Видео не загружено:', videoPath);
        });
    }
    
    modal.querySelector('.modal-close').onclick = closeVideoModal;
    modal.querySelector('.modal-overlay').onclick = closeVideoModal;
    
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeVideoModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function openVideoModalFromItem(portfolioItem) {
    const videoSrc = portfolioItem.getAttribute('data-video');
    const title = portfolioItem.getAttribute('data-title');
    const poster = portfolioItem.getAttribute('data-poster');
    
    if (videoSrc) {
        openVideoModal(videoSrc, title, poster);
    } else {
        showNotification('Видео временно недоступно', 'error');
    }
}

function renderAuthPage() {
    return `
        <div class="card auth-card">
            <div class="auth-tabs">
                <button class="auth-tab active" onclick="switchAuthTab('login')">Вход</button>
                <button class="auth-tab" onclick="switchAuthTab('register')">Регистрация</button>
            </div>
            
            <div id="loginForm" class="auth-form">
                <h2>Вход в аккаунт</h2>
                <div class="form-group">
                    <label>Логин</label>
                    <input type="text" id="loginUsername" placeholder="Введите логин">
                </div>
                <div class="form-group">
                    <label>Пароль</label>
                    <input type="password" id="loginPassword" placeholder="Введите пароль">
                </div>
                <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="isAdminLogin"> Вход как администратор
                    </label>
                </div>
                <button class="btn w-100" onclick="submitLogin()">Войти</button>
                <p class="auth-link"><a href="#" onclick="switchAuthTab('forgot')">Забыли пароль?</a></p>
            </div>
            
            <div id="registerForm" class="auth-form" style="display:none;">
                <h2>Регистрация</h2>
                <p class="auth-hint">Зарегистрируйтесь, чтобы оформлять заявки и отслеживать их статус</p>
                <div class="form-group">
                    <label>Логин *</label>
                    <input type="text" id="regUsername" placeholder="Придумайте логин">
                </div>
                <div class="form-group">
                    <label>Пароль *</label>
                    <input type="password" id="regPassword" placeholder="Придумайте пароль">
                </div>
                <div class="form-group">
                    <label>Телефон</label>
                    <input type="tel" id="regPhone" placeholder="+7..." oninput="formatPhoneNumber(this)">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="regEmail" placeholder="example@mail.ru">
                </div>
                <button class="btn w-100" onclick="submitRegister()">Зарегистрироваться</button>
            </div>
            
            <div id="forgotForm" class="auth-form" style="display:none;">
                <h2>Восстановление пароля</h2>
                <p>Введите ваш Email или номер телефона</p>
                <div class="form-group">
                    <label>Email или телефон</label>
                    <input type="text" id="resetContact" placeholder="Email или телефон">
                </div>
                <button class="btn w-100" onclick="requestResetCodeClient()">Отправить код</button>
                <div id="resetCodeSection" style="display:none; margin-top:1rem;">
                    <div class="form-group">
                        <label>Код из сообщения</label>
                        <input type="text" id="resetCode">
                    </div>
                    <div class="form-group">
                        <label>Новый пароль</label>
                        <input type="password" id="newPassword">
                    </div>
                    <button class="btn w-100" onclick="confirmResetClient()">Сменить пароль</button>
                </div>
                <p class="auth-link"><a href="#" onclick="switchAuthTab('login')">Вернуться ко входу</a></p>
            </div>
        </div>
    `;
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotForm');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotForm.style.display = 'none';
        if (tabs[0]) tabs[0].classList.add('active');
    } else if (tab === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        forgotForm.style.display = 'none';
        if (tabs[1]) tabs[1].classList.add('active');
    } else if (tab === 'forgot') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotForm.style.display = 'block';
    }
}

async function submitLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const isAdminLogin = document.getElementById('isAdminLogin')?.checked;
    
    if (!username || !password) {
        showNotification('Заполните логин и пароль', 'error');
        return;
    }
    
    if (isAdminLogin) {
        if (loginAdmin(username, password)) {
            document.getElementById('loginUsername').value = '';
            document.getElementById('loginPassword').value = '';
            document.getElementById('isAdminLogin').checked = false;
        }
    } else {
        try {
            const success = await loginClientAPI(username, password);
            if (success) {
                showNotification('Вход выполнен', 'success');
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
                showSection('client-profile');
            } else {
                showNotification('Неверный логин или пароль', 'error');
            }
        } catch (err) {
            showNotification('Ошибка сервера. Запустите сервер: node server.js', 'error');
        }
    }
}

async function submitRegister() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    
    if (!username || !password) {
        showNotification('Заполните логин и пароль', 'error');
        return;
    }
    
    try {
        await registerClientAPI(username, password, phone, email);
        showNotification('Регистрация успешна! Теперь вы можете оформлять заявки', 'success');
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('regPhone').value = '';
        document.getElementById('regEmail').value = '';
        showSection('client-profile');
    } catch (err) {
        showNotification(err.message, 'error');
    }
}

async function requestResetCodeClient() {
    const contact = document.getElementById('resetContact').value;
    if (!contact) {
        showNotification('Введите Email или телефон', 'error');
        return;
    }
    try {
        await requestResetCode(contact);
        showNotification('Код отправлен (проверьте консоль сервера)', 'success');
        document.getElementById('resetCodeSection').style.display = 'block';
    } catch (err) {
        showNotification(err.message, 'error');
    }
}

async function confirmResetClient() {
    const contact = document.getElementById('resetContact').value;
    const code = document.getElementById('resetCode').value;
    const newPassword = document.getElementById('newPassword').value;
    if (!code || !newPassword) {
        showNotification('Заполните все поля', 'error');
        return;
    }
    try {
        await confirmReset(contact, code, newPassword);
        showNotification('Пароль изменен, войдите снова', 'success');
        switchAuthTab('login');
        document.getElementById('resetContact').value = '';
        document.getElementById('resetCode').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('resetCodeSection').style.display = 'none';
    } catch (err) {
        showNotification(err.message, 'error');
    }
}

function renderProfilePage() {
    if (!currentUser) {
        showSection('auth');
        return '<div class="card">Перенаправление...</div>';
    }
    
    let ordersHtml = '';
    if (userOrders && userOrders.length) {
        userOrders.forEach(order => {
            ordersHtml += `
                <tr>
                    <td>${order.id}</td>
                    <td>${escapeHtml(order.product_name)}</td>
                    <td>${order.quantity || '-'}</td>
                    <td><span class="status-badge status-${order.status.replace(/ /g, '-').toLowerCase()}">${escapeHtml(order.status)}</span></td>
                    <td>${order.price || 'не указана'}</td>
                    <td>${new Date(order.created_at).toLocaleDateString()}</td>
                </tr>
            `;
        });
    } else {
        ordersHtml = '<tr><td colspan="6">У вас пока нет заявок</td></tr>';
    }
    
    return `
        <div class="card">
            <h2>Личный кабинет</h2>
            <div class="profile-info">
                <p><strong>Логин:</strong> ${escapeHtml(currentUser.username)}</p>
                <p><strong>Телефон:</strong> ${currentUser.phone || 'не указан'}</p>
                <p><strong>Email:</strong> ${currentUser.email || 'не указан'}</p>
            </div>
            
            <h3 style="margin-top:2rem;">📋 Мои заявки</h3>
            <div style="overflow-x: auto;">
                <table class="orders-table">
                    <thead>
                        <tr><th>ID</th><th>Товар</th><th>Кол-во</th><th>Статус</th><th>Цена</th><th>Дата</th></tr>
                    </thead>
                    <tbody>${ordersHtml}</tbody>
                </table>
            </div>
            <button class="btn" style="margin-top:1rem;" onclick="showSection('order-form')">+ Новая заявка</button>
        </div>
    `;
}

async function renderAdminOrdersPage() {
    if (!isAdmin()) {
        showNotification('Доступ только для администраторов', 'error');
        showSection('auth');
        return '<div class="card">Доступ запрещен</div>';
    }
    
    const serverOrders = await getAllServerOrders();
    
    if (!serverOrders || serverOrders.length === 0) {
        return `
            <div class="card">
                <h2>Управление заявками</h2>
                <p>Нет заявок в базе данных</p>
                <button class="btn" onclick="refreshAdminOrders()">🔄 Обновить</button>
            </div>
        `;
    }
    
    let rows = '';
    serverOrders.forEach(order => {
        rows += `
            <tr>
                <td>${order.id}</td>
                <td>${escapeHtml(order.client_name || 'Клиент')}</td>
                <td>${escapeHtml(order.phone || '-')}</td>
                <td>${escapeHtml(order.email || '-')}</td>
                <td>${escapeHtml(order.product_name || '-')}</td>
                <td>${order.quantity || '-'}</td>
                <td><span class="status-badge status-${order.status.replace(/ /g, '-').toLowerCase()}">${escapeHtml(order.status)}</span></td>
                <td>${new Date(order.created_at).toLocaleDateString()}</td>
                <td><button class="btn-small" onclick="viewAdminOrder(${order.id})">✏️</button></td>
            </tr>
        `;
    });
    
    return `
        <div class="card">
            <h2>📋 Управление заявками (база данных)</h2>
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                <button class="btn" style="background:#1a2a3a;" onclick="refreshAdminOrders()">Обновить</button>
            </div>
            <div style="overflow-x: auto;">
                <table class="orders-table">
                    <thead>
                        <tr><th>ID</th><th>Клиент</th><th>Телефон</th><th>Email</th><th>Товар</th><th>Кол-во</th><th>Статус</th><th>Дата</th><th></th></tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>
    `;
}

async function viewAdminOrder(id) {
    if (!isAdmin()) return;
    
    const orders = await getAllServerOrders();
    const order = orders.find(o => o.id == id);
    if (!order) {
        showNotification('Заявка не найдена', 'error');
        return;
    }
    
    document.getElementById('content').innerHTML = `
        <div class="card">
            <button class="btn-small" onclick="refreshAdminOrders()">← Назад</button>
            <h2>Заказ №${order.id}</h2>
            <div class="form-group">
                <label>Статус:</label>
                <select id="statusSelect" class="status-select">
                    ${['Новая заявка', 'В обработке', 'В работе', 'Завершено'].map(s => 
                        `<option ${order.status === s ? 'selected' : ''}>${escapeHtml(s)}</option>`
                    ).join('')}
                </select>
                <button class="btn-small" onclick="saveAdminOrderStatus(${order.id})">Сохранить статус</button>
            </div>
            <div class="form-group"><label>Клиент:</label><input id="editName" value="${escapeHtml(order.client_name || '')}"></div>
            <div class="form-group"><label>Телефон:</label><input id="editPhone" value="${escapeHtml(order.phone || '')}" oninput="formatPhoneNumber(this)"></div>
            <div class="form-group"><label>Email:</label><input id="editEmail" value="${escapeHtml(order.email || '')}"></div>
            <div class="form-group"><label>Товар:</label><input id="editProduct" value="${escapeHtml(order.product_name || '')}"></div>
            <div class="form-group"><label>Количество:</label><input type="number" id="editQuantity" class="quantity-input" value="${escapeHtml(order.quantity || '1')}" min="1" step="1"></div>
            <div class="form-group"><label>Цена:</label><input id="editPrice" value="${escapeHtml(order.price || '')}" placeholder="Например 1500" oninput="onlyDigitsPrice(this)"></div>
            <div class="form-group"><label>Описание:</label><textarea id="editDesc">${escapeHtml(order.description || '')}</textarea></div>
            <div style="display: flex; gap: 1rem;">
                <button class="btn" onclick="saveAdminOrderFull(${order.id})">💾 Сохранить всё</button>
                <button class="btn-small" style="background:#dc2626;" onclick="deleteAdminOrder(${order.id})">Удалить</button>
            </div>
        </div>
    `;
}

async function saveAdminOrderStatus(id) {
    const status = document.getElementById('statusSelect')?.value;
    if (!status) return;
    
    const success = await updateOrderStatus(id, status);
    if (success) {
        showNotification('Статус обновлен', 'success');
        viewAdminOrder(id);
    } else {
        showNotification('Ошибка обновления', 'error');
    }
}

async function saveAdminOrderFull(id) {
    const data = {
        client_name: document.getElementById('editName')?.value,
        phone: document.getElementById('editPhone')?.value,
        email: document.getElementById('editEmail')?.value,
        product_name: document.getElementById('editProduct')?.value,
        quantity: document.getElementById('editQuantity')?.value,
        price: document.getElementById('editPrice')?.value,
        description: document.getElementById('editDesc')?.value,
        status: document.getElementById('statusSelect')?.value
    };
    
    const success = await updateOrderData(id, data);
    if (success) {
        showNotification('Данные сохранены', 'success');
        viewAdminOrder(id);
    } else {
        showNotification('Ошибка сохранения', 'error');
    }
}

async function deleteAdminOrder(id) {
    if (!confirm('Удалить заявку?')) return;
    
    const success = await deleteServerOrder(id);
    if (success) {
        showNotification('Заявка удалена', 'success');
        refreshAdminOrders();
    } else {
        showNotification('Ошибка удаления', 'error');
    }
}

async function refreshAdminOrders() {
    showNotification('Обновление...', 'info');
    const html = await renderAdminOrdersPage();
    document.getElementById('content').innerHTML = html;
}

function renderPortfolioPage() {
    let photosHtml = '';
    PORTFOLIO_PHOTOS.forEach((photo, index) => {
        photosHtml += `
            <div class="portfolio-photo-item" data-index="${index}" onclick="openLightbox(${index})">
                <div class="portfolio-photo-img">
                    <img src="${photo.src}" alt="${escapeHtml(photo.title)}" loading="lazy" onerror="this.src='https://placehold.co/600x400/1a1a2a/CCFF00?text=${encodeURIComponent(photo.title)}'">
                </div>
                <div class="portfolio-photo-info">
                    <h4>${escapeHtml(photo.title)}</h4>
                    <p>${escapeHtml(photo.desc)}</p>
                </div>
            </div>
        `;
    });
    
    return `
        <div class="card">
            <h1>📸 Наше портфолио</h1>
            <p>Реальные проекты, реализованные нашей командой. Нажмите на любое фото для просмотра в полном размере.</p>
            
            <div class="portfolio-photo-grid">
                ${photosHtml}
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn" onclick="showSection('works')">🎬 Смотреть видео-работы</button>
            </div>
        </div>
    `;
}

function openLightbox(index) {
    currentLightboxIndex = index;
    showLightbox();
}

function showLightbox() {
    const oldLightbox = document.getElementById('lightbox');
    if (oldLightbox) oldLightbox.remove();
    
    const photo = PORTFOLIO_PHOTOS[currentLightboxIndex];
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-close">×</div>
        <div class="lightbox-prev">❮</div>
        <div class="lightbox-next">❯</div>
        <img src="${photo.src}" alt="${escapeHtml(photo.title)}">
        <div class="lightbox-counter">${currentLightboxIndex + 1} / ${PORTFOLIO_PHOTOS.length}</div>
    `;
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => lightbox.classList.add('active'), 10);
    
    lightbox.querySelector('.lightbox-close').onclick = closeLightbox;
    lightbox.querySelector('.lightbox-prev').onclick = (e) => { e.stopPropagation(); prevLightbox(); };
    lightbox.querySelector('.lightbox-next').onclick = (e) => { e.stopPropagation(); nextLightbox(); };
    lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
    document.addEventListener('keydown', lightboxKeyHandler);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = '';
        }, 300);
    }
    document.removeEventListener('keydown', lightboxKeyHandler);
}

function lightboxKeyHandler(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + PORTFOLIO_PHOTOS.length) % PORTFOLIO_PHOTOS.length;
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const img = lightbox.querySelector('img');
        const counter = lightbox.querySelector('.lightbox-counter');
        const newPhoto = PORTFOLIO_PHOTOS[currentLightboxIndex];
        img.src = newPhoto.src;
        img.alt = newPhoto.title;
        counter.textContent = `${currentLightboxIndex + 1} / ${PORTFOLIO_PHOTOS.length}`;
    }
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % PORTFOLIO_PHOTOS.length;
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const img = lightbox.querySelector('img');
        const counter = lightbox.querySelector('.lightbox-counter');
        const newPhoto = PORTFOLIO_PHOTOS[currentLightboxIndex];
        img.src = newPhoto.src;
        img.alt = newPhoto.title;
        counter.textContent = `${currentLightboxIndex + 1} / ${PORTFOLIO_PHOTOS.length}`;
    }
}

function renderHomePage() {
    let slidesHtml = '';
    SLIDER_ITEMS.forEach((item) => {
        slidesHtml += `
            <div class="slide">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/1a1a2a/CCFF00?text=${encodeURIComponent(item.name)}'">
                <div class="slide-info">
                    <h3>${escapeHtml(item.name)}</h3>
                    <div class="slide-price">${item.price}</div>
                    <p style="color:#b0b0b0;">${escapeHtml(item.desc)}</p>
                    <button class="btn" style="margin-top:10px;" onclick='quickOrder("${item.name.replace(/'/g, "\\'")}")'>Заказать →</button>
                </div>
            </div>
        `;
    });
    
    const services = [
        { icon: "🏢", name: "Световые буквы" },
        { icon: "📦", name: "Световые короба" },
        { icon: "🖼️", name: "Баннеры / билборды" },
        { icon: "🔧", name: "Монтажные работы" },
        { icon: "🖨️", name: "Цифровая печать" },
        { icon: "🏠", name: "Интерьерная печать" },
        { icon: "📐", name: "Листовые материалы" },
        { icon: "🎁", name: "Сувенирная продукция" },
        { icon: "✏️", name: "Разработка логотипа" },
        { icon: "📱", name: "Фирменный стиль" }
    ];
    
    let servicesHtml = '';
    services.forEach(s => {
        servicesHtml += `
            <div class="service-card">
                <div class="service-icon">${s.icon}</div>
                <h4>${escapeHtml(s.name)}</h4>
            </div>
        `;
    });
    
    const partners = [
        "Министерство инноваций РС(Я)", "Министерство спорта РС(Я)", "Министерство экологии РС(Я)",
        "МЧС РС(Я)", "Служба спасения РС(Я)", "Якутская городская больница №3",
        "Invest Yakutia", "BAR 79", "ILS Language School", "Q-MART", "АВЕНЮ",
        "Авто-Мастер", "АВТОР", "Овощи Акутии", "Bulchut Shop", "Алаас",
        "Саха Фермер", "Миксфайт Акт", "Сохо Хаус"
    ];
    
    let partnersHtml = '';
    partners.forEach(p => {
        partnersHtml += `<div class="partner-logo">${escapeHtml(p)}</div>`;
    });
    
    return `
        <div class="hero" style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('images/city-bg.jpg'); background-size: cover; background-position: center; background-attachment: scroll;">
            <h1>РПК Энерджи</h1>
            <div class="hero-subtitle">рекламное агентство</div>
            <p>Рекламно-производственная компания полного цикла в Якутске. Наружная реклама, брендирование, сувениры, полиграфия, монтаж — всё в одном месте.</p>
            <button class="btn" onclick="showSection('catalog')">Смотреть каталог</button>
        </div>
        
        <div class="card">
            <h2 style="text-align:center; margin-bottom:1rem;">✨ Популярные товары</h2>
            <div class="slider-container">
                <div class="slider" id="slider">${slidesHtml}</div>
                <button class="slider-btn prev" onclick="prevSlide()">❮</button>
                <button class="slider-btn next" onclick="nextSlide()">❯</button>
                <div class="dots" id="dots"></div>
            </div>
        </div>
        
        <div class="stats-card card">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number" data-target="150">0</div>
                    <div class="stat-label">Выполненных проектов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="50">0</div>
                    <div class="stat-label">Довольных клиентов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="8">0</div>
                    <div class="stat-label">Лет на рынке</div>
                </div>
            </div>
        </div>
        
        <div class="feature-grid">
            <div class="feature-card"><div class="feature-icon">🎨</div><h3>Индивидуальный дизайн</h3><p>Разработаем макет под ваш бренд</p></div>
            <div class="feature-card"><div class="feature-icon">🚚</div><h3>Доставка по всей Якутии</h3><p>Быстрая отправка и надежная упаковка</p></div>
            <div class="feature-card"><div class="feature-icon">⭐</div><h3>100% качество</h3><p>Используем только проверенные материалы</p></div>
            <div class="feature-card"><div class="feature-icon">💬</div><h3>Поддержка 24/7</h3><p>Всегда на связи, поможем с выбором</p></div>
        </div>
        
        <div class="card">
            <h2 style="text-align:center;">🚀 Что мы делаем</h2>
            <p style="text-align:center; margin-bottom:1.5rem;">Более 10 направлений — от наружной рекламы до разработки фирменного стиля</p>
            <div class="services-grid">
                ${servicesHtml}
            </div>
        </div>
        
        <div class="card">
            <h2 style="text-align:center;">🤝 Нам доверяют</h2>
            <p style="text-align:center; margin-bottom:1.5rem;">Более 50 компаний и государственных организаций</p>
            <div class="partners-grid">
                ${partnersHtml}
            </div>
        </div>
        
        <div class="card">
            <h2 style="text-align:center; margin-bottom:1rem;">🏢 О компании</h2>
            <p style="text-align:center; max-width:800px; margin:0 auto 2rem auto;">РПК Энерджи — рекламное агентство полного цикла в Якутске. Мы создаём и реализуем рекламные решения: от идеи дизайна до готовой продукции. Помогаем бизнесу привлекать внимание, выделяться и расти.</p>
            
            <div class="info-block">
                <div class="info-item">
                    <h3>📍 Адрес</h3>
                    <p>г. Якутск, ул. Ильменская, 52</p>
                </div>
                <div class="info-item">
                    <h3>📞 Контакты</h3>
                    <p>Телефон: 25-05-05<br>WhatsApp: 8(924)168-05-05<br>Email: nrg_ra@mail.ru</p>
                </div>
                <div class="info-item">
                    <h3>⏰ Режим работы</h3>
                    <p>Пн-Пт 9:30–18:30</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn" onclick="checkAuthAndOrder()">📋 Оформить заказ</button>
            </div>
        </div>
    `;
}

function renderCatalogWithFilters() {
    let filtered = [...CATALOG_ITEMS];
    
    if (currentSearchTerm) {
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }
    
    if (currentCategory && currentCategory !== 'все') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }
    
    let productsHtml = '';
    filtered.forEach(item => {
        const itemData = JSON.stringify(item).replace(/'/g, "&#39;").replace(/"/g, '&quot;');
        productsHtml += `
            <div class="product-card" onclick='openProductModal(${itemData})'>
                <div class="product-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/1a1a2a/CCFF00?text=${encodeURIComponent(item.name)}'">
                </div>
                <div class="product-info">
                    <span class="badge-category">${item.category}</span>
                    <div class="product-title">${escapeHtml(item.name)}</div>
                    <div class="product-price">${item.price}</div>
                    <div class="product-desc">${item.desc.length > 80 ? escapeHtml(item.desc.slice(0, 77) + '...') : escapeHtml(item.desc)}</div>
                </div>
            </div>
        `;
    });
    
    if (filtered.length === 0) {
        productsHtml = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">🔍 Ничего не найдено. Попробуйте другой запрос или категорию</div>`;
    }
    
    const categories = ['все', ...new Set(CATALOG_ITEMS.map(i => i.category))];
    let categoryOptions = '';
    categories.forEach(cat => {
        categoryOptions += `<option value="${cat}" ${currentCategory === cat ? 'selected' : ''}>${escapeHtml(cat)}</option>`;
    });
    
    return `
        <div class="card">
            <h1>🧢 Сувенирная продукция с логотипом</h1>
            <p>Термокружки, футболки, толстовки, ежедневники, коврики — нанесём любой дизайн!</p>
            
            <div class="search-container">
                <input type="text" class="search-input" id="searchInput" placeholder="🔍 Поиск по названию или описанию..." onkeyup="filterCatalog()">
                <select class="category-filter" id="categorySelect" onchange="filterCatalogByCategory()">
                    ${categoryOptions}
                </select>
            </div>
            
            <div class="product-grid">
                ${productsHtml}
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn" onclick="checkAuthAndOrder()">📋 Оформить заказ</button>
            </div>
        </div>
    `;
}

function filterCatalog() {
    const input = document.getElementById('searchInput');
    if (input) currentSearchTerm = input.value;
    const newHtml = renderCatalogWithFilters();
    document.getElementById('content').innerHTML = newHtml;
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    if (searchInput) searchInput.value = currentSearchTerm;
    if (categorySelect) categorySelect.value = currentCategory || 'все';
    setTimeout(() => { checkVisibility(); animateNumbersOnScroll(); }, 100);
}

function filterCatalogByCategory() {
    const select = document.getElementById('categorySelect');
    if (select) currentCategory = select.value === 'все' ? '' : select.value;
    filterCatalog();
}

function getWorksPage() {
    let portfolioHtml = '';
    PORTFOLIO_ITEMS.forEach((item) => {
        const videoSrc = item.localVideo;
        const title = item.title;
        
        portfolioHtml += `
            <div class="portfolio-item" data-video="${videoSrc}" data-title="${escapeHtml(title)}" data-poster="${item.posterImage || ''}">
                <div class="portfolio-video" onclick="openVideoModalFromItem(this.parentElement)">
                    <div class="video-preview" style="background: #000; min-height: 200px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <div class="play-button">▶</div>
                    </div>
                </div>
                <div class="portfolio-info">
                    <h3>${escapeHtml(title)}</h3>
                    <p><strong>Клиент:</strong> ${escapeHtml(item.client)}</p>
                    <p><strong>Описание:</strong> ${escapeHtml(item.description)}</p>
                    <p><strong>Тип:</strong> ${item.type === 'процесс' ? '📹 Процесс изготовления' : '✨ Готовый результат'}</p>
                    <span class="badge-category" style="margin-top:10px; display:inline-block;">${escapeHtml(item.category)}</span>
                    <div class="watch-hint">🎬 Нажмите на видео, чтобы посмотреть</div>
                </div>
            </div>
        `;
    });
    
    return `
        <div class="card">
            <h1>Наши работы</h1>
            <p>Реальные проекты, которые мы выполнили для наших клиентов. Нажмите на любое видео, чтобы посмотреть процесс создания или готовый результат.</p>
            
            <div class="portfolio-grid">
                ${portfolioHtml}
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <button class="btn" onclick="checkAuthAndOrder()">Хочу так же →</button>
            </div>
        </div>
    `;
}

function initHomeSlider() {
    if (slideInterval) clearInterval(slideInterval);
    const slider = document.getElementById('slider');
    const dotsContainer = document.getElementById('dots');
    if (!slider || !dotsContainer) return;
    const totalSlides = SLIDER_ITEMS.length;
    currentSlide = 0;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateSliderPosition();
    slideInterval = setInterval(() => nextSlide(), 5000);
}

function updateSliderPosition() {
    const slider = document.getElementById('slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }
}

function nextSlide() {
    if (SLIDER_ITEMS.length === 0) return;
    currentSlide = (currentSlide + 1) % SLIDER_ITEMS.length;
    updateSliderPosition();
}

function prevSlide() {
    if (SLIDER_ITEMS.length === 0) return;
    currentSlide = (currentSlide - 1 + SLIDER_ITEMS.length) % SLIDER_ITEMS.length;
    updateSliderPosition();
}

function goToSlide(index) {
    currentSlide = index;
    updateSliderPosition();
}

function getOrderFormPage() {
    if (!currentUser) {
        showNotification('Для оформления заявки необходимо войти в личный кабинет', 'error');
        showSection('auth');
        return '<div class="card">Перенаправление на страницу входа...</div>';
    }
    
    return `
        <div class="card">
            <h2>Новая заявка</h2>
            <p>Вы авторизованы как <strong>${escapeHtml(currentUser.username)}</strong></p>
            <form onsubmit="event.preventDefault(); submitOrderForm()">
                <div class="form-group"><label>Название продукции *</label><input type="text" id="productNameField" required></div>
                <div class="form-group"><label>Количество *</label><input type="number" id="quantity" class="quantity-input" min="1" value="1" step="1" required></div>
                <div class="form-group"><label>Описание / пожелания</label><textarea id="orderDesc" rows="4"></textarea></div>
                <div class="form-group"><label>Телефон для связи</label><input type="tel" id="orderPhone" placeholder="+7 900 000-00-00" oninput="formatPhoneNumber(this)"></div>
                <div class="form-group"><label>Файл (логотип)</label><input type="file" id="orderFile"></div>
                <button type="submit" class="btn w-100">Отправить заявку</button>
            </form>
        </div>
    `;
}

function checkAuthAndOrder() {
    if (currentUser) {
        showSection('order-form');
    } else {
        showNotification('Пожалуйста, войдите или зарегистрируйтесь, чтобы оформить заявку', 'info');
        showSection('auth');
    }
}

async function submitOrderForm() {
    const product = document.getElementById('productNameField')?.value;
    const quantity = document.getElementById('quantity')?.value;
    const desc = document.getElementById('orderDesc')?.value || '';
    const phone = document.getElementById('orderPhone')?.value || '';
    const fileInput = document.getElementById('orderFile');
    const file = fileInput?.files[0];
    
    if (!product || !quantity) {
        showNotification('Заполните название товара и количество', 'error');
        return;
    }
    
    if (phone) {
        showNotification(`Заявка отправлена! С вами свяжутся по номеру ${phone}`, 'success');
    } else {
        showNotification('Заявка отправлена!', 'success');
    }
    
    const success = await submitClientOrder(product, quantity, desc, file);
    if (success) {
        showSection('client-profile');
    }
}

function quickOrder(productName) {
    if (!currentUser) {
        showNotification('Пожалуйста, войдите в личный кабинет для оформления заказа', 'info');
        showSection('auth');
        return;
    }
    showSection('order-form');
    setTimeout(() => {
        const input = document.getElementById('productNameField');
        if (input) input.value = productName;
    }, 100);
}

// ========== УКРАШЕНИЯ: АНИМАЦИИ, ЧАСТИЦЫ, СЧЁТЧИКИ ==========

function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.4 + 0.1,
            speed: Math.random() * 0.3 + 0.1
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(204, 255, 0, ${p.alpha})`;
            ctx.fill();
            p.y -= p.speed;
            if (p.y < 0) p.y = canvas.height;
        });
        requestAnimationFrame(draw);
    }
    
    draw();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function checkVisibility() {
    const elements = document.querySelectorAll('.product-card, .service-card, .feature-card, .partner-logo, .portfolio-item, .portfolio-photo-item');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            el.classList.add('visible');
        }
    });
}

let numbersAnimated = false;

function animateNumbersOnScroll() {
    const statsCard = document.querySelector('.stats-card');
    if (!statsCard || numbersAnimated) return;
    
    const rect = statsCard.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        numbersAnimated = true;
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 30);
        });
    }
}

const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

async function showSection(sectionId) {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
    
    let html = '';
    if (sectionId === 'home') {
        html = renderHomePage();
        document.getElementById('content').innerHTML = html;
        initHomeSlider();
        setTimeout(() => {
            checkVisibility();
            animateNumbersOnScroll();
        }, 200);
        return;
    } else if (sectionId === 'catalog') {
        currentSearchTerm = '';
        currentCategory = '';
        html = renderCatalogWithFilters();
    } else if (sectionId === 'portfolio') {
        html = renderPortfolioPage();
    } else if (sectionId === 'works') {
        html = getWorksPage();
    } else if (sectionId === 'order-form') {
        html = getOrderFormPage();
    } else if (sectionId === 'auth') {
        html = renderAuthPage();
    } else if (sectionId === 'client-profile') {
        html = renderProfilePage();
    } else if (sectionId === 'admin-orders') {
        if (isAdmin()) {
            html = await renderAdminOrdersPage();
        } else {
            showNotification('Доступ только для администраторов', 'error');
            showSection('auth');
            return;
        }
    }
    document.getElementById('content').innerHTML = html;
    setTimeout(() => {
        checkVisibility();
    }, 100);
}

updateNavbarAuth();

if (currentUserToken) {
    loadUserProfile();
}

showSection('home');
initParticles();

window.addEventListener('scroll', () => {
    checkVisibility();
    animateNumbersOnScroll();
});
window.addEventListener('load', () => {
    checkVisibility();
    setTimeout(() => animateNumbersOnScroll(), 500);
});

window.showSection = showSection;
window.loginAdmin = loginAdmin;
window.logoutAdmin = logoutAdmin;
window.refreshAdminOrders = refreshAdminOrders;
window.viewAdminOrder = viewAdminOrder;
window.saveAdminOrderStatus = saveAdminOrderStatus;
window.saveAdminOrderFull = saveAdminOrderFull;
window.deleteAdminOrder = deleteAdminOrder;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.filterCatalog = filterCatalog;
window.filterCatalogByCategory = filterCatalogByCategory;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openVideoModalFromItem = openVideoModalFromItem;
window.quickOrder = quickOrder;
window.checkAuthAndOrder = checkAuthAndOrder;
window.submitOrderForm = submitOrderForm;
window.submitLogin = submitLogin;
window.submitRegister = submitRegister;
window.logoutClient = logoutClient;
window.requestResetCodeClient = requestResetCodeClient;
window.confirmResetClient = confirmResetClient;
window.switchAuthTab = switchAuthTab;
window.formatPhoneNumber = formatPhoneNumber;
window.onlyDigitsPrice = onlyDigitsPrice;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.prevLightbox = prevLightbox;
window.nextLightbox = nextLightbox;
// Функции для аутентификации
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const usernameDisplay = document.getElementById('username');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Отображаем имя пользователя, если он авторизован
    if (usernameDisplay) {
        const user = getCurrentUser();
        if (user) {
            usernameDisplay.textContent = `Привет, ${user.username}!`;
        }
    }

    // Добавляем анимации для форм
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1}s`;
        group.classList.add('fade-in-up');
    });
});

function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Здесь будет ваша логика проверки учетных данных
    // Пока просто сохраняем в localStorage для демонстрации
    localStorage.setItem('user', JSON.stringify({ username, isLoggedIn: true }));
    
    // Перенаправляем на страницу приветствия
    window.location.href = 'welcome.html';
}

function handleRegister(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;

    if (password !== confirmPassword) {
        showError('Пароли не совпадают');
        return;
    }

    // Здесь будет ваша логика регистрации
    // Пока просто сохраняем в localStorage для демонстрации
    localStorage.setItem('user', JSON.stringify({ username, email, isLoggedIn: true }));
    
    // Перенаправляем на страницу приветствия
    window.location.href = 'welcome.html';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

function getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.querySelector('.auth-form').prepend(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Проверка авторизации на защищенных страницах
function checkAuth() {
    const user = getCurrentUser();
    if (!user || !user.isLoggedIn) {
        window.location.href = 'login.html';
    }
}
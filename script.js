// Получаем элементы форм и кнопок
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const registerForm = document.getElementById('register-form');
const registerButton = document.getElementById('register-button');

// Обработчик события для формы входа
loginButton.addEventListener('click', () => {
    // Ваш код для обработки входа
    alert('Вы вошли в аккаунт'); // Пример, замените эту строку на вашу логику
});

// Обработчик события для формы регистрации
registerButton.addEventListener('click', () => {
    // Ваш код для обработки регистрации
    alert('Вы зарегистрировались'); // Пример, замените эту строку на вашу логику
});

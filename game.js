// script.js
function showRegistration() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function register() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regUsername && regPassword) {
        localStorage.setItem(regUsername, regPassword);
        document.getElementById('statusMessage').textContent = '注册成功！';
        showLogin();
    } else {
        document.getElementById('statusMessage').textContent = '请填写所有字段。';
    }
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const savedPassword = localStorage.getItem(loginUsername);
    if (savedPassword === loginPassword) {
        // 登录成功，重定向到游戏页面
        window.location.href = 'gamestart.html';
    } else {
        document.getElementById('statusMessage').textContent = '用户名或密码错误。';
    }
}

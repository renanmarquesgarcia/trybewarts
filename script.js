const validateLogin = () => {
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');
  const loginBtn = document.querySelector('.login-btn');

  loginBtn.addEventListener('click', () => {
    if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
      alert('Olá, Tryber!');
      inputEmail.value = '';
      inputPassword.value = '';
    } else {
      alert('Email ou senha inválidos.');
      inputEmail.value = '';
      inputPassword.value = '';
    }
  });
};

window.onload = () => {
  validateLogin();
};

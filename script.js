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

const createRateRadiosBtns = () => {
  const rateSection = document.querySelector('#rate');
  const rateDiv = document.querySelector('#rate-div');

  for (let i = 1; i <= 10; i += 1) {
    const rateLabel = document.createElement('label');
    rateLabel.innerText = `${i}`;

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'rate';
    radioInput.value = `${i}`;

    rateLabel.appendChild(radioInput);
    rateDiv.appendChild(rateLabel);
  }

  rateSection.appendChild(rateDiv);
};

const enableSubmitBtn = () => {
  const agreementCheckbox = document.querySelector('#agreement');

  agreementCheckbox.addEventListener('click', (event) => {
    const submitBtn = document.querySelector('#submit-btn');
    if (event.target.checked) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
};

const couterCharacters = () => {
  const textarea = document.querySelector('#textarea');
  textarea.addEventListener('keyup', (event) => {
    const counterSpan = document.querySelector('#counter');
    const maxCounter = 500;
    counterSpan.innerHTML = (maxCounter - event.target.value.length);
  });
};

window.onload = () => {
  validateLogin();
  createRateRadiosBtns();
  enableSubmitBtn();
  couterCharacters();
};

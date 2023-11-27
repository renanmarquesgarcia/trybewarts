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

const getPersonalData = () => {
  const ids = [
    'input-name', 'input-lastname', 'input-email', 'house',
  ];
  const inputValues = [];

  for (let i = 0; i < ids.length; i += 1) {
    const elementValue = document.querySelector(`#${ids[i]}`).value;
    inputValues.push(elementValue);
  }

  return {
    Nome: `${inputValues[0]} ${inputValues[1]}`,
    Email: inputValues[2],
    Casa: inputValues[3],
  };
};

const getFamilyAndRate = () => {
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;

  return {
    Família: family,
    Avaliação: rate,
  };
};

const getContent = () => {
  const content = document.querySelectorAll('.subject');
  const checkedContents = [];

  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked) {
      checkedContents.push(content[i].value);
    }
  }

  return {
    Matérias: checkedContents.join(', '),
  };
};

const getComments = () => {
  const comments = document.querySelector('#textarea').value;
  return {
    Observações: comments,
  };
};

const getFormData = () => {
  const personalData = getPersonalData();
  const familyAndRate = getFamilyAndRate();
  const content = getContent();
  const comments = getComments();

  return { ...personalData, ...familyAndRate, ...content, ...comments };
};

const getFormDataParagraphs = () => {
  const name = document.querySelector('#filled-name');
  const email = document.querySelector('#filled-email');
  const house = document.querySelector('#chosen-house');
  const family = document.querySelector('#chosen-family');
  const contents = document.querySelector('#chosen-contents');
  const rate = document.querySelector('#chosen-rate');
  const comments = document.querySelector('#filled-comments');

  return [name, email, house, family, contents, rate, comments];
};

const fillFormData = () => {
  const submitBtn = document.querySelector('#submit-btn');
  const formDataParagraphs = getFormDataParagraphs();

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = getFormData();

    formDataParagraphs[0].innerText += ` ${formData.Nome}`;
    formDataParagraphs[1].innerText += ` ${formData.Email}`;
    formDataParagraphs[2].innerText += ` ${formData.Casa}`;
    formDataParagraphs[3].innerText += ` ${formData.Família}`;
    formDataParagraphs[4].innerText += ` ${formData.Matérias}`;
    formDataParagraphs[5].innerText += ` ${formData.Avaliação}`;
    formDataParagraphs[6].innerText += ` ${formData.Observações}`;

    document.querySelector('#evaluation-form').style.display = 'none';
    document.querySelector('#form-data').style.display = 'flex';
  });
};

// const fillFormData = () => {
//   const submitBtn = document.querySelector('#submit-btn');
//   const fields = ['Nome: ', 'Email: ', 'Casa: '];

//   submitBtn.addEventListener('click', () => {
//     const userData = document.querySelector('#user-data');
//     const data = getFormData();
//     for (let i = 0; i < 2; i += 1) {
//       const paragraph = document.createElement('p');
//       paragraph.classList.add('datas');
//       userData.appendChild(paragraph);
//     }

//     const datas = document.querySelectorAll('.data');
//   });
// }

window.onload = () => {
  validateLogin();
  createRateRadiosBtns();
  enableSubmitBtn();
  couterCharacters();
  fillFormData();
};

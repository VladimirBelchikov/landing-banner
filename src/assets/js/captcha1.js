const captchaModal = document.querySelector('.captcha');
const modalBtn = captchaModal.querySelector('#captcha-btn');
let captchaCode = '';

function setInitialValues() {
  captchaModal.querySelector('.captcha-block__text').textContent = 'Введите цифры с картинки';
  captchaModal.querySelector('.captcha-block__text').style.color = 'black';
  captchaModal.querySelector('[name=captcha]').value = '';
  captchaModal.querySelector('#captcha-btn').style.cursor = 'pointer';
  captchaModal.querySelector('#captcha-btn').removeAttribute('disabled');
}

function createCaptcha(container) {
  if (container.querySelector('.captcha-canv')) {
    container.querySelector('.captcha-canv')
      .remove();
  }
  setInitialValues();

  const charsArray = '0123456789';
  const lengthOtp = 4;
  const captcha = [];
  for (let i = 0; i < lengthOtp; i++) {
    const index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) === -1) {
      captcha.push(charsArray[index]);
    } else {
      i--;
    }
  }
  const canv = document.createElement('canvas');
  canv.className = 'captcha-canv';
  canv.width = 60;
  canv.height = 50;
  const ctx = canv.getContext('2d');
  ctx.font = '25px Georgia';
  ctx.strokeText(captcha.join(''), 0, 30);
  captchaCode = captcha.join('');
  container.querySelector('.captcha-block')
    .insertAdjacentElement('beforebegin', canv);
}

function validateCaptcha() {
  if (captchaModal.querySelector('[name=captcha]').value === captchaCode) {
    captchaModal.querySelector('.captcha-block__text').textContent = 'Подождите...';
    captchaModal.querySelector('.captcha-block__text').style.color = 'black';
    captchaModal.querySelector('#captcha-btn').style.cursor = 'not-allowed';
    captchaModal.querySelector('#captcha-btn').setAttribute('disabled', 'true');
    return true;
  }
  createCaptcha(captchaModal);
  captchaModal.querySelector('.captcha-block__text').textContent = 'Неверный ввод. Попробуйте еще раз.';
  captchaModal.querySelector('.captcha-block__text').style.color = 'red';
  captchaModal.querySelector('[name=captcha]').value = '';
  return false;
}

function openCaptchaModal() {
  Fancybox.show([{
    src: captchaModal,
    type: 'html',
    autoFocus: false,
    dragToClose: false,
  }]);
}

function formSubmitHandler() {
  const fancyboxContainer = document.querySelector('.fancybox__container');
  fancyboxContainer.querySelector('.is-close').click();

  setTimeout(openCaptchaModal, 100);

  createCaptcha(captchaModal);
}

// eslint-disable-next-line max-len
export {
  // eslint-disable-next-line max-len
  captchaModal, modalBtn, validateCaptcha, formSubmitHandler,
};

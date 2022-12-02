import Inputmask from 'inputmask/lib/inputmask.js';

const maskOptions = {
  mask: '+7(999)999-99-99',
};
const phones = document.querySelectorAll('input[type=tel]');

phones.forEach((element) => {
  Inputmask(maskOptions).mask(element);
});

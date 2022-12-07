import { Fancybox } from '@fancyapps/ui/src/Fancybox/index.js';

const modalElement = document.querySelector('#callback-modal');
const callbackButtons = document.querySelectorAll('.callback-btn');

const modalSlidesElement = document.querySelector('#slides-callback');
const callbackSlides = document.querySelectorAll('.slider__slide');

// Fancybox.bind('#callback-modal]', {
//
// });

callbackButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.target.dataset.title) {
      modalElement.querySelector('.modal__title').textContent = element.dataset.title;
    }
    if (event.target.dataset.description) {
      modalElement.querySelector('.modal__text').textContent = element.dataset.description;
    }
    Fancybox.show([{
      src: modalElement,
      type: 'html',
      autoFocus: false,
    }]);
  });
});

callbackSlides.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.currentTarget.dataset.title) {
      modalSlidesElement.querySelector('.modal__title').textContent = element.dataset.title;
    }
    if (event.currentTarget.dataset.img) {
      modalSlidesElement.querySelector('.modal-slides__img').src = element.dataset.img;
    }
    if (event.currentTarget.dataset.comment) {
      modalSlidesElement.querySelector('input[name=comment]').value = element.dataset.comment;
    }
    Fancybox.show([{
      src: modalSlidesElement,
      type: 'html',
      autoFocus: false,
    }]);
  });
});

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
    Fancybox.show([{
      src: modalElement,
      type: 'html',
    }]);
    console.log(event.target.dataset.title);
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
    Fancybox.show([{
      src: modalSlidesElement,
      type: 'html',
    }]);
    console.log(event.currentTarget.dataset.img);
    console.log(event.currentTarget.dataset.title);
  });
});

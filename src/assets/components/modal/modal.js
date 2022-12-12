import { Fancybox } from '@fancyapps/ui/src/Fancybox/index.js';

const modalElement = document.querySelector('#callback-modal');
const callbackButtons = document.querySelectorAll('.callback-btn');

const modalSlidesElement = document.querySelector('#slides-callback');
const callbackSlides = document.querySelectorAll('.slider__slide');
const innerSlider = document.getElementById('slides-callback');

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
      autoFocus: false,
      dragToClose: false,
    }]);
  });
});

callbackSlides.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.currentTarget.dataset.title) {
      modalSlidesElement.querySelector('.modal__title').textContent = element.dataset.title;
    }

    if (event.currentTarget.dataset.img) {
      const masImg = element.dataset.img.split('&');
      console.log(masImg);
      if (masImg.length > 0) {
        const slidesImg = innerSlider.querySelectorAll('.modal-slides__img');
        slidesImg.forEach((img, index) => {
          img.src = masImg[index];
        });
      //   innerSlider.querySelectorAll('.modal-slides__img').forEach((el) => el.remove());
      //   masImg.forEach((el) => {
      //     const newImg = innerSlider.querySelector('.swiper-slide').createElement('img');
      //     newImg.src = el;
      //   });
      }
    }

    if (event.currentTarget.dataset.comment) {
      modalSlidesElement.querySelector('input[name=comment]').value = element.dataset.comment;
    }
    Fancybox.show([{
      src: modalSlidesElement,
      type: 'html',
      autoFocus: false,
      dragToClose: false,
    }]);
  });
});

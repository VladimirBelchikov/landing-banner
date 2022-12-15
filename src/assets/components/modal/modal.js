import { Fancybox } from '@fancyapps/ui/src/Fancybox/index.js';

const modalElement = document.querySelector('#callback-modal');
const callbackButton = document.querySelector('.callback-btn');
const callbackQuizBtn = document.querySelector('.dquiz-callback-btn');
const dquizModalWindow = document.querySelector('.dquiz-modal-wrapper');

const modalSlidesElement = document.querySelector('#slides-callback');
const callbackSlides = document.querySelectorAll('.slider__slide');
const innerSlider = document.querySelector('.innerSlider');
const thumbsSlider = document.querySelector('.thumbsSlider');

// Fancybox.bind('#callback-modal]', {
//
// });

callbackButton?.addEventListener('click', (event) => {
  if (event.target.dataset.title) {
    modalElement.querySelector('.modal__title').textContent = callbackButton.dataset.title;
  }
  Fancybox.show([{
    src: modalElement,
    type: 'html',
    autoFocus: false,
    dragToClose: false,
  }]);
});

callbackQuizBtn?.addEventListener('click', () => {
  Fancybox.show([{
    src: dquizModalWindow,
    type: 'html',
    autoFocus: false,
    dragToClose: false,
  }]);
});

callbackSlides?.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.currentTarget.dataset.title) {
      modalSlidesElement.querySelector('.modal__title').textContent = element.dataset.title;
    }
    if (event.currentTarget.dataset.stock) {
      modalSlidesElement.querySelector('.modal-slides__stock').textContent = element.dataset.stock;
    }
    if (event.currentTarget.dataset.special) {
      modalSlidesElement.querySelector('.modal-slides__special').textContent = element.dataset.special;
    }
    if (event.currentTarget.dataset.info) {
      const masInfo = element.dataset.info.split('&');
      if (masInfo.length > 0) {
        const infoWrapper = modalSlidesElement.querySelector('.modal-slides__info');
        const oldInfo = infoWrapper.children;
        Array.from(oldInfo).forEach((el) => el.remove());
        infoWrapper.insertAdjacentHTML(
          'afterbegin',
          `<ul>
                    <li><b>${masInfo[0]}</b>${masInfo[1]}</li>
                    <li><b>${masInfo[2]}</b>${masInfo[3]}</li>
                    <li><b>${masInfo[4]}</b>${masInfo[5]}</li>
                  </ul>`,
        );
      }
    }
    if (event.currentTarget.dataset.credit) {
      modalSlidesElement.querySelector('.modal-slides__credit').textContent = element.dataset.credit;
    }

    if (event.currentTarget.dataset.img) {
      const masImg = element.dataset.img.split('&');
      if (masImg.length > 0) {
        const swiperWrapper = innerSlider.querySelector('.swiper-wrapper');
        const oldSlides = swiperWrapper.children;
        Array.from(oldSlides).forEach((el) => el.remove());

        const swiperWrapperThumbs = thumbsSlider.querySelector('.swiper-wrapper');
        const oldThumbsSlides = swiperWrapperThumbs.children;
        Array.from(oldThumbsSlides).forEach((el) => el.remove());

        masImg.forEach((value) => {
          swiperWrapper.insertAdjacentHTML(
            'beforeend',
            `<div class="swiper-slide"><img class="modal-slides__img" src="${value}" alt=""></div>`,
          );
        });
        masImg.forEach((value) => {
          swiperWrapperThumbs.insertAdjacentHTML(
            'beforeend',
            `<div class="swiper-slide"><img class="modal-slides__thumb-img" src="${value}" alt=""></div>`,
          );
        });
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

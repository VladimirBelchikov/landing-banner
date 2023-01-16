import { Fancybox } from '@fancyapps/ui/src/Fancybox/index.js';

const modalElement = document.querySelector('#callback-modal');
const callbackButtons = document.querySelectorAll('.callback-btn');
const callbackQuizBtn = document.querySelector('.quiz-callback-btn');
const quizModalWindow = document.querySelector('.quiz');
const videoModalWindow = document.querySelector('.video-modal');
const callbackKpButton = document.querySelectorAll('.callback-kp');

const modalSlidesElement = document.querySelector('#slides-callback');
const callbackSlides = document.querySelectorAll('.slider__slide');
const innerSlider = document.querySelector('.innerSlider');
const thumbsSlider = document.querySelector('.thumbsSlider');
const openVideoItem = document.querySelectorAll('.video-block__item');
const modalKp = document.querySelector('.modal-kp');

callbackButtons?.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.target.dataset.title) {
      modalElement.querySelector('.modal__title').textContent = event.target.dataset.title;
    }
    if (event.target.dataset.description) {
      modalElement.querySelector('.modal__text').textContent = event.target.dataset.description;
    }
    if (event.target.dataset.comment) {
      modalElement.querySelector('input[name=comment]').value = element.dataset.comment;
    }
    Fancybox.show([{
      src: modalElement,
      type: 'html',
      autoFocus: false,
      dragToClose: false,
    }]);
  });
});

callbackQuizBtn?.addEventListener('click', () => {
  Fancybox.show([{
    src: quizModalWindow,
    type: 'html',
    autoFocus: false,
    dragToClose: false,
  }]);
});
// Модалка с внутренними слайдерами
// callbackSlides?.forEach((element) => {
//   element.addEventListener('click', (event) => {
//     if (event.currentTarget.dataset.title) {
//       modalSlidesElement.querySelector('.modal__title').textContent = element.dataset.title;
//     }
//     if (event.currentTarget.dataset.stock) {
//       modalSlidesElement.querySelector('.modal-slides__stock').textContent = element.dataset.stock;
//     }
//     if (event.currentTarget.dataset.special) {
//       modalSlidesElement.querySelector('.modal-slides__special').textContent = element.dataset.special;
//     }
//     if (event.currentTarget.dataset.info) {
//       const masInfo = element.dataset.info.split('&');
//       if (masInfo.length > 0) {
//         const infoWrapper = modalSlidesElement.querySelector('.modal-slides__info');
//         const oldInfo = infoWrapper.children;
//         Array.from(oldInfo)
//           .forEach((el) => el.remove());
//         infoWrapper.insertAdjacentHTML(
//           'afterbegin',
//           `<ul>
//                     <li><b>${masInfo[0]}</b>${masInfo[1]}</li>
//                     <li><b>${masInfo[2]}</b>${masInfo[3]}</li>
//                     <li><b>${masInfo[4]}</b>${masInfo[5]}</li>
//                     <li><b>${masInfo[6]}</b>${masInfo[7]}</li>
//                   </ul>`,
//         );
//       }
//     }
//     if (event.currentTarget.dataset.credit) {
//       modalSlidesElement.querySelector('.modal-slides__credit').textContent = element.dataset.credit;
//     }
//
//     if (event.currentTarget.dataset.img) {
//       const masImg = element.dataset.img.split('&');
//       if (masImg.length > 0) {
//         const swiperWrapper = innerSlider.querySelector('.swiper-wrapper');
//         const oldSlides = swiperWrapper.children;
//         Array.from(oldSlides)
//           .forEach((el) => el.remove());
//
//         const swiperWrapperThumbs = thumbsSlider.querySelector('.swiper-wrapper');
//         const oldThumbsSlides = swiperWrapperThumbs.children;
//         Array.from(oldThumbsSlides)
//           .forEach((el) => el.remove());
//
//         masImg.forEach((value) => {
//           swiperWrapper.insertAdjacentHTML(
//             'beforeend',
//             `<div class="swiper-slide"><img class="modal-slides__img" src="${value}" alt=""></div>`,
//           );
//         });
//         masImg.forEach((value) => {
//           swiperWrapperThumbs.insertAdjacentHTML(
//             'beforeend',
//             `<div class="swiper-slide"><img class="modal-slides__thumb-img" src="${value}" alt=""></div>`,
//           );
//         });
//       }
//     }
//
//     if (event.currentTarget.dataset.comment) {
//       modalSlidesElement.querySelector('input[name=comment]').value = element.dataset.comment;
//     }
//     Fancybox.show([{
//       src: modalSlidesElement,
//       type: 'html',
//       autoFocus: false,
//       dragToClose: false,
//     }]);
//   });
// });

// Модалка с видео
openVideoItem.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.currentTarget.dataset.video) {
      videoModalWindow.querySelector('iframe').src = element.dataset.video;
    }
    Fancybox.show([{
      src: videoModalWindow,
      type: 'html',
      autoFocus: false,
      dragToClose: false,
    }]);
  });
});

// Модалка с КП
callbackKpButton?.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.target.classList.contains('brochure-callback')) {
      modalKp.querySelector('.modal__title').textContent = 'Скачать брошюру с характеристиками';
      modalKp.querySelector('.modal__text').textContent = 'В брошюре представлена вся техника Zauberg с подробными характеристиками и преимуществами';
      modalKp.querySelector('input[name=name]').style.display = 'none';
    } else {
      modalKp.querySelector('.modal__title').textContent = 'Получите коммерческое предложение';
      modalKp.querySelector('.modal__text').textContent = 'Оставьте заявку и получите коммерческое предложение на технику ZAUBERG';
      modalKp.querySelector('input[name=name]').style.display = 'block';
    }
    Fancybox.show([{
      src: modalKp,
      type: 'html',
      autoFocus: false,
      dragToClose: false,
    }]);
  });
});

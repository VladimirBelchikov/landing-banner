import Swiper, { Navigation } from 'swiper';

window.swiper = new Swiper('.innerSlider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const slider = document.querySelector('.slider');
//
// const sliderButtonPrev = slider.querySelector('.slider__prev-slide');
// const sliderButtonNext = slider.querySelector('.slider__next-slide');
// const slides = slider.querySelectorAll('.slider__slide');
//
// sliderButtonPrev.addEventListener('click', () => {
//   slides.style.transform = 'translate3D(200px, 350px, 0px)';
// });
//
// sliderButtonNext.addEventListener('click', () => {
//   slides.style.transform = 'translate3D(0px, 0px, 0px)';
// });
$(function() {
  $('.rotating-slider').rotatingSlider({
    slideHeight: 360,
    draggable: false,
    slideWidth: Math.min(400, document.querySelector('.rotating-slider-container' ).offsetWidth)
  });
});

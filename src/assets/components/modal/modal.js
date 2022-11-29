import {Fancybox} from "@fancyapps/ui/src/Fancybox/index.js";

const modalElement = document.querySelector('#callback-modal');
const callbackButtons = document.querySelectorAll('.callback-btn');

Fancybox.bind('#callback-modal]', {

});

callbackButtons.forEach((element) => {
  element.addEventListener('click', function (event) {
    if (event.target.dataset.title) {
      modalElement.querySelector('.modal__title').textContent = element.dataset.title;
    }
    Fancybox.show([{
      src: modalElement,
      type: 'html',
    }])
    console.log(event.target.dataset.title)
  })
})


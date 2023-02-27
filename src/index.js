import './.htaccess';
import './robots.txt';
import './assets/styles/index.scss';
import './assets/js/phonemask.js';
import './assets/components/modal/modal.js';
import './assets/components/styled-ul/styled-ul.js';
import './assets/components/slider/slider.js';
import './assets/components/form/form.js';
import './assets/js/geo.js';
import './assets/js/swiper.js';
import YandexMetrika from './assets/js/analytics/yandex-metrika.js';
import MangoOffice from './assets/js/analytics/mango-office.js';
import Envybox from './assets/js/analytics/envybox.js';
import FormSender from './assets/js/sender.js';
import Roistat from './assets/js/analytics/roistat.js';
import Quiz from './assets/components/quiz/quiz.js';
import Botfaqtor from './assets/js/analytics/botfaqtor.js';

/* eslint-disable no-new */
const analyticsTimeout = setTimeout(() => {
  new YandexMetrika([{
    id: 91840915,
    params: { webvisor: true },
  }]);
  new MangoOffice(23176);
  clearTimeout(analyticsTimeout);
}, 2000);

new Roistat('8d1d08aebc35d0292c2ca7b696150b7e');

const envyboxTimeout = setTimeout(() => {
  new Envybox();
  clearTimeout(envyboxTimeout);
}, 4000);

new Botfaqtor(37040);

const formSender = new FormSender({
  createLeadUrl: 'https://collector.centr-to.ru/lead/create',
  group_id: '5',
  source: 'diesel.zauberg.ru',
  type: '1407176',
});
const quiz = new Quiz({
  completeText: 'Спасибо за ответы!',
});
document.addEventListener('DOMContentLoaded', () => {
  formSender.init();
  quiz.init();
});

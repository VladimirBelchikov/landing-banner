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

/* eslint-disable no-new */
const analyticsTimeout = setTimeout(() => {
  new YandexMetrika([{
    id: 92146759,
    params: { webvisor: true },
  }]);
  new MangoOffice(27551);
  clearTimeout(analyticsTimeout);
}, 2000);

new Roistat('d4dde63749e8c4f8285a234e16b28afc');

const envyboxTimeout = setTimeout(() => {
  new Envybox();
  clearTimeout(envyboxTimeout);
}, 4000);

/* eslint-enable no-new */

const formSender = new FormSender({
  createLeadUrl: 'https://collector.centr-to.ru/lead/create',
  group_id: '4',
  source: 'zauberg.ru',
  type: '1469902',
});
const quiz = new Quiz({
  completeText: 'Информация передана в отдел продаж!',
});
document.addEventListener('DOMContentLoaded', () => {
  formSender.init();
  quiz.init();
});

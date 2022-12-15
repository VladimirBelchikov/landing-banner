import './.htaccess';
import './robots.txt';
import './assets/styles/index.scss';
import './assets/js/phonemask.js';
import './assets/components/modal/modal.js';
import './assets/components/styled-ul/styled-ul.js';
import './assets/components/slider/slider.js';
import './assets/js/geo.js';
import './assets/components/form/form.js';
import './assets/js/swiper.js';
import './assets/components/dquiz/dquiz.min.js';
import YandexMetrika from './assets/js/analytics/yandex-metrika.js';
import MangoOffice from './assets/js/analytics/mango-office.js';
import Envybox from './assets/js/analytics/envybox.js';
import FormSender from './assets/js/sender.js';
import Roistat from './assets/js/analytics/roistat.js';

window.dQuiz();

/* eslint-disable no-new */
const analyticsTimeout = setTimeout(() => {
  new YandexMetrika([{
    id: 91481783,
    params: { webvisor: true },
  }]);
  new MangoOffice(24354);
  clearTimeout(analyticsTimeout);
}, 2000);

new Roistat('52d041b22c9089f178bc2b392b9c821c');

const envyboxTimeout = setTimeout(() => {
  new Envybox();
  clearTimeout(envyboxTimeout);
}, 4000);

/* eslint-enable no-new */

const formSender = new FormSender({
  createLeadUrl: 'https://collector.centr-to.ru/lead/create',
  group_id: '1',
  source: 'technovector-auto.ru',
  type: '1469570',
});

document.addEventListener('DOMContentLoaded', () => {
  formSender.init();
});

import createYmapsObject from './yandex-maps.js';

createYmapsObject(() => {
  globalThis.ymaps.ready(() => {
    document.querySelector('#geo-city').textContent = globalThis.ymaps?.geolocation?.city;
  });
});

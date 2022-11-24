class YandexMetrika {
  constructor(counters) {
    if (counters) {
      this.counters = counters;
      this.createYaMetrikaObject(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
      this.yaMetrikaCounterInit(this.counters);
      window.YANDEX_METRIKA_COUNTERS = [];
      counters.forEach((item) => {
        window.YANDEX_METRIKA_COUNTERS.push(item.id);
      });
    }
  }

  defaultParams = {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  };

  static reachGoal(goal) {
    if (typeof window.Ya === 'undefined') {
      console.error('Ya object undefined');
      return;
    }
    window.YANDEX_METRIKA_COUNTERS.forEach((obj) => {
      window.ym(obj, 'reachGoal', goal, {}, console.info(`yaMetrikaReachGoal: ${goal}`));
    });
  }

  static getYaMetrikaClientId() {
    if (typeof window.Ya === 'undefined') {
      console.error('Ya object undefined');
      return null;
    }
    let clientID = 0;
    window.ym(window.YANDEX_METRIKA_COUNTERS[0], 'getClientID', (id) => {
      clientID = id;
    });
    return clientID;
  }

  /* eslint-disable no-unused-expressions */
  /* eslint-disable prefer-rest-params */
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-sequences */
  /* eslint-disable prefer-destructuring */
  createYaMetrikaObject(m, e, t, r, i, k, a) {
    m[i] = m[i] || function fn() {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t),
    a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
    return this;
  }
  /* eslint-enable no-sequences */
  /* eslint-enable prefer-destructuring */
  /* eslint-enable no-unused-expressions */
  /* eslint-enable prefer-rest-params */
  /* eslint-enable no-param-reassign */

  yaMetrikaCounterInit(counters) {
    counters.forEach((elem) => {
      this.params = elem.params
        ? Object.assign(elem.params, this.defaultParams)
        : this.defaultParams;
      window.ym(elem.id, 'init', this.params);
    });
    return this;
  }
}

export default YandexMetrika;

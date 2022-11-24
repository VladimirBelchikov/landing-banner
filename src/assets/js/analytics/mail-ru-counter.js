class MailRuCounter {
  constructor(id) {
    this.counterId = id;
    /* eslint-disable no-underscore-dangle */
    this._tmr = window._tmr || (window._tmr = []);
    this._tmr.push({
      id: this.counterId,
      type: 'pageView',
      start: (new Date()).getTime(),
      pid: 'USER_ID',
    });
    this.createMailRuObject(document, window, 'topmailru-code');
    window.MAIL_RU_COUNTER = id;
  }

  createMailRuObject(d, w, id) {
    if (d.getElementById(id)) {
      return false;
    }
    const ts = d.createElement('script');
    ts.type = 'text/javascript';
    ts.async = true;
    ts.id = id;
    ts.src = 'https://top-fwz1.mail.ru/js/code.js';
    const f = () => {
      const s = d.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ts, s);
    };
    if (w.opera === '[object Opera]') {
      d.addEventListener('DOMContentLoaded', f, false);
    } else {
      f();
    }
    return this;
  }

  static reachGoal(goal) {
    /* eslint-disable no-console */
    console.log(`mailRuReachGoal: ${goal}`);
    if (typeof _tmr === 'undefined') {
      console.error('Mail ru counter undefined');
    } else {
      window._tmr.push({ id: window.MAIL_RU_COUNTER, type: 'reachGoal', goal });
    }
    /* eslint-enable no-console */
  }
}

export default MailRuCounter;

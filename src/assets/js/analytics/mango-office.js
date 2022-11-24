class MangoOffice {
  constructor(id) {
    this.id = id;
    if (!document.getElementById('mango-js')) {
      this.createMangoObject(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo');
      this.mangoInit(this.id);
    }
  }

  createMangoObject(w, d, u, i, o, s, p) {
    w.MangoObject = o;
    w[o] = w[o] || function fn() {
      // eslint-disable-next-line prefer-rest-params
      (w[o].q = w[o].q || []).push(arguments);
    };
    w[o].u = u;
    w[o].t = 1 * new Date();
    s = d.createElement('script');
    s.async = 1;
    s.id = i;
    s.src = u;
    // eslint-disable-next-line prefer-destructuring
    p = d.getElementsByTagName('script')[0];
    p.parentNode.insertBefore(s, p);
    return this;
  }

  mangoInit(mangoId) {
    window.mgo({ calltracking: { id: mangoId, elements: [{ selector: '.mgo-number' }] } });
    return this;
  }
}

export default MangoOffice;

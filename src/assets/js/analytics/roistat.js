class Roistat {
  constructor(id) {
    this.id = id;
    this.roistatInit(window, document, 'script', 'cloud.roistat.com', this.id);
  }

  roistatInit(w, d, s, h, id) {
    w.roistatProjectId = id;
    w.roistatHost = h;
    const p = d.location.protocol === 'https:' ? 'https://' : 'http://';
    const u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie)
      ? '/dist/module.js'
      : `/api/site/1.0/${id}/init?referrer=${encodeURIComponent(d.location.href)}`;
    const js = d.createElement(s);
    js.charset = 'UTF-8';
    js.async = 1;
    js.src = p + h + u;
    const js2 = d.getElementsByTagName(s)[0];
    js2.parentNode.insertBefore(js, js2);
    return this;
  }
}

export default Roistat;

class Envybox {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = 'https://cdn.envybox.io/widget/cbk.js?wcb_code=b69e372ba309bc8faf81bca86a8241e9';
    document.getElementsByTagName('body')[0].appendChild(scriptElement);

    const envyboxStyle = document.createElement('link');
    envyboxStyle.rel = 'stylesheet';
    envyboxStyle.href = 'https://cdn.envybox.io/widget/cbk.css';
    envyboxStyle.type = 'text/css';
    const header = document.querySelector('head');
    header.appendChild(envyboxStyle);
  }
}

export default Envybox;

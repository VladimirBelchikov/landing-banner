class VkPixel {
  constructor(id) {
    this.id = id;
    this.init(this.id);
    window.VK_PIXEL_COUNTER = this.id;
  }

  // eslint-disable-next-line class-methods-use-this
  init(id) {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.async = !0;
    scriptElement.src = 'https://vk.com/js/api/openapi.js?169';
    scriptElement.onload = function fn() {
      window.VK.Retargeting.Init(id);
      window.VK.Retargeting.Hit();
    };
    document.head.appendChild(scriptElement);
  }
}

export default VkPixel;

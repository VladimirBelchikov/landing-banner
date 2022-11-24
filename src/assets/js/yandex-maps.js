function createYmapsObject() {
  setTimeout(() => {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = '//api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(scriptElement);
  }, 8000);
}

export default createYmapsObject;

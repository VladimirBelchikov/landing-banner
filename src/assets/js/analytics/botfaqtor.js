class Botfaqtor {
  constructor(id) {
    this.id = id;
    this.init(this.id);
  }

  // eslint-disable-next-line class-methods-use-this
  init(id) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://scripts.botfaqtor.ru/one/${id}`, false);
    request.send();
    if (request.status == 200) eval(request.responseText);
  }
}

export default Botfaqtor;

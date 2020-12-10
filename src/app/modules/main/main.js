import utils from '../utils/utils';

export default class Main {
  constructor() {
    this.main = utils.create('main', 'app', null, null, ['style', 'background-image: url("./assets/win.jpg")']);
    document.body.prepend(this.main);
    return this;
  }
}

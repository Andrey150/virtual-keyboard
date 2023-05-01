import Keyboard from "./keyboard";

export default class Layout {
  constructor() {
    const body = document.querySelector('body');
    const wrapper = document.createElement('div');
    const title = document.createElement('h1');
    const textArea = document.createElement('textarea');
    const keyBoard = Keyboard();
    const opetationSystem = document.createElement('h2');
    const changeLang = document.createElement('h2');

    wrapper.classList.add('wrapper');

    title.classList.add('header__title');
    title.textContent = 'Виртуальная клавиатура';

    textArea.classList.add('input');

    opetationSystem.classList.add('operation-system');
    opetationSystem.textContent = 'Клавиатура создана в операционной системе Windows';

    changeLang.classList.add('change-lang__text');
    changeLang.textContent = 'Комбинация для переключения раскладки shift + alt';

    body.appendChild(wrapper);
    wrapper.append(
      title,
      textArea,
      keyBoard,
      opetationSystem,
      changeLang
    );
  }
}

let layout = new Layout()


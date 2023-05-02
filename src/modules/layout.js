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

    keyBoard.addEventListener('click', (event) => {
      const virtualKey = event.target.closest('.key');
      const keyData = virtualKey.getAttribute('data');
      if (virtualKey) {
        if (
          keyData === 'ControlLeft'
          || keyData === 'MetaLeft'
          || keyData === 'AltLeft'
          || keyData === 'AltRight'
          || keyData === 'ControlRight'
          || keyData === 'Tab'
          || keyData === 'Caps'
          || keyData === 'ShiftLeft'
          || keyData === 'ShiftRight'
          || keyData === 'Enter'
          || keyData === 'Delete'
          || keyData === 'Backspace'
        ) {
          textArea.value += '';
        } else if (keyData === 'Space') {
          textArea.value += ' ';
        } else {
          textArea.value += virtualKey.textContent.trim();
        }
      }

      textArea.focus();
    })

    document.addEventListener('keydown', function(event) {
      if (event.code === 'Tab') {
        event.preventDefault();
        const cursorPosition = textArea.selectionStart;
        const value = textArea.value;
        textArea.value = value.slice(0, cursorPosition) + '  ' + value.slice(cursorPosition);
        textArea.selectionEnd = cursorPosition + 2;
      }
      if (event.code === 'ArrowUp') {
        event.preventDefault();
        textArea.value += '↑';
        textArea.focus();
      }
      if (event.code === 'ArrowRight') {
        event.preventDefault();
        textArea.value += '→';
        textArea.focus();
      }
      if (event.code === 'ArrowDown') {
        event.preventDefault();
        textArea.value += '↓';
        textArea.focus();
      }
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        textArea.value += '←';
        textArea.focus();
      }
    })

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


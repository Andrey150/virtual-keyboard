import { symbolsRu, symbolsEn } from "./symbols";

export default function Keyboard() {
  const keyBoard = document.createElement('section');
  keyBoard.classList.add('keyboard', 'ru');
  keyBoard.setAttribute('id', 'keyboard');

  const caps = keyBoard.classList.contains('caps');

  const lang = () => {
    if (keyBoard.classList.contains('ru')) {
      return symbolsRu
    }
    return symbolsEn
  }

  let isShiftPress = false;
  let isAltPress = false;

  function updateKeyboard(lang) {
    const keys = document.querySelectorAll(".key");
    keys.forEach((key, idx) => {
      const item = lang()[idx];
      key.innerHTML = item.symbol;
    })
  }

  function renderKeyboard () {
    Object.values(lang()).map(item => {
      keyBoard.insertAdjacentHTML('beforeend',
        `<div class="key${item.specClass ? ' ' + item.specClass : ''}" data=${item.keyCode}>
          ${caps && item.caps ? item.caps : item.symbol}
        </div>`);
    });
  }

  renderKeyboard();

  document.addEventListener('keypress', function(event) {
    const key = document.querySelector(`.key[data="${event.keyCode}"]`);

    if (key) {
      if (event.keyCode === 20) {
        key.classList.toggle('active');
      }

      key.classList.add('active')
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.code === 'ShiftLeft') {
      isShiftPress = true;
    }
    if (event.code === 'AltLeft') {
      isAltPress = true;
    }

    if (isShiftPress && isAltPress) {
      if (keyBoard.classList.contains('ru')) {
        keyBoard.classList.replace('ru', 'en');
        updateKeyboard(lang);
      } else {
        keyBoard.classList.replace('en', 'ru');
        updateKeyboard(lang);
      }
    }
  });

  document.addEventListener('keyup', function (event) {
    const key = document.querySelector(`.key[data="${event.keyCode}"]`);

    if (key) {
      key.classList.remove('active')
    }

    if (event.code === 'ShiftLeft') {
      isShiftPress = false;
    }
    if (event.code === 'AltLeft') {
      isAltPress = false;
    }
  })

  return keyBoard
}
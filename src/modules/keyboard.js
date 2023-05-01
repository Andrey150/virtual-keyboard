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
  let isCaps = false;

  function updateKeyboard(lang, shift, caps) {
    const keys = document.querySelectorAll(".key");
    keys.forEach((key, idx) => {
      const item = lang()[idx];
      if (shift) {
        key.innerHTML = item.shift ? item.shift : item.symbol;
      } else if (caps) {
        key.innerHTML = item.caps ? item.caps : item.symbol;
      } else {
        key.innerHTML = item.symbol;
      }
    })
  }

  function renderKeyboard () {
    Object.values(lang()).map(item => {
      keyBoard.insertAdjacentHTML('beforeend',
        `<div class="key${item.specClass ? ' ' + item.specClass : ''}" data=${item.code}>
          ${caps && item.caps ? item.caps : item.symbol}
        </div>`);
    });
  }

  renderKeyboard();

  document.addEventListener('keydown', function(event) {
    const key = document.querySelector(`.key[data="${event.code}"]`);
    const keyCaps = document.querySelector(`.caps`);


    if (key) {
      key.classList.add('active');
      if (event.code === 'CapsLock') {
        isCaps = !isCaps;
        keyCaps.classList.toggle('active')
        updateKeyboard(lang, isShiftPress, isCaps);
      }
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftPress = true;
      updateKeyboard(lang, isShiftPress);
    }
    if (event.code === 'AltLeft') {
      isAltPress = true;
    }

    if (isShiftPress) {
      keyBoard.classList.add('shift');
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
    const key = document.querySelector(`.key[data="${event.code}"]`);

    if (key) {
      if (event.code !== 'CapsLock') {;
        key.classList.remove('active');
      }

    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftPress = false;
      updateKeyboard(lang, isShiftPress);
    }
    if (!isShiftPress ) {
      keyBoard.classList.remove('shift')
    }

    if (event.code === 'AltLeft') {
      isAltPress = false;
    }
  })

  return keyBoard
}
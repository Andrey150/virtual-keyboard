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

  Object.values(lang()).map(item => {
    console.log(item.symbol.toUpperCase())
      keyBoard.insertAdjacentHTML('beforeend',
  `<div class="key${item.specClass ? ' ' + item.specClass : ''}" data=${item.keyCode}>
          ${caps && item.caps ? item.caps : item.symbol}
        </div>`);
  });

  document.addEventListener('keypress', function(event) {
    const key = document.querySelector(`.key[data="${event.keyCode}"]`);

    if (key) {
      if (event.keyCode === 20) {
        key.classList.toggle('active');
      }

      key.classList.add('active')
    }
  });

  document.addEventListener('keyup', function (event) {
    const key = document.querySelector(`.key[data="${event.keyCode}"]`);

    if (key) {
      key.classList.remove('active')
    }
  })

  return keyBoard
}
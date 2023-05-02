!function(){"use strict";var e=[{symbol:"ё",shift:"Ё",caps:"Ё",keyCode:192,code:"Backquote"},{symbol:"1",shift:"!",keyCode:49,code:"Digit1"},{symbol:"2",shift:'"',keyCode:50,code:"Digit2"},{symbol:"3",shift:"№",keyCode:51,code:"Digit3"},{symbol:"4",shift:";",keyCode:52,code:"Digit4"},{symbol:"5",shift:"%",keyCode:53,code:"Digit5"},{symbol:"6",shift:":",keyCode:54,code:"Digit6"},{symbol:"7",shift:"?",keyCode:55,code:"Digit7"},{symbol:"8",shift:"*",keyCode:56,code:"Digit8"},{symbol:"9",shift:"(",keyCode:57,code:"Digit9"},{symbol:"0",shift:")",keyCode:48,code:"Digit0"},{symbol:"-",shift:"_",keyCode:189,code:"Minus"},{symbol:"=",shift:"+",keyCode:187,code:"Equal"},{symbol:"Backspace",specClass:"backspace",shift:"",keyCode:8,code:"Backspace"},{symbol:"Tab",specClass:"tab",shift:"",keyCode:9,code:"Tab"},{symbol:"й",shift:"Й",caps:"Й",keyCode:81,code:"KeyQ"},{symbol:"ц",shift:"Ц",caps:"Ц",keyCode:87,code:"KeyW"},{symbol:"у",shift:"У",caps:"У",keyCode:69,code:"KeyE"},{symbol:"к",shift:"К",caps:"К",keyCode:82,code:"KeyR"},{symbol:"е",shift:"Е",caps:"Е",keyCode:84,code:"KeyT"},{symbol:"н",shift:"Н",caps:"Н",keyCode:89,code:"KeyY"},{symbol:"г",shift:"Г",caps:"Г",keyCode:85,code:"KeyU"},{symbol:"ш",shift:"Ш",caps:"Ш",keyCode:73,code:"KeyI"},{symbol:"щ",shift:"Щ",caps:"Щ",keyCode:79,code:"KeyO"},{symbol:"з",shift:"З",caps:"З",keyCode:80,code:"KeyP"},{symbol:"х",shift:"Х",caps:"Х",keyCode:219,code:"BracketLeft"},{symbol:"ъ",shift:"Ъ",caps:"Ъ",keyCode:221,code:"BracketRight"},{symbol:" \\ ",shift:"/",keyCode:220,code:"Backslash"},{symbol:"Del",specClass:"del",shift:"",keyCode:46,code:"Delete"},{symbol:"Caps",specClass:"caps",shift:"",keyCode:20,code:"CapsLock"},{symbol:"ф",shift:"Ф",caps:"Ф",keyCode:65,code:"KeyA"},{symbol:"ы",shift:"Ы",caps:"Ы",keyCode:83,code:"KeyS"},{symbol:"в",shift:"В",caps:"В",keyCode:68,code:"KeyD"},{symbol:"a",shift:"А",caps:"А",keyCode:70,code:"KeyF"},{symbol:"п",shift:"П",caps:"П",keyCode:71,code:"KeyG"},{symbol:"р",shift:"Р",caps:"Р",keyCode:72,code:"KeyH"},{symbol:"о",shift:"О",caps:"О",keyCode:74,code:"KeyJ"},{symbol:"л",shift:"Л",caps:"Л",keyCode:75,code:"KeyK"},{symbol:"д",shift:"Д",caps:"Д",keyCode:76,code:"KeyL"},{symbol:"ж",shift:"Ж",caps:"Ж",keyCode:186,code:"Semicolon"},{symbol:"э",shift:"Э",caps:"Э",keyCode:222,code:"Quote"},{symbol:"Enter",specClass:"enter",shift:"",keyCode:13,code:"Enter"},{symbol:"Shift",specClass:"shift",shift:"",keyCode:16,code:"ShiftLeft"},{symbol:"я",shift:"Я",caps:"Я",keyCode:90,code:"KeyZ"},{symbol:"ч",shift:"Ч",caps:"Ч",keyCode:88,code:"KeyX"},{symbol:"с",shift:"С",caps:"С",keyCode:67,code:"KeyC"},{symbol:"м",shift:"М",caps:"М",keyCode:86,code:"KeyV"},{symbol:"и",shift:"И",caps:"И",keyCode:66,code:"KeyB"},{symbol:"т",shift:"Т",caps:"Т",keyCode:78,code:"KeyN"},{symbol:"ь",shift:"Ь",caps:"Ь",keyCode:77,code:"KeyM"},{symbol:"б",shift:"Б",caps:"Б",keyCode:188,code:"Comma"},{symbol:"ю",shift:"Ю",caps:"Ю",keyCode:190,code:"Period"},{symbol:".",shift:",",caps:".",keyCode:191,code:"Slash"},{symbol:"&#8593;",shift:"&#8593;",caps:"&#8593;",keyCode:38,code:"ArrowUp"},{symbol:"Shift",specClass:"shift",shift:"",keyCode:16,code:"ShiftRight"},{symbol:"Ctrl",specClass:"ctrl",shift:"",keyCode:17,code:"ControlLeft"},{symbol:"Win",specClass:"win",shift:"",keyCode:91,code:"MetaLeft"},{symbol:"Alt",specClass:"alt",shift:"",keyCode:18,code:"AltLeft"},{symbol:"Space",specClass:"space",shift:"",keyCode:32,code:"Space"},{symbol:"Alt",specClass:"alt",shift:"",keyCode:18,code:"AltRight"},{symbol:"&#8592;",shift:"&#8592;",caps:"&#8592;",keyCode:37,code:"ArrowLeft"},{symbol:"&#8595;",shift:"&#8595;",caps:"&#8595;",keyCode:40,code:"ArrowDown"},{symbol:"&#8594;",shift:"&#8594;",caps:"&#8594;",keyCode:39,code:"ArrowRight"},{symbol:"Ctrl",specClass:"ctrl",shift:"",keyCode:17,code:"ControlRight"}],o=[{symbol:"`",shift:"~",caps:"`",keyCode:192,code:"Backquote"},{symbol:"1",shift:"!",keyCode:49,code:"Digit1"},{symbol:"2",shift:'"',keyCode:50,code:"Digit2"},{symbol:"3",shift:"№",keyCode:51,code:"Digit3"},{symbol:"4",shift:";",keyCode:52,code:"Digit4"},{symbol:"5",shift:"%",keyCode:53,code:"Digit5"},{symbol:"6",shift:":",keyCode:54,code:"Digit6"},{symbol:"7",shift:"?",keyCode:55,code:"Digit7"},{symbol:"8",shift:"*",keyCode:56,code:"Digit8"},{symbol:"9",shift:"(",keyCode:57,code:"Digit9"},{symbol:"0",shift:")",keyCode:48,code:"Digit0"},{symbol:"-",shift:"_",keyCode:189,code:"Minus"},{symbol:"=",shift:"+",keyCode:187,code:"Equal"},{symbol:"Backspace",specClass:"backspace",shift:"",keyCode:8,code:"Backspace"},{symbol:"Tab",specClass:"tab",shift:"",keyCode:9,code:"Tab"},{symbol:"q",shift:"Q",caps:"Q",keyCode:81,code:"KeyQ"},{symbol:"w",shift:"W",caps:"W",keyCode:87,code:"KeyW"},{symbol:"e",shift:"E",caps:"E",keyCode:69,code:"KeyE"},{symbol:"r",shift:"R",caps:"R",keyCode:82,code:"KeyR"},{symbol:"t",shift:"T",caps:"T",keyCode:84,code:"KeyT"},{symbol:"y",shift:"Y",caps:"Y",keyCode:89,code:"KeyY"},{symbol:"u",shift:"U",caps:"U",keyCode:85,code:"KeyU"},{symbol:"i",shift:"I",caps:"I",keyCode:73,code:"KeyI"},{symbol:"o",shift:"O",caps:"O",keyCode:79,code:"KeyO"},{symbol:"p",shift:"P",caps:"P",keyCode:80,code:"KeyP"},{symbol:"[",shift:"[",caps:"[",keyCode:219,code:"BracketLeft"},{symbol:"]",shift:"]",caps:"]",keyCode:221,code:"BracketRight"},{symbol:" \\ ",shift:"/",keyCode:220,code:"Backslash"},{symbol:"Del",specClass:"del",shift:"",keyCode:46,code:"Delete"},{symbol:"Caps",specClass:"caps",shift:"",keyCode:20,code:"CapsLock"},{symbol:"a",shift:"A",caps:"A",keyCode:65,code:"KeyA"},{symbol:"s",shift:"S",caps:"S",keyCode:83,code:"KeyS"},{symbol:"d",shift:"D",caps:"D",keyCode:68,code:"KeyD"},{symbol:"f",shift:"F",caps:"F",keyCode:70,code:"KeyF"},{symbol:"g",shift:"G",caps:"G",keyCode:71,code:"KeyG"},{symbol:"h",shift:"H",caps:"H",keyCode:72,code:"KeyH"},{symbol:"j",shift:"J",caps:"J",keyCode:74,code:"KeyJ"},{symbol:"k",shift:"K",caps:"K",keyCode:75,code:"KeyK"},{symbol:"l",shift:"L",caps:"L",keyCode:76,code:"KeyL"},{symbol:";",shift:";",caps:";",keyCode:186,code:"Semicolon"},{symbol:"'",shift:'"',caps:"'",keyCode:222,code:"Quote"},{symbol:"Enter",specClass:"enter",shift:"",keyCode:13,code:"Enter"},{symbol:"Shift",specClass:"shift",shift:"",keyCode:16,code:"ShiftLeft"},{symbol:"z",shift:"Z",caps:"Z",keyCode:90,code:"KeyZ"},{symbol:"x",shift:"X",caps:"X",keyCode:88,code:"KeyX"},{symbol:"c",shift:"C",caps:"C",keyCode:67,code:"KeyC"},{symbol:"v",shift:"V",caps:"V",keyCode:86,code:"KeyV"},{symbol:"b",shift:"B",caps:"B",keyCode:66,code:"KeyB"},{symbol:"n",shift:"N",caps:"N",keyCode:78,code:"KeyN"},{symbol:"m",shift:"M",caps:"M",keyCode:77,code:"KeyM"},{symbol:",",shift:"<",caps:",",keyCode:188,code:"Comma"},{symbol:".",shift:">",caps:".",keyCode:190,code:"Period"},{symbol:"/",shift:"?",caps:"/",keyCode:191,code:"Slash"},{symbol:"&#8593;",shift:"&#8593;",caps:"&#8593;",keyCode:38,code:"ArrowUp"},{symbol:"Shift",specClass:"shift",shift:"",keyCode:16,code:"ShiftRight"},{symbol:"Ctrl",specClass:"ctrl",shift:"",keyCode:17,code:"ControlLeft"},{symbol:"Win",specClass:"win",shift:"",keyCode:91,code:"MetaLeft"},{symbol:"Alt",specClass:"alt",shift:"",keyCode:18,code:"AltLeft"},{symbol:"Space",specClass:"space",shift:"",keyCode:32,code:"Space"},{symbol:"Alt",specClass:"alt",shift:"",keyCode:18,code:"AltRight"},{symbol:"&#8592;",shift:"&#8592;",caps:"&#8592;",keyCode:37,code:"ArrowLeft"},{symbol:"&#8595;",shift:"&#8595;",caps:"&#8595;",keyCode:40,code:"ArrowDown"},{symbol:"&#8594;",shift:"&#8594;",caps:"&#8594;",keyCode:39,code:"ArrowRight"},{symbol:"Ctrl",specClass:"ctrl",shift:"",keyCode:17,code:"ControlRight"}];function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function t(e,o){for(var t=0;t<o.length;t++){var c=o[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,(void 0,d=function(e,o){if("object"!==s(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var c=t.call(e,"string");if("object"!==s(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(c.key),"symbol"===s(d)?d:String(d)),c)}var d}function c(e,o,s){return o&&t(e.prototype,o),s&&t(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}var d=c((function s(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,s);var t=document.querySelector("body"),c=document.createElement("div"),d=document.createElement("h1"),y=document.createElement("textarea"),i=function(){var s=document.createElement("section");s.classList.add("keyboard","ru"),s.setAttribute("id","keyboard");var t=function(){return s.classList.contains("ru")?e:o},c=!1,d=!1,y=!1;function i(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];document.querySelectorAll(".key").forEach((function(t,c){var d=e()[c];t.innerHTML=o?d.shift?d.shift:d.symbol:s&&d.caps?d.caps:d.symbol}))}return Object.values(t()).map((function(e){s.insertAdjacentHTML("beforeend",'<div class="key'.concat(e.specClass?" "+e.specClass:"",'" data=').concat(e.code,">\n          ").concat(y&&e.caps?e.caps:e.symbol,"\n        </div>"))})),document.addEventListener("keydown",(function(e){var o=document.querySelector('.key[data="'.concat(e.code,'"]')),a=document.querySelector(".caps");o&&("CapsLock"===e.code&&(y=!y,s.classList.toggle("caps"),y&&a.classList.add("active"),y||a.classList.remove("active"),i(t,c,y)),"CapsLock"!==e.code&&o.classList.add("active")),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||i(t,c=!0),"AltLeft"===e.code&&(d=!0),c&&s.classList.add("shift"),c&&d&&(s.classList.contains("ru")?(s.classList.replace("ru","en"),i(t)):(s.classList.replace("en","ru"),i(t))),"ControlLeft"!==e.code&&"ControlLeft"!==e.code&&"MetaLeft"!==e.code&&"AltLeft"!==e.code&&"AltRight"!==e.code&&"ControlRight"!==e.code||e.preventDefault()})),document.addEventListener("keyup",(function(e){var o=document.querySelector('.key[data="'.concat(e.code,'"]'));o&&"CapsLock"!==e.code&&o.classList.remove("active"),document.querySelectorAll(".caps").forEach((function(e){y||e.classList.remove("active")})),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||i(t,c=!1),c||s.classList.remove("shift"),"AltLeft"===e.code&&(d=!1)})),s}(),a=document.createElement("h2"),l=document.createElement("h2");c.classList.add("wrapper"),d.classList.add("header__title"),d.textContent="Виртуальная клавиатура",y.classList.add("input"),i.addEventListener("click",(function(e){var o=e.target.closest(".key"),s=o.getAttribute("data");o&&(y.value+="ControlLeft"===s||"MetaLeft"===s||"AltLeft"===s||"AltRight"===s||"ControlRight"===s||"Tab"===s||"Caps"===s||"ShiftLeft"===s||"ShiftRight"===s||"Enter"===s||"Delete"===s||"Backspace"===s?"":"Space"===s?" ":o.textContent.trim()),y.focus()})),document.addEventListener("keydown",(function(e){if("Tab"===e.code){e.preventDefault();var o=y.selectionStart,s=y.value;y.value=s.slice(0,o)+"  "+s.slice(o),y.selectionEnd=o+2}"ArrowUp"===e.code&&(e.preventDefault(),y.value+="↑",y.focus()),"ArrowRight"===e.code&&(e.preventDefault(),y.value+="→",y.focus()),"ArrowDown"===e.code&&(e.preventDefault(),y.value+="↓",y.focus()),"ArrowLeft"===e.code&&(e.preventDefault(),y.value+="←",y.focus())})),a.classList.add("operation-system"),a.textContent="Клавиатура создана в операционной системе Windows",l.classList.add("change-lang__text"),l.textContent="Комбинация для переключения раскладки shift + alt",t.appendChild(c),c.append(d,y,i,a,l)}));new d}();
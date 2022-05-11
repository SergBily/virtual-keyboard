const body = document.querySelector('body');

const eng = {
  0: {
    lng: 'eng', keyDown: '`', code: 'Backquote', line: 0, keyUp: '~', Shift: 'shift', caps: 'nocapslock',
  },
  1: {
    keyDown: '1', code: 'Digit1', line: 0, keyUp: '!', Shift: 'shift', caps: 'nocapslock',
  },
  2: {
    keyDown: '2', code: 'Digit2', line: 0, keyUp: '@', Shift: 'shift', caps: 'nocapslock',
  },
  3: {
    keyDown: '3', code: 'Digit3', line: 0, keyUp: '#', Shift: 'shift', caps: 'nocapslock',
  },
  4: {
    keyDown: '4', code: 'Digit4', line: 0, keyUp: '$', Shift: 'shift', caps: 'nocapslock',
  },
  5: {
    keyDown: '5', code: 'Digit5', line: 0, keyUp: '%', Shift: 'shift', caps: 'nocapslock',
  },
  6: {
    keyDown: '6', code: 'Digit6', line: 0, keyUp: '^', Shift: 'shift', caps: 'nocapslock',
  },
  7: {
    keyDown: '7', code: 'Digit7', line: 0, keyUp: '&', Shift: 'shift', caps: 'nocapslock',
  },
  8: {
    keyDown: '8', code: 'Digit8', line: 0, keyUp: '*', Shift: 'shift', caps: 'nocapslock',
  },
  9: {
    keyDown: '9', code: 'Digit9', line: 0, keyUp: '(', Shift: 'shift', caps: 'nocapslock',
  },
  10: {
    keyDown: '0', code: 'Digit0', line: 0, keyUp: ')', Shift: 'shift', caps: 'nocapslock',
  },
  11: {
    keyDown: '-', code: 'Minus', line: 0, keyUp: '_', Shift: 'shift', caps: 'nocapslock',
  },
  12: {
    keyDown: '=', code: 'Equal', line: 0, keyUp: '+', Shift: 'shift', caps: 'nocapslock',
  },
  13: {
    keyDown: 'Backspace', code: 'Backspace', line: 0, Shift: 'noshift', caps: 'nocapslock',
  },
  14: {
    keyDown: 'Tab', code: 'Tab', line: 1, Shift: 'noshift', caps: 'nocapslock',
  },
  15: {
    keyDown: 'q', code: 'KeyQ', line: 1, keyUp: 'Q', Shift: 'shift', caps: 'capslock',
  },
  16: {
    keyDown: 'w', code: 'KeyW', line: 1, keyUp: 'W', Shift: 'shift', caps: 'capslock',
  },
  17: {
    keyDown: 'e', code: 'KeyE', line: 1, keyUp: 'E', Shift: 'shift', caps: 'capslock',
  },
  18: {
    keyDown: 'r', code: 'KeyR', line: 1, keyUp: 'R', Shift: 'shift', caps: 'capslock',
  },
  19: {
    keyDown: 't', code: 'KeyT', line: 1, keyUp: 'T', Shift: 'shift', caps: 'capslock',
  },
  20: {
    keyDown: 'y', code: 'KeyY', line: 1, keyUp: 'Y', Shift: 'shift', caps: 'capslock',
  },
  21: {
    keyDown: 'u', code: 'KeyU', line: 1, keyUp: 'U', Shift: 'shift', caps: 'capslock',
  },
  22: {
    keyDown: 'i', code: 'KeyI', line: 1, keyUp: 'I', Shift: 'shift', caps: 'capslock',
  },
  23: {
    keyDown: 'o', code: 'KeyO', line: 1, keyUp: 'O', Shift: 'shift', caps: 'capslock',
  },
  24: {
    keyDown: 'p', code: 'KeyP', line: 1, keyUp: 'P', Shift: 'shift', caps: 'capslock',
  },
  25: {
    keyDown: '[', code: 'BracketLeft', line: 1, keyUp: '{', Shift: 'shift', caps: 'nocapslock',
  },
  26: {
    keyDown: ']', code: 'BracketRight', line: 1, keyUp: '}', Shift: 'shift', caps: 'nocapslock',
  },
  27: {
    keyDown: '\\', code: 'Backslash', line: 1, keyUp: '|', Shift: 'shift', caps: 'nocapslock',
  },
  28: {
    keyDown: 'Del', code: 'Delete', line: 1, Shift: 'noshift', caps: 'nocapslock',
  },
  29: {
    keyDown: 'CapsLock', code: 'CapsLock', line: 2, Shift: 'noshift', caps: 'nocapslock',
  },
  30: {
    keyDown: 'a', code: 'KeyA', line: 2, keyUp: 'A', Shift: 'shift', caps: 'capslock',
  },
  31: {
    keyDown: 's', code: 'KeyS', line: 2, keyUp: 'S', Shift: 'shift', caps: 'capslock',
  },
  32: {
    keyDown: 'd', code: 'KeyD', line: 2, keyUp: 'D', Shift: 'shift', caps: 'capslock',
  },
  33: {
    keyDown: 'f', code: 'KeyF', line: 2, keyUp: 'F', Shift: 'shift', caps: 'capslock',
  },
  34: {
    keyDown: 'g', code: 'KeyG', line: 2, keyUp: 'G', Shift: 'shift', caps: 'capslock',
  },
  35: {
    keyDown: 'h', code: 'KeyH', line: 2, keyUp: 'H', Shift: 'shift', caps: 'capslock',
  },
  36: {
    keyDown: 'j', code: 'KeyJ', line: 2, keyUp: 'J', Shift: 'shift', caps: 'capslock',
  },
  37: {
    keyDown: 'k', code: 'KeyK', line: 2, keyUp: 'K', Shift: 'shift', caps: 'capslock',
  },
  38: {
    keyDown: 'l', code: 'KeyL', line: 2, keyUp: 'L', Shift: 'shift', caps: 'capslock',
  },
  39: {
    keyDown: ';', code: 'Semicolon', line: 2, keyUp: ':', Shift: 'shift', caps: 'nocapslock',
  },
  40: {
    keyDown: "'", code: 'Quote', line: 2, keyUp: '"', Shift: 'shift', caps: 'nocapslock',
  },
  41: {
    keyDown: 'Enter', code: 'Enter', line: 2, Shift: 'noshift', caps: 'nocapslock',
  },
  42: {
    keyDown: 'Shift', code: 'ShiftLeft', line: 3, Shift: 'noshift', caps: 'nocapslock',
  },
  43: {
    keyDown: 'z', code: 'KeyZ', line: 3, keyUp: 'Z', Shift: 'shift', caps: 'capslock',
  },
  44: {
    keyDown: 'x', code: 'KeyX', line: 3, keyUp: 'X', Shift: 'shift', caps: 'capslock',
  },
  45: {
    keyDown: 'c', code: 'KeyC', line: 3, keyUp: 'C', Shift: 'shift', caps: 'capslock',
  },
  46: {
    keyDown: 'v', code: 'KeyV', line: 3, keyUp: 'V', Shift: 'shift', caps: 'capslock',
  },
  47: {
    keyDown: 'b', code: 'KeyB', line: 3, keyUp: 'B', Shift: 'shift', caps: 'capslock',
  },
  48: {
    keyDown: 'n', code: 'KeyN', line: 3, keyUp: 'N', Shift: 'shift', caps: 'capslock',
  },
  49: {
    keyDown: 'm', code: 'KeyM', line: 3, keyUp: 'M', Shift: 'shift', caps: 'capslock',
  },
  50: {
    keyDown: ',', code: 'Comma', line: 3, keyUp: '<', Shift: 'shift', caps: 'nocapslock',
  },
  51: {
    keyDown: '.', code: 'Period', line: 3, keyUp: '>', Shift: 'shift', caps: 'nocapslock',
  },
  52: {
    keyDown: '/', code: 'Slash', line: 3, keyUp: '?', Shift: 'shift', caps: 'nocapslock',
  },
  53: {
    keyDown: '&#x25B2', code: 'ArrowUp', line: 3, Shift: 'noshift', caps: 'nocapslock',
  },
  54: {
    keyDown: 'Shift', code: 'ShiftRight', line: 3, Shift: 'noshift', caps: 'nocapslock',
  },
  55: {
    keyDown: 'Ctrl', code: 'ControlLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  56: {
    keyDown: 'Win', code: 'MetaLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  57: {
    keyDown: 'Alt', code: 'AltLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  58: {
    keyDown: ' ', code: 'Space', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  59: {
    keyDown: 'Alt', code: 'AltRight', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  60: {
    keyDown: '&#x25C4', code: 'ArrowLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  61: {
    keyDown: '&#x25BC', code: 'ArrowDown', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  62: {
    keyDown: '&#x25BA', code: 'ArrowRight', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  63: {
    keyDown: 'Ctrl', code: 'ControlRight', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  length: 64,
};

const ru = {
  0: {
    lng: 'ru', keyDown: 'ё', code: 'Backquote', codeRu: true, line: 0, keyUp: 'Ё', Shift: 'shift', caps: 'capslock',
  },
  1: {
    keyDown: '1', code: 'Digit1', line: 0, keyUp: '!', Shift: 'shift', caps: 'nocapslock',
  },
  2: {
    keyDown: '2', code: 'Digit2', line: 0, keyUp: '"', Shift: 'shift', caps: 'nocapslock',
  },
  3: {
    keyDown: '3', code: 'Digit3', line: 0, keyUp: '№', Shift: 'shift', caps: 'nocapslock',
  },
  4: {
    keyDown: '4', code: 'Digit4', line: 0, keyUp: ';', Shift: 'shift', caps: 'nocapslock',
  },
  5: {
    keyDown: '5', code: 'Digit5', line: 0, keyUp: '%', Shift: 'shift', caps: 'nocapslock',
  },
  6: {
    keyDown: '6', code: 'Digit6', line: 0, keyUp: ':', Shift: 'shift', caps: 'nocapslock',
  },
  7: {
    keyDown: '7', code: 'Digit7', line: 0, keyUp: '?', Shift: 'shift', caps: 'nocapslock',
  },
  8: {
    keyDown: '8', code: 'Digit8', line: 0, keyUp: '*', Shift: 'shift', caps: 'nocapslock',
  },
  9: {
    keyDown: '9', code: 'Digit9', line: 0, keyUp: '(', Shift: 'shift', caps: 'nocapslock',
  },
  10: {
    keyDown: '0', code: 'Digit0', line: 0, keyUp: ')', Shift: 'shift', caps: 'nocapslock',
  },
  11: {
    keyDown: '-', code: 'Minus', line: 0, keyUp: '_', Shift: 'shift', caps: 'nocapslock',
  },
  12: {
    keyDown: '=', code: 'Equal', line: 0, keyUp: '+', Shift: 'shift', caps: 'nocapslock',
  },
  13: {
    keyDown: 'Backspace', code: 'Backspace', line: 0, Shift: 'noshift', caps: 'nocapslock',
  },
  14: {
    keyDown: 'Tab', code: 'Tab', line: 1, Shift: 'noshift', caps: 'nocapslock',
  },
  15: {
    keyDown: 'й', code: 'KeyQ', line: 1, keyUp: 'Й', Shift: 'shift', caps: 'capslock',
  },
  16: {
    keyDown: 'ц', code: 'KeyW', line: 1, keyUp: 'Ц', Shift: 'shift', caps: 'capslock',
  },
  17: {
    keyDown: 'у', code: 'KeyE', line: 1, keyUp: 'У', Shift: 'shift', caps: 'capslock',
  },
  18: {
    keyDown: 'к', code: 'KeyR', line: 1, keyUp: 'К', Shift: 'shift', caps: 'capslock',
  },
  19: {
    keyDown: 'е', code: 'KeyT', line: 1, keyUp: 'Е', Shift: 'shift', caps: 'capslock',
  },
  20: {
    keyDown: 'н', code: 'KeyY', line: 1, keyUp: 'Н', Shift: 'shift', caps: 'capslock',
  },
  21: {
    keyDown: 'г', code: 'KeyU', line: 1, keyUp: 'Г', Shift: 'shift', caps: 'capslock',
  },
  22: {
    keyDown: 'ш', code: 'KeyI', line: 1, keyUp: 'Ш', Shift: 'shift', caps: 'capslock',
  },
  23: {
    keyDown: 'щ', code: 'KeyO', line: 1, keyUp: 'Щ', Shift: 'shift', caps: 'capslock',
  },
  24: {
    keyDown: 'з', code: 'KeyP', line: 1, keyUp: 'З', Shift: 'shift', caps: 'capslock',
  },
  25: {
    keyDown: 'х', code: 'BracketLeft', codeRu: true, line: 1, keyUp: 'Х', Shift: 'shift', caps: 'capslock',
  },
  26: {
    keyDown: 'ъ', code: 'BracketRight', codeRu: true, line: 1, keyUp: 'Ъ', Shift: 'shift', caps: 'capslock',
  },
  27: {
    keyDown: '\\', code: 'Backslash', line: 1, keyUp: '/', Shift: 'shift', caps: 'nocapslock',
  },
  28: {
    keyDown: 'Del', code: 'Delete', line: 1, Shift: 'noshift', caps: 'nocapslock',
  },
  29: {
    keyDown: 'CapsLock', code: 'CapsLock', line: 2, Shift: 'noshift', caps: 'nocapslock',
  },
  30: {
    keyDown: 'ф', code: 'KeyA', line: 2, keyUp: 'Ф', Shift: 'shift', caps: 'capslock',
  },
  31: {
    keyDown: 'ы', code: 'KeyS', line: 2, keyUp: 'Ы', Shift: 'shift', caps: 'capslock',
  },
  32: {
    keyDown: 'в', code: 'KeyD', line: 2, keyUp: 'В', Shift: 'shift', caps: 'capslock',
  },
  33: {
    keyDown: 'а', code: 'KeyF', line: 2, keyUp: 'А', Shift: 'shift', caps: 'capslock',
  },
  34: {
    keyDown: 'п', code: 'KeyG', line: 2, keyUp: 'П', Shift: 'shift', caps: 'capslock',
  },
  35: {
    keyDown: 'р', code: 'KeyH', line: 2, keyUp: 'Р', Shift: 'shift', caps: 'capslock',
  },
  36: {
    keyDown: 'о', code: 'KeyJ', line: 2, keyUp: 'О', Shift: 'shift', caps: 'capslock',
  },
  37: {
    keyDown: 'л', code: 'KeyK', line: 2, keyUp: 'Л', Shift: 'shift', caps: 'capslock',
  },
  38: {
    keyDown: 'д', code: 'KeyL', line: 2, keyUp: 'Д', Shift: 'shift', caps: 'capslock',
  },
  39: {
    keyDown: 'ж', code: 'Semicolon', codeRu: true, line: 2, keyUp: 'Ж', Shift: 'shift', caps: 'capslock',
  },
  40: {
    keyDown: 'э', code: 'Quote', codeRu: true, line: 2, keyUp: 'Э', Shift: 'shift', caps: 'capslock',
  },
  41: {
    keyDown: 'Enter', code: 'Enter', line: 2, Shift: 'noshift', caps: 'nocapslock',
  },
  42: {
    keyDown: 'Shift', code: 'ShiftLeft', line: 3, Shift: 'noshift', caps: 'nocapslock',
  },
  43: {
    keyDown: 'я', code: 'KeyZ', line: 3, keyUp: 'Я', Shift: 'shift', caps: 'capslock',
  },
  44: {
    keyDown: 'ч', code: 'KeyX', line: 3, keyUp: 'Ч', Shift: 'shift', caps: 'capslock',
  },
  45: {
    keyDown: 'с', code: 'KeyC', line: 3, keyUp: 'С', Shift: 'shift', caps: 'capslock',
  },
  46: {
    keyDown: 'м', code: 'KeyV', line: 3, keyUp: 'М', Shift: 'shift', caps: 'capslock',
  },
  47: {
    keyDown: 'и', code: 'KeyB', line: 3, keyUp: 'И', Shift: 'shift', caps: 'capslock',
  },
  48: {
    keyDown: 'т', code: 'KeyN', line: 3, keyUp: 'Т', Shift: 'shift', caps: 'capslock',
  },
  49: {
    keyDown: 'ь', code: 'KeyM', line: 3, keyUp: 'Ь', Shift: 'shift', caps: 'capslock',
  },
  50: {
    keyDown: 'б', code: 'Comma', codeRu: true, line: 3, keyUp: 'Б', Shift: 'shift', caps: 'capslock',
  },
  51: {
    keyDown: 'ю', code: 'Period', codeRu: true, line: 3, keyUp: 'Ю', Shift: 'shift', caps: 'capslock',
  },
  52: {
    keyDown: '.', code: 'Slash', line: 3, keyUp: ',', Shift: 'shift', caps: 'nocapslock',
  },
  53: {
    keyDown: '&#x25B2', code: 'ArrowUp', line: 3, Shift: 'noshift', caps: 'nocapslock',
  },
  54: {
    keyDown: 'Shift', code: 'ShiftRight', line: 3, Shift: 'noshift', caps: 'nocapslock',
  },
  55: {
    keyDown: 'Ctrl', code: 'ControlLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  56: {
    keyDown: 'Win', code: 'MetaLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  57: {
    keyDown: 'Alt', code: 'AltLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  58: {
    keyDown: ' ', code: 'Space', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  59: {
    keyDown: 'Alt', code: 'AltRight', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  60: {
    keyDown: '&#x25C4', code: 'ArrowLeft', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  61: {
    keyDown: '&#x25BC', code: 'ArrowDown', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  62: {
    keyDown: '&#x25BA', code: 'ArrowRight', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  63: {
    keyDown: 'Ctrl', code: 'ControlRight', line: 4, Shift: 'noshift', caps: 'nocapslock',
  },
  length: 64,
};

let capsLockStatus = false;
let shift = false;
class InitPage {
  createWrapper() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    body.append(this.wrapper);
    this.createTitle();
    this.createTextArea();
    this.createKeyboardFild();
    this.createInfoBlock();
    this.createFooter();
  }

  createTitle() {
    this.title = document.createElement('div');
    this.title.classList.add('title');
    this.title.innerHTML = '<h1 class=\'title__text\'>Virtual Keyboard</h1>';
    this.wrapper.append(this.title);
  }

  createTextArea() {
    this.textarea = document.createElement('div');
    this.textarea.classList.add('textarea');
    this.textarea.innerHTML = '<textarea class=\'textarea__fild\' rows=\'8\' cols=\'70\' autofocus></textarea>';
    this.wrapper.append(this.textarea);
  }

  createKeyboardFild() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.wrapper.append(this.keyboard);
  }

  createInfoBlock() {
    this.infoBlock = document.createElement('div');
    this.infoBlock.classList.add('infoBlock');
    this.infoBlock.innerHTML = '<p class=\'system\'>The keyboard created on windows system</p><p class=\'changeLang\'>For switch language, press <b>Left Ctrl  + Alt</b></p>';
    this.wrapper.append(this.infoBlock);
  }

  createFooter() {
    this.footer = document.createElement('div');
    this.footer.classList.add('footer');
    this.footer.innerHTML = '<div class=\'footer__wrapper\'><p class=\'year\'>2022</p><a class=\'link\' href=\'https://github.com/SergBily/virtual-keyboard/pull/3\'><img src="/virtual-keyboard/assets/images/github-logo.png" alt="github-logo"></a></div>';
    this.wrapper.append(this.footer);
  }
}

const initPage = new InitPage();
initPage.createWrapper();

const keyboardBlock = document.querySelector('.keyboard');

function bildKeyboard(lang) {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    line.classList.add(`line-${i}`);
    line.setAttribute('data-lng', `${lang[0].lng}`);
    keyboardBlock.append(line);
    for (let y = 0; y < lang.length; y += 1) {
      if (lang[y].line === i) {
        const key = document.createElement('div');
        key.classList.add('key');
        key.classList.add(lang[y].code);
        key.classList.add(lang[y].Shift);
        key.classList.add(lang[y].caps);
        line.append(key);

        const langCase = document.createElement('span');
        if (localStorage.getItem('language') === 'ru') {
          langCase.classList.add('eng');
        } else {
          langCase.classList.add('ru');
        }
        key.append(langCase);

        const keyDown = document.createElement('span');
        keyDown.classList.add('letterDown');
        keyDown.innerHTML = lang[y].keyDown;
        if (lang[y].code.includes('Key')) {
          keyDown.classList.add('capsDown');
        }
        if (Object.prototype.hasOwnProperty.call(lang[y], 'codeRu')) {
          keyDown.classList.add('capsDown');
        }
        langCase.append(keyDown);

        if (Object.prototype.hasOwnProperty.call(lang[y], 'keyUp')) {
          const keyUp = document.createElement('span');
          keyUp.classList.add('letterUp');
          keyUp.innerHTML = lang[y].keyUp;
          if (lang[y].code.includes('Key')) {
            keyUp.classList.add('capsUp');
          }
          if (Object.prototype.hasOwnProperty.call(lang[y], 'codeRu')) {
            keyUp.classList.add('capsUp');
          }
          langCase.append(keyUp);
          if (capsLockStatus === false) {
            keyUp.hidden = true;
          } else {
            keyDown.hidden = true;
          }
        } else {
          keyDown.setAttribute('data-swith', 'down');
        }
      }
    }
  }
  if (capsLockStatus === true) {
    document.querySelector('.CapsLock').classList.add('active-caps');
  }
}

function setLanguage() {
  const currentLang = localStorage.getItem('language');
  if (currentLang === 'ru') {
    bildKeyboard(ru);
  } else {
    bildKeyboard(eng);
  }
}
setLanguage();

const textArea = document.querySelector('.textarea__fild');
const pressKeyBoth = new Set();
class ControlKeyboard {
  handleEvent(event) {
    this.event = event;
    this.start = textArea.selectionStart;
    this.value = textArea.value;

    if (this.event.type === 'keydown') {
      if (this.event.key === 'Alt' || this.event.key === 'AltGraph') {
        event.preventDefault();
      } else if (this.event.code === 'CapsLock') {
        this.capsLock();
      } else if (this.event.code === 'Tab') {
        event.preventDefault();
        this.tab();
      } else if (this.event.key === 'Shift') {
        this.keyUp();
      }
      this.outKey();
      this.pressKey();
    } else {
      if (this.event.key === 'Shift') {
        this.keyUpHidden();
      } else if (document.querySelector('.CapsLock').classList.contains('active-caps') && ((this.event.code === 'ShiftRight' || this.event.code === 'ShiftLeft'))) {
        this.keyUp();
      }
      this.unpressedKey();
    }
    setTimeout(() => {
      this.changeLanguage();
    }, 100);
  }

  tab() {
    textArea.value = `${this.value.substring(0, this.start)}    ${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 4;
  }

  outKey() {
    if (this.event.code === 'F12' || this.event.code === 'Escape') return;
    this.element = document.querySelector(`.${this.event.code}`);
    if (!(this.element.classList.contains('shift'))) return;
    this.event.preventDefault();

    if ((document.querySelector('.CapsLock').classList.contains('active-caps') && this.element.classList.contains('capslock')) || this.event.shiftKey === true || shift === true) {
      this.upperCase();
    } else {
      this.lowerCase();
    }
  }

  upperCase() {
    textArea.value = `${this.value.substring(0, this.start)}${this.element.firstElementChild.lastElementChild.textContent}${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 1;
  }

  lowerCase() {
    textArea.value = `${this.value.substring(0, this.start)}${this.element.firstElementChild.firstElementChild.textContent}${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 1;
  }

  pressKey() {
    if (this.event.code === 'F12') return;
    textArea.focus();
    const activBtn = document.querySelector(`.${this.event.code}`);
    activBtn.classList.add('active');
  }

  unpressedKey() {
    if (this.event.code === 'F12') return;
    const activBtn = document.querySelector(`.${this.event.code}`);
    activBtn.classList.remove('active');
  }

  keyUp() {
    this.letterUp = document.querySelectorAll('.letterUp');
    this.letterDown = document.querySelectorAll('.letterDown');

    this.letterUp.forEach((letter) => {
      const k = letter;
      k.hidden = false;
    });

    this.letterDown.forEach((letter) => {
      if (!letter.dataset.swith) {
        const k = letter;
        k.hidden = true;
      }
    });
  }

  keyUpHidden() {
    this.letterUp.forEach((letter) => {
      const k = letter;
      k.hidden = true;
    });

    this.letterDown.forEach((letter) => {
      if (!letter.dataset.swith) {
        const k = letter;
        k.hidden = false;
      }
    });
  }

  changeLanguage() {
    const checkLang = document.querySelector('[data-lng]');
    if (this.event.type === 'keydown') {
      pressKeyBoth.add(this.event.code);
    } else {
      pressKeyBoth.clear();
    }

    if (pressKeyBoth.has('ControlLeft') && pressKeyBoth.has('AltLeft')) {
      const test = document.querySelectorAll('.line');
      test.forEach((line) => {
        line.remove();
      });

      if (checkLang.dataset.lng === 'eng') {
        bildKeyboard(ru);
        localStorage.setItem('language', 'ru');
      } else {
        bildKeyboard(eng);
        localStorage.setItem('language', 'eng');
      }
    }
  }

  capsLock() {
    this.capsLockBtn = document.querySelector('.CapsLock');
    this.capsUp = document.querySelectorAll('.capsUp');
    this.capsDown = document.querySelectorAll('.capsDown');

    this.capsLockBtn.classList.toggle('active-caps');

    if (capsLockStatus === false) {
      capsLockStatus = true;
      this.capsDown.forEach((letter) => {
        const k = letter;
        k.hidden = true;
      });

      this.capsUp.forEach((letter) => {
        const k = letter;
        k.hidden = false;
      });
    } else {
      capsLockStatus = false;

      this.capsDown.forEach((letter) => {
        const k = letter;
        k.hidden = false;
      });

      this.capsUp.forEach((letter) => {
        const k = letter;
        k.hidden = true;
      });
    }
  }
}

const controlKeyboard = new ControlKeyboard();

document.addEventListener('keydown', controlKeyboard);
document.addEventListener('keyup', controlKeyboard);

class MouseControl {
  handleEvent(event) {
    this.event = event;
    this.start = textArea.selectionStart;
    this.value = textArea.value;
    this.keyPress = event.target.closest('.key');
    if (event.type === 'click') {
      if (event.target.closest('.CapsLock')) {
        controlKeyboard.capsLock();
      } else if (event.target.closest('.Backspace')) {
        this.backspace();
      } else if (event.target.closest('.Tab')) {
        this.tab();
      } else if (event.target.closest('.Delete')) {
        this.del();
      } else if (event.target.closest('.Enter')) {
        this.enter();
      } else if (event.target.closest('.Space')) {
        this.space();
      }
      this.mouseInput();
      this.pressKey();
      setTimeout(() => {
        this.unpressedKey();
      }, 100);
    }
    if (event.type === 'mousedown' && (this.event.target.closest('.ShiftRight') || this.event.target.closest('.ShiftLeft'))) {
      shift = true;
      controlKeyboard.keyUp();
    } else if (event.type === 'mouseup' && (this.event.target.closest('.ShiftRight') || this.event.target.closest('.ShiftLeft'))) {
      shift = false;
      controlKeyboard.keyUpHidden();
    } else if (event.type === 'click' && this.event.target.closest('.Shift')) {
      controlKeyboard.outKey();
    }
  }

  mouseInput() {
    textArea.focus();

    if (!(this.event.target.closest('.key'))) return;
    if (this.event.target.closest('.Backspace, .Enter, .Delete, .ShiftRight, .CapsLock, .ShiftLeft, .MetaLeft, .AltLeft, .Space, .AltRight, .ControlRight, .ControlLeft, .Tab')) return;

    if (this.keyPress.firstElementChild.firstElementChild.getAttribute('hidden') == null) {
      textArea.value = `${this.value.substring(0, this.start)}${this.keyPress.firstElementChild.firstElementChild.textContent}${this.value.substring(this.start, this.value.lenght)}`;
      textArea.selectionEnd = this.start + 1;
    } else {
      textArea.value = `${this.value.substring(0, this.start)}${this.keyPress.firstElementChild.lastElementChild.textContent}${this.value.substring(this.start, this.value.lenght)}`;
      textArea.selectionEnd = this.start + 1;
    }
  }

  pressKey() {
    if (!this.keyPress) return;
    this.keyPress.classList.add('active');
  }

  unpressedKey() {
    if (!this.keyPress) return;
    this.keyPress.classList.remove('active');
  }

  backspace() {
    textArea.value = `${this.value.substring(0, this.start - 1)}${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start - 1;
  }

  tab() {
    textArea.value = `${this.value.substring(0, this.start)}    ${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 4;
  }

  del() {
    textArea.value = `${this.value.substring(0, this.start)}${this.value.substring(this.start + 1, this.value.lenght)}`;
    textArea.selectionEnd = this.start;
  }

  space() {
    textArea.value = `${this.value.substring(0, this.start)} ${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 1;
  }

  enter() {
    textArea.value = `${this.value.substring(0, this.start)}\n${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 1;
  }
}

const mouseControl = new MouseControl();

document.addEventListener('click', mouseControl);
document.addEventListener('mousedown', mouseControl);
document.addEventListener('mouseup', mouseControl);
document.addEventListener('click', mouseControl);

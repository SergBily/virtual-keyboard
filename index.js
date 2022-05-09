const body = document.querySelector('body');

const eng = {
  0: {
    lng: 'eng', keyDown: '`', code: 'Backquote', line: 0, keyUp: '~',
  },
  1: {
    keyDown: '1', code: 'Digit1', line: 0, keyUp: '!',
  },
  2: {
    keyDown: '2', code: 'Digit2', line: 0, keyUp: '@',
  },
  3: {
    keyDown: '3', code: 'Digit3', line: 0, keyUp: '#',
  },
  4: {
    keyDown: '4', code: 'Digit4', line: 0, keyUp: '$',
  },
  5: {
    keyDown: '5', code: 'Digit5', line: 0, keyUp: '%',
  },
  6: {
    keyDown: '6', code: 'Digit6', line: 0, keyUp: '^',
  },
  7: {
    keyDown: '7', code: 'Digit7', line: 0, keyUp: '&',
  },
  8: {
    keyDown: '8', code: 'Digit8', line: 0, keyUp: '*',
  },
  9: {
    keyDown: '9', code: 'Digit9', line: 0, keyUp: '(',
  },
  10: {
    keyDown: '0', code: 'Digit0', line: 0, keyUp: ')',
  },
  11: {
    keyDown: '-', code: 'Minus', line: 0, keyUp: '_',
  },
  12: {
    keyDown: '=', code: 'Equal', line: 0, keyUp: '+',
  },
  13: { keyDown: 'Backspace', code: 'Backspace', line: 0 },
  14: { keyDown: 'Tab', code: 'Tab', line: 1 },
  15: {
    keyDown: 'q', code: 'KeyQ', line: 1, keyUp: 'Q',
  },
  16: {
    keyDown: 'w', code: 'KeyW', line: 1, keyUp: 'W',
  },
  17: {
    keyDown: 'e', code: 'KeyE', line: 1, keyUp: 'E',
  },
  18: {
    keyDown: 'r', code: 'KeyR', line: 1, keyUp: 'R',
  },
  19: {
    keyDown: 't', code: 'KeyT', line: 1, keyUp: 'T',
  },
  20: {
    keyDown: 'y', code: 'KeyY', line: 1, keyUp: 'Y',
  },
  21: {
    keyDown: 'u', code: 'KeyU', line: 1, keyUp: 'U',
  },
  22: {
    keyDown: 'i', code: 'KeyI', line: 1, keyUp: 'I',
  },
  23: {
    keyDown: 'o', code: 'KeyO', line: 1, keyUp: 'O',
  },
  24: {
    keyDown: 'p', code: 'KeyP', line: 1, keyUp: 'P',
  },
  25: {
    keyDown: '[', code: 'BracketLeft', line: 1, keyUp: '{',
  },
  26: {
    keyDown: ']', code: 'BracketRight', line: 1, keyUp: '}',
  },
  27: {
    keyDown: '\\', code: 'Backslash', line: 1, keyUp: '|',
  },
  28: { keyDown: 'Del', code: 'Delete', line: 1 },
  29: { keyDown: 'CapsLock', code: 'CapsLock', line: 2 },
  30: {
    keyDown: 'a', code: 'KeyA', line: 2, keyUp: 'A',
  },
  31: {
    keyDown: 's', code: 'KeyS', line: 2, keyUp: 'S',
  },
  32: {
    keyDown: 'd', code: 'KeyD', line: 2, keyUp: 'D',
  },
  33: {
    keyDown: 'f', code: 'KeyF', line: 2, keyUp: 'F',
  },
  34: {
    keyDown: 'g', code: 'KeyG', line: 2, keyUp: 'G',
  },
  35: {
    keyDown: 'h', code: 'KeyH', line: 2, keyUp: 'H',
  },
  36: {
    keyDown: 'j', code: 'KeyJ', line: 2, keyUp: 'J',
  },
  37: {
    keyDown: 'k', code: 'KeyK', line: 2, keyUp: 'K',
  },
  38: {
    keyDown: 'l', code: 'KeyL', line: 2, keyUp: 'L',
  },
  39: {
    keyDown: ';', code: 'Semicolon', line: 2, keyUp: ':',
  },
  40: {
    keyDown: "'", code: 'Quote', line: 2, keyUp: '"',
  },
  41: { keyDown: 'Enter', code: 'Enter', line: 2 },
  42: { keyDown: 'Shift', code: 'ShiftLeft', line: 3 },
  43: {
    keyDown: 'z', code: 'KeyZ', line: 3, keyUp: 'Z',
  },
  44: {
    keyDown: 'x', code: 'KeyX', line: 3, keyUp: 'X',
  },
  45: {
    keyDown: 'c', code: 'KeyC', line: 3, keyUp: 'C',
  },
  46: {
    keyDown: 'v', code: 'KeyV', line: 3, keyUp: 'V',
  },
  47: {
    keyDown: 'b', code: 'KeyB', line: 3, keyUp: 'B',
  },
  48: {
    keyDown: 'n', code: 'KeyN', line: 3, keyUp: 'N',
  },
  49: {
    keyDown: 'm', code: 'KeyM', line: 3, keyUp: 'M',
  },
  50: {
    keyDown: ',', code: 'Comma', line: 3, keyUp: '<',
  },
  51: {
    keyDown: '.', code: 'Period', line: 3, keyUp: '>',
  },
  52: {
    keyDown: '/', code: 'Slash', line: 3, keyUp: '?',
  },
  53: { keyDown: '&#x25B2', code: 'ArrowUp', line: 3 },
  54: { keyDown: 'Shift', code: 'ShiftRight', line: 3 },
  55: { keyDown: 'Ctrl', code: 'ControlLeft', line: 4 },
  56: { keyDown: 'Win', code: 'MetaLeft', line: 4 },
  57: { keyDown: 'Alt', code: 'AltLeft', line: 4 },
  58: { keyDown: ' ', code: 'Space', line: 4 },
  59: { keyDown: 'Alt', code: 'AltRight', line: 4 },
  60: { keyDown: '&#x25C4', code: 'ArrowLeft', line: 4 },
  61: { keyDown: '&#x25BC', code: 'ArrowDown', line: 4 },
  62: { keyDown: '&#x25BA', code: 'ArrowRight', line: 4 },
  63: { keyDown: 'Ctrl', code: 'ControlRight', line: 4 },
  length: 64,
};

const ru = {
  0: {
    lng: 'ru', keyDown: 'ё', code: 'Backquote', codeRu: 'Key', line: 0, keyUp: 'Ё',
  },
  1: {
    keyDown: '1', code: 'Digit1', line: 0, keyUp: '!',
  },
  2: {
    keyDown: '2', code: 'Digit2', line: 0, keyUp: '"',
  },
  3: {
    keyDown: '3', code: 'Digit3', line: 0, keyUp: '№',
  },
  4: {
    keyDown: '4', code: 'Digit4', line: 0, keyUp: ';',
  },
  5: {
    keyDown: '5', code: 'Digit5', line: 0, keyUp: '%',
  },
  6: {
    keyDown: '6', code: 'Digit6', line: 0, keyUp: ':',
  },
  7: {
    keyDown: '7', code: 'Digit7', line: 0, keyUp: '?',
  },
  8: {
    keyDown: '8', code: 'Digit8', line: 0, keyUp: '*',
  },
  9: {
    keyDown: '9', code: 'Digit9', line: 0, keyUp: '(',
  },
  10: {
    keyDown: '0', code: 'Digit0', line: 0, keyUp: ')',
  },
  11: {
    keyDown: '-', code: 'Minus', line: 0, keyUp: '_',
  },
  12: {
    keyDown: '=', code: 'Equal', line: 0, keyUp: '+',
  },
  13: { keyDown: 'Backspace', code: 'Backspace', line: 0 },
  14: { keyDown: 'Tab', code: 'Tab', line: 1 },
  15: {
    keyDown: 'й', code: 'KeyQ', line: 1, keyUp: 'Й',
  },
  16: {
    keyDown: 'ц', code: 'KeyW', line: 1, keyUp: 'Ц',
  },
  17: {
    keyDown: 'у', code: 'KeyE', line: 1, keyUp: 'У',
  },
  18: {
    keyDown: 'к', code: 'KeyR', line: 1, keyUp: 'К',
  },
  19: {
    keyDown: 'е', code: 'KeyT', line: 1, keyUp: 'Е',
  },
  20: {
    keyDown: 'н', code: 'KeyY', line: 1, keyUp: 'Н',
  },
  21: {
    keyDown: 'г', code: 'KeyU', line: 1, keyUp: 'Г',
  },
  22: {
    keyDown: 'ш', code: 'KeyI', line: 1, keyUp: 'Ш',
  },
  23: {
    keyDown: 'щ', code: 'KeyO', line: 1, keyUp: 'Щ',
  },
  24: {
    keyDown: 'з', code: 'KeyP', line: 1, keyUp: 'З',
  },
  25: {
    keyDown: 'х', code: 'BracketLeft', codeRu: 'Key', line: 1, keyUp: 'Х',
  },
  26: {
    keyDown: 'ъ', code: 'BracketRight', codeRu: 'Key', line: 1, keyUp: 'Ъ',
  },
  27: {
    keyDown: '\\', code: 'Backslash', line: 1, keyUp: '/',
  },
  28: { keyDown: 'Del', code: 'Delete', line: 1 },
  29: { keyDown: 'CapsLock', code: 'CapsLock', line: 2 },
  30: {
    keyDown: 'ф', code: 'KeyA', line: 2, keyUp: 'Ф',
  },
  31: {
    keyDown: 'ы', code: 'KeyS', line: 2, keyUp: 'Ы',
  },
  32: {
    keyDown: 'в', code: 'KeyD', line: 2, keyUp: 'В',
  },
  33: {
    keyDown: 'а', code: 'KeyF', line: 2, keyUp: 'А',
  },
  34: {
    keyDown: 'п', code: 'KeyG', line: 2, keyUp: 'П',
  },
  35: {
    keyDown: 'р', code: 'KeyH', line: 2, keyUp: 'Р',
  },
  36: {
    keyDown: 'о', code: 'KeyJ', line: 2, keyUp: 'О',
  },
  37: {
    keyDown: 'л', code: 'KeyK', line: 2, keyUp: 'Л',
  },
  38: {
    keyDown: 'д', code: 'KeyL', line: 2, keyUp: 'Д',
  },
  39: {
    keyDown: 'ж', code: 'Semicolon', codeRu: 'Key', line: 2, keyUp: 'Ж',
  },
  40: {
    keyDown: 'э', code: 'Quote', codeRu: 'Key', line: 2, keyUp: 'Э',
  },
  41: { keyDown: 'Enter', code: 'Enter', line: 2 },
  42: { keyDown: 'Shift', code: 'ShiftLeft', line: 3 },
  43: {
    keyDown: 'я', code: 'KeyZ', line: 3, keyUp: 'Я',
  },
  44: {
    keyDown: 'ч', code: 'KeyX', line: 3, keyUp: 'Ч',
  },
  45: {
    keyDown: 'с', code: 'KeyC', line: 3, keyUp: 'С',
  },
  46: {
    keyDown: 'м', code: 'KeyV', line: 3, keyUp: 'М',
  },
  47: {
    keyDown: 'и', code: 'KeyB', line: 3, keyUp: 'И',
  },
  48: {
    keyDown: 'т', code: 'KeyN', line: 3, keyUp: 'Т',
  },
  49: {
    keyDown: 'ь', code: 'KeyM', line: 3, keyUp: 'Ь',
  },
  50: {
    keyDown: 'б', code: 'Comma', codeRu: 'Key', line: 3, keyUp: 'Б',
  },
  51: {
    keyDown: 'ю', code: 'Period', codeRu: 'Key', line: 3, keyUp: 'Ю',
  },
  52: {
    keyDown: '.', code: 'Slash', line: 3, keyUp: ',',
  },
  53: { keyDown: '&#x25B2', code: 'ArrowUp', line: 3 },
  54: { keyDown: 'Shift', code: 'ShiftRight', line: 3 },
  55: { keyDown: 'Ctrl', code: 'ControlLeft', line: 4 },
  56: { keyDown: 'Win', code: 'MetaLeft', line: 4 },
  57: { keyDown: 'Alt', code: 'AltLeft', line: 4 },
  58: { keyDown: ' ', code: 'Space', line: 4 },
  59: { keyDown: 'Alt', code: 'AltRight', line: 4 },
  60: { keyDown: '&#x25C4', code: 'ArrowLeft', line: 4 },
  61: { keyDown: '&#x25BC', code: 'ArrowDown', line: 4 },
  62: { keyDown: '&#x25BA', code: 'ArrowRight', line: 4 },
  63: { keyDown: 'Ctrl', code: 'ControlRight', line: 4 },
  length: 64,
};

let capsLockStatus = false;
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
    this.textarea.innerHTML = '<textarea class=\'textarea__fild\' rows=\'10\' cols=\'91\' autofocus></textarea>';
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
        if (Object.prototype.hasOwnProperty.call(lang[y], 'codeRu')) {
          key.classList.add(lang[y].codeRu);
        }
        line.append(key);

        const langCase = document.createElement('span');
        if (localStorage.getItem('language') === 'ru') {
          langCase.classList.add('ru');
        } else {
          langCase.classList.add('eng');
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

    if (this.event.code === 'Tab') {
      this.tab();
    }
    if (this.event.type === 'keydown') {
      this.outKey();
      this.pressKey();
      this.keyUp();

      if (this.event.code === 'CapsLock') {
        this.capsLock();
      }
    } else {
      this.unpressedKey();
      this.keyUpHidden();
    }
    this.changeLanguage();
  }

  tab() {
    textArea.value = `${this.value.substring(0, this.start)}    ${this.value.substring(this.start, this.value.lenght)}`;
    textArea.selectionEnd = this.start + 4;
  }

  outKey() {
    if (!(this.event.code.includes('Key'))) return;

    this.event.preventDefault();
    const element = document.querySelector(`.${this.event.code}`);

    if (document.querySelector('.CapsLock').classList.contains('active-caps') || this.event.shiftKey === true) {
      textArea.value = `${this.value.substring(0, this.start)}${element.firstElementChild.lastElementChild.textContent}${this.value.substring(this.start, this.value.lenght)}`;
      textArea.selectionEnd = this.start + 1;
    } else {
      textArea.value = `${this.value.substring(0, this.start)}${element.firstElementChild.firstElementChild.textContent}${this.value.substring(this.start, this.value.lenght)}`;
      textArea.selectionEnd = this.start + 1;
    }
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

    if (this.event.code === 'ShiftRight' || this.event.code === 'ShiftLeft') {
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
  }

  keyUpHidden() {
    if (this.event.code === 'CapsLock' || this.event.code.includes('Key')) return;

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
      pressKeyBoth.delete(this.event.code);
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
    this.mouseInput(this.event);
    this.pressKey();
    setTimeout(() => {
      this.unpressedKey();
    }, 100);

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
}

const mouseControl = new MouseControl();

document.addEventListener('click', mouseControl);

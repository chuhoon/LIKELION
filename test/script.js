const elsecond = document.querySelector('.second');
const elStartBtn = document.querySelector('.start');
const elResetBtn = document.querySelector('.reset');

let sec = 10;

function secClick() {
  elsecond.addEventListener('click', () => {
    elsecond.innerText = `${sec}`;
  });
}

function start() {
  elStartBtn.addEventListener('click', () => {
    if (sec != 0) {
      sec--;
      elsecond.innerText = `${sec}`;
    }
  });
}

function reset() {
  elResetBtn.addEventListener('click', () => {
    sec = 0;
    elsecond.innerText = `0${sec}`;
  });
}

secClick();
reset();

function init() {
  setInterval(() => {
    start();
  }, 1000);
}

init();

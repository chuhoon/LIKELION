//콜백함수
function sum(x, y, c) {
  c(x + y);
  return x + y;
}

function documentWrite(s) {
  document.write('콜백함수', s);
}

sum(10, 20, documentWrite);

function test1() {
  return 'hello 1';
}

let test2 = function () {
  return 'hello 2';
};

let test3 = () => 'hello3';

test1.name;
test2.name;
test3.name;

/* 즉시 실행함수
  이 함수를 재사용하지 않을거래서 사용
  메모리 효율을 극대화 시킬 수 있음
*/
(function () {
  console.log('hello world');
})();

(function 이름() {
  console.log('hello world');
})();

/*
모든 요소들이 로드된 이후에 실행,
함수는 1개만 실행 가능
*/
window.onload = function () {};

// $(document).ready() 위와 같은 기능을 하는 jquery 문법

function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

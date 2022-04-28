#23일차

> JavaScript의 기초를 배우고 있다. 변수, 변수명 할당 방법, 변수의 자료형, JavaScript 메서드를 배웠다.

## 2.2 변수의 자료형

```jsx
var 변수하나 = 20;
var 변수둘 = 10;
var 변수셋 = 2;

document.write('변수하나 : ', 변수하나);
document.write('<br>');
document.write('변수둘 : ', 변수둘);
document.write('<br>');
document.write('변수셋 : ', 변수셋);
document.write('<br>');
document.write('변수하나+변수둘 : ', 변수하나 + 변수둘);
document.write('<br>');
document.write('변수하나-변수둘 : ', 변수하나 - 변수둘);
document.write('<br>');
document.write('변수하나/변수둘 : ', 변수하나 / 변수둘);
document.write('<br>');
document.write('변수하나*변수둘 : ', 변수하나 * 변수둘);
document.write('<br>');
document.write('변수하나**변수셋 : ', 변수하나 ** 변수셋);
document.write('<br>');
document.write('변수하나%변수셋 : ', 변수하나 % 변수셋);
```

```jsx
typeof 'hello world'; // String
typeof 100; // Number
typeof NaN; // Number
typeof true; // Boolean
typeof undefined; // undefined
typeof Symbol(); // Symbol
typeof null; // Object, 여기서부터 js가 어려워 집니다.
typeof []; // Object, 여기서부터 js가 어려워 집니다. 왜 Array가 아닐까요?
typeof {}; // Object
typeof function () {}; // function
typeof /정규표현식/gi; // Object

// Object.prototype.toString.call(데이터).slice(8, -1);
// 로 확실하게 알 수 있습니다.
```

```jsx
// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = '10,000,000';

document.write(`n : ${n} <br>`);
document.write(`n.toLocaleString() : ${n.toLocaleString()} <br>`);
document.write(`s : ${s} <br>`);
document.write(`s.replace(/,/g, '') : ${s.replace(/,/g, '')} <br>`);
document.write(`parseInt(s, 10) : ${parseInt(s, 10)} <br>`);

document.write(`n.toFixed(10) : ${n.toFixed(10)} <br>`);
document.write(`nFloat.toFixed(3) : ${nFloat.toFixed(3)} <br>`);

document.write(`Number(true) : ${Number(true)} <br>`);
document.write(`Number(false) : ${Number(false)} <br>`);
document.write(`Number('') : ${Number('')} <br>`);
document.write(`Number(' ') : ${Number(' ')} <br>`);
document.write(`Number('hello') : ${Number('hello')} <br>`);
document.write(`Number('10 20') : ${Number('10 20')} <br>`);
document.write(`Number('10     ') : ${Number('10     ')} <br>`);
document.write(`Number('     10') : ${Number('     10')} <br>`);
document.write(`Number('     10     ') : ${Number('     10     ')} <br>`);

document.write(`Math.PI : ${Math.PI} <br>`);
document.write(`Math.round(4.7) : ${Math.round(4.7)} <br>`);
document.write(`Math.pow(2, 8) : ${Math.pow(2, 8)} <br>`);
document.write(`Math.sqrt(64) : ${Math.sqrt(64)} <br>`);
document.write(`Math.abs(-5) : ${Math.abs(-5)} <br>`);
document.write(`Math.random() : ${Math.random()} <br>`);
document.write(
  `Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)} <br>`
);
document.write(
  `Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)} <br>`
);
```

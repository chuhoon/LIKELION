// 스프레드 문법
let a = [1, 2, 3];
let b = [3, a, 6];
let c = [3, ...a, 6];

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

Math.max(...arr1, ...arr2);

// 두개의 object 병합
[100, 200, ...arr1, ...arr2];

let str = 'hello world';
[...str];
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// 변경되지 않음 박혀 있는 값
let d = new Date();

d.getDate();
d.getMonth();
d.getDay();
d.getSeconds();
d.getFullYear();

// Quiz

// 풀이1
let sum2 = 0;
for (let i of arr3) {
  let s = '' + i;
  for (let j of s.split('')) {
    sum2 += +j;
  }
}

console.log(sum2);

// 풀이2
let str1 = [11, 22, 33, 111, 2].join('');
let result = 0;
for (let i = 0; i < str1.length; i++) {
  result += parseInt(str1[i], 10);
}

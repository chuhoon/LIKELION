/*
맵 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.
*/

let m = new Map();

// map에 값 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// map의 값이 있느지 확인하기
console.log(m.has('하나'));

// map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
// 특징 다양한 자료형들을 제공한다.
console.log(m.size);

// Map의 순환
for (let variable of m) {
  console.log(`m을 순회하고 있습니다. ${variable[0]}`);
  console.log(`m을 순회하고 있습니다. ${variable[1]}`);
}

// Map의 값에 접근
console.log(m.keys());
console.log(m.values());
console.log(m.entries());

// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log(temp);
temp;
temp.get(1);

/*
Map과 Object의 차이
- Object의 키는 문자열 타입으로만 지정해야하지만, Map의 키는 모든 값을 가질 수 있습니다.
Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있습니다.
*/
console.log(temp.size);

obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
console.log(obj.length);
console.log(obj.size);
// Map은 데이터를 추가하거나 제거하는 작업에서 Object 보다 더 나은 성능을 보입니다.

// Set
// 객체 안의 값의 중복을 허용하지 않음
let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add('f');
console.log(s);
console.log(s.size);

// Set을 순환하기
for (let variable of s) {
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss);

// Set의 값을 제거하기
ss.delete('b');

// Set의 값을 확인하기
console.log(ss.has('a'));

// Set의 모든 값을 제거하기
let sss = ss.clear;
ss.clear;
console.log(ss);
console.log(sss);

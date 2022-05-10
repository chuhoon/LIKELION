/* 함수를 사용하는 이유
  1. 재사용성
  2. 아키텍처 파악 용이(코드 구조 파악)
*/
function 안녕() {
  console.log('hello world');
}

for (let i = 0; i < 5; i++) {
  안녕() * 5;
}

/* 메서드와 function의 차이는
  메서드는 객체 속에 있는 함수이다.
*/
function sum(a, b) {
  return a + b;
}

sum(1, 2);

// const obj = {};

// 모듈 패턴 전역패턴을 오염시키지 않기 위해서
// plus 함수에 접근하려면 obj를 거쳐야한다.
// (() => {
//   function plus(a, b) {
//     return a + b;
//   }

//   obj.plus = plus;
// })();

export function plus(a, b) {
  return a + b;
}

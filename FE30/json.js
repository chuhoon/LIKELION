// JSON 메서드
/*
- JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.
- JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.
*/

let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);

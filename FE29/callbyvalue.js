// call by value, reference, sharing
/*
- **javascript는 call by value만 존재**한다. 참조타입을 넘기면 주소가 넘어가는 것이 아니라 주소값을 복사한 복사본이 넘어간다.
- call by reference인 것 처럼 보이지만 js에서는 call by value (주소가 넘어가는 것이 아니라 주소가 복사가 되어 넘어감)
- 다른 언어에서는 call by reference
- 해당되는 자료형 : Object, Array, function
*/
arr = [10, 20, 30];

function 함수(value) {
  value[0] = 1000;
}

함수(arr);

let x = 0;
function 함수2(value) {
  value = 1000;
}
함수2(x);
// 0

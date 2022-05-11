/*
### 5.8 클로저(Closure)

아래 예제에서는 add5, add10이 클로저입니다. **폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉**입니다.

- 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉
- 내부 함수의 외부 함수 접근(권한) 테크닉

그러면 왜 사용할까요? **변수 은닉**과 **메모리 효율**, **코드 효율(또는 완전성)을 극대화**하기 위해 사용합니다.
변수 은닉이란?
-> 함수 내에 변수에 접근할 수 없음
메모리 효율이 왜 좋아지는가?
-> 안에 변수가 휘발 되니까
*/

var x = 10;
function test() {
  var x = 100;
  console.log(x);
}

//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

var x = 10;
function test() {
  var x = 100;
  console.log(x);
  function test2() {
    var x = 1000;
    console.log(x);
  }
  test2();
}

var x = 10;
function test() {
  var x = 100;
  console.log(x);
  function test2() {
    console.log(x);
  }
  test2();
}

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

let 제곱2 = 제곱(2);
let 제곱3 = 제곱(3);

제곱2(2);
제곱3(3);

// 함수 내부에 선언. 호출 위치 상관 X
const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100

// 비교대상
const xx = 100;

function a() {
  const xx = 1;
  function b() {
    console.log(xx);
  }
  b();
}

a();

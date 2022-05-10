# 29일차 (함수)

### List

- for of
- for in
- 전개구문
- 구조분해 할당
- 지역변수, 전역함수
- 함수
- 재귀함수
- call by value
- call by reference

## 5. 함수

함수는 입력, 출력, 기능을 하나로 묶어 재사용 할 수 있도록 만드는 것입니다. 자바스크립트는 실행 코드들이 들어있는 **독립 블록 단위**의 **객체**인 함수를 사용할 수 있습니다. 여기서 객체란 데이터와 그 데이터를 포함한 모든 동작에 대해 말합니다.

```html
<!-- 함수 -->
<p id="result"></p>
<script>
  function myFunction(x, y) {
    //함수의 정의
    z = x + y; //함수의 기능
    return z; //함수의 결과값
  }
  // 함수의 호출
  document.getElementById('result').innerHTML = myFunction(4, 3);
</script>
```

함수는 기본적으로 아래의 형태를 가집니다.

```jsx
function 함수이름(parameter1, parameter2...) {
    실행코드...
    return 반환값
}
```

<br>

### 지역변수 전역변수

```jsx
let z = 100;
function sum(x) {
  //x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; //y는 지역변수
  z = z + y;
  return x + y;
}
document.write(sum(10)); //10은 전달인자(argument)
document.write('<br>');
document.write(z);
//키워드로 인해 전역, 지역이 갈리는 것은 아닌지, let, var, const 모두 테스트 필요
```

<br>

### 화살표 함수

```jsx
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function sum(x, y) {
  return x + y;
}

let sumArrowFunction = (x, y) => x + y;
document.write(sum(10, 20));
document.write('<br>');
document.write(sumArrowFunction(10, 20));
```

<br>

### 함수의 다양한 형태

```jsx
// 함수 선언문
function sum(x, y) {
  return x + y;
}

//함수 표현식
let sumXY = function (x, y) {
  return x + y;
};
// let x = 10;
// let y = x;
let sumXYcopy = sumXY;

document.write(sumXYcopy(10, 20), '<br>');

//콜백함수
function sum(x, y, c) {
  c(x + y);
  return x + y;
}

function documentWrite(s) {
  document.write('콜백함수', s);
}

sum(10, 20, documentWrite);
```

```jsx
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <script>
        // 참고자료 : https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/
        // JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
        // 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
        // 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
        // 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
        // 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
        // let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장
        console.log(add1(10, 20)); // 30
        console.log(add2(10, 20)); // 30
        console.log(mul1) // undefined
        // console.log(mul1(10, 20)); // not a function
        // console.log(mul2); // Cannot access 'mul2' before initialization
        // console.log(mul2(10, 20)); // 위와 같은 애러
        // console.log(mul3) // mul3 is not defined, 호이스팅이 안되었기 때문

        function add1(x, y) {
            return x + y;
        }

        function add2(x, y) {
            return x + y;
        }

        var mul1 = function (a, b) {
            return a * b;
        }

        let mul2 = function (a, b) {
            return a * b;
        }
    </script>
</body>
</html>
```

<br>

### 재귀함수

1. 종료조건 체크
2. 반복문으로 구현할 수 있는 것은 재귀함수로 모두 구현 가능, 재귀함수로 구현 가능한 것은 반복문으로 대부분 구현(복잡도를 증가시키면 모두) 가능합니다.

```jsx
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1
```

```jsx
function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1
```

```jsx
function reverse(text) {
  text += '';
  if (text.length <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'
```

<br>

### 즉시 실행함수

1. 즉시 실행하고 외부에서 컨트롤 할 필요가 없는 함수
2. function scope, 메모리 효율

```jsx
// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
})();

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
})();

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
```

<br>

### call by value, reference, sharing

- **javascript는 call by value만 존재**한다. 참조타입을 넘기면 주소가 넘어가는 것이 아니라 주소값을 복사한 복사본이 넘어간다.
- call by reference인 것 처럼 보이지만 js에서는 call by value (주소가 넘어가는 것이 아니라 주소가 복사가 되어 넘어감)
- 다른 언어에서는 call by reference
- 해당되는 자료형 : Object, Array, function

```jsx
let array = [100, 200, 300];

function test(a) {
  a[0] = 1000;
}

test(array);
array;
```

- 원래 call by value, js에서도 call by value
- 재할당 되는 순간에는 다른 값을 가리킴
- 해당되는 자료형 : Number, String, boolean, null, undefined

```jsx
let v = 100;

function test(a) {
  a = 1000;
}

test(v);
v;
```

- 아래와 같은 특징 때문에 js에서는 call by sharing이라 얘기합니다. (C와 C++에서는 a가 1000이 됩니다.)

```jsx
var a = {};
function test(b) {
  b = 1000;
}

test(a);
a;
```

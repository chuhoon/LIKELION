# 30일차

- closer
- Map & Set
- 생성자 new
- this
- json

<br>

### 클로저(Closure)

아래 예제에서는 add5, add10이 클로저입니다. **폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉**입니다.

- 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉
- 내부 함수의 외부 함수 접근(권한) 테크닉

그러면 왜 사용할까요? **변수 은닉**과 **메모리 효율**, **코드 효율(또는 완전성)을 극대화**하기 위해 사용합니다.

```jsx
function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능
```

```jsx
function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10);
제곱3(10);
```

```jsx
function 제곱(x) {
  return function (y) {
    return y ** x;
  };
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10);
제곱3(10);
```

---

함수 내부에서 선언해야 합니다. 호출된 위치는 상관 없습니다.

```jsx
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
```

---

아래 debugger를 통해 closure 확인 가능.

```jsx
function 제곱(x) {
  function 승수(y) {
    debugger;
    return y ** x;
  }
  return 승수;
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10);
제곱3(10);
```

```jsx
function 승수제조기() {
  let value = 0;
  function 승수() {
    return (++value) ** 2;
  }
  return 승수;
}

let 승 = 승수제조기();
승();
승();
승();
value; //출력할 수 없습니다. 은닉화가 된거죠.
```

<br>

### 생성자 함수

- 해당 내용은 모던 자바스크립트 내용입니다.

  [new 연산자와 생성자 함수](https://ko.javascript.info/constructor-new)

- 생성자 함수와 일반 함수에 기술적 차이 없음, 하지만 다음의 관례를 꼭 지킵니다.
  - 함수 이름 첫 글자는 대문자로 시작
  - 반드시 `'new'` 연산자를 붙여 실행
- 모든 함수는 생성자 함수가 될 수 있기 때문에 관습을 지킵시다!

```jsx
// 모던 자바스크립트 예제
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('보라');

console.log(user.name); // 보라
console.log(user.isAdmin); // false
```

- 둘 다 호준이 나오지만, 일반 함수는 밖에서 user.name이 안됨.

```jsx
function User(name) {
  this.name = name;
  console.log(this.name);
}

let user = User('호준');
console.log(user.name);
```

```jsx
function User2(name) {
  this.name = name;
  console.log(this.name);
}

let user2 = new User2('호준');
console.log(user2.name);
```

<br>

### Map 이란?

Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.

```jsx
let m = new Map();

// Map에 값을 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has('하나'));

// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);

// let mm = new Map()
// mm.set('하나', m)
// Map(1) {'하나' => Map(3)}
// mm.set('하나', {'one':1, 'two':2})
// Map(1) {'하나' => {…}}
```

<br>

### Map 의 여러가지 활용법

```jsx
// Map의 순환
for (var variable of m) {
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
```

<br>

### Map 과 Object의 차이

Map 객체와 Object 는 둘 다 key - value 관계를 가진다는 점에서 비슷해보이지만 몇 가지 중요한 차이점이 있습니다

- Object의 키는 문자열 타입으로만 지정해야하지만, Map의 키는 모든 값을 가질 수 있습니다.
- Object는 크기를 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있습니다.

```jsx
objMap = new Map();
objMap.set('one', 1);
objMap.set('two', 2);
objMap.set('three', 3);

console.log(objMap.size); // 3

obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
console.log(obj.length); // undefined
console.log(obj.size); // undefined
```

- Map은 데이터를 추가하거나 제거하는 작업에서 Object 보다 더 나은 성능을 보입니다.

<br>

### Set 이란?

Set은 모든 타입의 값을 저장하는 객체자료형의 한 종류입니다. 이때 객체 안의 값은 중복을 허용하지 않습니다.

```jsx
let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add('f');
console.log(s);

// Set을 순환하기
for (var variable of s) {
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
ss.clear;
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter((value) => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = new Set([...a].filter((x) => !b.has(x)));
```

<br>

### this 란?

- 자신을 호출한 객체
- 자신이 생성할 객체

this는 이 두 경우에서 객체를 가리키는 자기 참조 변수입니다. 아래 예제에서 this는 window입니다.

```jsx
function a() {
  console.log(this);
}
a();
```

```jsx
let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1();
```

예를 들어보도록 하겠습니다. 모든 함수는 실행할 때마다 this 라는 객체가 추가됩니다. this는 함수가 실행될 때 함수를 소유하고 있는 객체를 참조합니다.

```jsx
/ * this */;
function sayName() {
  console.log(this.name);
}

var name = 'Hero';
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name: 'Peter Parker',
  sayName: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  sayName: sayName,
};

sayName();
peter.sayName();
bruce.sayName();

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */
```

```jsx
/* this 사용 예시 */

let 호텔 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());
```

<Br>

### this 의 특징

this는 함수가 만들어질 때가 아닌 '실행'될 때 그 값이 결정됩니다.

```jsx
function sayName() {
  console.log(this.name);
}
var name = 'Hero';

let peter = {
  name: 'Peter Parker',
  sayName: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  sayName: peter.sayName,
};

bruce.sayName();
```

<br>

### this 값을 사용자의 의도대로 조작하기

함수의 apply(), call(), bind() 메소드를 사용하면 this를 조작하거나 고정해 둘 수 있습니다.

이는 사용자가 원하는 의도대로 binding을 통한 컨트롤을 할 수 있게 합니다.

**call()**

call() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.

```jsx
var peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce);

// peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.
```

**apply()**

apply() 메서드의 인수에 this 로 사용할 값을 전달할 수 있으며, 배열의 형태로도 전달할 수 있습니다.

```jsx
var peter = {
  name: 'Peter Parker',
  sayName: function (is, is2) {
    console.log(this.name + ' is ' + is + ' or ' + is2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};

peter.sayName.apply(bruce, ['batman', 'richman']);

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */
```

**bind()**

bind() 는 this가 고정된 새로운 함수를 반환합니다.

```jsx
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName: sayName,
};

var peter = {
  name: 'peter',
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */
```

---

다음과 같이 콜백의 this가 전역을 바라보고 있지 않은 경우도 있습니다.

```jsx
[1, 2, 3].forEach(
  function () {
    console.log(this);
  },
  [10, 20, 30]
);
```

<br>

### JSON 이란? (JSON예제 and json js파일 보기)

JSON(JavaScript Object Notation)은 자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현한것입니다. 다른 방식에 비해 가볍고 자바스크립트와 호환성이 높아 널리 사용됩니다. 쉽게 말해 텍스트로 표현된 정보의 덩어리라고 생각하시면 됩니다.

<br>

### 탄생 배경

프로그래머들은 언어마다 다른 표현방식 때문에 정보를 전달하는데 애를 먹습니다. 예를 들어 배열 데이터의 표현방식은 자바스크립트와 C는 다릅니다. 하지만 숫자와 문자열은 언어마다 표현방식이 같은데 이를 이용해서 만든 대표적인 데이터 폼이 xml입니다. 후에 복잡한 구조를 더 단순히 하고자 탄생한 것이 JSON 입니다.

<br>

### JSON 메서드

- JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.
- JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.

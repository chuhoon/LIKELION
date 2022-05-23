# 37일차

## 비동기 처리

비동기적으로 실행된다는 것은 하나의 동작이 완료되지 않아도 다음 코드가 실행되는 것을 의미한다. 자바스크립트가 싱글 스레드를 가지면서도 비동기로 동작할 수 있는 원리는 바로 브라우저에 있다. 브라우저에 있는 Web API가 멀티스레드로 동작하기 때문이다.

<aside>
💡 Thread 는 기본적으로 프로그램이 작업을 완료하는데 사용할 수 있는 단일 프로세스로, 각 스레드는 한 번에 하나의 작업만 수행할 수 있다.
</aside>

자바스크립트 실행 환경을 살펴보면 자바스크립트 엔진의 콜 스택에 실행될 함수가 쌓이게 되는데, 비동기로 실행될 때는 Web API를 호출하게 된다. Web API에서는 콜백 함수를 콜백 큐(테스크 큐)에 추가하게 되고 이벤트 루프는 콜백 큐와 콜 스택을 보면서 콜 스택이 비면 콜백 큐의 함수를 꺼내 콜 스택에 넣는다. 이벤트 루프와 콜백 큐가 있기 때문에 콜 스택이 하나여도 비동기 동작이 가능하다.

<br>

## 비동기 처리의 필요성

비동기 특성은 서버에 요청을 보내고 결과가 돌아오지 않아도 다음 코드를 실행한다. 비동기 방식이 필요한 이유는 웹에서 서버에 데이터를 요청했을 때 요청이 완료되기 전까지 아무것도 실행되지 않는다면 화면이 멈춘 것처럼 보일 뿐 아니라 하나의 프로그램을 실행하는 데 많은 시간이 소요되기 때문이다.

하지만 실행 순서가 중요할 때도 있다. 예를 들면 다른 코드가 서버에 요청한 데이터 값을 이용해야 할 때는 데이터를 받아 온 후에 코드가 실행되는게 필요하다. 이럴때 사용하는 것이 비동기 처리이다.

```jsx
let response = fetch('mySnack.jpg');
let snackImg = response.snackImg(); //서버에서 이미지를 가져오면 이미지 크기, 네트워크 환경에 따라 실행 불가한 경우 발생, 비동기 처리 필요
```

<br>

## 콜백지옥

콜백지옥은 콜백함수를 익명 함수로 전달하는 과정에서 또 다시 콜백 안에 함수 호출이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상이다. 이런 현상을 콜백 헬, 멸망의 피라미드라고도 부른다.

주로 이벤트 처리나 서버 통신과 같은 비동기적인 작업을 수행하기 위해 등장하였다. 하지만 콜백 함수 내에서 또 다른 비동기 작업이 필요할 경우 위와 같은 중첩이 생기면서 콜백지옥이 탄생한다. 콜백지옥은 어디서 어떤 식으로 연결되었는지 한눈에 파악하기 힘들고 로직을 한눈에 이해하기 어려워 에러 해결이나 유지보수가 어렵다. 즉 가독성이 떨어지고 코드 수정이 어렵다.

```jsx
setTimeout(
  (name) => {
    let snackList = name;
    console.log(snackList);

    setTimeout(
      (name) => {
        snackList += ', ' + name;
        console.log(snackList);

        setTimeout(
          (name) => {
            snackList += ', ' + name;
            console.log(snackList);

            setTimeout(
              (name) => {
                snackList += ', ' + name;
                console.log(snackList);
              },
              500,
              '다쿠아즈'
            );
          },
          500,
          '초코롤'
        );
      },
      500,
      '마카롱'
    );
  },
  500,
  '파운드'
);
```

<br>

### 콜백 지옥 탈출

**기명함수 사용**

익명 함수의 사용을 포기하고, 함수를 나눠 버리면 깔끔하다. 위의 예를 다음과 같이 고칠 수 있다.

```jsx
let coffeeList = '';

const addPound = (name) => {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addMacaron, 500, '마카롱');
};

const addMacaron = (name) => {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addChocoroll, 500, '초코롤');
};

const addChocoroll = (name) => {
  coffeeList += ', ' + name;
  console.log(coffeeList);
  setTimeout(addDacquoise, 500, '다쿠아즈');
};

const addDacquoise = (name) => {
  coffeeList += ', ' + name;
  console.log(coffeeList);
};

setTimeout(addPound, 500, '파운드');
```

함수의 선언과 호출을 구분할 수 있다면 위에서 아래로 순서대로 읽는데 어려움이 없고 들여쓰기가 깊어지지 않아 콜백지옥보다는 가독성이 높다. 하지만 일회성 함수를 전부 변수에 할당하여 변수명을 다 지어줘야할 뿐만 아니라 거꾸로 거슬러 코드명을 일일이 따라다녀야한다.

또한 전 단계에서 정의된 변수 등을 다음 함수에서 사용할 수 없다는 점과 완전히 바깥쪽에 변수를 선언해 사용해야 한다는 점이 코드를 작성하는 데 있어 헷갈리고 비효율적이다.

이 사태를 해결하기 위해 콜백지옥을 탈출하는 해결책으로 ES6에 도입 된 `Promise`, `Generator`, ES2017에 도입된 `async/await`를 통해서 해결할 수 있다.

<br>

## 프로미스(Promise)

프로미스는 자바스크립트의 오브젝트로 앞서 얘기한 콜백함수 같은 비동기적인것을 수행할 때 콜백함수를 대신하여 유용하게 사용할 수 있다.

제주도 여행을 와서 유명한 맛집을 찾아간다고 가정해보자. 맛집에 도착했더니 이미 많은 사람들이 줄지어 기다리고 있어 상당히 긴 웨이팅 시간이 예상된다. 식당은 손님들의 웨이팅 불편함을 효율적으로 관리하기 위해 알리미어플을 제공한다. 손님들에게 전화번호를 입력받고 해당 손님의 입장순서가 되면 카카오톡이나 문자로 알림이 가는 구조이다.

이제 손님들은 복잡하게 줄을 서서 오랜시간을 기다리지 않아도 된다. 기다리는 동안 주변의 경치와 각종 소품샵들을 둘러볼 수 있는 여유가 생긴다.

이제 위 예시를 코드로 비유해 보자.

- **제작 코드(producing code)**는 원격에서 스크립트를 불러오는 것 같은 시간이 걸리는 일을 한다. 위의 비유에서는 '식당(맛집)’이 제작 코드에 해당한다.
- **소비 코드(consuming code)**는 '제작 코드’의 결과를 기다렸다가 이를 소비한다. 이때 소비 주체(함수)는 여럿이 될 수 있다. 위 비유에서 소비 코드는 '손님’이다.
- **프로미스(promise)** 는 '제작 코드’와 '소비 코드’를 연결해 주는 특별한 자바스크립트 객체이다. 위 비유에서 프라미스는 '알리미어플’이다. 프로미스는 시간이 얼마나 걸리든 상관없이 약속한 결과를 만들어 내는 '제작 코드’가 준비되었을 때, 모든 소비 코드가 결과를 사용할 수 있도록 해준다.

<br>

## 프로미스의 특징

프로미스 객체는 아래와 같은 문법으로 만들 수 있다.

```jsx
const promise = new Promise((resolve, reject) => {
  console.log('1번손님 들어오세요'); //executor(제작코드,실행함수) = 맛집
});
```

`new Promise` 에 전달되는 함수를 executor 이라고 한다.

- executor의 인수 `resolve`와 `reject`는 자바스크립트에서 자체 제공하는 콜백 함수이다. 따라서 따로 만들 필요는 없지만 둘중 한가지는 반드시 호출해야 한다.
- `resolve`는 일이 성공적으로 끝난 경우 value와 함께 호출
- `reject`는 에러 발생 시 에러 객체를 나타내는 error와 함께 호출

정리하면 executor 함수는 자동으로 실행이 된다. 처리 성공 여부에 따라 `resolve`나 `reject`를 호출한다.

또한 프로미스의 상태는 3가지의 상태(state)와 결과(result)를 가진다.

- **pending(대기)**: 처리가 완료되지 않은 상태
- **fullfilled(이행)**: 성공적으로 처리가 완료된 상태
- **rejected(거부)**: 처리가 실패로 끝난 상태

<br>

## 소비함수 메서드(method): then, catch, finally

`new Promise`에 전달되는 함수는 **executor(실행자, 실행 함수)**라고 부른다. **executor**는 `new Promise`가 만들어질 때 자동으로 실행되는데, 결과를 최종적으로 만들어내는 제작 코드를 포함한다. 위 비유에서 '맛집’이 바로 **executo**r이다.

그렇다면 만들어진 제작 코드의 결과를 기다렸다가 이를 소비하는 소비코드에 대해서 알아보자. 프로미스는 앞서 ‘손님(소비코드)’들과 ‘맛집(제작코드)’을 이어주는 ‘알리미어플’과 같은 이어주는 역할을 한다고 했다. 소비코드는 다음과 같은 메서드를 이용해 ‘알리미어플’에 번호를 등록할 수 있다.

async & await 예제1)

```jsx
const snack = () => Promise.resolve('와, 맛있겠다!'); // 4번

async function mySnack() {
  console.log('치즈 케이크 주세요!'); // 3번
  const res = await snack(); // 4번
  console.log(res); // 6번
}

console.log('주문하시겠어요?'); // 1번
mySnack(); // 2번
console.log('주문하신 케이크 나왔습니다!'); // 5번
```

위의 코드를 실행하면 출력값은 아래의 순서로 나온다.

```
'주문하시겠어요?'
'치즈 케이크 주세요!'
'주문하신 케이크 나왔습니다!'
'와, 맛있겠다!'
```

1. `mySnack()` 이라는 비동기 함수를 호출하고 `mySnack()` 의 body가 동작한다.
   `console.log` 를 호출하면서 `'치즈 케이크 주세요!'` 의 문자열이 출력되면 콜스택을 빠져나온다.
2. `mySnack()` 함수의 body 두 번째 라인인 `snack()`이 콜스택 안으로 들어가고 resolve 된 프로미스를 리턴한다. 프로미스가 resolve되고 `snack()`이 값을 리턴할 때, 엔진은 await 키워드를 마주친다!
3. 이 때, body의 실행이 멈추고 `mySnack()` 함수가 마이크로테스크 큐에서 대기하면 엔진은 비동기 함수에서 나와 `console.log('주문하신 케이크 나왔습니다!')` 를 출력한다.
4. 콜스택에 더이상 실행할 작업이 남아있지 않게 되면 이벤트 루프는 마이크로테스크에 남은 작업이 있는지 확인한다. 이 때, `mySnack()` 는 `snack()` 을 resolve 한 뒤에 자기의 차례를 기다리고 있었다는 것을 발견한다.
   `mySnack()` 은 다시 콜스택으로 들어가고 res 변수는 `snack()`이 리턴한 값인 ‘와, 맛있겠다!’를 전달받는다. 콘솔에 `'와, 맛있겠다!'`가 출력되고 콜스텍에서 빠져나온다.
5. 모든 작업이 끝난다.

<br>

async & await 예제2)

```jsx
function cook(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log('스낵을 만드는 중입니다!');
  await cook(3000);
  console.log('스낵이 완성되었어요!');
}

process().then(() => {
  console.log('맛있게 드세요!');
});
```

이제 어떤 출력값이 나올지 예상이 되는가? 엔진은 await 을 만나 `cook(ms)` 함수로 이동 한다. 여기서 `setTimeout` 함수를 만나는데, 이 함수는 즉시 실행되고 리턴되기 때문에 3초의 대기가 발생한다. 때문에 3초의 대기 후 await 바로 다음의 console.log 인 `'스낵이 완성되었어요!'` 가 출력된다.

```jsx
'스낵을 만드는 중입니다!';
//3초 쉬고
'스낵이 완성되었어요!';
'맛있게 드세요!';
```

조금 더 다양한 시간이 할당된 코드를 살펴보자.

```jsx
function cook(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myCake = async () => {
  await cook(1000);
  return '케이크';
};

const myCoffee = async () => {
  await cook(500);
  return '커피';
};
const myCookie = async () => {
  await cook(5000);
  return '쿠키';
};

async function asyncProcess() {
  const cake = await myCake();
  console.log(cake);
  const coffee = await myCoffee();
  console.log(coffee);
  const cookie = await myCookie();
  console.log(cookie);
}

asyncProcess();
```

```jsx
케이크; // 1초
커피; // 0.5초
쿠키; // 5초
```

위 코드를 실행시키면 하나의 작업이 종료된 후 다음 작업을 시작하므로 `myCake` (1초)→ `myCoffee`(0.5초) → `myCookie`(5초) 순으로 차례대로 출력된다. 이 함수들을 `asyncProcess` 함수에서 연달아 호출하게 되면서 `asyncProcess` 함수는 무려 6.5초의 시간동안 실행된다.

<br>

**2) 병렬실행을 위해 `promise.all` 을 사용한 코드를 살펴보자.**

async/await는 프로미스 위에 만들어져 있기 때문에 Promise의 모든 기능을 사용할 수 있다. 위의 코드를 보면 순차적 처리가 필요하지 않은 상황이므로 Promise APIs의 `promise.all` 함수를 추가해 병렬실행 하는 편이 낫다.

`Promise.all()` 앞에 async 키워드를 사용하여 동기식 코드처럼 작성할 수 있는데, 인자로는 배열을 전달받는다. 이 배열에 있는 모든 프로미스가 성공일 경우에만(fulfilled) 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환해준다. 단, 등록한 프로미스 중 하나라도 실패하면 전부 실패 한 것으로 간주된다.

```jsx
function cook(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myCake = async () => {
  await cook(1000);
  return '케이크';
};

const myCoffee = async () => {
  await cook(500);
  return '커피';
};
const myCookie = async () => {
  await cook(5000);
  return '쿠키';
};

async function promiseProcess() {
  const results = await Promise.all([myCake(), myCoffee(), myCookie()]);
  console.log(results);
}

promiseProcess();
```

```jsx
['케이크', '커피', '쿠키'];
```

병렬처리는 또 언제 사용할까? 바로 모든 비동기 처리가 완료된 후 수행해야만 하는 작업에 사용된다.

예를 들면, id 를 입력하면 랜덤의 시간을 반환하는 `fetchTime(id)` 함수가 있다고 생각해보자. 그리고 이 id에 1번부터 5번 데이터를 넣어주고 그 값의 평균 시간을 구하려고 할 때의 코드를 살펴보자.

```jsx
function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

async function fetchTime(id) {
  await setTimeoutPromise(500);
  console.log(`${id} 님의 데이터가 준비되었어요!`);
  return Math.floor(Math.random() * 20) + 1;
}

async function asyncProcess() {
  let hours = [];
  for (let i = 1; i < 6; i++) {
    hours.push(fetchTime(i));
  }

  let result = await Promise.all(hours);

  console.log(
    `평균 공복시간은? : ${
      result.reduce((prevalue, currentvalue) => prevalue + currentvalue, 0) /
      result.length
    } 시간 입니다.`
  );
}

asyncProcess();
```

```jsx
1 님의 데이터가 준비되었어요!
2 님의 데이터가 준비되었어요!
3 님의 데이터가 준비되었어요!
4 님의 데이터가 준비되었어요!
5 님의 데이터가 준비되었어요!
평균 공복시간은? : 8.2 시간 입니다.
```

데이터의 정보를 요청하는 것은 비동기로 처리하지만 평균을 내는 작업은 모든 비동기 작업이 완료되어야 가능하다. 따라서 1번부터 5번까지의 데이터를 다 받아오고 나서야 평균 시간이 출력된다.

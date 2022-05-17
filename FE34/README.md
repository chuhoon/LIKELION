# 34일차

### 9.11 stopPropagation()

앞에서 우리는 preventDefault를 통해 브라우저의 기본 이벤트 동작을 취소해봤습니다. 하지만 이때 우리가 앞에서 배웠던 이벤트 흐름, 즉 이벤트 전파(이벤트 프로파게이션)를 막지는 못합니다.

```html
<form action="">
  <button type="submit" class="submit">제출</button>
</form>

<script>
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', (event) => {
    console.log('clicked');
    event.preventDefault();
    // event.stopPropagation();
  });

  document.body.addEventListener('click', () => {
    console.log('event still alive!');
  });
</script>
```

이때 만약 이벤트 전파를 막고 싶다면 `event.stopPropagation()` 코드를 추가합니다.

**stopPropagation() 실습**

```html
<h1>나의 todo list</h1>
<p>
  1. 오늘 저녁에는 부대찌게를 끓여 먹겠다.<button type="button">삭제</button>
</p>
<p>2. 후식으로 슈팅스타를 먹겠다.<button type="button">삭제</button></p>
<p>
  3. 자기 전에 반드시 내일 아침 메뉴를 생각해두겠다.<button type="button">
    삭제
  </button>
</p>
```

위와 같은 HTML코드 구조가 있을 때

1. P 태그를 클릭하면 p 태그의 컨텐츠를 출력하는 alert 창을 띄워주고
2. 삭제 버튼을 클릭하면 삭제할 것인지를 물어보는 confirm 창을 띄워주고, 확인을 누르면 P태그를 삭제합니다.

내코드

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <p>2. 후식으로 슈팅스타를 먹겠다.<button type="button">삭제</button></p>
    <script>
      const str = document.querySelector('p');
      const deleteBtn = document.querySelector('button');
      const body = document.body;

      deleteBtn.addEventListener('click', (event) => {
        if (confirm('삭제하시겠습니까?')) {
          body.removeChild(str);
        } else {
        }
        event.stopPropagation();
      });

      str.addEventListener('click', (event) => {
        alert(`${str.innerText.slice(0, -2)}`);
      });
    </script>

  </body>
</html>

```

## 10. **객체지향** 프로그래밍**이란 무엇일까?**

객체지향은 프로그래밍 방법론중에 하나로, 프로그램을 작성할 때 객체들을 만들어 서로 소통하도록하는 방법이라고 할 수 있습니다.

그렇다면 여기서 말하는 객체란 무엇일까요?

우리가 앞서서 배운 자바스크립트 객체는 데이터의 묶음 이라면 객체 지향의 객체는 우리가 표현하고자 하는 구체적인 사물을 추상적으로 표현한것 이라고 볼 수 있습니다.

즉 저를 객체로 표현한다면

```jsx
const me = {
  name: '한재현',
  address: '제주도 제주시 인다 1길',
  phoneNum: '010-8001-6536',
  canWalk: function () {
    console.log('재현이가 걷는다.');
  },
};
```

이렇게 표현할 수 있습니다.

그리고 또한 객체는 행동과 상태를 가집니다. 여기서 행동은 메소드, 상태는 프로퍼티 정도로 이해하시면 됩니다.

자자 그럼 저에게 새로운 능력을 부여해봅니다.

```jsx
const me = {
  name: '한재현',
  address: '제주도 제주시 인다 1길',
  phoneNum: '010-8001-6536',
  canWalk: function () {
    console.log('재현이가 걷는다.');
  },
  teaching: function (student) {
    student.levelUp();
  },
};
```

그리고 새로운 객체를 만들어봅니다.

```jsx
const student = {
  level: 1,
  levelUp: function () {
    this.level++;
  },
};
```

이제 능력을 발휘해 보겠습니다!

```jsx
me.teaching(student);
```

이처럼 객체와 객체가 서로 메소드를 통해 상호작용하게 하는것이 바로 **객체지향 프로그래밍**이라고 할 수 있습니다.

### 10.1 **생성자 (constructor)**

**생성자란** 객체를 만들 때 new 연산자와 함께 사용하는 함수입니다.

우리는 이미 사용해본 생성자가 있습니다.

```jsx
let myArr = new Array(1, 2, 3);
```

이러한 생성자를 내장 생성자라고 합니다.

### 10.1.1 **우리는 왜 생성자를 사용할까요?**

생성자의 장점은 생성자를 통해 생성된 객체는 같은 **프로퍼티**와 **메서드**를 공유할 수 있다는 것입니다.

```jsx
let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);

myArr2.length;
myArr.length;

myArr.forEach((item) => {
  console.log(item);
});

myArr2.forEach((item) => {
  console.log(item);
});
```

# 31일차 DOM (Document Object Model)

> DOM에 대해 학습하였습니다.

### DOM 이란?

DOM 은 HTML 문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할을 합니다. 이때 각각의 요소와 속성, 콘텐츠를 표현하는 단위를 **'노드(node)'**라고 합니다.

### DOM 트리에 접근하기

document 객체를 통해 HTML 문서에 접근이 가능합니다. document는 브라우저가 불러온 웹페이지를 나타내며, DOM 트리의 진입점 역할을 수행합니다.

```jsx
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector('selector');

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll('selector');
```

### DOM 제어 명령어

1. **이벤트 삽입**

`target.addEventListener( type, listener )`의 문법 형태를 지닙니다.

```html
<button>HELLO!</button>
```

```jsx
// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지합니다.
// listener 함수의 인수에는 이벤트에 대한 정보가 담겨있습니다.

const myBtn = document.querySelector('button');

myBtn.addEventListener('click', function () {
  console.log('hello world');
});
```

2. **클래스 제어**

DOM api를 통해 요소의 class 속성을 제어할 수 있습니다.

```html
<button>Make me BLUE!</button>
```

```jsx
const myBtn = document.querySelector('button');

myBtn.addEventListener('click', function () {
  // blue 라는 클래스의 속성 값을 지정 할 수 있습니다.
  myBtn.classList.add('blue');

  // myBtn.classList.remove(“blue”);     클래스를 제거합니다.
  // myBtn.classList.toggle(“blue”);     클래스를 토글합니다. 없으면 넣어주고, 있으면 제거합니다.
  // myBtn.classList.contains(“blue”);   해당하는 클래스가 있는지 확인합니다.
});
```

3. **요소 제어**

DOM api를 이용하면 요소를 새롭게 생성하고, 위치하고, 제거할 수 있습니다.

```html
<ul></ul>
<button>Make me MORE!</button>
```

```jsx
// document.createElement(target); target 요소를 생성합니다.
// document.createTextNode(target); target 텍스트를 생성합니다.
// element.appendChild(target);    target 요소를 element의 자식으로 위치합니다.
// element.removeChild(target);    element의 target 자식 요소를 제거합니다.

const myBtn = document.querySelector('button');
const myUl = document.querySelector('ul');

myBtn.addEventListener('click', function () {
  for (let i = 0; i < 5; i++) {
    const myLi = document.createElement('li');
    myUl.appendChild(myLi);
  }
});
```

```html
<div id="parentElement">
  <span id="childElement">hello guys~</span>
</div>
```

```jsx
// parentElement.insertBefore(target, location); target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.

var span = document.createElement('span');
var sibling = document.getElementById('childElement');
var parentDiv = document.getElementById('parentElement');
parentDiv.insertBefore(span, sibling);
```

4. **JavaScript 문자열을 사용해 element, text 노드를 생성하거나 추가하기**

DOM api를 이용하면 요소 안의 값에 접근하여 값을 가져오거나, 변경할 수 있습니다.

```html
<p></p>
<input type="text" />
<button>Write Something!</button>
```

```jsx
const myBtn = document.querySelector('button');
const myP = document.querySelector('p');
const myInput = document.querySelector('input');

myBtn.addEventListener('click', function () {
  myP.textContent = myInput.value;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener('input', () => {
  myP.textContent = myInput.value;
});

myP.innerHTML = "<strong>I'm Strong!!</strong>";
myP.outerHTML = '<div></div>';

// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다.
// innerText 속성은 요소의 **렌더링된** 텍스트 콘텐츠를 나타냅니다. (**렌더링된**에 주목하세요. ****innerText는 "사람이 읽을 수 있는" 요소만 처리합니다.)
// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다.
```

6. **DOM 안에서 노드 탐색하기**

```html
<!-- 주석입니다 주석. -->
<article class="cont">
  <h1>안녕하세요 저는 이런 사람입니다.</h1>
  <p>지금부터 자기소개 올리겠습니다</p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt
  voluptates laudantium fugit, omnis dolore itaque esse exercitationem quam
  culpa praesentium, quisquam repudiandae aut. Molestias qui quas ea iure
  officiis.
  <strong>감사합니다!</strong>
</article>
```

```jsx
const cont = document.querySelector('.cont');
console.log(cont.firstElementChild); // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild); // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling); // 이전 형제요소를 찾습니다.
console.log(cont.children); // 모든 직계자식을 찾습니다.
console.log(cont.parentElement); // 부모 요소를 찾습니다.
```

<br>

### 이벤트 객체

이벤트에서 호출되는 핸들러에는 이벤트와 관련된 모든 정보를 가지고 있는 매개변수가 전송됩니다. 이것이 바로 이벤트 객체입니다!

```html
<article class="parent">
  <ol>
    <li><button class="btn-first" type="button">버튼1</button></li>
    <li><button type="button">버튼2</button></li>
    <li><button type="button">버튼3</button></li>
  </ol>
</article>
```

```jsx
const btnFirst = document.querySelector('.btn-first');
btnFirst.addEventListener('click', (***event***) => {
    console.log(event);
});
```

<br>

### 이벤트 흐름

브라우저 화면에서 이벤트가 발생하면 브라우저는 가장 먼저 이벤트 대상을 찾기 시작합니다.

브라우저가 이벤트 대상을 찾아갈 때는 가장 상위의 window 객체부터 document, body 순으로 DOM 트리를 따라 내려갑니다. 이를 **캡처링 단계**라고 합니다.

이때 이벤트 대상을 찾아가는 과정에서 브라우저는 중간에 만나는 모든 캡처링 이벤트 리스너를 실행시킵니다. 그리고 이벤트 대상을 찾고 캡처링이 끝나면 이제 다시 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행합니다. 이를 이벤트 **버블링 단계**라고 합니다.

그리고 이러한 과정에서 이벤트 리스너가 차례로 실행되는것을 **이벤트 전파**(event propagation)라고 합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../reset.css" />
    <style></style>
  </head>

  <body>
    <article class="parent">
      <button class="btn" type="button">버튼</button>
    </article>

    <script>
      const parent = document.querySelector('.parent');
      const btnFirst = document.querySelector('.btn');
      btnFirst.addEventListener('click', (event) => {
        console.log('btn capture!');
      });

      window.addEventListener(
        'click',
        () => {
          console.log('window capture!');
        },
        true
      ); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.

      document.addEventListener(
        'click',
        () => {
          console.log('document capture!');
        },
        true
      );

      parent.addEventListener(
        'click',
        () => {
          console.log('parent capture!');
        },
        true
      );

      btnFirst.addEventListener('click', (event) => {
        console.log('btn bubble!');
      });

      parent.addEventListener('click', () => {
        console.log('parent bubble!');
      });

      document.addEventListener('click', () => {
        console.log('document bubble!');
      });

      window.addEventListener('click', () => {
        console.log('window bubble!');
      });
    </script>
  </body>
</html>
```

<br>

### 이벤트 위임

앞에서 우리는 이벤트의 흐름을 통해 이벤트 리스너가 없는 요소의 이벤트가 발생했을 때도 해당 요소에 접근 할 수 있다는 것을 알게 되었습니다.

이를 이용해 이벤트 리스너가 없어도 마치 리스너가 있는 것 처럼 사용 할 수 있습니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../reset.css" />
    <style></style>
  </head>

  <body>
    <article class="parent">
      <ol>
        <li><button class="btn-first" type="button">버튼1</button></li>
        <li><button type="button">버튼2</button></li>
        <li><button type="button">버튼3</button></li>
      </ol>
    </article>

    <script>
      const parent = document.querySelector('.parent');
      parent.addEventListener('click', function (event) {
        console.log(event.target);
        if (event.target.nodeName === 'BUTTON') {
          event.target.innerText = '버튼4';
        }
      });
    </script>
  </body>
</html>
```

이러한 테크닉을 **이벤트 위임**이라고 합니다.

<br>

### 이벤트의 this

이벤트 리스너 함수 내부에서의 this 값은 이벤트가 연결된 노드를 참조합니다.

```html
<article class="parent">
  <ol>
    <li><button class="btn-first" type="button">버튼1</button></li>
    <li><button type="button">버튼2</button></li>
    <li><button type="button">버튼3</button></li>
  </ol>
</article>

<script>
  const parent = document.querySelector('.parent');
  parent.addEventListener('click', function (event) {
    console.log(this);
  });
</script>
```

이는 event.currentTarget 속성의 참조값과 유사합니다.

만약 이벤트 리스너 함수를 화살표 함수로 쓴다면 this 가 가리키는 대상이 달라진다는 점에 유의하세요.

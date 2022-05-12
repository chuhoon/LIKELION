# 31일차 DOM (Document Object Model)

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

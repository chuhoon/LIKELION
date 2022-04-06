# 8일차

> Don't forget to code your dream.

CSS 학습

- 8. 선택자 우선순위
- 9. 후자선택원칙
- 10. 구체성의 원칙
- 11. 가중치
- 12. 자리올림
- 13. important
- 14. box
- 15. 블록박스
- 16. width, height
- 17. margin
- 18. 대체박스
- 19. 단위

## 1. 전체 **선택자 (Universal Selector)**

전체 선택자는 \*을 의미한다. 이것을 통해 전체 문서에 공통적인 값을 설정할 수 있다.

```css
* {
  margin: 0 auto;
}
```

## 2. 타입 **선택자 (Type Selector)**

타입 선택자는 태그 이름을 사용하여 나타낸다. 해당 태그의 이름에 해당하는 모든 태그에 속성을 적용한다.

```css
p {
  color: red;
}
```

```css
h1 {
  color: red;
}
```

```css
/* 선택자 */
body {
  background-color: red;
  /* 속성 */ /* 값 */
}
```

## 3. 아이디 선택자 (ID Selector)

id 속성은 페이지에 있는 해당 요소를 유일하게 식별할 때 쓴다.

주의사항으로는 같은 페이지 안에 id 값은 유일해야합니다. 즉, 만약 id=”firstId” 라고 아이디를 작성했다면 firstId 라는 아이디 값은 이 HTML안에서 **단 한 개**만 존재해야 한다.

개인 프로젝트일 경우는 상관없지만 여러 사람들과 같이 하는 프로젝트에서는 id 이름을 최대한 직관적이고 간단명료하게 지어주는 것도 중요하다.

```html
<head>
  <meta charset="utf-8" />
  <title>id</title>
  <style>
    #blue {
      color: blue;
    }
  </style>
</head>
<body>
  <p>이 문단은 평범한 p태그를 사용하였습니다.</p>
  <p id="blue">이 문단은 blue id를 부여하였습니다.</p>
</body>
```

## 4. 클래스 선택자 (Class Selector)

class 속성은 또한 id 속성과 마찬가지로 해당 요소를 식별할 때 사용한다. 하지만 id 속성은 한 페이지에 하나만 존재해야 하는 반면 class 속성은 한 페이지에 **여러 개가 존재**할 수 있다.

```html
<head>
  <meta charset="utf-8" />
  <title>id</title>
  <style type="text/css">
    .blue {
      color: blue;
    }
    .bic {
      font-size: 20px;
    }
    .upper {
      text-transform: uppercase;
    } /*text-transform : 컨텐츠를 대문자로 만듭니다.*/
  </style>
</head>
<body>
  <p>이 문단은 평범한 p태그를 사용하였습니다.</p>
  <p class="blue">이 문단은 blue class를 부여하였습니다.</p>
  <p class="blue bic">이 문단은 blue, bic class를 부여하였습니다.</p>
  <p class="blue upper">이 문단은 blue, upper class를 부여하였습니다.</p>
</body>
```

## 5. 선택자 목록 (**[Selector list](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list)**)

콤마(,) 로 선택자를 연결하여 일치하는 모든 요소를 선택한다.

```css
h1 {
  color: red;
}
h2 {
  color: red;
}
h3 {
  color: red;
}
h4 {
  color: red;
}
h5 {
  color: red;
}
h6 {
  color: red;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: red;
}
```

위와 같이 다수의 선택자를 쉼표로 목록화 하여 코드를 줄일 수 있다.

<hr>
## 선택자 우선순위

CSS에 적용 우선 순위가 있는데 우선순위에는 3가지 원칙이 있다.

1. 후자 우선의 원칙
2. 구체성의 원칙
3. 중요성의 원칙

## 1. 후자 우선의 원칙

동일한 선택자가 연속으로 사용되었을 경우 후자가 우선합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      p {
        color: red;
        font-size: 20px;
      }

      p {
        color: green;
      }
    </style>
  </head>

  <body>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, dolor
      voluptatem inventore deleniti eligendi omnis corporis iste adipisci
      consectetur ad officia quasi, doloribus fuga? Expedita error ad sunt
      reiciendis sapiente.
    </p>
  </body>
</html>
```

위의 코드에서 동일한 선택자가 연속으로 사용된것을 확인 할 수 있다.

두 번째 타입 선택자가 우선하기 때문에 첫 번째 타입선택자의 color 값은 두 번째 타입선택자의 color 값으로 덮어 씌워진다.

## 2. 구체성(Specificity)의 원칙

한 선택자가 다른 선택자보다 더 구체적으로 작성되었다면 구체적인 선택자가 우선한다.

아래 코드에서 선택자는 둘 다 같은 p 태그를 가르키고 있지만 첫 번째 선택자가 두 번째 보다 더 구체적이기 때문에 첫 번째 선택자의 스타일이 적용된다.

```html
<head>
  <style>
    p.color-red {
      color: red;
      font-size: 20px;
    }

    p {
      color: green;
    }
  </style>
</head>

<body>
  <p class="color-red">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor
    repudiandae tempora consequatur maxime animi ad! Quibusdam beatae laudantium
    itaque eos, cupiditate vero reiciendis assumenda natus reprehenderit eveniet
    at enim?
  </p>
</body>
```

### 2.1 가중치

구체성의 원칙은 가중치라는 것을 기준으로 작동한다. 즉, **어떤 선택자가 더 구체적인가?**를 판단할때 가중치를 기준으로 판단한다는 의미이다.

**id > class > 타입** 순으로 style 적용이 됩니다. id의 가중치가 가장 높으며, 그 다음이 class, 마지막이 타입의 가중치 순이다.

```html
<head>
  <style>
    h1 {
      color: red;
    }
    .yellowgreen {
      color: yellowgreen;
    }
    #fourth {
      color: skyblue;
    }
  </style>
</head>
<body>
  <h1>h1의 첫번째</h1>
  <h1 class="yellowgreen">h1의 두번째</h1>
  <h1 class="yellowgreen">h1의 세번째</h1>
  <h1 id="fourth" class="yellowgreen">h1의 네번째</h1>
</body>
```

### 2.2 우선 순위 계산

선택자들은 각각 해당하는 가중치 점수가 있다. 이 가중치 점수를 이용해 어떤 선택자의 우선순위가 가장 높은지 계산할 수 있다.

[가중치 점수표](https://www.notion.so/216f46c91def4691b66df14915bf7878)

- inline-style : 요소의 안에 속성으로 선언되는 스타일. 1000 점의 가중치를 가진다.
- id 선택자 : 100점의 가중치를 가진다.
- class, 가상클래스, 속성 선택자 : 10점의 가중치를 가진다.
- 타입, 가상요소 선택자 : 1점의 가중치를 가진다.
- 전체선택자(Universal Selector) 는 무시된다.

## 3. 중요성의 원칙

다른 속성보다 더 우선적으로 적용되어야할 중요한 스타일 속성이 있다면 !important 를 속성값 다음에 추간한다.

- `!important` : 절대적인 우선순위. 가중치 점수를 무시하고 무조건적인 우선 순위를 가진다. 쉬운 방법이지만 우선 순위 계산을 어렵게 만들기 때문에 인라인 스타일을 덮어 써야하는 등의 불가피한 상황이 아니라면 사용하지 않는 것이 좋다. 나쁜 습관!

```html
<body>
  <button style="background-color:red">버튼</button>
</body>
```

```css
button {
  background-color: lightblue !important;
}
body button {
  background-color: green;
}
```

<hr>
### 3.3.2 margin

margin은 마진 박스 영역의 스타일을 정의한다.

표준 CSS 박스모델에서 마진은 요소가 차지하는 전체 너비와 높이에 포함되지 않습니다. 다만 박스의 외부 공간에만 영향을 미친다.

**_마진 겹침 현상 (margin collapsing)_**

마진 겹침 현상이란?

1. 요소와 요소의 사이에 마진 탑(margin-top) 혹은 마진 바텀(margin-bottom)의 공간이 있을 경우 더 높은 값의 마진 값이 적용되는 현상

```html
<div class="first"></div>
<div class="second"></div>
```

```css
div {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.first {
  margin-bottom: 30px;
}

.second {
  margin-top: 60px;
}

/* 마진 값이 높은 쪽의 마진만 적용된다. 즉 마진 top 60px 적용 */
```

2. 부모 요소와 자식 요소가 존재할 때, 자식 요소의 마진 탑 혹은 마진 바텀 값이 부모의 높이에 영향을 미치지 않는 현상

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  background-color: yellow;
}
.child {
  width: 100px;
  height: 100px;
  margin-top: 50px;
  background-color: red;
}

/* 부모의 높이를 따로 지정하지 않으면 자식의 높이만큼 부모의 높이가 지정된다. 하지만 위와 같은 경우 자식의 마진 탑, 바텀 값이 부모의 높이에 영향을 미치지 않게 된다. */
```

이와 같은 현상을 해결하는 방법 3가지

1. 부모 요소에 overflow 속성 값을 적용.
2. 부모 요소에 display: inline-block 값을 적용.
3. 부모 요소에 border 값을 적용.

이 세 가지 방법 중에 상황에 가장 알맞는 방법을 이용하면 된다.

# 4. 대체 CSS 박스 모델 (Alternative CSS Box Model)

CSS 박스모델에서 요소의 전체적인 크기는 컨텐츠 박스 + 보더 박스 + 패딩 박스의 너비와 높이 값을 모두 더해 정해진다. 하지만 박스의 실제 크기를 얻기 위해 테두리와 패딩을 추가하는 것이 불편하고 귀찮게 느껴질 수 있다. 따라서 이런 것을 해결하기 위해 나온 것이 대체 박스 모델이다.

```html
<head>
  <style>
    * {
      margin: 0;
    }
    h1 {
      width: 100px;
      height: 30px;
      border: 3px solid #228b22;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1></h1>
</body>
```

이 모델을 사용한다면 width는 페이지에서 차지하는 박스 너비가 되고 height는 박스의 높이가 된다.

```html
<head>
  <style>
    * {
      margin: 0;
    }
    h1 {
      width: 100px;
      height: 30px;
      border: 3px solid #228b22;
      padding: 10px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <h1></h1>
</body>
```

대체 박스 모델의 콘텐츠 영역 크기는 width와 height에서 패딩 및 테두리 너비를 뺀 값이 된다.

## 4.1 box-sizing

`box-sizing` 속성을 통해 표준 박스 모델을 대체 박스 모델로 변경할 수 있다.

```css
h1 {
  box-sizing: border-box;
  /*box-sizing: content-box; --> box-sizing의 기본 값. 표준 박스 모델에서 사용된다. */
}
```

이렇게 설정하면 박스 모델 중에 보더 박스의 영역까지 설정한 width, height 값으로 적용된다.

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

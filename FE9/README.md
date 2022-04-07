# 9일차

> Don't forget to code your dream.

CSS 학습

- 1. 문제풀이
- 2. 그 외 단위
- 3. 그 외 단위
- 4. overflow
- 5. background
- 6. background
- 7. cover
- 8. cover 예외
- 9. font
- 10. iconfont
- 11. opacity
- 12. color
- 13. line-height
- 14. letter-spacing
- 15. vertical-align
- 16. text-align

      <br>

### 문제 풀이

```html
<ul>
  <li>Apple</li>
  <li class="a">Mango</li>
  <li class="a">Banana</li>
  <li>Melon</li>
  <li>Strawberry</li>
</ul>
```

<br>위의 마크업에서

```css
.a + li {
  background: red;
}
li + li + li {
  font-size: 30px;
}
```

<br>어떤 li가 빨간배경? 어떤 li가 글자크기가 변경될까? 그 이유는?

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title></title>
    <style>
      h1 + p + p + p {
        color: red;
      }
      .a + li {
        background: red;
      }
      li + li + li {
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <h1>hello world</h1>
    <p>hello world</p>
    <p>hello world</p>
    <p>hello world</p>
    <p>hello world</p>
    <p>hello world</p>
    <ul>
      <li>Apple</li>
      <li class="a">Mango</li>
      <li class="a">Banana</li>
      <li>Melon</li>
      <li>Strawberry</li>
    </ul>
  </body>
</html>
```

<br><br>

### 2. overflow

-> **`overflow`** 속성은 요소의 콘텐츠가 너무 커다랄 경우 요소를 어떻게 처리할지 지정한다. `overflow-x`, `overflow-y`의 축 별로 값을 설정할 수 있다.

<br>

`overflow` 속성은 첫 번째 `overflow-x`, 두 번째 값은 `overflow-y`를 지정한다. 하나만 사용하면 지정한 값을 양 축 모두에 적용하는 축약형이 된다.

```css
div {
  /* x축은 숨기고, y축은 숨기지만 스크롤을 제공하여 잘린 나머지 부분을 확인 할 수 있게한다. */
  overflow: hidden visible;
  width: 100px;
  height: 100px;
}
```

<br>

## 5.1 overflow 중요 속성

**`visible`**

overflow 속성의 기본 값입니다. 콘텐츠를 자르지 않는다.

<br>

**`hidden`**

콘텐츠를 요소의 크기만큼 맞추기 위해 잘라낸다. 스크롤 바를 제공하지 않는다.

<br>

<aside>
💡 float나 magin 합침 현상 등에서 자식 요소의 넓이나 높이를 포함시키기 위해서도 많이 사용한다. 이는 뒤에 float에서 설명!

관련 포털 검색 키워드 : overflow hidden을 사용한 자식선택자

</aside>

<br>

**`scroll`**

콘텐츠를 요소의 크기만큼 맞추기 위해 잘라낸다. 잘려진 나머지 부분을 확인 할 수 있도록 스크롤 바를 제공한다.

<br>

### line-height

-> 글자의 높이를 지정한다.

**line-height의 단위**

1. normal : 기본 값. 폰트의 font-family 에 따른 글자의 기본 높이. (사용하시는 font-family에 따라 기본 line-height 값이 다르다는것에 유의.)
2. number : 숫자로 값을 설정할 수 있다. 1은 font-size 값 만큼의 글자 높이를 의미한다. 2는 font-size 값의 두 배를 의미한다. 소수점을 지원한다.
3. px, em, % : 해당하는 유닛 단위에 맞춰 글자의 높이가 설정된다. (px은 부모 폰트가 변경될 경우를 대비하여 잘 사용하지 않는다. em은 상황에 따라 사용할 수 있지만 마찬가지 원리로 부적절한 UI가 구현되는 상황이 있다. 단위 없이 사용하는 것을 권함.)

<br>

```html
<p>Hello World!</p>
```

```css
p {
  font-size: 14px;
  background-color: black;
  color: white;

  line-height: normal;
  line-height: 1;
  line-height: 50%;
  line-height: 14px;
  line-height: 2em;
}
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>line-height</title>
    <style>
      .container {
        width: 300px;
        height: 300px;
        font-size: 16px;
        border: solid 1px black;
        /* 1. 고정 값으로 주었을 경우 : two, three 확인 */
        /* line-height: 10px; */

        /* 2. em으로 주었을 경우 : 역시나 two, three 확인, 더 큰 font를 자식 요소에서 사용했을 경우 UI가 깨짐 */
        /* line-height: 1em; */

        /* 3. 1값을 사용했을 경우 개발자 도구 열어서 확인해보면 contents 높이가 32px 그러나 만약 line-height가 없다면 42.86! leading 영역이 폰트의 위 아래로 존재하기 때문, line-height 1은 이 leading 영역을 없앰(폰트 높이에 딱 붙게됨), leading 영역까지 포함하여 nomal */
        /* line-height: 1; */
      }
      .one {
        font-size: 10px;
        border: solid 1px black;
      }
      .two {
        font-size: 20px;
        border: solid 1px black;
      }
      .three {
        font-size: 30px;
        border: solid 1px black;
      }
    </style>
  </head>
  <body>
    <h1>hello world</h1>
    <div class="container">
      <div class="one">hello world</div>
      <div class="two">hello world</div>
      <div class="three">hello world</div>
    </div>
  </body>
</html>
```

<br><br>

### 2. letter-spacing

<br>

-> 글자 사이의 간격을 조절.

<br>

**letter-spacing의 단위**

1. normal : 현재 폰트의 기본 간격.
2. px, em : 기본 간격에 사용하는 유닛 단위만큼 간격을 추가

<br>

```html
<p>Hello World!</p>
```

```css
p {
  letter-spacing: normal;
  letter-spacing: 7px;
  letter-spacing: 0.5em;
  letter-spacing: 0.5px;

  font-size: 14px;
  background-color: black;
  color: white;
}
```

<br>

### 6. vertical-align

```html
vertical-align: baseline; vertical-align: sub; vertical-align: super;
vertical-align: text-top; vertical-align: text-bottom; vertical-align: middle;
vertical-align: top; vertical-align: bottom;
```

인라인 요소가 이어저 나올 경우 이어지는 인라인 요소의 높이를 맞추기 위해 사용하는 것

img 태그의 바깥쪽 공백을 없애기 위하여 자주 사용한다.

<br>

## 3. text-align

텍스트 정렬인 **text-align**과 관련 있는 속성값은 4가지가 존재한다.

```html
<!DOCYPE html>
<html>
  <head>
    <title>텍스트 정렬</title>
    <style>
      .text_center {
        text-align: center;
      }
      .text_left {
        text-align: left;
      }
      .text_right {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="text_left">
      <span>왼쪽 정렬</span>
    </div>
    <div class="text_right">
      <span>오른쪽 정렬</span>
    </div>
    <div class="text_center">
      <span>가운데 정렬</span>
    </div>
  </body>
</html>
```

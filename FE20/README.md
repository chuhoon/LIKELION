# 20일차

> Don't forget to code your dream.

## 1. **Sass(Syntactically Awesome Stylesheets)나 SCSS 쓰는 이유**

- 스타일시트가 점점 더 커지고 복잡해지면 유지보수가 어려움.
- Sass안에 있는 변수, 네이스팅, 믹스인, 가져오기, 상속, 내장기능 등 css에는 없는 편의 기능들이 있어 시간을 절약할 수 있습니다.
- 코드 재사용이 가능합니다.

## 2. **Sass**

### 2-1. Sass 란

Sass는 CSS로 컴파일 되는 스타일 시트 확장 언어이며 CSS 전처리기의 하나입니다. 브라우저가 Sass를 직접 로딩하는 것이 아니라 개발은 Sass를 기반으로 한 후, CSS로 익스포트하는 과정을 거칩니다.

- 브라우저가 Sass파일을 직접 읽지 못하기 때문에 일반 CSS로 컴파일해야 합니다.
- 웹업계에서 실제 많이 사용하는 전처리기입니다.

### 2-2. Sass 기술방식 2가지

Sass를 작성하는데에는 기본적으로 두가지 방법이 있습니다.

- .sass 기술방식과 .scss 방식 → 다른 파일 확장자를 사용합니다.
- Sass와 Scss가 있는데 그 중에서 일반적으로 CSS와 좀 더 유사한 Scss를 사용합니다. 왜냐하면 SCSS는 CSS와 동일하게 중괄호를 사용하는 방식이기 때문입니다.

```scss
//SCSS
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

```sass
//Sass
$font-stack: Helvetica, sans-serif
$primary-color : #333

body
	font: 100% $font-stack
	color: $primary-color
```

## 3. 중첩(Nesting)

### 3-1. 중첩(Nesting)

Nesting(중첩)을 사용하면, html의 시각적 계층 방식과 동일하게 CSS를 중첩하여 작성할 수 있습니다. CSS코드가 구조화 되어 가독성이 높아지며 유지 보수하기 편리해집니다.

```html
<!--HTML-->

<nav>
  <!--nav안에 ul이 중첩되어 있고-->
  <ul>
    <!--ul안에 세가지 li가 중첩되어 있다.-->
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
  </ul>
</nav>
```

```scss
//Scss
//Scss에서도 HTML처럼 계층구조로 스타일을 적용할 수 있다.
nav {
  background: #c39bd3;
  padding: 10px;
  height: 50px;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    li {
      color: white;
      margin-right: 10px;
    }
  }
}
```

**Why. 중첩을 사용하는 이유는?**

기존 CSS는 부모에게 상속된 자식 요소에게 스타일을 적용하려고 할 때마다 최상위 선택자를 반복 선언해야 합니다. 하지만 중첩을 사용하면 최상위 선택자를 한번만 선언하여도 자식 선택자에게 스타일을 적용할 수 있게 되어 코드 반복을 줄이게 됩니다.

```css
/*CSS*/

.info-list div {
  display: flex;
  font-size: 14px;
  color: #4f4f4f;
}

.info-list div dt {
  font-weight: 700;
  margin-right: 7px;
}
/*기존 CSS : info-list에 있는 자식과 자손에게 스타일을 적용하려고 할때마다 
부모 선택자를 적어준다*/
```

```scss
//Scss

.info-list {
  div {
    display: flex;
    font-size: 14px;
    color: #4f4f4f;
    dt {
      font-weight: 700;
      margin-right: 7px;
    }
  }
}
// 중첩을 사용하여 부모선택자를 한번만 사용한다.
// 그리고 코드를 봤을 때 info-list div tag안에 dt가 들어있음을 한눈에 알아볼 수 있다
```

### 3-2. 속성 Nesting

중첩은 선택자뿐만 아니라 스타일 속성들도 가능합니다. 아래 예시를 보면 .add-icon이라는 클래스 선택자에게 background 스타일을 주려고 합니다. 이때, background 이름을 가진 속성( background-image, background-position 등)들을 background안에 중첩 시켜서 스타일 코드를 작성할 수 있습니다. 속성을 중첩 할 때는 콜론`:`을 사용합니다. Sass는 속성이 중첩되었음을 인지하고 css 속성들로 변환합니다.

```scss
//Scss
.add-icon {
  background : {
    image: url('./assets/arrow-right-solid.svg');
    position: center center;
    repeat: no-repeat;
    size: 14px 14px;
  }
}
```

```css
/*CSS*/
.add-icon {
  background-image: url('./assets/arrow-right-solid.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 14px 14px;
}
```

### 3-3. ampersand 앰퍼샌드

"&"는 상위에 있는 부모선택자를 가리킵니다.

1. `&`을 이용하여 after, hover 등의 가상요소, 가상클래스, class나 id 셀렉터 등을 참조할 수 있습니다.

```scss
//Scss
.box {
  &:focus {
  } // 가상선택자
  &:hover {
  }
  &:active {
  }
  &:first-child {
  }
  &:nth-child(2) {
  }
  &::after {
  } // 가상요소
  &::before {
  }
}
```

```css
/*CSS*/
.box:focus {
} /* 가상선택자 */
.box:hover {
}
.box:active {
}
.box:frist-child {
}
.box:nth-child(2) {
}
.box::after {
} /* 가상요소 */
.box::before {
}
```

**Example**

```scss
//Scss
ul {
  li {
    &:hover {
      background: white;
      cursor: pointer;
      // 가상요소
    }
    &:last-child {
      border-bottom: 2px solid black;
      // 가상클래스
    }
  }
}
//li 태그의 가상요소와 가상클래스에게 스타일을 적용한 예시
//&을 사용하여 li와 :hover, :last-child를 연결
```

```css
/*CSS*/
ul li:hover {
  background-color: white;
  cursor: pointer;
}

ul li:last-child {
  border-bottom: 2px solid black;
}
```

2. `&` 를 응용하면 아래 예시와 같이 공통 클래스 명을 가진 선택자들을 중첩시킬 수 있습니다.

```scss
//Scss
.box {
  &-yellow {
    background: #ff6347;
  }
  &-red {
    background: #ffd700;
  }
  &-green {
    background: #9acd32;
  }
}
//.box라는 이름이 같기 때문에 &를 사용해 중첩구조로 만들 수 있다
```

```css
/*CSS*/
.box-yellow {
  background: #ff6347;
}
.box-red {
  background: #ffd700;
}
.box-green {
  background: #9acd32;
}
```

<aside>
💡 ⚠️깊은 중첩을 하게 되면서 불필요한 선택자들이 사용되었습니다. 중첩을 과하게 사용하지 않도록 주의해 주세요.

</aside>

```scss
//Scss
.nav {
  height: 60px;
  font-size: 18px;
  .nav-list {
    background: #3e68ff;
    span {
      padding: 10px 13px;
      a {
        color: white;
        .one {
          .two {
            color: skyblue;
          }
        }
      }
    }
  }
}
```

```css
.nav {
  height: 60px;
  font-size: 18px;
}
.nav .nav-list {
  background: #3e68ff;
}
.nav .nav-list span {
  padding: 10px 13px;
}
.nav .nav-list span a {
  color: white;
}
.nav .nav-list span a .one .two {
  color: skyblue;
}
```

```scss
//Scss, 이렇게 사용해도 됩니다.
.nav {
  height: 60px;
  font-size: 18px;
  .nav-list {
    background: #3e68ff;
    span {
      padding: 10px 13px;
      a {
        color: white;
      }
    }
  }
}

.one {
  .two {
    color: skyblue;
  }
}
```

### 3-4. @at-root

`@at-root` 키워드를 사용하면 중첩에서 벗어날 수 있습니다. 중첩에서 벗어나고 싶은 선택자 앞에 `@at-root` 를 작성합니다. 컴파일된 css 코드에서 `@at-root` 를 사용한 선택자가 중첩에서 벗어났음을 확인할 수 있습니다. 중첩된 선택자에게만 사용할 수 있습니다.

```scss
//Scss
.article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  .article-content {
    font-size: 14px;
    opacity: 0.7;
    @at-root i {
      opacity: 0.5;
    }
  }
}
```

```css
/*CSS*/
.article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.article .article-content {
  font-size: 14px;
  opacity: 0.7;
}
/*중첩을 빠져나온 것을 확인할 수 있다.*/
i {
  opacity: 0.5;
}
```

### 4. Mixin이란

Mixin은 코드를 재사용하기 위해 만들어진 기능입니다. 선택자들 사이에서 반복되고 있는 코드들은 mixin을 사용하여 코드 반복을 줄입니다. 중복되는 코드는 mixin으로 만들어 놓고 원하는 선택자 블럭에 mixin을 include하면 됩니다.

### 4-1. Mixin 사용하기

```scss
@mixin 이름(매개변수) //생성
  @include 이름(인수); //사용
```

- 앞에 `@Mixin`을 쓰고 이름을 정해준 후, 중괄호 `{ }` 안에 중복되는 코드를 넣어줍니다.
- `@include`를 사용하여 스타일 하고자 하는 요소에 포함 시키면 됩니다.
- mixin은 파일을 만들어서 import하여 사용하거나, mixin을 사용할 파일 내에서 선언 후 사용할 수 있습니다. 이때, 여러 개의 mixin을 만들어 사용한다면, `_mixins.scss` 파일을 만들어서 관리합니다.

```css
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
}

.aside {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
/*.card와 .aside 클래스 선택자의 적용한 스타일이 겹침*/
```

```scss
// scss를 사용

@mixin center-xy {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  @include center-xy; // 정의한 center-xy mixin을 사용하여 코드 한줄이면 끝!
}

.aside {
  @include center-xy;
}
```

⚠️ 반복하는 모든 코드를 하나의 mixin에 몰아넣어서 사용하는 건 바른 mixin 사용법이 아닙니다. 위에 코드처럼 스타일별로 나누어서 mixin을 만듭니다. 서로 연관 있는 스타일 속성끼리 묶어서 만들어야 좀 더 사용성이 높은 mixin을 만들 수 있습니다.

### 5. Arguments

1. 인수(Arguments)

mixin 이름 뒤에 인수를 넣어서 사용할 수 있으며, 일반 언어와 마찬가지로 매개변수와 인수의 개수가 같아야 합니다. mixin에 매개변수를 사용하면, 능동적으로 스타일을 적용할 수 있습니다. mixin의 매개변수에 들어가는 인자들의 값에 따라 형태는 같지만 스타일이 조금씩 달라지기 때문입니다.

```scss
@mixin image-style($ul, $size, $repeat, $positionX, $positionY) {
  background-image: url($ul);
  background-size: $size;
  background-repeat: $repeat;
  background-position: $positionX $positionY;
}
//background관련 스타일 코드가 들어있다.
//mixin의 인수에 따라 조금씩 다른 스타일링이 가능하다.

.profile {
  @include image-style('./assets/user.jpg', cover, no-repeat, center, center);
}

.box-one {
  @include image-style(url('/images/poster1.svg'), cover, no-repeat, 40%, 50%);
}
```

```css
.profile {
  background-image: url('./assets/user.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.box-one {
  background-image: url(url('/images/poster1.svg'));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40% 50%;
}
```

2. 기본값 설정

기본값을 설정하여 매개변수에 값이 들어오지 않을 때 기본으로 설정한 값을 사용할 수 있도록 해줍니다.

```scss
// 위에 코드를 가져와서 기본값을 설정해주었다.
@mixin image-style($ul, $size, $repeat, $positionX: 50%, $positionY: 50%) {
  background-image: url($ul);
  background-size: $size;
  background-repeat: $repeat;
  background-position: $positionX $positionY;
}

.profile {
  @include image-style('./assets/user.jpg', cover, no-repeat);
}
// profile과 .box-one은 서로 관계가 없지만, 코드가 중복되기때문에 mixin을 만들어서
// 각 요소에서 사용합니다.
```

```css
.profile {
  background-image: url('./assets/user.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
```

- 다음처럼 값을 비우거나 안줄 수도 있습니다.
  ```scss
  @mixin pri-button_($width: 100px, $height: 50px, $radius: 10px) {
    width: $width;
    height: $height;
    border-radius: $radius;
    background-color: aqua;
  }

  // 값 비우기
  .btn__ {
    @include pri-button_(100px, null, 20px);
  }

  // 중앙값 주지 않기
  .btn__ {
    @include pri-button_(100px, $radius: 20px);
  }
  ```

### 6. Content

@content를 사용하면 원하는 부분에 스타일을 추가하여 전달할 수 있습니다.

```scss
// 정의하는 곳에서
@mixin sample {
  display: flex;
  justify-content: center;
  align-items: center;
  @content;
}
```

```scss
// 사용하는 곳에서 (추가로 스타일링을 할 수 있음)
a {
  @include sample {
    color: white;
  }
}
```

- 다음 2개는 동일합니다.
  ```scss
  @mixin one {
    width: 100px;
    height: 100px;
    color: white;
    @content;
  }

  a {
    @include one {
      background-color: black;
    }
  }

  @mixin two {
    width: 100px;
    height: 100px;
    color: white;
  }

  button {
    @include two;
    background-color: black;
  }
  ```

### 7. 전달인자 없는 믹스인

믹스인은 매개변수를 가지지 않더라도 만들 수 있습니다. 전달인자가 없는 믹스인에서는 `@ inlcude`키워드에다가 믹스인 이름만 넣어주면 됩니다. 따로 괄호를 추가하지 않습니다.

```scss
a {
  @include text-style;
}
```

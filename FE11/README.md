# 11일차

> Don't forget to code your dream.

CSS 학습

- 0. 질의응답
- 1. background_cover 보강설명
- 2. text-align
- 3. left_right 중앙정렬
- 4. left_right 중앙정렬
- 5. text-indent
- 6. text-decoration
- 7. position
- 8. fixed
- 9. sticky
- 10. sticky 활용예제
- 11. z-index
- 12. 선택자\_보강설명
- 13. 헷갈리는 선택자

### 4. text-indent

텍스트 라인에서 텍스트가 시작하기 전의 빈 공간을 설정할 수 있다.쉽게 말해 들여쓰기 공간 설정이다.

**text-indent의 단위**

1. mm, cm : 밀리미터, 센티미터 단위를 지원한다.
2. px, em, % : 기본 간격에 사용하는 유닛 단위만큼 간격을 추가한다.

```html
<p>Hello World!</p>
```

```css
p {
  text-indent: 5em;
  text-indent: -5em;
  text-indent: 70px;
  text-indent: 15%; /* %는 요소의 넓이에 비례 */
  text-indent: 1mm;
  text-indent: 5cm;

  font-size: 14px;
  background-color: black;
  color: white;
}
```

<br>

### 5. text-decoration

텍스트에 붙는 라인을 꾸며주는 속성이다.

텍스트의 상단, 하단에 라인을 그려줄 수 있고, 라인의 종류와 색상도 지정할 수 있다. text-decoration: none 정도만 알고 가자

```css
p {
  text-decoration: none;
  text-decoration: underline dotted;
  text-decoration: underline dotted red;
  text-decoration: green wavy underline;
  text-decoration: underline overline #ff3028;
}
```

<br>

### 1. position이란?

이름에서처럼, position이란 웹 페이지에서 저희가 만들었던 html 태그나 id, class 박스 등의 위치를 지정해주는 속성이다. position 속성을 이용해 우리는 페이지의 레이아웃을 결정할 수 있다.

### 2. Position의 종류

#### 2.1 static

기본적으로 모든 태그들은 따로 position 속성값을 주지 않았다면 static 값을 가진다. 즉 html에 쓴 태그 순으로 위치가 지정되게 된다. 그래서 굳이 기입할 필요는 없지만, 부모 객체에서 다른 position 속성값이 주어졌을 때, 그를 무시하기 위해 사용될 때가 있다.

#### 2.2 relative

상대적인 속상을 가지고 있다. 즉 원래 자신이 있어야 하는 위치에 상대적이다. relative는 그 누구보다도 자신이 원래 있던 자리를 기억한다. 그래서 `position: relative;`라는 값을 주고 `left : 50px;` 이라고 추가적으로 적어 주면, 본인의 static 자리에서 왼쪽으로 50px만큼 떨어진 자리에 위치하게 된다.

### 2.3 absolute

`position: absolute;`라고 한 뒤 `top : 20px; right: 30px;`이라고 추가적 값을 주면, 오른쪽 상단에 동떨어진 박스가 하나 놓여있는 것을 볼 수 있다. 이들은 기준점이 html 위치에 있기에, 왼쪽 제일 상단이 본래 자신의 위치라고 생각하고 움직이게 된다.

하지만 absolute도 눈치를 보는 녀석이 있는데 부모 요소이다. relative, absolute, fixed 같은 position 속성이 부모에 놓여있다면, absolute는 position 속성을 가진 가장 가까운 부모의 박스 내를 기준으로 위치하게 된다.

### 2.4 fixed

스크롤을 올리거나 내릴 때, 특정 박스가 고정되어 움직이지 않았으면 한다면, 이 fixed 속성을 이용하시면 된다. `position:fixed`를 기입하면, `absolute` 가 `position` 속성을 가진 가장 가까운 부모를 기준으로 위치를 정하는 것 처럼, fixed는 현재 사용자가 보고 있는 뷰포트를 기준으로 마치 화면에 붙은 것처럼 그 자리에 계속해서 위치한다. 요즘 많은 사이트들이 페이지가 스크롤 되어도 중요한 정보(네비게이션 같은)를 화면에 계속 노출 시켜주기 위해 많이 사용하는 속성이다.

### 2.5 z-index

[z-index - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)

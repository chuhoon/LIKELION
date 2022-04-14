# 14일차

> Don't forget to code your dream.

### 6. flex-wrap

**flex는 자식의 크기가 자신보다 크다고 해서 강제로 조절하지 않는다. 자식요소를 감싸주는 기능이다.**

```html
<div class="container">
  <div class="box">box1</div>
  <div class="box">box2</div>
  <div class="box">box3</div>
  <div class="box">box4</div>
  <div class="box">box5</div>
  <div class="box">box6</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  /* flex-wrap: nowrap; */
  /* flex-wrap: wrap-reverse; */
}
```

<br>

### 7. **flex-basis**

**자식요소에 사용!** flex item 들의 **크기를 지정**한다. width, height와 다른점은 axis 방향에 따라 달라진다는 것 그리고 내부의 컨텐츠에 따른 유연한 크기이다. 기본값은 auto이며 auto일 때는 width, height 값을 사용한다.

만약 flex-basis 값이 적용되어 있다면 width, height 값은 무시된다.

<aside>
💡 0외에 다른 상수값을 사용할 수 없다.

</aside>
<br>

## 8. **flex-grow**

**자식요소에 사용한다! flex-basis의 값에서 더 늘어나도 되는지 지정하는 값으로, 할당된 값에 따라 자신을 감싸는 컨테이너의 공간을 할당하도록 한다.**

flex-grow  : 1 —> 자식 요소들이 모두 동일한 크기의 공간을 할당받습니다.

flex-grow  : 2 —>  특정한 하나의 자식에게만 줄 경우 다른 자식요소보다 두배의 **여백 공간**을 할당 받는다. 만약 자식요소들의 컨텐츠 크기가 존재한다면 그 컨텐츠의 넓이에 따라 할당받는 값이 달라진다.

<aside>
💡 flex-basis:0을 주게 되면 여백 공간이 아니라 전체 공간을 분할한다.

</aside>
<br>

## 9. **flex-shrink**

**자식요소에 사용한다. flex-grow에 반대되는 개념으로 flex-basis의 값에서 더 줄어들어도 되는지 지정하는 값이다. 크기를 고정하거나 줄이는 역할을 한다.**

0의 값을 사용할 경우 컨테이너의 크기가 줄어도 값은 고정된다. 마이너스 숫자는 받아들이지 않으며 1은 기본값이다.

<aside>
💡 부모에 flex-wrap: wrap; 속성이 있는 경우 적용되지 않는다.

</aside>

지금 까지 배운 **7, 8, 9 속성의 값을 축약하여 사용할 수 있는 것이 바로 flex 속성이다.**

```css
/* flex: flex-grow, flex-shrink, flex-basis */
flex: 1; /* flex-grow:1; flex-shrink:1; flex-basis:0; */
flex: 1 1 300px; /* flex-grow:1; flex-shrink:1; flex-basis:300px; */
```

<br>

## 10. Grid

[CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)

[grid - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/grid)

[이번에야말로 CSS Grid를 익혀보자](https://studiomeal.com/archives/533)

[CodePen Search](https://codepen.io/search/pens?q=grid)

### 11. Grid row / column

#### 1) template

`grid-template-columns` : 열의 넓이를 설정한다.

`grid-template-rows` : 행의 높이를 설정한다.

**`repeat`**( 적용할 트랙의 갯수, 반복할 수치 ) 함수를 이용하면 그리드 트랙 별 수치 반복을 설정 할 수 있다.

#### 3. Gap

1. row - gap

2. column-gap

3. grid-gap, gap

```css
gap: 20px 5px;
```

<br>

#### 4. 각 셀의 영역 지정

1. grid-column-start

2. grid-column-end

3. grid-column

```css
/*item*/
.item {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-column: 1 / span 2;
}
```

4. grid-row-start

5. grid-row-end

6. grid-row

```css
/*item*/
.item {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-row: 1 / span 2;
}
```

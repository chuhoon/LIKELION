# 13일차

> Don't forget to code your dream.

- [flexbox의 기본 개념 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [이번에야말로 CSS Flex를 익혀보자](https://studiomeal.com/archives/197)
- [Flexbox playground](https://codepen.io/enxaneta/full/adLPwv)

## flex

### 1. flex-direction

정렬 방향을 결정한다.

```css
.container {
  display: flex;
  flex-direction: column-reverse;
  /* flex-direction : column;  
    flex-direction : row-reverse;
    flex-direction : row;
  */
}
```

### 2. justify-content

**축을 기준으로 배열의 위치를 조종하거나 아이템 간의 간격을 설정할 수 있다!**

```css
.container {
  display: flex;
  /* justify-content: flex-start; */
  /* justify-content: flex-end; */
  /* justify-content: center; */
  /* justify-content: space-between; */
  /* justify-content: space-around; */
}
```

### 3. align-items, **align-content**

align-items는 **cross-axis를 기준으로 이동한다.**

**align-content:** flex-container의 cross-axis 축의 아이템들이 **여러 줄**일 때 사용 가능하다.

```css
.container {
  display: flex;
  /* align-items: stretch; (기본값) */
  /* align-items: center; */
  /* align-items: flex-start; */
  /* align-items: flex-end; */
}
```

### 4. flex-wrap

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

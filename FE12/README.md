# 12일차

> Don't forget to code your dream.

CSS 학습

- float

### 1. float 의미

`float`은 **'띄우다'**라는 뜻을 가지고 있으며 float 정렬은 다양한 객체를 띄워서 정렬을 하는 속성을 가진다.

### 2. `float:left`, `float:right`

좌측 우측 정렬이 가능하다. 먼저 좌측 정렬은 float:left의 성질은 블록 박스에 해당하는 만큼의 공간만 차지하고 나머지 내용은 박스 오른쪽에 위치하며 위에서 아래의 방향의 흐름을 가진다. 우측 정렬도 같은 맥락이다.

### 3. float 속성의 문제점

다양한 객체를 간편하게 띄워서 정렬하는 float 정렬에도 문제점이 존재한다. 전체를 감싸는 컨테이너가 자식 요소들이 모두 float 속성을 가질 때 자식 요소들의 높이를 반영하지 못하고 자신의 높이만큼만 보여주는 문제점이 있다.

#### 왜 이러한 현상이 일어날까?

브라우저는 요소들을 화면에 어떻게 보여줄지 결정하는 여러가지 방법이 있다. 그 중에서 대표적으로 세 가지 방법이 존재한다. 바로 normal flow, float, position이다.

대부분의 요소들, 블록 레벨 요소와 인라인 요소들은 normal flow 에 따라 레이아웃이 결정된다. 하지만 float, position(absolute, fixed) 의 방법을 사용하면 normal flow 에서 벗어나게 된다. normal flow에 속한 요소들은 normal flow에서 벗어난 float, position 속성이 적용된 요소들을 인식하지 못한다. nomal flow < float < position

#### 해결방법

1. overflow:hidden;
2. 부모 요소의 높이 값을 지정 (비추)
3. clear 속성 사용
4. clear-fix 사용

```css
.wrap::after {
  content: '';
  display: block;
  clear: both;
}
```

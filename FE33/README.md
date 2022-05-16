# 33일차

- 3D 캐러셀 live coding
- select box custom
- preventDefault()

### preventDefault()

브라우저의 기본 이벤트 동작을 취소합니다.

브라우저는 HTML 태그를 통해 여러가지 기능들을 제공합니다. 하지만 때때로 그러한 기능이 방해가 되는 경우가 있습니다.

```html
<!-- 앵커의 기본 동작을 중지 -->
<a href="https://www.naver.com" class="link">네이버 링크입니다만..</a>
<script>
  const link = document.querySelector('.link');
  link.addEventListener('click', (event) => {
    console.log('clicked');
    event.preventDefault();
  });
</script>

<!-- submit 의 기본 동작을 중지 -->
<form action="">
  <button type="submit" class="submit">제출</button>
</form>
<script>
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', (event) => {
    console.log('clicked');
    event.preventDefault();
  });
</script>
```

이렇듯 종종 브라우저의 기본 동작을 중지하고 자바스크립트를 통해 기능을 처리하고자 할때 사용합니다.

<br>

**preventDefault** **실습**

이벤트 타입 contextmenu를 이용해 브라우저 오른쪽 버튼 이벤트 막고 '해당 페이지에서는 오른쪽 클릭을 제한합니다.’ 경고 띄우기

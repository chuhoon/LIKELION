버튼.addEventListener('click', helloworld100); // ex('click', helloworld100)

function helloworld100() {
  console.log('hello world');
  console.log('hello world');
}
버튼.addEventListener('click', () => {});
/* 
  동기(순서대로)
  청소기 -> 빨래 -> 쓰레기통 비우기 -> 분리수거

  비동기(동시다발적으로)
  청소기 -> 쓰레기통 비우기
  빨래 -> 분리수거
*/

const snack = () => Promise.resolve('와, 맛있겠다!'); // 4번

async function mySnack() {
  console.log('치즈 케이크 주세요!'); // 3번
  const res = await snack(); // 4번
  console.log(res); // 6번
}

console.log('주문하시겠어요?'); // 1번
mySnack(); // 2번
console.log('주문하신 케이크 나왔습니다!'); // 5번

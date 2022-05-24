// 프라미스 체이닝이 아닌 경우
let p = new p(function (resolve, reject) {
  setTimeout(() => resolve(10), 1000);
});

p.then((result) => {
  console.log(result);
  return result ** 2;
});

p.then((result) => {
  console.log(result);
  return result ** 2;
});

p.then((result) => {
  console.log(result);
  return result ** 2;
});

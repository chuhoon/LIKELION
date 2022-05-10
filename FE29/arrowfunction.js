// 화살표 함수

function 함수1(x, y) {
  return x + y;
}

let 함수2 = (a, b) => {
  return a + b;
};

함수1(1, 2);

함수2(2, 3);

[10, 20, 30].filter((x) => x >= 20);

function 그냥함수(x) {
  return x >= 20;
}

[10, 20, 30].filter(그냥함수);

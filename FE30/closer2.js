let x = 10;

function test1() {
  x = 100;
}

test1();
// x는 100

let y = 10;

function test2() {
  let y = 100;
}

test2();
// y는 10

function 승수제조기() {
  let value = 0;
  function 승수() {
    return (++value) ** 2;
  }
  return 승수;
}

let 승 = 승수제조기();

승();
// 1
승();
// 4
승();
// 9

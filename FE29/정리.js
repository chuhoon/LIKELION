function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// call by value는 값 전달
let a = 1;
function test(x) {
  x = 1000;
}
test(a);
console.log(a);

// call by reference(실제로는 call by value)
// 주소 값의 전달이다. 따라서 arr, object느 변경이 가능하다.
let arr = [10, 20, 30];
function test2(x) {
  x[0] = 1000;
}
test2(arr);
console.log(arr);

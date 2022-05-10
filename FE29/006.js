function test(a = 10, b = 20, c = 30) {
  return a + b + c;
}
test();
test(100);
test(100, 200);
test(100, 200, 300);

function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}

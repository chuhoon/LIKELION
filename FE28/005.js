sum = '';

for (let i = 0; i < 100; i++) {
  sum += i;
}

let count = 0;

for (let i = 0; i < sum.length; i++) {
  if (sum[i] == '8') {
    count++;
  }
}

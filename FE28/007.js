let result = 0;
for (let i = 0; i <= 100; i += 2) {
  result += i;
}

// 재밌는 것 뒤집어서 출력
txt = 'hello world';
result = '';

for (let i = 0; i < txt.length; i++) {
  result = txt[i] + result;
}

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let i = 0;
let sum = 0;
while (i < 101) {
  sum += i;
  i += 2;
}

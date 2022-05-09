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

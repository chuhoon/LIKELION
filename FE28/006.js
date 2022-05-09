Array(100)
  .fill(0)
  .map((v, i) => v + i)
  .join('')
  .split('')
  .filter((x) => x == '8').length;

let data = [
  { 회원번호: 0, 아이디: 'a', 성별: '남', 나이: 21 },
  { 회원번호: 1, 아이디: 'b', 성별: '남', 나이: 17 },
  { 회원번호: 2, 아이디: 'c', 성별: '여', 나이: 6 },
  { 회원번호: 3, 아이디: 'd', 성별: '여', 나이: 55 },
];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i].회원번호);
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i].아이디);
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i].성별);
}

result = [];

for (let i = 0; i < data.length; i++) {
  if (data[i].나이 >= 20 && data[i].성별 == '여') {
    result.push(data[i].회원번호);
  }
}

data.filter((i) => i['나이'] >= 20 && i['성별'] == '여');

let 나이총합 = 0;
for (let i = 0; i < data.length; i++) {
  나이총합 += data[i].나이;
}

나이총합 / data.length;

data.map((i) => i['나이']);
data.map((i) => i['나이']).reduce((a, b) => a + b, 0);

let 가장큰나이 = 0;
for (let i = 0; i < data.length; i++) {
  if (가장큰나이 < data[i]['나이']) {
    가장큰나이 = data[i]['나이'];
  }
}

let 가장작은나이 = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < data.length; i++) {
  if (가장작은나이 > data[i]['나이']) {
    가장작은나이 = data[i]['나이'];
  }
}

let arr = [10, 20, 30, 40];
Math.min(...arr);
// ... 전개구문 괄호가 벗겨져서 들어감

// 문제 1
let str = 'hello world';
count = 0;

for (i = 0; i < str.length; i++) {
  if (str[i] == 'l') {
    count++;
  }
}

// 문제2
let str2 = '123456789';
sum2 = 0;

for (i = 0; i < str2.length; i++) {
  sum2 += parseInt(str2[i]);
}

// 호준님 실무에서 이렇게 쓰심
for (i = 0; i < str2.length; i++) {
  sum2 += +str2[i];
}

// 문제3
arrage = ['11', '22', '33', '44'];
sum = 0;

for (i = 0; i < arrage.length; i++) {
  sum += +arrage[i];
}

sum / arrage.length;

const languages = [
  'Java',
  'Javascript',
  'Python',
  'Ruby',
  'C',
  'C++',
  'Node.js',
  'Django',
];

for (let i of languages) {
  console.log(i);
}

// 구조 분해 할당 a = 10, b = 20
let [a, b] = [10, 20];
let [c, d, ...e] = [10, 20, 30, 40, 50];
let { name, ...rest } = { name: '경훈', heigth: '182', age: '27' };

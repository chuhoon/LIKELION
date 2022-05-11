// bind()
// bind()는 this가 고정된 새로운 함수를 반환합니다.

function sayName() {
  console.log(this.name);
}

let bruce = {
  name: 'bruce',
  sayName: sayName,
};

let peter = {
  name: 'peter',
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

// bind 이해하기
function sayAge() {
  console.log(this.age);
}

let 경훈 = {
  age: '27',
  나이: sayAge,
};

let 나비 = {
  age: '12',
  나이: sayAge.bind(경훈),
};

경훈.나이();
나비.나이();

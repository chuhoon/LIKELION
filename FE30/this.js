let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1();

function sayName() {
  console.log(this.name);
}

var name = 'Hero';
// 전역의 name이 Hero이기에 this가 가리키는 것은
// window.name 이기에 Hero가 출력된다.

let peter = {
  name: 'Peter Parker',
  sayName: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  sayName: sayName,
};

sayName();
peter.sayName();
bruce.sayName();

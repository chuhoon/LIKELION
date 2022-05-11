// apply
// apply() 메서드의 인수에 this 로 사용할 값을 전달할 수 있으며, 배열의 형태로도 전달할 수 있습니다.

let peter = {
  name: 'Peter Parker',
  sayName: function (a, b) {
    console.log(this.name + ' a ' + a + ' or ' + b);
  },
};

let bruce = {
  name: 'Bruce Wayne',
};

peter.sayName.apply(bruce, ['batman', 'richman']);

peter.sayName('a', 'b');
// Peter Parker a a or b

peter.sayName.apply(bruce, ['a', 'b']);
// Bruce Wayne a a or b

peter.sayName.apply(bruce);
// Bruce Wayne a undefined or undefined

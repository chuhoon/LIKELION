/** 
  call() 메서드의 인수에 this로 사용할 값을 전달할 수 있다.
**/

let peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name);
  },
};

let bruce = {
  name: 'Bruce Wayne',
};

peter.sayName();
// Peter Parker
peter.sayName.call(bruce);
// Bruce Wayne

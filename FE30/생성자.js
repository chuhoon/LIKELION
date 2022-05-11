function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// 인스턴스를 만들기 위해서는 new를 사용
// new 키워드가 새로운 것을 생성해준다. 휘발되지 않게 막아줌
let user = new User('경훈');

console.log(user.name);
console.log(user.isAdmin);

function User2(name) {
  this.name = name;
  console.log(this.name);
}

// 에러
let user2 = User2('경훈');
console.log(user2.name);

function User3(name, age) {
  this.name = name;
  this.age = age;
}

let user3 = new User3('경훈', 27);
console.log(user3);
console.log(user3.name);
console.log(user3.age);

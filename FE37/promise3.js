let p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('끝남!'), 3000);
});
console.log('hello world');
console.log(p);
//3초 후 다시 실행
console.log(p);

/*
  new Promise((resolve, reject) => {
    
    })
      .then(result => result)
      .then(result => result)
      .catch(err => err)
      .finally(result => result)
*/

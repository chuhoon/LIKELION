function sayHello() {
  return new Promise((resolve, reject) => {
    // resolve가 성공했을 떄 호출
    // reject가 실패했을 때 호출
    const hello = 'Hello Hello';
    resolve(hello);
    // reject(new Error());
  });
}

// sayHello()
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();

function outer() {
  let val = 'Test';

  function inner() {
    console.log(val);
  }

  return inner();
}

const innerFunc = outer();
innerFunc();

for (let i of 'hello world') {
  console.log(i);
}

let s = '';
for (let i of 'hello world') {
  s = i + s;
}

// function reverse(text) {
//   text += '';
//   if (text.length <= 1) {
//     return text;
//   }
//   return reverse(text.slice(1)) + text[0];
// }

function reverse(text) {
  text += '';
  if (text.length <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

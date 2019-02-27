const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number: "));

function multiRand(n){
  let array = []
  for (i = 0; i < n; i++) {
  array.push(Math.floor(Math.random() * 11));
}
  return array;
}

console.log(multiRand(n));

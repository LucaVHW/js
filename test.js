const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number: "));
let array = []

function multiRand(n){
  for (i = 0; i < n; i++) {
  array.push(Math.floor(Math.random() * 11));
}
  return array;
}

console.log("Generated array: " + multiRand(n));
console.log("Average in array: " + n/array.length);
console.log("Minimum in array: " + Math.min(...array));
console.log("Maximum in array: " + Math.max(...array));

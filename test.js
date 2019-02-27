const readlineSync = require("readline-sync");

let width = new Number(readlineSync.question("Enter the square width: "));
let height = new Number(readlineSync.question("Enter the square height: "));

function calcSurface(width, height){
  return width * height;
}

console.log(calcSurface(width, height));

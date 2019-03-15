const readlineSync = require("readline-sync");

let question = readlineSync.question("What is the random number?: ")
let random =Math.floor(Math.random() * 101);

while (question != random) {
  if (question < random) {
    question = readlineSync.question("Too low! ")
  } else {
    question = readlineSync.question("Too high! ")
  }
}

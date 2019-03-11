const readlineSync = require("readline-sync");

let myObject = {

  name: "",

  year: "",

  cast: "",
};

function askTvSerie() {

  myObject.name = (readlineSync.question("Tv serie: "));
  myObject.year = (readlineSync.question("Production year: "));
  myObject.cast = (readlineSync.question("Cast members: "));

return myObject
}
console.log(askTvSerie());

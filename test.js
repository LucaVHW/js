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

return randomizeCast(myObject)
};

function randomizeCast(tvSerie) {

  return myObject["cast"].split(' ').sort(function(){return 0.5-Math.random()}).join(' ');

};
console.log(askTvSerie());

function calcDistance(x1, y1, x2, y2){
  return Math.hypot(x1-x2, y1-y2);
}

console.log(calcDistance(-2, 2, 2, -2));

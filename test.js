class Circle {
  constructor(xPos, yPos, rad) {
    this.yPos = yPos;
    this.xPos = xPos;
    this.rad = rad;
  }
  get yPosition() {
    return this.yPos[0];
  }
  set yPosition(val) {
    this.yPos[0] = val;
  }
  get xPosition() {
    return this.xPos[0];
  }
  set xPosition(val) {
    this.xPos[0] = val;
  }
  get radius() {
    return this.rad[0];
  }
  set radius(val) {
    this.rad[0] = val;
  }
  surface() {
    return this.rad * this.rad * Math.PI;
  }
}

let circle = new Circle(1, 1, 10);

circle.yPos = 5;
circle.xPos = 5;
circle.rad = 20;
circle.surface();

console.log(circle.surface());

class Rectangle {
  constructor(x, y, width, length) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
  }
  calcArea() {
    return this.height * this.width;
  }
}

  let rect1 = new Rectangle(5, 5, 50, 50)
  let rect2 = new Rectangle(20, 10, 10, 10)

  function collision(rec1, rec2) {
    if (rec1.x < rec2.x + rec2.width &&
    rec1.x + rec1.width > rec2.x &&
    rec1.y < rec1.y + rec2.height &&
    rec1.y + rec1.height > rec2.y) {
      return "true";
    }
    else {
      return "false";
    }
  }

  console.log(collision(rect1, rect2));

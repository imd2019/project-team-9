export default class BasicObjectText {
  constructor(x, y, width, height, radius, rectColor, title, sizeText) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.rectColor = rectColor;
    this.title = title;
    this.sizeText = sizeText;
    this.image = image;
  }

  display() {
    noStroke();
    fill(this.rectColor);
    rect(this.x, this.y, this.width, this.height, this.radius);
    textSize(this.sizeText);
    textAlign(CENTER, CENTER);
    fill("black");
    text(this.title, this.x + this.width / 2, this.y + this.height / 2);
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    }
    return false;
  }

  clicked() {
    console.log("Test");
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}

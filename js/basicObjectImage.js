export default class BasicObjectImage {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  display() {
    image(this.image, this.x, this.y, this.width, this.height);
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

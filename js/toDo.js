import BasicObjectImage from "./basicObjectImage.js";

export default class ToDo extends BasicObjectImage {
  constructor(x, y, width, height, scaleX, scaleY, image, imageClose) {
    super(x, y, width, height, image);
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.imageClose = imageClose;
    this.xC = this.x - this.width / 2 + 20;
    this.yC = this.y - this.height / 2 + 20;
    this.widthC = 25 * scaleX;
    this.heightC = 25 * scaleY;
  }

  display() {
    // darken screen
    fill("rgba(0,0,0,0.5)");
    rect(0, 0, windowWidth, windowHeight);

    // background
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    imageMode(CORNER);

    // close Button
    image(this.imageClose, this.xC, this.yC, this.widthC, this.heightC);
  }

  hitTest(x, y) {
    if (
      x > this.xC &&
      x < this.xC + this.widthC &&
      y > this.yC &&
      y < this.yC + this.heightC
    ) {
      return true;
    }
    return false;
  }
}

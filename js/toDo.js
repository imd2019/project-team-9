import BasicObjectImage from "./basicObjectImage.js";

export default class ToDo extends BasicObjectImage {
  constructor(
    x,
    y,
    width,
    height,
    scaleX,
    scaleY,
    image,
    imageClose,
    imageAssignment,
    imageAssignmentDone
  ) {
    super(x, y, width, height, image);
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.imageClose = imageClose;
    this.xC = this.x - this.width / 2 + 20;
    this.yC = this.y - this.height / 2 + 20;
    this.widthC = 25 * scaleX;
    this.heightC = 25 * scaleY;
    this.imageAssignment = imageAssignment;
    this.imageAssignmentDone = imageAssignmentDone;
    this.imageA = imageAssignment;
    this.xA = this.x - this.width / 2 + 50;
    this.yA = this.y - this.width / 2 + this.offsetYA;
    this.widthA = 40 * scaleX;
    this.assignmentDone = false;
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

  assignment(offsetYA, textA) {
    if (this.assignmentDone) {
      this.imageA = this.imageAssignmentDone;
    }
    image(this.imageA, this.xA, this.yA + offsetYA, this.widthA, this.widthA);
    text(textA, this.xA + 30 * this.scaleX, this.yA + this.widthA / 2);
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

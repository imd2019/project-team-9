import BasicObjectImage from "./basicObjectImage.js";

export default class Assignment extends BasicObjectImage {
  constructor(
    x,
    y,
    width,
    height,
    scaleX,
    scaleY,
    image,
    imageAssignment,
    imageAssignmentDone,
    text
  ) {
    super(x, y, width, height, image);
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.image = imageAssignment;
    this.imageAssignment = imageAssignment;
    this.imageAssignmentDone = imageAssignmentDone;
    this.text = text;
  }

  display(assignmentDone) {
    if (assignmentDone) {
      this.image = this.imageAssignmentDone;
    } else {
      this.image = this.imageAssignment;
    }
    image(
      this.image,
      this.x * this.scaleX,
      this.y * this.scaleY,
      this.width * this.scaleX,
      this.width * this.scaleX
    );
    text(
      this.text,
      this.x * this.scaleX + 100,
      this.y * this.scaleY + (this.width / 2) * this.scaleY
    );
  }
}

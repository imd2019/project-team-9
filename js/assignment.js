import BasicObjectImage from "./basicObjectImage.js";

export default class Assignment extends BasicObjectImage {
  constructor(x, y, width, height, scaleX, scaleY, textSize) {
    super(x, y, width, height, image);
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.imageAssignment = loadImage("./assets/toDo.png"); //imageAssignment;
    this.imageAssignmentDone = loadImage("./assets/toDo_done.png"); //imageAssignmentDone;
    this.image;
    this.text = "";
    this.font;
    this.companyIndex = 0;
    this.assignmentDone = false;
    this.durationAssignment = 0;
    this.textSize = textSize;
  }

  display() {
    if (this.assignmentDone) {
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

    textFont(this.font);
    textAlign(LEFT);
    textSize(this.textSize);
    text(
      this.text,
      this.x * this.scaleX + 70 * this.scaleX,
      this.y * this.scaleY + (this.width / 2) * this.scaleY - 5 * this.scaleY
    );
  }

  setFont(textFont) {
    this.font = textFont;
  }

  setTextAssignments(text) {
    this.text = text;
  }

  setCompanyIndex(indexOfCompany) {
    this.companyIndex = indexOfCompany;
  }

  setDurationOfAssignment(assignmentDuration) {
    this.durationAssignment = assignmentDuration;
  }

  getDurationOfAssignment() {
    return this.durationAssignment;
  }

  getCompanyIndex() {
    return this.companyIndex;
  }

  setAssignmentDone() {
    this.assignmentDone = true;
    console.log("Hallo");
  }
}

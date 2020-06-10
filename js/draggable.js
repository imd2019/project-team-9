import BasicObjectImage from "./basicObjectImage.js";

export default class Draggable extends BasicObjectImage {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
    this.beingdragged = false;
  }

  clicked() {
    // if (this.beingdragged === true) {
    //   this.x = mouseX - this.width / 2;
    //   this.y = mouseY - this.height / 2;
    // }
  }

  mousePressed() {
    if (this.beingdragged === false && this.hitTest(mouseX, mouseY)) {
      this.beingdragged = true;
    } else {
      this.beingdragged = false;
    }
  }

  mouseDragged() {
    if (this.beingdragged === true) {
      this.x = mouseX - this.width / 2;
      this.y = mouseY - this.height / 2;
    }
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}

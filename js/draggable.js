import BasicObjectImage from "./basicObjectImage.js";

export default class Draggable extends BasicObjectImage {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
  }

  clicked() {
    if (mouseIsPressed) {
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

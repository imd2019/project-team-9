import BasicObjectImage from "./basicObjectImage.js";

export default class User extends BasicObjectImage {
  constructor(x, y, width, height, userImage, backgroundUserImage) {
    super(x, y, width, height);

    this.gender = false;
    this.userSelection = true;
    this.userImage = userImage;
    this.backgroundUserImage = backgroundUserImage;
    this.logoHover = loadImage("./assets/logoHover.png");
  }

  display() {
    fill("rgba(0,0,0,0)");
    noStroke();

    rect(this.x, this.y, this.width, this.height, this.gender);
    image(this.userImage, this.x, this.y, this.width, this.height);
  }

  clicked() {
    this.userSelection = false;
    this.gender = true;
  }
  mouseOver() {
    if (this.hitTest(mouseX, mouseY)) {
      image(this.logoHover, this.x + 160, 80, 60, 70);
      image(this.backgroundUserImage, this.x, this.y, this.width, this.height);
    } else {
    }
  }
}

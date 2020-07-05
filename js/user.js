import BasicObjectImage from "./basicObjectImage.js";

export default class User extends BasicObjectImage {
  constructor(x, y, width, height, userImage, backgroundUserImage, logoHover) {
    super(x, y, width, height);

    this.gender = false;
    this.userSelection = true;
    this.userImage = userImage;
    this.backgroundUserImage = backgroundUserImage;
    this.logoHover = logoHover;
    this.scaleX = windowWidth / 1536;
    this.scaleY = windowWidth / 1536;
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
      image(
        this.logoHover,
        this.x + 110 * this.scaleX,
        this.y - 40 * this.scaleY,
        60 * this.scaleX,
        70 * this.scaleY
      );
      image(this.backgroundUserImage, this.x, this.y, this.width, this.height);
    } else {
    }
  }
}

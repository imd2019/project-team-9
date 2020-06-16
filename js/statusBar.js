export default class StatusBar {
  constructor(
    x,
    y,
    width,
    height,
    image,
    scaleX,
    scaleY,
    exclamationImage,
    sunImage,
    calenderImage,
    clockImage
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;

    this.scaleX = scaleX;
    this.scaleY = scaleY;

    this.yObject = this.y - 25;

    this.exclamationImage = exclamationImage;
    this.xE = this.x - 320 * this.scaleX;
    this.widthE = 9 * this.scaleX;
    this.heightE = 43.5 * this.scaleY;
    this.showToDo = false;

    this.sunImage = sunImage;
    this.xS = this.x + 70 * this.scaleX;
    this.widthS = 44.4 * scaleX;
    this.heightS = 44.4 * scaleY;

    this.calenderImage = calenderImage;
    this.xC = this.x + 140 * this.scaleX;
    this.widthC = 53.6 * scaleX;
    this.heightC = 44 * scaleY;

    this.clockImage = clockImage;
    this.xClock = this.x + 220 * this.scaleX;
    this.widthClock = 110 * scaleX;
    this.heightClock = 44.4 * scaleY;
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    imageMode(CORNER);
    // exclamation mark
    image(
      this.exclamationImage,
      this.xE,
      this.yObject,
      this.widthE,
      this.heightE
    );
    // sun
    image(this.sunImage, this.xS, this.yObject, this.widthS, this.heightS);
    // calender
    image(this.calenderImage, this.xC, this.yObject, this.widthC, this.heightC);
    // clock
    image(
      this.clockImage,
      this.xClock,
      this.yObject,
      this.widthClock,
      this.heightClock
    );
  }

  hitTest(x, y) {
    if (
      x > this.xE - 10 &&
      x < this.xE + this.widthE + 10 &&
      y > this.yObject &&
      y < this.yObject + this.heightE
    ) {
      return true;
    }
    return false;
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.showToDo = true;
    }
  }
}

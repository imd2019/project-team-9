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

    this.exclamationImage = exclamationImage;
    this.xE = this.x - 320 * this.scaleX;
    this.yE = this.y - 3 * (this.scaleY * -1);
    this.widthE = 9 * this.scaleX;
    this.heightE = 43.5 * this.scaleY;
    this.showToDo = false;

    this.sunImage = sunImage;
    this.xS = this.x + 115 * this.scaleX;
    this.yS = this.y - 3 * (this.scaleY * -1);
    this.widthS = 44.4 * scaleX;
    this.heightS = 44.4 * scaleY;

    this.calenderImage = calenderImage;
    this.xC = this.x + 180 * this.scaleX;
    this.yC = this.y - 3 * (this.scaleY * -1);
    this.widthC = 53.6 * scaleX;
    this.heightC = 44.4 * scaleY;

    this.clockImage = clockImage;
    this.xClock = this.x + 280 * this.scaleX;
    this.yClock = this.y - 3 * (this.scaleY * -1);
    this.widthClock = 110 * scaleX;
    this.heightClock = 44.4 * scaleY;
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    // exclamation mark
    image(this.exclamationImage, this.xE, this.yE, this.widthE, this.heightE);
    // sun
    image(this.sunImage, this.xS, this.yS, this.widthS, this.heightS);
    // calender
    image(this.calenderImage, this.xC, this.yC, this.widthC, this.heightC);
    // clock
    image(
      this.clockImage,
      this.xClock,
      this.yClock,
      this.widthClock,
      this.heightClock
    );
  }

  hitTest(x, y) {
    if (
      x > this.xE &&
      x < this.xE + this.widthE &&
      y > this.yE &&
      y < this.yE + this.heightE
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

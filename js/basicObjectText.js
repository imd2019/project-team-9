export default class BasicObjectText {
  constructor(
    x,
    y,
    width,
    height,
    radius,
    rectColor,
    title,
    sizeText,
    trackLength
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.rectColor = rectColor;
    this.textColor = "black";
    this.title = title;
    this.sizeText = sizeText;
    this.image = image;
    this.textFont = textFont;
    this.locationSelection = false;
    this.trackLength = trackLength;
  }

  display() {
    noStroke();
    fill(this.rectColor);
    rect(this.x, this.y, this.width, this.height, this.radius);
    textSize(this.sizeText);
    textAlign(CENTER, CENTER);
    textFont(this.textFont);
    fill(this.textColor);
    text(this.title, this.x + this.width / 2, this.y + this.height / 2);
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    }
    return false;
  }

  clicked() {
    this.locationSelection = true;
    console.log("Test");
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
      return true;
    }
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setFont(font) {
    this.textFont = font;
  }

  setText(text) {
    this.title = text;
  }
}

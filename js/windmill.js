import BasicObjectImage from "./basicObjectImage.js";

export default class Windmill extends BasicObjectImage {
  constructor(x, y, width, height, image, scaleX, scaleY) {
    super(x, y, width, height, image);
    this.rotation = 0;
    this.speed = 0;
    this.setSpeedAndAngle = true;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }

  display() {
    push();
    imageMode(CENTER);
    angleMode(DEGREES);
    translate(this.x * this.scaleX, this.y * this.scaleY);
    rotate(this.rotation);
    image(
      this.image,
      0,
      0,
      this.width * this.scaleX,
      this.height * this.scaleY
    );
    pop();
  }

  rotateWindmill() {
    if (this.setSpeedAndAngle) {
      this.speed = random(0, 2);
      this.rotate = Math.random(0, 361);
      this.setSpeedAndAngle = false;
    }

    this.rotation += this.speed;

    if (this.rotation > 360) {
      this.rotation = 0;
    }
  }
}

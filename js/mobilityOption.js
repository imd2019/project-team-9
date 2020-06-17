import BasicObjectText from "./basicObjectText.js";

export default class MobilityOption extends BasicObjectText {
  constructor(x, y, width, height, titleMobi) {
    super(x, y, width, height);
    // this.cost = cost;
    // this.trackLength = trackLength;
    // this.duration = duration;
    // this.enviromentalInfluence = enviromentalInfluence;
    // this.productivityInfluence = productivityInfluence;
    this.hidden = true;
    this.selected = false;
    this.titleMobi = titleMobi;
  }

  display() {
    if (this.selected === true) {
      this.hidden = true;
    }
    if (this.hidden === false) {
      push();

      noStroke();
      fill(105);

      rect(this.x, this.y, this.width, this.height, 10);

      pop();
      text(this.titleMobi, this.x + this.width / 2, this.y + this.height / 2);
    }
  }

  clicked() {
    this.selected = true;
  }
}

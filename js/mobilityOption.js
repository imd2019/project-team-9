import BasicObjectText from "./basicObjectText.js";

export default class MobilityOption extends BasicObjectText {
  constructor(
    x,
    y,
    width,
    height,
    cost,
    velocity,
    environmentalInfluence,
    titlemobi
  ) {
    super(x, y, width, height);
    this.cost = cost;
    this.velocity = velocity;

    this.environmentalInfluence = environmentalInfluence;

    // this.satisfactionInfluence = satisfactionInfluence;
    this.hidden = true;
    this.selected = false;
    this.duration = 0;
    this.titlemobi = titlemobi;
  }

  display() {
    // if (this.selected === true) {
    //   this.hidden = true;
    // }

    if (!this.hidden) {
      push();

      noStroke();
      fill(105);

      rect(this.x, this.y, this.width, this.height, 10);

      pop();
      text(this.titlemobi, this.x + this.width / 2, this.y + this.height / 2);
    }
  }

  clicked() {
    this.selected = true;
    //   this.selected = false;
  }
}

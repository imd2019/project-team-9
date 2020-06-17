import BasicObjectText from "./basicObjectText.js";

export default class MobilityOption extends BasicObjectText {
  constructor(x, y, width, height, cost, velocity, enviromentalInfluence) {
    super(x, y, width, height);
    this.cost = cost;
    this.velocity = velocity;

    this.enviromentalInfluence = enviromentalInfluence;

    // this.satisfactionInfluence = satisfactionInfluence;
    this.hidden = true;
    this.selected = false;
    this.duration = 0;
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
    }
  }
  //Duration = inactive time
  // calculateDuration(trackLength, velocity) {
  //   this.duration = trackLength / velocity;
  // }

  clicked() {
    this.selected = true;
  }
}

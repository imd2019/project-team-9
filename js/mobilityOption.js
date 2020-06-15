import BasicObjectImage from "./basicObjectImage.js";

export default class MobilityOption extends BasicObjectImage {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
    // this.cost = cost;
    // this.trackLength = trackLength;
    // this.duration = duration;
    // this.enviromentalInfluence = enviromentalInfluence;
    // this.productivityInfluence = productivityInfluence;
    this.hidden = true;
    this.selected = false;
    this.mobilityOption = [];
    // this.svgObject = document.getElementById("e3idstvo5z3s1").style.display;
    // this.style = document.getElementById("e3idstvo5z3s1").style.display;
    // this.bus = document.querySelector("bus");
    // this.classes = div.classList;
  }

  display() {
    if (this.hidden === false) {
      push();

      noStroke();
      fill(105);

      rect(this.x, this.y, this.width, this.height, 10);

      pop();
    }
  }

  // clicked() {
  //   this.hidden = true;
  // }
}

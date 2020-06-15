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
      rectMode(CENTER);
      noStroke();
      fill(105);
      for (let i = 0; i < 3; i++) {
        rect(this.x - 350 + 350 * i, this.y, this.width, this.height, 10);
      }

      pop();
      //   this.hidden = true;
    }
  }

  clicked() {
    this.hidden = true;
    // bus.classList.add("svgdisabled");
    // classes.add(style.opacity ="0.5");
    // document
    //   .getElementById("e3idstvo5z3s1")
    //   .addEventListener("mouseclicked", mouseClicked);
    // document.getElementsById("bus").style.visibility = "hidden";
    // document.getElementsById("e3idstvo5z3s1").style.display = "none";
    // if (this.style === "none") {
    //   document.getElementById("bus").style.display = "block";
    // } else {
    //   document.getElementById("bus").style.display = "none";
    // }
    // this.svgObject.style.visibility = "hidden";
  }
}

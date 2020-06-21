import BasicObjectText from "./basicObjectText.js";

export default class MobilityOption extends BasicObjectText {
  constructor(
    x,
    y,
    width,
    height,
    cost,
    velocity,
    enviromentalInfluence,
    titlemobi
  ) {
    super(x, y, width, height);
    this.cost = cost;
    this.velocity = velocity;

    this.enviromentalInfluence = enviromentalInfluence;

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

    if (this.hidden === false) {
      push();

      noStroke();
      fill(105);

      rect(this.x, this.y, this.width, this.height, 10);

      pop();
      text(this.titlemobi, this.x + this.width / 2, this.y + this.height / 2);
    }
  }
  //Duration = inactive time
  // calculateValues(hitBoxArray, mobilityOptions, enviromentValue, maximalCosts) {
  //   for (let i = 0; i < mobilityOptions.length + 1; i++) {
  //     if (hitBoxArray[i].location) {
  //       //Minus One because Call does not have a travel duration (otherwise it would be infinite LOL)
  //       for (let j = 0; j < mobilityOptions.length - 1; j++) {
  //         mobilityOptions[j].duration =
  //           hitBoxArray[i].trackLength / mobilityOptions[j].velocity;

  //         if (mobilityOptions[j].selected) {
  //           enviromentValue =
  //             hitBoxArray[i].trackLength *
  //             mobilityOptions[j].enviromentalInfluence;
  //           //console.log(enviromentValue);

  //           maximalCosts = hitBoxArray[i].trackLength * mobilityOptions[j].cost;
  //         }
  //       }
  //     }
  //   }
  //   // return enviromentValue;
  // }

  // returnEnviroment() {}

  clicked() {
    this.selected = true;
    //   this.selected = false;
  }
}

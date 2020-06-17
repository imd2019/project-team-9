import BasicObjectImage from "./basicObjectImage.js";

export default class Draggable extends BasicObjectImage {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
    this.clickTest = false;
    this.productivity = 0;
    this.workingHours = 0;
    this.isAvailable = true;
    this.satisfaction = 0;
  }

  clicked() {
    if (mouseIsPressed) {
      this.x = mouseX - this.width / 2;
      this.y = mouseY - this.height / 2;
    } else {
      this.mouseReleased();
    }
  }

  mouseReleased() {
    this.clickTest = false;
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clickTest = true;
    }
  }

  setPreferences() {
    // hier muss noch rein, welche mobility option die Zufriedenheit steigert oder sinken lässt, dazu muss ich aber erstmal schauen, wie die mobility options aufgebaut sind
    this.satisfaction = Math.floor(random(41, 70));
  }

  checkSatisfaction() {
    if (this.workingHours > 10) {
      this.satisfaction -= 20;
    }

    // hier kommt noch: wenn die mobility option die selbe wie letzes Mal ist, sinkt die satisfaction
    // if(mobilityOptionDayBefore === mobilityoptionNow) {
    //   this.satisfaction -= 20;
    // }

    // hier kommt noch: wenn die mobilityOption den preferences entspricht, dann steigt die Zufriedenheit
  }

  checkWorkingHours(activeTime, inactiveTime) {
    this.workingHours = activeTime + inactiveTime;
  }

  checkProductivity(inactiveTime) {
    this.productivity = (inactiveTime / this.workingHours) * 100;
  }

  checkAvailability() {
    return this.isAvailable;
  }
}

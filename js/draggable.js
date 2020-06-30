import BasicObjectImage from "./basicObjectImage.js";

export default class Draggable extends BasicObjectImage {
  constructor(x, y, width, height, image) {
    super(x, y, width, height, image);
    this.clickTest = false;
    this.productivity = 0;
    this.workingHours = 0;
    this.isAvailable = true;
    this.satisfaction = 0;
    this.totalActiveTime = 0;
    this.isDragged = false;
    this.alreadyChecked = false;
    this.hoursUnavailable = 0;
    this.setHoursUnavailable = false;
    this.timerCoolDown = 0;
    this.timerCoolDownFrames = 0;
  }

  clicked() {
    if (mouseIsPressed && this.isAvailable) {
      this.x = mouseX - this.width / 2;
      this.y = mouseY - this.height / 2;
      this.isDragged = true;
    } else {
      this.mouseReleased();
      this.isDragged = false;
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
    parseFloat(this.workingHours);
    this.workingHours += parseFloat(activeTime) + parseFloat(inactiveTime);

    parseFloat(this.totalActiveTime);
    this.totalActiveTime += parseFloat(activeTime);
  }

  getWorkingHours() {
    return this.workingHours;
  }

  checkProductivity() {
    this.productivity =
      (parseFloat(this.totalActiveTime) / parseFloat(this.workingHours)) * 100;
  }

  getProductivity() {
    return parseFloat(this.productivity);
  }

  checkAvailability() {
    return this.isAvailable;
  }

  setGenderImage(genderImage) {
    this.image = genderImage;
  }

  // cool down of workers
  coolDown(timeNotAvailable, timeMoving) {
    if (!this.setHoursUnavailable) {
      console.log(timeNotAvailable);
      console.log(timeMoving);
      this.hoursUnavailable =
        parseFloat(timeNotAvailable) + parseFloat(timeMoving);
      console.log(this.hoursUnavailable);
      this.setHoursUnavailable = true;
    }
    this.timerCoolDownFrames++;
    if (this.timerCoolDownFrames === 30) {
      this.timerCoolDown++;
      this.timerCoolDownFrames = 0;
    }
    if (this.timerCoolDown === 59) {
      this.hoursUnavailable--;
      this.timerCoolDown = 0;
      if (this.hoursUnavailable <= 0) {
        this.isAvailable = true;
        this.setHoursUnavailable = false;
        console.log(this.isAvailable);
      }
    }
  }
}

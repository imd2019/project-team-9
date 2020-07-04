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
    this.defaultX = x;
    this.defaultY = y;
    this.hideOptionForWorker = false;
  }

  clicked() {
    if (mouseIsPressed && this.isAvailable) {
      this.hideOptionForWorker = false;
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
  setCoolDown(timeNotAvailable, timeMoving) {
    this.hoursUnavailable =
      parseFloat(timeNotAvailable) + parseFloat(timeMoving);
    console.log(this.hoursUnavailable);
    this.hoursUnavailable = this.hoursUnavailable * 60; // hours in minutes
    this.hoursUnavailable = this.hoursUnavailable * 30; // minutes in seconds
  }

  coolDownUpdate() {
    this.hoursUnavailable--;
    if (this.hoursUnavailable <= 0) {
      this.x = this.defaultX;
      this.y = this.defaultY;
      this.isAvailable = true;
    }
  }
}

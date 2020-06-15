export default class CollisionDetection {
  constructor() {
    this.overlapping = false;
  }

  detection(arrayOne, arrayTwo) {
    for (let objectOne of arrayOne) {
      for (let objectTwo of arrayTwo) {
        if (this.isOverlapping(objectOne, objectTwo)) {
          console.log("Die Rechtecke überlappen");
          this.overlapping = true;
        }
      }
    }
  }

  isOverlapping(objectOne, objectTwo) {
    if (
      objectOne.y > objectTwo.y + objectTwo.height ||
      objectOne.y + objectOne.height < objectTwo.y
    ) {
      return false;
    }

    if (
      objectOne.x + objectOne.width < objectTwo.x ||
      objectOne.x > objectTwo.x + objectTwo.width
    ) {
      return false;
    }
    return true;
  }
}

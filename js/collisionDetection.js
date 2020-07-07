export default class CollisionDetection {
  constructor() {
    this.overlapping = false;
  }

  detection(arrayOne, arrayTwo) {
    let output = [];
    for (let objectOne of arrayOne) {
      for (let objectTwo of arrayTwo) {
        if (this.isOverlapping(objectOne, objectTwo)) {
          this.overlapping = true;
          output.push(
            this.getIndexOfArrays(arrayOne, arrayTwo, objectOne, objectTwo)
          );
        }
      }
    }
    return output;
  }

  getIndexOfArrays(arrayOne, arrayTwo, objectOne, objectTwo) {
    let output = [];
    output[0] = arrayOne.indexOf(objectOne);
    output[1] = arrayTwo.indexOf(objectTwo);
    return output;
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

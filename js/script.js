// ==== SETUP ====
import BasicObjectText from "./basicObjectText.js";
import BasicObjectImage from "./basicObjectImage.js";

let mapClass = new BasicObjectImage(0, 0, 300, 300, mapImage);

function draw() {
  mapClass.display();
}
window.draw = draw;

// ==== SETUP ====
import BasicObjectText from "./basicObjectText.js";
import BasicObjectImage from "./basicObjectImage.js";
import MobilityOption from "./mobilityOption.js";
let mapImage = loadImage("../assets/map.png");
let mapClass = new BasicObjectImage(0, 0, windowWidth, windowHeight, mapImage);
let mobilityOption = new MobilityOption(
  windowWidth / 2,
  windowHeight / 2,
  300,
  500
);

function draw() {
  mapClass.display();
  mobilityOption.display();
}

function mouseClicked() {
  mobilityOption.mouseClicked();
  if (mobilityOption.hidden === true) {
    mobilityOption.hidden = false;
  }
  hideSVG();
}

window.mouseClicked = mouseClicked;
window.draw = draw;

function hideSVG() {
  var style = document.getElementById("bus").style.display;
  if (style === "none") document.getElementById("bus").style.display = "block";
  else document.getElementById("bus").style.display = "none";
}

window.hideSVG = hideSVG;

// KOMMENTAR: Für größere Bildschirme alle Objekte von links oben her ausrichten oder Positionen der hitboxen relativ zur Fenstergröße definieren

// ==== SETUP ====
import BasicObjectText from "./basicObjectText.js";
import BasicObjectImage from "./basicObjectImage.js";
import MobilityOption from "./mobilityOption.js";
import Draggable from "./draggable.js";

frameRate(64);

// load images
let mapImage = loadImage("./assets/map.png");

// initiate objects
let mapClass = new BasicObjectImage(0, 0, windowWidth, windowHeight, mapImage);
let hitBoxMesse = new BasicObjectText(
  435,
  95,
  250,
  65,
  10,
  "rgba(0,0,0,0)",
  "Messe",
  30
);

let hitBoxCustomerOne = new BasicObjectText(
  198,
  270,
  75,
  125,
  10,
  "rgba(0,0,0,0)",
  "Kunde 1",
  30
);

let hitBoxCustomerTwo = new BasicObjectText(
  1220,
  84,
  70,
  110,
  10,
  "rgba(0,0,0,0)",
  "Kunde 2",
  30
);

let hitBoxCustomerThree = new BasicObjectText(
  1305,
  530,
  145,
  135,
  10,
  "rgba(0,0,0,0)",
  "Kunde 3",
  30
);

let hitBoxHome = new BasicObjectText(
  960,
  260,
  100,
  120,
  10,
  "rgba(0,0,0,0)",
  "Home",
  30
);

let hitBoxCompany = new BasicObjectText(
  687,
  360,
  110,
  120,
  10,
  "rgba(0,0,0,0)",
  "Company",
  30
);

let testDragger = new Draggable(400, 200, 100, 100, mapImage);

let mobilityOption = new MobilityOption(
  windowWidth / 2,
  windowHeight / 2,
  300,
  500
);

// ==== DRAW ====
function draw() {
  mapClass.display();

  // hitBoxen
  // könnte man noch alles in ein Array packen, um den COde zu kürzen
  hitBoxMesse.display();
  hitBoxCustomerOne.display();
  hitBoxCustomerTwo.display();
  hitBoxCustomerThree.display();
  hitBoxHome.display();
  hitBoxCompany.display();
  testDragger.display();
  // testDragger.mouseClicked();
  testDragger.mouseDragged();

  // mobilityOption.display();
}

// ==== MOUSE CLICKED ====
function mouseClicked() {
  // hitBoxen
  hitBoxMesse.mouseClicked();
  hitBoxCustomerOne.mouseClicked();
  hitBoxCustomerTwo.mouseClicked();
  hitBoxCustomerThree.mouseClicked();
  hitBoxHome.mouseClicked();
  hitBoxCompany.mouseClicked();

  mobilityOption.mouseClicked();
  if (mobilityOption.hidden === true) {
    mobilityOption.hidden = false;
  }
  hideSVG();
}

window.mouseClicked = mouseClicked;
window.draw = draw;

// ==== FUNCTION HIDE ====
function hideSVG() {
  var style = document.getElementById("bus").style.display;
  if (style === "none") document.getElementById("bus").style.display = "block";
  else document.getElementById("bus").style.display = "none";
}
window.hideSVG = hideSVG;

// ==== FUNCTION MOUSEPRESSED ====

function mousePressed() {
  testDragger.mousePressed();
}
window.mousePressed = mousePressed;

// ==== SETUP ====
import BasicObjectText from "./basicObjectText.js";
import BasicObjectImage from "./basicObjectImage.js";
import MobilityOption from "./mobilityOption.js";
import Draggable from "./draggable.js";
import CollisionDetection from "./collisionDetection.js";
import StatusBar from "./statusBar.js";

// variables
let scaleX = windowWidth / 1536;
let scaleY = windowHeight / 750;

// load images
let mapImage = loadImage("./assets/map.png");
let barBG = loadImage("./assets/bar.png");
let exclamationMark = loadImage("./assets/exclamationMark.png");
let close = loadImage("./assets/close.png");
let calender = loadImage("./assets/calender.png");
let clock = loadImage("./assets/clock.png");
let sun = loadImage("./assets/sun.png");

// initiate objects
let mapClass = new BasicObjectImage(0, 0, windowWidth, windowHeight, mapImage);

// hitBoxes
let hitBoxArray = [];

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
hitBoxArray.push(hitBoxMesse);

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
hitBoxArray.push(hitBoxCustomerOne);

let hitBoxCustomerTwo = new BasicObjectText(
  1220,
  84,
  120,
  110,
  10,
  "rgba(0,0,0,0)",
  "Kunde 2",
  30
);
hitBoxArray.push(hitBoxCustomerTwo);

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
hitBoxArray.push(hitBoxCustomerThree);

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
hitBoxArray.push(hitBoxHome);

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
hitBoxArray.push(hitBoxCompany);

// make hitBoxes scaleable
for (let arrayObject of hitBoxArray) {
  arrayObject.x *= scaleX;
  arrayObject.y *= scaleY;
  arrayObject.width *= scaleX;
  arrayObject.height *= scaleY;
}

// statusBar
let statusBarArray = [];
let bar = new StatusBar(
  windowWidth / 2,
  35,
  750,
  70,
  barBG,
  scaleX,
  scaleY,
  exclamationMark,
  sun,
  calender,
  clock
);
statusBarArray.push(bar);

// make status Bar scaleable
for (let arrayObject of statusBarArray) {
  arrayObject.y *= scaleY;
  arrayObject.width *= scaleX;
  arrayObject.height *= scaleY;
}

// to Do list
let testToDo = new BasicObjectText(
  windowWidth / 2 - 250,
  windowHeight / 2 - 250,
  500,
  500,
  10,
  "pink",
  "To Do List",
  30
);

let textX = new BasicObjectImage(
  windowWidth / 2 - 230,
  windowHeight / 2 - 230,
  50,
  50,
  close
);

// faces
let facesArray = [];
let testDragger = new Draggable(400, 200, 100, 100, mapImage);
facesArray.push(testDragger);

let mobilityOption = new MobilityOption(
  windowWidth / 2,
  windowHeight / 2,
  300,
  500
);

let collisionDetectionMap = new CollisionDetection();

// ==== DRAW ====
function draw() {
  mapClass.display();

  bar.display();

  imageMode(CORNER);

  // hitBoxes
  for (let arrayObject of hitBoxArray) {
    arrayObject.display();
  }

  // faces
  for (let arrayObject of facesArray) {
    arrayObject.display();
    arrayObject.mouseClicked();
    if (arrayObject.clickTest) {
      arrayObject.clicked();
    }
  }

  // collision detection
  collisionDetectionMap.detection(facesArray, hitBoxArray);

  // mobilityOption.display();

  // show to Do
  if (bar.showToDo) {
    testToDo.display();
    textX.display();
  }
}

// ==== MOUSE CLICKED ====
function mouseClicked() {
  // status Bar
  bar.mouseClicked();
  textX.mouseClicked();

  // close To Do
  if (textX.wasClicked) {
    bar.showToDo = false;
    textX.wasClicked = false;
  }

  // hitBoxes
  for (let arrayObject of hitBoxArray) {
    arrayObject.mouseClicked();
  }

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

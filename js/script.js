// ==== SETUP ====
import BasicObjectText from "./basicObjectText.js";
import BasicObjectImage from "./basicObjectImage.js";
import MobilityOption from "./mobilityOption.js";
import Draggable from "./draggable.js";
import CollisionDetection from "./collisionDetection.js";
import User from "./User.js";
import StatusBar from "./statusBar.js";
import ToDo from "./toDo.js";

// variables
let scaleX = windowWidth / 1536;
let scaleY = windowHeight / 750;

let timerAll = 0;
let hourTimer = 6;
let minuteTimer = 0;
let timerDay = 1;
let time = 0;
let showIntermediateResult = false;

// load font
let rokkittFont = loadFont("./assets/Rokkitt-Bold.ttf");
let segeoUiFont = loadFont("./assets/segoeuisl.ttf");

// load images
let mapImage = loadImage("./assets/map.png");

let sheImage = loadImage("./assets/she.png");
let heImage = loadImage("./assets/he.png");
let theyImage = loadImage("./assets/they.png");
let sheGenderImage = loadImage("./assets/she gender.png");
let theyGenderImage = loadImage("./assets/they gender.png");
let heGenderImage = loadImage("./assets/he gender.png");

let workerOneImage = loadImage("./assets/worker_one.png");
let workerTwoImage = loadImage("./assets/worker_two.png");
let workerThreeImage = loadImage("./assets/worker_three.png");
let workerFourImage = loadImage("./assets/worker_four.png");

let barBG = loadImage("./assets/bar.png");
let exclamationMark = loadImage("./assets/exclamationMark.png");
let calender = loadImage("./assets/calender.png");
let clock = loadImage("./assets/clock.png");
let sun = loadImage("./assets/sun.png");

let toDoBG = loadImage("./assets/toDo_BG.png");
let close = loadImage("./assets/close.png");
let toDoBox = loadImage("./assets/toDo.png");
let toDoBoxDone = loadImage("./assets/toDo_done.png");

// ==== INITIATE OBJECTS ====
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

// mobility options
let mobilityOptions = [];
for (let i = 0; i < 3; i++) {
  let mobilityOption = new MobilityOption(
    windowWidth / 2 - 500 + 350 * i,
    windowHeight / 2 - 250,
    300,
    500
  );
  mobilityOptions.push(mobilityOption);
}

let collisionDetectionMap = new CollisionDetection();

// user gender
let showGame = false;
let userImage = [];
userImage.push(sheGenderImage);
userImage.push(theyGenderImage);
userImage.push(heGenderImage);
let users = [];
for (let i = 0; i < 3; i++) {
  let user = new User(
    windowWidth / 2 - 525 + 400 * i,
    windowHeight / 2 - 300,
    300,
    650,
    userImage[i]
  );
  users.push(user);
}

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
let toDoList = new ToDo(
  windowWidth / 2,
  windowHeight / 2,
  745 * scaleX,
  393 * scaleY,
  scaleX,
  scaleY,
  toDoBG,
  close,
  toDoBG,
  toDoBoxDone
);
let assignmentArray = [];

// faces
let facesArray = [];
let imageFace;

for (let i = 0; i < 5; i++) {
  if (i === 0) {
    imageFace = workerOneImage;
  }
  if (i === 1) {
    imageFace = workerTwoImage;
  }
  if (i === 2) {
    imageFace = sheImage;
  }
  if (i === 3) {
    imageFace = workerThreeImage;
  }
  if (i === 4) {
    imageFace = workerFourImage;
  }
  facesArray[i] = new Draggable(490 + i * 65, 5, 50, 50, imageFace);
}

// make faces scaleable
for (let arrayObject of facesArray) {
  arrayObject.x *= scaleX;
  arrayObject.y *= scaleY;
  arrayObject.width *= scaleX;
  arrayObject.height *= scaleY;
}

// initiate time
let timer = new BasicObjectText(
  bar.x + 222 * scaleX,
  bar.y - 17 * scaleY,
  105 * scaleX,
  30 * scaleY,
  10,
  "rgba(0,0,0, 0)",
  time,
  27 * scaleX
);
timer.setTextColor("white");
timer.setFont(rokkittFont);

let day = new BasicObjectText(
  bar.x + 140 * scaleX,
  bar.y - 17 * scaleY,
  54 * scaleX,
  30 * scaleY,
  10,
  "rgba(0,0,0, 0)",
  timerDay,
  27 * scaleX
);
day.setTextColor("white");
day.setFont(rokkittFont);

// set Time
function setTime() {
  if (!showIntermediateResult) {
    timerAll++;
  }

  if (timerAll === 30) {
    minuteTimer++;
    timerAll = 0;
  }

  if (minuteTimer === 59) {
    minuteTimer = 0;
    hourTimer++;
  }

  if (hourTimer === 7) {
    showIntermediateResult = true;
    minuteTimer = 0;
    hourTimer = 6;
    timerDay++;
  }

  // set 0 before numbers less than 10
  if (hourTimer < 10) {
    time = "0" + hourTimer;
  } else {
    time = hourTimer;
  }

  if (minuteTimer < 10) {
    time += ":" + "0" + minuteTimer;
  } else {
    time += ":" + minuteTimer;
  }

  return time;
}

// intermediate result
let resultI = new BasicObjectImage(
  windowWidth / 2,
  windowHeight / 2,
  400,
  300,
  toDoBG
);

let buttonStartTimeAgain = new BasicObjectText(
  windowWidth / 2 + 50,
  windowHeight / 2 + 50,
  100,
  50,
  10,
  "pink",
  "Start Time again",
  30
);

// ==== DRAW ====
function draw() {
  //User selection display
  fill(186, 226, 227);
  rect(0, 0, windowWidth, windowHeight);
  for (let i = 0; i < 3; i++) {
    if (users[i].userSelection) {
      for (let i = 0; i < 3; i++) {
        users[i].display();
      }
    } //boolean to make it disappear after selecting one
    if (!users[i].userSelection) {
      for (let i = 0; i < 3; i++) {
        users[i].userSelection = false;
        showGame = true;
      }
    }
  }

  // if (showGame && showIntermediateResult) {
  textFont("segeoUiFont");

  mapClass.display();

  bar.display();

  // timer
  timer.display();
  day.display();
  timer.setText(setTime());
  day.setText(timerDay);

  imageMode(CORNER);

  // hitBoxes
  for (let arrayObject of hitBoxArray) {
    arrayObject.display();
  }

  // faces
  for (let i = 0; i < facesArray.length; i++) {
    facesArray[i].display();
    facesArray[i].mouseClicked();
    if (facesArray[i].clickTest) {
      facesArray[i].clicked();
    }
  }

  // collision detection
  collisionDetectionMap.detection(facesArray, hitBoxArray);

  // show to Do
  if (bar.showToDo) {
    toDoList.display();

    // // initiate and show assignments
    // for (let i = 0; i < 5; i++) {
    //   assignmentArray[i] = toDoList.assignment(i + 20, "Test");
    // }
  }

  // show intermediate result
  if (showIntermediateResult) {
    resultI.display();
    buttonStartTimeAgain.display();
  }

  // IF Bedingung für verschiedene gender
  // if (users[2].gender === true) {
  //   testDragger1.display();
  // }
  // }

  //Anzeigen von Auswahlbuttons und SVG Hover
  // if (collisionDetectionMap.overlapping === true) {
  //   hideSVG();
  //   for (let i = 0; i < 3; i++) {
  //     mobilityOptions[i].hidden = false;
  //   }
  // }
  // for (let i = 0; i < 3; i++) {
  //   mobilityOptions[i].display();
  // }

  // console.log(mobilityOption.hidden);
  //console.log(collisionDetectionMap.overlapping);
  //}
}

// ==== MOUSE CLICKED ====
function mouseClicked() {
  // status Bar
  bar.mouseClicked();
  toDoList.mouseClicked();

  // close To Do
  if (toDoList.wasClicked) {
    bar.showToDo = false;
    toDoList.wasClicked = false;
  }

  // hitBoxes
  for (let arrayObject of hitBoxArray) {
    arrayObject.mouseClicked();
  }

  // mobilityOption.mouseClicked();
  if (showGame === false) {
    for (let i = 0; i < 3; i++) {
      users[i].mouseClicked();
    }
  }

  // restart Time
  if (buttonStartTimeAgain.mouseClicked()) {
    showIntermediateResult = false;
  }

  hideSVG();
}

window.mouseClicked = mouseClicked;
window.draw = draw;

// ==== FUNCTION HIDE ====
function hideSVG() {
  //ACCESSING ALL ELEMENTS OF SAME CLASS IN HTML
  var elements = document.getElementsByClassName("svg");
  for (var i = 0; i < elements.length; i++) {
    // if (elements[i].style.display === "none") {
    elements[i].style.display = "block";
    // }
    // else elements[i].style.display = "none";
  }
  // console.log(elements);
}
window.hideSVG = hideSVG;

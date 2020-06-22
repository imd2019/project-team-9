// ==== SETUP ====
import BasicObjectText from "./basicObjectText.js";
import BasicObjectImage from "./basicObjectImage.js";
import MobilityOption from "./mobilityOption.js";
import Draggable from "./draggable.js";
import CollisionDetection from "./collisionDetection.js";
import User from "./User.js";
import StatusBar from "./statusBar.js";
import ToDo from "./toDo.js";
import Assignment from "./assignment.js";

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
let mapImage = loadImage("./assets/Map 2.png");

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
// let messe = false;
// let customer1 = false;

let hitBoxMesse = new BasicObjectText(
  435,
  95,
  250,
  65,
  10,
  "rgba(0,0,0,0)",
  "Messe",
  30,
  560
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
  30,
  180
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
  30,
  400
);
hitBoxArray.push(hitBoxCustomerTwo);

let hitBoxCustomerThree = new BasicObjectText(
  1305,
  530,
  145,
  135,
  10,
  "rgba(0,0,0,0)",
  "Tochterfirma",
  30,
  90
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
  30,
  0
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
  30,
  15
);
hitBoxArray.push(hitBoxCompany);

let collisionDetectionMap = new CollisionDetection();

// mobility options
let mobilityOptions = [];
let mobilityOptionButton;
let cost = [0.5, 0.24, 0.3, 0.53, 0];
let velocity = [120, 150, 1000, 80, 0];
let enviromentalInfluence = [147, 32, 230, 80, 0];
let titlemobi = ["Auto", "Zug", "Flugzeug", "Bus", "Call"];

// mobilityOptions[0] = Auto
// mobilityOptions[1] = Zug
// mobilityOptions[2] = Flugzeug
// mobilityOptions[3] = Bus
// mobilityOptions[4] = Call
for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    mobilityOptionButton = new MobilityOption(
      windowWidth / 2 - 500 + 350 * i,
      windowHeight / 2 - 250,
      300,
      500,
      cost[i],
      velocity[i],
      enviromentalInfluence[i],
      titlemobi[i]
    );
  }

  if (i > 1) {
    mobilityOptionButton = new MobilityOption(
      windowWidth / 2 + 200,
      windowHeight / 2 - 250,
      300,
      500,
      cost[i],
      velocity[i],
      enviromentalInfluence[i],
      titlemobi[i]
    );
  }

  mobilityOptions.push(mobilityOptionButton);
}

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

// assignments
let assignmentArray = [];
for (let i = 0; i < 5; i++) {
  assignmentArray[i] = new Assignment(
    550,
    200 + i * 70,
    50,
    50,
    scaleX,
    scaleY,
    toDoBox,
    toDoBox,
    toDoBoxDone,
    "Test"
  );
}

// faces
let facesArray = [];
let imageFace;
let chosenGenderImage = sheImage;

for (let i = 0; i < 5; i++) {
  if (i === 0) {
    imageFace = workerOneImage;
  }
  if (i === 1) {
    imageFace = workerTwoImage;
  }
  if (i === 2) {
    imageFace = chosenGenderImage;
  }
  if (i === 3) {
    imageFace = workerThreeImage;
  }
  if (i === 4) {
    imageFace = workerFourImage;
  }
  facesArray[i] = new Draggable(490 + i * 65, 5, 50, 50, imageFace);
}

for (let i = 0; i < facesArray.length; i++) {
  facesArray[i].setPreferences();
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

  if (hourTimer === 20) {
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

// enviroment value
let enviromentValue = 0;
let maximalCosts = 0;

// ==== DRAW ====
function draw() {
  //User selection display
  fill(186, 226, 227);
  rect(0, 0, windowWidth, windowHeight);

  for (let i = 0; i < 3; i++) {
    if (users[i].userSelection) {
      users[i].display();
    } //boolean to make it disappear after selecting one
    if (!users[i].userSelection) {
      users[i].userSelection = false;
      showGame = true;
    }
  }

  if (showGame) {
    mapClass.display();

    // chose gender Image
    if (users[0].gender) {
      chosenGenderImage = sheImage;
    }
    if (users[1].gender) {
      chosenGenderImage = theyImage;
    }
    if (users[2].gender) {
      chosenGenderImage = heImage;
    }

    // if (showGame && showIntermediateResult) {
    textFont("segeoUiFont");

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

    for (let i = 0; i < 5; i++) {
      mobilityOptions[i].display();
      // mobilityOptions[i].calculateValues(
      //   hitBoxArray,
      //   mobilityOptions,
      //   enviromentValue,
      //   maximalCosts
      // );
    }

    //Anzeigen von Auswahlbuttons und SVG Hover

    // hitBoxArray [0]= Messe
    // hitBoxArray [1]= Kunde1
    // hitBoxArray [2]= Kunde 2
    // hitBoxArray [3]= Tochterfirma
    // hitBoxArray [4]= Home wird nicht benötigt
    // hitBoxArray [5]= Firma
    if (collisionDetectionMap.overlapping) {
      for (let i = 0; i < hitBoxArray.length; i++) {
        if (hitBoxArray[i].locationSelection) {
          mobilityOptions[0].hidden = false;
          mobilityOptions[1].hidden = false;
          if (
            hitBoxArray[0].locationSelection ||
            hitBoxArray[2].locationSelection ||
            hitBoxArray[3].locationSelection
          ) {
            mobilityOptions[2].hidden = false;
          }
          if (hitBoxArray[1].locationSelection) {
            mobilityOptions[4].hidden = false;
          }
          if (hitBoxArray[5].locationSelection) {
            mobilityOptions[3].hidden = false;
          }

          showSVG();
        }
      }
    }
    for (let i = 0; i < 5; i++) {
      if (mobilityOptions[i].selected === true) {
        for (let i = 0; i < 5; i++) {
          mobilityOptions[i].hidden = true;
          collisionDetectionMap.overlapping = false;
        }
        hideSVG();
      }
    }

    // collision detection
    collisionDetectionMap.detection(facesArray, hitBoxArray);

    // faces
    for (let i = 0; i < facesArray.length; i++) {
      facesArray[i].display();

      //How to say all Faces cant be moved while selecting --> overlapping wird ständig wieder true gesetzt
      //
      // if (!collisionDetectionMap.overlapping) {
      facesArray[i].mouseClicked();
      // }

      if (facesArray[i].clickTest) {
        facesArray[i].clicked();
      }
    }

    // show to Do
    if (bar.showToDo) {
      toDoList.display();
      for (let arrayObject of assignmentArray) {
        arrayObject.display();
      }
    }
  }

  //RESETTING CONDITIONS FOR MOBILITY OPTION DISPLAY IF SOMETHING HAS BEEN SELECTED, ENABLING IT TO BE SHOWN AGAIN IF DRAGGED ON IT AGAIN OR SOMEWHERE ELSE
  if (!collisionDetectionMap.overlapping) {
    for (let i = 0; i < 5; i++) {
      mobilityOptions[i].selected = false;
    }
    for (let i = 0; i < hitBoxArray.length; i++) {
      hitBoxArray[i].locationSelection = false;
    }
  }

  // show intermediate result
  if (showIntermediateResult) {
    resultI.display();
    buttonStartTimeAgain.display();
  }
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

  //Mobility options
  for (let i = 0; i < 5; i++) {
    if (mobilityOptions[i].hidden === false) {
      mobilityOptions[i].mouseClicked();
    }
  }

  //CALCULATE DURATION & ENVIROMENTINFLUENCE & COSTS
  //Werte sind nur für Hinfahrt
  for (let i = 0; i < hitBoxArray.length; i++) {
    if (hitBoxArray[i].locationSelection) {
      //Minus One because Call does not have a travel duration (otherwise it would be infinite LOL)
      for (let j = 0; j < mobilityOptions.length - 1; j++) {
        mobilityOptions[j].duration =
          hitBoxArray[i].trackLength / mobilityOptions[j].velocity;
      }
      facesArray[collisionDetectionMap.indexOfFace].isAvailable = false;
    }
  }

  for (let i = 0; i < mobilityOptions.length + 1; i++) {
    if (hitBoxArray[i].locationSelection) {
      for (let j = 0; j < mobilityOptions.length - 1; j++) {
        if (mobilityOptions[j].selected) {
          enviromentValue +=
            hitBoxArray[i].trackLength *
            mobilityOptions[j].enviromentalInfluence;
          maximalCosts += hitBoxArray[i].trackLength * mobilityOptions[j].cost;
          if (!facesArray[i].isAvailable) {
            facesArray[i].checkWorkingHours(0, mobilityOptions[j].duration);
          }
        }
      }
    }
  }

  //Gender selection
  if (!showGame) {
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

// ==== FUNCTION SHOW ====
function showSVG() {
  //ACCESSING ALL ELEMENTS OF SAME CLASS IN HTML
  var elements = document.getElementsByClassName("svg");
  var bus = document.getElementById("bus");
  var call = document.getElementById("call");
  var plane = document.getElementById("plane");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  if (hitBoxArray[5].locationSelection) {
    bus.style.display = "block";
  }

  if (hitBoxArray[1].locationSelection) {
    call.style.display = "block";
  }

  if (
    hitBoxArray[0].locationSelection ||
    hitBoxArray[2].locationSelection ||
    hitBoxArray[3].locationSelection
  ) {
    plane.style.display = "block";
  }
}
window.showSVG = showSVG;

// ==== FUNCTION HIDE ====

function hideSVG() {
  //ACCESSING ALL ELEMENTS OF SAME CLASS IN HTML
  var elements = document.getElementsByClassName("svg");
  var bus = document.getElementById("bus");
  var call = document.getElementById("call");
  var plane = document.getElementById("plane");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  bus.style.display = "none";
  call.style.display = "none";
  plane.style.display = "none";
}
window.hideSVG = hideSVG;

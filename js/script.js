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

// ==== VARIABLES ====
let scaleX = windowWidth / 1536;
let scaleY = windowWidth / 1536;
// let scaleY = windowHeight / 750;

let timerAll = 0;
let hourTimer = 6;
let minuteTimer = 0;
let timerDay = 1;
let time = 0;
let showIntermediateResult = false;
let assignmentText = "";
let assignmentsAmount = 5;
let firstDay = true;
let productivityOfDay = 0;
let productivityPerson = 0;
let productivityWhole = 0;
let textProductivity;
let environmentValueKG = 0;
let textEnvironment;

let indexOfChosenMobilityOption;
let startCoolDown = false;

// load font
let rokkittFont;
let segeoUiFont;

// load images
let mapImage;

let sheImage;
let heImage;
let theyImage;
let sheGenderImage;
let theyGenderImage;
let heGenderImage;

let workerOneImage;
let workerTwoImage;
let workerThreeImage;
let workerFourImage;

let barBG;
let exclamationMark;
let calender;
let clock;
let sun;

let toDoBG;
let close;
let toDoBox;
let toDoBoxDone;

let windradImage;

function preload() {
  // load font
  rokkittFont = loadFont("./assets/Rokkitt-Bold.ttf");
  segeoUiFont = loadFont("./assets/segoeuisl.ttf");

  // load images
  mapImage = loadImage("./assets/Map 2.png");

  sheImage = loadImage("./assets/she.png");
  heImage = loadImage("./assets/he.png");
  theyImage = loadImage("./assets/they.png");
  sheGenderImage = loadImage("./assets/she gender.png");
  theyGenderImage = loadImage("./assets/they gender.png");
  heGenderImage = loadImage("./assets/he gender.png");

  workerOneImage = loadImage("./assets/worker_one.png");
  workerTwoImage = loadImage("./assets/worker_two.png");
  workerThreeImage = loadImage("./assets/worker_three.png");
  workerFourImage = loadImage("./assets/worker_four.png");

  barBG = loadImage("./assets/bar.png");
  exclamationMark = loadImage("./assets/exclamationMark.png");
  calender = loadImage("./assets/calender.png");
  clock = loadImage("./assets/clock.png");
  sun = loadImage("./assets/sun.png");

  toDoBG = loadImage("./assets/toDo_BG.png");
  close = loadImage("./assets/close.png");
  toDoBox = loadImage("./assets/toDo.png");
  toDoBoxDone = loadImage("./assets/toDo_done.png");

  windradImage = loadImage("./assets/windrad.svg");
}
window.preload = preload;

// ==== INITIATE OBJECTS ====

// variables for image preload
let mapClass;

// user gender
let showGame = false;
let userImage = [];
let users = [];
let user;

// status bar
let statusBarArray = [];
let bar;
let timer;
let day;

// to Do List
let toDoList;

// faces
let facesArray = [];
let imageFace;
let chosenGenderImage = sheImage;

// intermediate result
let resultI;
let evaluateProductivity;
let evaluateEnvironment;

// let gameStarted;

function gameSetup() {
  mapClass = new BasicObjectImage(0, 0, 1536 * scaleX, 750 * scaleY, mapImage);

  // user gender
  userImage.push(sheGenderImage);
  userImage.push(theyGenderImage);
  userImage.push(heGenderImage);

  for (let i = 0; i < 3; i++) {
    user = new User(
      windowWidth / 2 - 525 + 400 * i,
      windowHeight / 2 - 300,
      300,
      650,
      userImage[i]
    );
    users.push(user);
  }

  // statusBar
  bar = new StatusBar(
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

  // initiate time
  timer = new BasicObjectText(
    bar.x + 222 * scaleX,
    bar.y - 17,
    105 * scaleX,
    30 * scaleY,
    10,
    "rgba(0,0,0, 0)",
    time,
    27 * scaleX
  );
  timer.setTextColor("white");
  timer.setFont(rokkittFont);

  day = new BasicObjectText(
    bar.x + 140 * scaleX,
    bar.y - 17,
    54 * scaleX,
    30 * scaleY,
    10,
    "rgba(0,0,0, 0)",
    timerDay,
    27 * scaleX
  );
  day.setTextColor("white");
  day.setFont(rokkittFont);

  // make hitBoxes scaleable
  for (let arrayObject of hitBoxArray) {
    arrayObject.x *= scaleX;
    arrayObject.y *= scaleY;
    arrayObject.width *= scaleX;
    arrayObject.height *= scaleY;
  }

  // make status Bar scaleable
  for (let arrayObject of statusBarArray) {
    arrayObject.y *= scaleY;
    arrayObject.width *= scaleX;
    arrayObject.height *= scaleY;
  }

  // to Do list
  toDoList = new ToDo(
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

  // faces
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

  // intermediate result
  resultI = new BasicObjectImage(
    windowWidth / 2 - 400 * scaleX,
    windowHeight / 2 - 200 * scaleY,
    800 * scaleX,
    400 * scaleY,
    toDoBG
  );

  // gameStarted = true;
}
window.gameSetup = gameSetup;

// hit Boxes
let hitBoxArray = [];
let collisions = [];
let hitBoxMesse = new BasicObjectText(
  435,
  95,
  250,
  65,
  10,
  "rgba(0,0,0,0)",
  "",
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
  "",
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
  "",
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
  "",
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
  "",
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
  "",
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
let environmentalInfluence = [147, 32, 230, 80, 0];
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
      environmentalInfluence[i],
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
      environmentalInfluence[i],
      titlemobi[i]
    );
  }

  mobilityOptions.push(mobilityOptionButton);
}

// initiate assignment array because it needs to be used in newDay()
let assignmentArray = [];

// set Time
function setTime() {
  // initiate first Day

  if (firstDay) {
    assignmentArray = [];
    loadStrings(
      "./assets/" + timerDay + "_day_assignment.txt",
      updateAssignment
    );
    firstDay = false;
  }

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
    newDay();
  }

  function newDay() {
    // check productivity of the day
    productivityOfDay = 0;
    for (let i = 0; i < facesArray.length; i++) {
      facesArray[i].checkProductivity();
      productivityPerson = facesArray[i].getProductivity();
      if (productivityPerson > 0) {
        productivityOfDay =
          parseInt(productivityOfDay) + parseInt(productivityPerson);
      }
      resetWorkerForNewDay(i);
    }

    productivityOfDay = productivityOfDay / 5;
    productivityWhole += productivityOfDay;

    if (timerDay <= 3) {
      if (productivityOfDay <= 20) {
        textProductivity =
          "Deine Mitarbeiter sind heute nicht produktiv gewesen. \nWas kannst du ändern, um die Produktivität morgen zu steigern?";
      }

      if (productivityOfDay > 20 && productivityOfDay <= 40) {
        textProductivity =
          "Deine Mitarbeiter sind heute eher nicht produktiv gewesen. \nWas kannst du ändern, um die Produktivität morgen zu steigern?";
      }

      if (productivityOfDay > 40 && productivityOfDay <= 60) {
        textProductivity =
          "Deine Mitarbeiter sind recht produktiv gewesen! \nAber kannst du eventuell noch etwas ändern, um die Produktivität morgen weiter zu steigern?";
      }

      if (productivityOfDay > 60 && productivityOfDay <= 80) {
        textProductivity =
          "Sehr gut, deine Mitarbeiter sind sehr produktiv gewesen! \nAber ein bisschen Luft nach oben hat dein Unternehmen noch.";
      }

      if (productivityOfDay > 80 && productivityOfDay <= 100) {
        textProductivity =
          "Perfekt, produktiver hätte dein Unternehmen nicht arbeiten können!";
      }

      evaluateProductivity = new BasicObjectText(
        windowWidth / 2,
        windowHeight / 2,
        200,
        50,
        20,
        "rgba(0,0,0,0)",
        textProductivity,
        20
      );

      // load new assignments for next day
      assignmentArray = [];
      loadStrings(
        "./assets/" + timerDay + "_day_assignment.txt",
        updateAssignment
      );
    }

    if (timerDay === 4) {
      environmentValueKG = environmentValue / 1000;
      productivityWhole = productivityWhole / 3;
      productivityWhole = productivityWhole / 5;

      // evaluation of environmental value
      if (environmentValueKG <= 300) {
        textEnvironment =
          "Du hast nur " +
          environmentValueKG +
          "Kg Co2 verbraucht! \n Das ist für die Anzahl an Geschäftsreisen sehr wenig, du hast darauf geachtet, die Umwelt nicht zu sehr zu belasten, das hilft nicht nur der Umwelt sondern auch deinem Image. ";
      }

      if (environmentValueKG > 300 && environmentValueKG <= 800) {
        textEnvironment =
          "Du hast " +
          environmentValueKG +
          "Kg Co2 verbraucht! \n Das ist für die Anzahl an Geschäftsreisen relativ wenig! Du hast versucht darauf zu achten, die Umwelt zu schonen, aber vielleicht kannst du versuchen, mehr Calls und Zugreisen in den Geschäftsalltag einzubauen. Das könnte auch dem Image deiner Firma helfen!";
      }

      if (environmentValueKG > 800 && environmentValueKG <= 1500) {
        textEnvironment =
          "Du hast " +
          environmentValueKG +
          "Kg Co2 verbraucht! \n Das ist für die Anzahl an Geschäftsreisen relativ viel! Versuche, mehr Calls und Zugreisen in den Geschäftsalltag einzubauen, denn das hilft nicht nur der Uwmelt, sondern auch dem Image deiner Firma!";
      }

      evaluateEnvironment = new BasicObjectText(
        windowWidth / 2,
        windowHeight / 2,
        200,
        50,
        20,
        "rgba(0,0,0,0)",
        textEnvironment,
        20
      );
      // evaluation of whole productivity
      if (productivityWhole <= 20) {
        textProductivity =
          "Deine Mitarbeiter sind heute nicht produktiv gewesen. \nWas kannst du ändern, um die Produktivität morgen zu steigern?";
      }

      if (productivityWhole > 20 && productivityWhole <= 40) {
        textProductivity =
          "Deine Mitarbeiter sind heute eher nicht produktiv gewesen. \nWas kannst du ändern, um die Produktivität morgen zu steigern?";
      }

      if (productivityWhole > 40 && productivityWhole <= 60) {
        textProductivity =
          "Deine Mitarbeiter sind recht produktiv gewesen! \nAber kannst du eventuell noch etwas ändern, um die Produktivität morgen weiter zu steigern?";
      }

      if (productivityWhole > 60 && productivityWhole <= 80) {
        textProductivity =
          "Sehr gut, deine Mitarbeiter sind sehr produktiv gewesen! \nAber ein bisschen Luft nach oben hat dein Unternehmen noch.";
      }

      if (productivityWhole > 80 && productivityWhole <= 100) {
        textProductivity =
          "Perfekt, produktiver hätte dein Unternehmen nicht arbeiten können!";
      }

      evaluateProductivity = new BasicObjectText(
        windowWidth / 2,
        windowHeight / 2,
        200,
        50,
        20,
        "rgba(0,0,0,0)",
        textProductivity,
        20
      );
    }
  }

  function resetWorkerForNewDay(i) {
    facesArray[i].x = 490 * scaleX + i * 65 * scaleX;
    facesArray[i].y = 5 * scaleY;
    facesArray[i].workingHours = 0;
    facesArray[i].totalActiveTime = 0;
    facesArray[i].isAvailable = true;
    facesArray[i].productivity = 0;
  }

  // write/update assignment
  function updateAssignment(assignmentTexts) {
    for (let i = 0; i < assignmentTexts.length; i++) {
      assignmentArray[i] = new Assignment(
        550,
        200 + i * 70,
        50,
        50,
        scaleX,
        scaleY
      );
      assignmentArray[i].setTextAssignments(split(assignmentTexts[i], ";")[1]);
      assignmentArray[i].setCompanyIndex(split(assignmentTexts[i], ";")[0]);
      assignmentArray[i].setDurationOfAssignment(
        split(assignmentTexts[i], ";")[2]
      );
      assignmentArray[i].setFont(segeoUiFont);
    }
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

function makeEnvironmentalValueVisible() {
  if (environmentValue > 200000) {
    fill("rgba(0, 0, 0, 0.2)");
    rect(0, 0, windowWidth, windowHeight);
  }
  if (environmentValue > 1000000) {
    fill("rgba(0, 0, 0, 0.5)");
    rect(0, 0, windowWidth, windowHeight);
  }
}

let buttonStartTimeAgain = new BasicObjectText(
  windowWidth / 2 - 100 * scaleX,
  windowHeight / 2 + 100 * scaleY,
  200 * scaleX,
  50 * scaleY,
  10,
  "#E83A5A",
  "start new day",
  20
);

function showMobilityOptionsDialogue(i) {
  //Show choose Buttons ans SVG hover
  // collisions[i][1] = 0 = Messe
  // collisions[i][1] = 1 = Kunde1
  // collisions[i][1] = 2 = Kunde 2
  // collisions[i][1] = 3 = Tochterfirma
  // collisions[i][1] = 4 = Home wird nicht benötigt
  // collisions[i][1] = 5 = Firma

  mobilityOptions[0].hidden = false; // car
  mobilityOptions[1].hidden = false; // train
  if (
    collisions[i][1] === 0 ||
    collisions[i][1] === 2 ||
    collisions[i][1] === 3
  ) {
    mobilityOptions[2].hidden = false; // airplane
  }
  if (collisions[i][1] === 1) {
    mobilityOptions[4].hidden = false; // call
  }
  if (collisions[i][1] === 5) {
    mobilityOptions[3].hidden = false; // bus
  }

  showSVG(i);
}

let showMobilityOptions = true;

function hideMobilityOptionsDialogue() {
  for (let i = 0; i < 5; i++) {
    showMobilityOptions = false;
    mobilityOptions[i].hidden = true;
  }
  hideSVG();
}

function calculateDuration(companyIndex, faceIndex, mobilityOptionObject) {
  //Werte sind nur für Hinfahrt
  mobilityOptionObject.duration =
    hitBoxArray[companyIndex].trackLength / mobilityOptionObject.velocity;
  facesArray[faceIndex].isAvailable = false;
}

function calculateInfluenceAndCosts(companyIndex, mobilityOptionObject) {
  if (mobilityOptionObject.selected) {
    environmentValue +=
      hitBoxArray[companyIndex].trackLength *
      mobilityOptionObject.environmentalInfluence;

    maximalCosts +=
      hitBoxArray[companyIndex].trackLength * mobilityOptionObject.cost;

    mobilityOptionObject.selected = false;
  }
}

function checkAssignment(companyIndex) {
  for (let i = 0; i < assignmentArray.length; i++) {
    if (companyIndex === parseInt(assignmentArray[i].getCompanyIndex())) {
      assignmentArray[i].setAssignmentDone();
      break; // just one assignment can be comleted at the same time
    }
  }
}

function calculateWorkingHours(companyIndex, mobilityOptionObject, faceIndex) {
  for (let x = 0; x < facesArray.length; x++) {
    if (!facesArray[faceIndex].alreadyCheckedWorkingHours) {
      for (let i = 0; i < assignmentArray.length; i++) {
        if (companyIndex === parseInt(assignmentArray[i].getCompanyIndex())) {
          facesArray[faceIndex].checkWorkingHours(
            assignmentArray[i].getDurationOfAssignment(),
            mobilityOptionObject.duration
          );
          facesArray[faceIndex].alreadyCheckedWorkingHours = true;
        }
      }
    }
  }
}

// environment value
let environmentValue = 0;
let maximalCosts = 0;

let hideUserSelection = false;

// ==== DRAW ====
function draw() {
  //User selection display
  fill(186, 226, 227);
  rect(0, 0, windowWidth, windowHeight);

  for (let i = 0; i < users.length; i++) {
    if (users[i].userSelection && !hideUserSelection) {
      users[i].display();
    } //boolean to make it disappear after selecting one
    if (!users[i].userSelection) {
      users[i].userSelection = false;
      hideUserSelection = true;
      showGame = true;
    }
  }

  if (showGame) {
    mapClass.display();
    makeEnvironmentalValueVisible();

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

    facesArray[2].setGenderImage(chosenGenderImage);

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
      //   environmentValue,
      //   maximalCosts
      // );
    }

    // collision detection
    collisions = collisionDetectionMap.detection(facesArray, hitBoxArray);

    if (!mouseIsPressed) {
      for (let i = 0; i < collisions.length; i++) {
        for (let j = 0; j < assignmentArray.length; j++) {
          if (
            collisions[i][1] === parseInt(assignmentArray[j].getCompanyIndex())
          ) {
            //show MobilityOptionsDialogue if necessary
            if (facesArray[collisions[i][0]].isAvailable) {
              showMobilityOptionsDialogue(i);
              showMobilityOptions = false;
            }
            //then check if an option was chosen if yes, close Dialogue in hideMobilityDialogue, calculate duration, costs, environmental value an check assignment, can be found in mouseClicked

            // cool Down of workers
            if (startCoolDown) {
              facesArray[collisions[i][0]].coolDown(
                assignmentArray[j].getDurationOfAssignment(),
                mobilityOptions[indexOfChosenMobilityOption].duration
              );
            }
          }
        }
      }
    }

    // faces
    for (let i = 0; i < facesArray.length; i++) {
      facesArray[i].display();
      facesArray[i].mouseClicked();
    }

    for (let i = 0; i < facesArray.length; i++) {
      if (facesArray[i].clickTest) {
        facesArray[i].clicked();
        break;
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
    evaluateProductivity.display();
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
    if (!mobilityOptions[i].hidden) {
      mobilityOptions[i].mouseClicked();
    }
    if (mobilityOptions[i].selected) {
      for (let j = 0; j < collisions.length; j++) {
        if (facesArray[collisions[j][0]].isAvailable) {
          calculateDuration(
            collisions[j][1],
            collisions[j][0],
            mobilityOptions[i]
          );

          calculateInfluenceAndCosts(collisions[j][1], mobilityOptions[i]);

          checkAssignment(collisions[j][1]);

          calculateWorkingHours(
            collisions[j][1],
            mobilityOptions[i],
            collisions[j][0]
          );

          indexOfChosenMobilityOption = i;
          startCoolDown = true;
        }
      }
    }
  }

  if (!showMobilityOptions) {
    hideMobilityOptionsDialogue();
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

  // hideSVG();
}

window.mouseClicked = mouseClicked;
window.draw = draw;

// ==== FUNCTION SHOW ====
let bus = document.getElementById("bus");
let call = document.getElementById("call");
let plane = document.getElementById("plane");

function showSVG(j) {
  //ACCESSING ALL ELEMENTS OF SAME CLASS IN HTML
  let elements = document.getElementsByClassName("svg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }

  if (collisions[j][1] === 5) {
    bus.style.display = "block";
  }

  if (collisions[j][1] === 1) {
    call.style.display = "block";
  }

  if (
    collisions[j][1] === 0 ||
    collisions[j][1] === 2 ||
    collisions[j][1] === 3
  ) {
    plane.style.display = "block";
  }
}
window.showSVG = showSVG;

// ==== FUNCTION HIDE ====

function hideSVG() {
  //ACCESSING ALL ELEMENTS OF SAME CLASS IN HTML
  let elements = document.getElementsByClassName("svg");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  bus.style.display = "none";
  call.style.display = "none";
  plane.style.display = "none";
}
window.hideSVG = hideSVG;

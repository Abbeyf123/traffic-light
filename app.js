let goCounterOne = document.querySelector(".go-counter-one");
let stopCounterOne = document.querySelector(".stop-counter-one");
let goCounterTwo = document.querySelector(".go-counter-two");
let stopCounterTwo = document.querySelector(".stop-counter-two");
let goCounterThree = document.querySelector(".go-counter-three");
let stopCounterThree = document.querySelector(".stop-counter-three");
let showStartcounter = document.querySelector(".traffic-lights-counter-one");
let showSecondcounter = document.querySelector(".traffic-lights-counter-two");

const redOne = document.querySelector(".red-one");
const orangeOne = document.querySelector(".orange-one");
const greenOne = document.querySelector(".green-one");

const redTwo = document.querySelector(".red-two");
const orangeTwo = document.querySelector(".orange-two");
const greenTwo = document.querySelector(".green-two");

const redThree = document.querySelector(".red-three");
const orangeThree = document.querySelector(".orange-three");
const greenThree = document.querySelector(".green-three");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

let sameGoCounter = 0;
let secondGoCounter = 0;
goCounterOne.innerText = padCounter(sameGoCounter);
goCounterThree.innerText = padCounter(sameGoCounter);
goCounterTwo.innerText = padCounter(secondGoCounter);

let sameStopCounter = 50;
let secondStopCounter = 50;
stopCounterOne.innerText = padCounter(sameStopCounter);
stopCounterThree.innerText = padCounter(sameStopCounter);
stopCounterTwo.innerText = padCounter(secondStopCounter);
let intervalIdOne = 0;
let intervalIdTwo = 0;

let countOne = 0;
let countTwo = 50;

function padCounter(counter) {
  return counter < 10 ? "0" + counter : counter;
}

function startCount() {
  intervalIdOne = setInterval(() => {
    countOne++;
    sameGoCounter++;
    secondStopCounter--;
    goCounterOne.innerText = padCounter(sameGoCounter);
    goCounterThree.innerText = padCounter(sameGoCounter);
    stopCounterTwo.innerText = padCounter(secondStopCounter);
    if (countOne === 50) {
      clearInterval(intervalIdOne);
      sameStopCounter = 50;
      secondGoCounter = 0;
      stopCounterOne.innerText = padCounter(sameStopCounter);
      stopCounterThree.innerText = padCounter(sameStopCounter);
      goCounterTwo.innerText = padCounter(secondGoCounter);
      showStartcounter.style.display = "none";
      showSecondcounter.style.display = "flex";
      countOne = 0;
      countTwo = 50;
      stopCount();
    }
    checkColors();
  }, 1000);
}

function stopCount() {
  intervalIdTwo = setInterval(() => {
    countTwo--;
    sameStopCounter--;
    secondGoCounter++;
    stopCounterOne.innerText = padCounter(sameStopCounter);
    stopCounterThree.innerText = padCounter(sameStopCounter);
    goCounterTwo.innerText = padCounter(secondGoCounter);
    if (countTwo == 0) {
      clearInterval(intervalIdTwo);
      sameGoCounter = 0;
      secondStopCounter = 50;
      goCounterOne.innerText = padCounter(sameGoCounter);
      goCounterThree.innerText = padCounter(sameGoCounter);
      stopCounterTwo.innerText = padCounter(secondStopCounter);
      showStartcounter.style.display = "flex";
      showSecondcounter.style.display = "none";
      countOne = 0;
      countTwo = 50;
      startCount();
    }
    checkColors();
  }, 1000);
}

function checkColors() {
  // Check if the first traffic light is green
  if (sameGoCounter === 50) {
    redOne.style.backgroundColor = "red";
    redThree.style.backgroundColor = "red";
    greenOne.style.backgroundColor = "transparent";
    greenThree.style.backgroundColor = "transparent";
    orangeOne.style.backgroundColor = "transparent";
    orangeThree.style.backgroundColor = "transparent";
  }

  // Check if the second traffic light is green
  if (secondGoCounter === 50) {
    redTwo.style.backgroundColor = "red";
    greenTwo.style.backgroundColor = "transparent";
    orangeTwo.style.backgroundColor = "transparent";
  }

  // Check if the first traffic light is red
  if (sameStopCounter === 0) {
    redOne.style.backgroundColor = "transparent";
    redThree.style.backgroundColor = "transparent";
    greenOne.style.backgroundColor = "#00ff00";
    greenThree.style.backgroundColor = "#00ff00";
    orangeOne.style.backgroundColor = "transparent";
    orangeThree.style.backgroundColor = "transparent";
  }

  // Check if the second traffic light is red
  if (secondStopCounter === 0) {
    redTwo.style.backgroundColor = "transparent";
    greenTwo.style.backgroundColor = "#00ff00";
    orangeTwo.style.backgroundColor = "transparent";
  }

  // Check if the first traffic light should turn orangen
  if (sameStopCounter <= 10 && sameStopCounter > 0) {
    redOne.style.backgroundColor = "transparent";
    redThree.style.backgroundColor = "transparent";
    greenOne.style.backgroundColor = "transparent";
    greenThree.style.backgroundColor = "transparent";
    orangeOne.style.backgroundColor = "orange";
    orangeThree.style.backgroundColor = "orange";
  }

  // Check if the second traffic light should turn orange
  if (secondStopCounter <= 10 && secondStopCounter > 0) {
    redTwo.style.backgroundColor = "transparent";
    greenTwo.style.backgroundColor = "transparent";
    orangeTwo.style.backgroundColor = "orange";
  }
}

startButton.addEventListener("click", () => {
  startCount();
});
stopButton.addEventListener("click", () => {
  clearInterval(intervalIdOne);
  clearInterval(intervalIdTwo);
});

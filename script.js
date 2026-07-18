// AQUARIUM STATE

let clickCount = 0;
let isAquariumActive = false;

// ARRAYS

const fish = [];
const bubbles = [];

// DOM ELEMENTS

const chaosBtn = document.getElementById("chaos-btn");
const returnBtn = document.getElementById("return-btn");

const aquariumMode = document.getElementById("aquarium-mode");
const waterLayer = document.getElementById("water-layer");
const fishLayer = document.getElementById("fish-layer");
const bubbleLayer = document.getElementById("bubble-layer");
const constructTxt = document.getElementById("under-construct");
const portfolioMode = document.getElementById("portfolio");

const achievementPop = document.getElementById("achievement");

const pingAudio = document.getElementById("ping");

// AQUARIUM

// I will build these later:
//
// startAquarium()
// createFish()
// createBubble()
// moveFish()
// stopAquarium()

// ACHIEVEMENT

function clickChaos() {
  clickCount++;

  if (clickCount === 1) {
    chaosBtn.innerHTML = "I SAID DONT CLICK ME";
  } else if (clickCount === 2) {
    chaosBtn.innerHTML = "YOU ASKED FOR THIS";
  } else if (clickCount === 3) {
    aquariumMode.classList.remove("hidden");
    constructTxt.classList.remove("hidden");
    portfolioMode.classList.add("dim-down");
    isAquariumActive = true;
    
    chaosBtn.classList.add("hidden");

    achievementPop.classList.remove("hidden");
    achievementPop.classList.add("fade-in");
    achievementPop.classList.add("shake");

    pingAudio.volume = 0.3;
    pingAudio.play();

    setTimeout(notiRemove, 1000);
  }
}

// FADE-OUT NOTIFICATION

function notiRemove() {
  achievementPop.classList.add("fade-out");
  achievementPop.classList.remove("shake");

  setTimeout(() => {
    achievementPop.classList.add("hidden");
  }, 3200);
}

// RETURN TO NORMAL PORTFOLIO

function returnToPortfolio() {
  aquariumMode.classList.add("hidden");
  constructTxt.classList.add("hiddem");
  chaosBtn.classList.remove("hidden");
  portfolioMode.classList.remove("dim-down");

  chaosBtn.innerHTML = "IGNORE ME";

  clickCount = 0;
  isAquariumActive = false;

  // Later you will:
  // remove fish
  // remove bubbles
  // stop animations
  // reset aquarium state
}

// EVENT LISTENERS

chaosBtn.addEventListener("click", clickChaos);
returnBtn.addEventListener("click", returnToPortfolio);
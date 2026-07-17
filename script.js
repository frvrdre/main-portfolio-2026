// GAME STATE

let clickCount = 0;
let score = 0;
let lives = 3;
let isPlaying = false;
let playerX = 50;

// DOM ELEMENTS

const chaosBtn = document.getElementById("chaos-btn");
const exitBtn = document.getElementById("exit-btn");

const portfolioScrn = document.getElementById("portfolio");
const gameScrn = document.getElementById("game-screen");

const achievementPop = document.getElementById("achievement");

const pingAudio = document.getElementById("ping");

// ACHIEVEMENT

function clickChaos() {
  clickCount++;

  if (clickCount === 1) {
    chaosBtn.innerHTML = "I SAID IGNORE ME";
  } else if (clickCount === 2) {
    chaosBtn.innerHTML = "YOU ASKED FOR THIS";
  } else if (clickCount === 3) {
    gameScrn.classList.remove("hidden");
    portfolioScrn.classList.add("hidden");

    isPlaying = true;

    chaosBtn.classList.add("hidden");
    achievementPop.classList.remove("hidden");
    achievementPop.classList.add("fade-in");
    achievementPop.classList.add("shake");

    pingAudio.volume = 0.05;
    pingAudio.play();

    setTimeout(notiRemove, 1000);
  }
}

// FADE-OUT NOTIFICATION

function notiRemove() {
  achievementPop.classList.add("fade-out");
  achievementPop.classList.remove("shake");
  achievementPop.classList.add("fade-out");

  setTimeout(() => {
    achievementPop.classList.add("hidden");
  }, 3200);
}

// EXIT GAME

function exitGame() {
  gameScrn.classList.add("hidden");
  portfolioScrn.classList.remove("hidden");

  chaosBtn.classList.remove("hidden");
  chaosBtn.innerHTML = "IGNORE ME";

  clickCount = 0;
  isPlaying = false;
}

// EVENT LISTENERS

chaosBtn.addEventListener("click", clickChaos);
exitBtn.addEventListener("click", exitGame);
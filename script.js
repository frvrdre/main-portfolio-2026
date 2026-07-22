// AQUARIUM STATE

let clickCount = 0;
let isAquariumActive = false;


// DOM ELEMENTS

const chaosBtn = document.getElementById("chaos-btn");
const returnBtn = document.getElementById("return-btn");

const aquariumMode = document.getElementById("aquarium-mode");
const waterLayer = document.getElementById("water-layer");
const fishLayer = document.getElementById("fish-layer");
const bubbleLayer = document.getElementById("bubble-layer");

const fishSpawn = document.createElement("div");

const constructTxt = document.getElementById("under-construct");
const portfolioMode = document.getElementById("portfolio");

const achievementPop = document.getElementById("achievement");

const pingAudio = document.getElementById("ping");


// AQUARIUM

// I will build these later:
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
  }

  else if (clickCount === 2) {
    chaosBtn.innerHTML = "YOU ASKED FOR THIS";
  }

  else if (clickCount === 3) {
    aquariumMode.classList.remove("hidden");
    constructTxt.classList.remove("hidden");

    portfolioMode.classList.add("dim-down");

    fishSpawn.classList.add("fish");

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

  constructTxt.classList.add("hidden");

  chaosBtn.classList.remove("hidden");

  portfolioMode.classList.remove("dim-down");

  chaosBtn.innerHTML = "DONT CLICK ME";

  clickCount = 0;

  isAquariumActive = false;

  // Later remove fish, bubbles and reset aquarium state
}


// AQUARIUM EVENT LISTENERS

chaosBtn.addEventListener("click", clickChaos);

returnBtn.addEventListener("click", returnToPortfolio);


// PROJECT CAROUSEL DOM ELEMENTS

const projectsCarousel = document.getElementById("projects-carousel");

const projectsPrevBtn = document.getElementById("projects-prev");

const projectsNextBtn = document.getElementById("projects-next");


// GET PROJECT CARD SCROLL DISTANCE

function getProjectScrollAmount() {
  const projectCard = projectsCarousel.querySelector(".project-card");

  const carouselStyles = getComputedStyle(projectsCarousel);

  const gap = parseFloat(carouselStyles.gap);

  return projectCard.offsetWidth + gap;
}


// SCROLL CAROUSEL LEFT

function scrollProjectsLeft() {
  projectsCarousel.scrollBy({
    left: -getProjectScrollAmount(),

    behavior: "smooth",
  });
}


// SCROLL CAROUSEL RIGHT

function scrollProjectsRight() {
  projectsCarousel.scrollBy({
    left: getProjectScrollAmount(),

    behavior: "smooth",
  });
}


// UPDATE CAROUSEL BUTTONS

function updateCarouselButtons() {
  const atStart = projectsCarousel.scrollLeft <= 5;

  const atEnd =
    projectsCarousel.scrollLeft + projectsCarousel.clientWidth >=
    projectsCarousel.scrollWidth - 5;

  projectsPrevBtn.disabled = atStart;

  projectsNextBtn.disabled = atEnd;
}


// CAROUSEL EVENT LISTENERS

projectsPrevBtn.addEventListener(
  "click",
  scrollProjectsLeft
);

projectsNextBtn.addEventListener(
  "click",
  scrollProjectsRight
);

projectsCarousel.addEventListener(
  "scroll",
  updateCarouselButtons
);

window.addEventListener(
  "resize",
  updateCarouselButtons
);


// INITIAL CAROUSEL STATE

updateCarouselButtons();
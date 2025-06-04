const sightRows = document.querySelectorAll(".sight-row");
sightRows.forEach((element) => {
  generateScrollAnimation(element);
});

let slides = {
  food: [
    "./img/FoodSlideshow/Food1.jpg",
    "./img/FoodSlideshow/Food2.jpg",
    "./img/FoodSlideshow/Food3.avif",
  ],
  places: [
    "./img/FamousPlacesSlideshow/FamousPlace2.jpg",
    "./img/FamousPlacesSlideshow/FamousPlace3.jpg",
    "./img/FamousPlacesSlideshow/matsushima.webp",
  ],
  events: [
    "./img/FestivalsSlideshow/Festival1.jpg",
    "./img/FestivalsSlideshow/Festival2.jpg",
    "./img/FestivalsSlideshow/Festival3.jpg",
  ],
};
let headerBox = document.getElementById("header1");
let headerBoxSubpages = document.getElementById("header2");
let root = document.querySelector(":root");
let darkMode = false;
let time;
let currentImages = [];
let currentIndex = 0;

function openSlideshow(category) {
  startBlossoms();
  currentImages = slides[category];
  currentIndex = 0;
  document.getElementById("slideshow-image").src = currentImages[currentIndex];
  document.getElementById("overlay").style.display = "flex";
}

function closeSlideshow() {
  endBlossom();
  document.getElementById("overlay").style.display = "none";
}

function slideRight() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  let img = document.getElementById("slideshow-image");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = currentImages[currentIndex];
    img.style.opacity = 1;
  }, 800);
}

function slideLeft() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  let img = document.getElementById("slideshow-image");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = currentImages[currentIndex];
    img.style.opacity = 1;
  }, 800);
}

function startBlossoms() {
  time = setInterval(createBlossom, 100);
}

function createBlossom() {
  const blossom = document.createElement("div");
  blossom.classList.add("blossom");

  const randomX = Math.random();
  blossom.style.setProperty("--random-x", randomX);

  document.body.appendChild(blossom);

  setTimeout(() => {
    blossom.remove();
  }, 5000);
}
function endBlossom() {
  clearInterval(time);
}
function ModeSwitchMain() {
  let lightModeIcon = document.getElementById("LightModeSwitch");

  if (darkMode) {
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--nav-text-color", "white");
    root.style.setProperty("--card-bg-color", "#fff");
    root.style.setProperty("--card-text-color", "#d13b6b");
    darkMode = false;

    const rectangle = document.querySelector(".rectangle2");
    if (rectangle) {
      rectangle.remove();
    }

    lightModeIcon.src = "img/Moon_Icon.png";
  } else {
    root.style.setProperty("--nav-text-color", "#a7a6a4");
    root.style.setProperty("--background-color", "#2c2c2c");
    root.style.setProperty("--card-bg-color", "#1d1d1d");
    root.style.setProperty("--card-text-color", "#7f5e6c");

    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle2");
    headerBox.appendChild(rectangle);

    darkMode = true;

    lightModeIcon.src = "img/Sun.png";
  }
}
function ModeSwitchSubPages() {
  let lightModeIcon = document.getElementById("LightModeSwitch");

  if (darkMode) {
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--nav-text-color", "white");
    root.style.setProperty("--card-bg-color", "#fff");
    root.style.setProperty("--card-text-color", "#d13b6b");
    root.style.setProperty("--rating-background-color", "#fff");
    root.style.setProperty("--box-shadow", "0 0.5em 0.75em rgba(255, 0, 221, 0.1)");
    root.style.setProperty("--special-bg", "#fff8e9");
    root.style.setProperty("--quiz-bg", "#ffffff");
    root.style.setProperty("--rating-text-color", "#000000");
    darkMode = false;

    const rectangle = document.querySelector(".rectangle2");
    if (rectangle) {
      rectangle.remove();
    }

    lightModeIcon.src = "../img/Moon_Icon.png";
  } else {
    root.style.setProperty("--background-color", "#1b1b1b");
    root.style.setProperty("--nav-text-color", "#cccccc");
    root.style.setProperty("--card-bg-color", "#2a2a2a");
    root.style.setProperty("--card-text-color", "#e18bb1");
    root.style.setProperty("--rating-background-color", "#444040");
    root.style.setProperty("--box-shadow", "0 0.5em 0.75em rgba(255, 182, 193, 0.2)");
    root.style.setProperty("--special-bg", "#232323");
    root.style.setProperty("--quiz-bg", "#232323");
    root.style.setProperty("--rating-text-color", "#8E576F");
    darkMode = true;

    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle2");
    let sight = document.getElementsByName("testBox");
    sight.appendChild(rectangle);
    headerBoxSubpages.appendChild(rectangle);

    lightModeIcon.src = "../img/Sun.png";
  }
}

function moveIndicator(el) {
  let indicator = document.getElementById("navIndicator");
  let left = el.offsetLeft;
  let width = el.offsetWidth;

  setTimeout(() => {
    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
  }, 150);
}

function setupNavIndicator() {
  let links = document.querySelectorAll(".navbar a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((l) => l.classList.remove("active"));
      e.target.classList.add("active");
      moveIndicator(e.target);
    });
  });

  let activeLink = document.querySelector(".navbar a.active");
  if (activeLink) {
    moveIndicator(activeLink);
  }
}

setupNavIndicator();

function showInfo(event) {
  let container = event.currentTarget;
  let infoBox = container.querySelector(".info-box");
  infoBox.style.display = "block";
}
6;

function showMap(event) {
  let infoBox = event.currentTarget.closest(".info-box");
  let mapContainer = infoBox.parentElement.nextElementSibling;
  let map = document.getElementById("mustSeePlace");

  let openMap = infoBox.querySelector("#MapsOpen");
  let closeMap = infoBox.querySelector("#MapsClose");
  let closeMap2 = infoBox.querySelector("#MapsClose2");

  closeMap.style.display = "block";
  closeMap2.style.display = "none";
  openMap.style.display = "none";
  mapContainer.style.display = "block";
  map.style.display = "none";
}

function closeMap(event) {
  let infoBox = event.currentTarget.closest(".info-box");
  let mapContainer = infoBox.parentElement.nextElementSibling;

  let map = document.getElementById("mustSeePlace");
  let openMap = infoBox.querySelector("#MapsOpen");
  let closeMap = infoBox.querySelector("#MapsClose");
  let closeMap2 = infoBox.querySelector("#MapsClose2");

  openMap.style.display = "block";
  closeMap2.style.display = "block";
  mapContainer.style.display = "none";
  closeMap.style.display = "none";
  map.style.display = "block";
}

function closeMap2(event) {
  let infoBox = event.currentTarget.closest(".info-box");
  let mapContainer = infoBox.parentElement.nextElementSibling;
  let openMap = infoBox.querySelector("#MapsOpen");
  let closeMap = infoBox.querySelector("#MapsClose");
  let closeMap2 = infoBox.querySelector("#MapsClose2");

  document.getElementById("infoBox").style.display = "none";
  infoBox.style.display = "none";
  mapContainer.style.display = "none";
  openMap.style.display = "none";
  closeMap.style.display = "none";
  closeMap2.style.display = "none";
}

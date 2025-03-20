let slides = {
    food: ['./img/FoodSlideshow/Food1.jpg', './img/FoodSlideshow/Food2.jpg', './img/FoodSlideshow/Food3.avif'],
    places: ['./img/FamousPlacesSlideshow/FamousPlace2.jpg', './img/FamousPlacesSlideshow/FamousPlace3.jpg', './img/FamousPlacesSlideshow/matsushima.webp'],
    events: ['./img/FestivalsSlideshow/Festival1.jpg', './img/FestivalsSlideshow/Festival2.jpg', './img/FestivalsSlideshow/Festival3.jpg']
};
let headerBox = document.getElementById('header1');
let root = document.querySelector(':root');
let darkMode = false;
let time;
let currentImages = [];
let currentIndex = 0;

function openSlideshow(category) {
    startBlossoms();
    currentImages = slides[category];
    currentIndex = 0;
    document.getElementById('slideshow-image').src = currentImages[currentIndex];
    document.getElementById('overlay').style.display = 'flex';
}

function closeSlideshow() {
    endBlossom();
    document.getElementById('overlay').style.display = 'none';
}

function slideRight() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    let img = document.getElementById('slideshow-image');
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = currentImages[currentIndex];
        img.style.opacity = 1;
    }, 800);
}

function slideLeft() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    let img = document.getElementById('slideshow-image');
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
function endBlossom(){
    clearInterval(time);
}

function ModeSwitch(){
    
    if(darkMode){
        root.style.setProperty('--background-color', 'white');
        darkMode = false;
        headerBox.remove = `<div class="rectangle2"></div>`;
    } else {
        root.style.setProperty('--background-color', '#494949');
        headerBox.innerHTML += `<div class="rectangle2"></div>`;
        darkMode = true;
    }
}
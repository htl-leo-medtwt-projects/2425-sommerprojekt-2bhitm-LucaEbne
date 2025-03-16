let slides = {
    food: ['./img/FoodSlideshow/Food1.jpg', './img/FoodSlideshow/Food2.jpg', './img/FoodSlideshow/Food3.avif'],
    places: ['./img/FamousPlacesSlideshow/FamousPlace2.jpg', './img/FamousPlacesSlideshow/FamousPlace3.jpg', './img/FamousPlacesSlideshow/matsushima.webp'],
    events: ['./img/FestivalsSlideshow/Festival1.jpg', './img/FestivalsSlideshow/Festival2.jpg', './img/FestivalsSlideshow/Festival3.jpg']
};

let currentImages = [];
let currentIndex = 0;

function openSlideshow(category) {
    currentImages = slides[category];
    currentIndex = 0;
    document.getElementById('slideshow-image').src = currentImages[currentIndex];
    document.getElementById('overlay').style.display = 'flex';
}

function closeSlideshow() {
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
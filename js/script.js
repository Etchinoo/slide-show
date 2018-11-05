let preLoader = document.querySelector('.preLoader');
let slideShowX = document.getElementById('slideShowX');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let captionX = document.querySelector('h2');
let images = ["bmw100.jpg", "bmw101.jpg", "bmw102.jpg", "bmw103.jpg", "bmw104.jpg", "bmw105.jpg"];
let captionsX = ['BMW Blue', 'BMW White', 'BMW 5 Concept', 'BMW Blue', 'BMW Red', 'BMW Red 2'];
let thumbnails = document.querySelector('.thumbnails');

var slideIndex = 0;
var currentSlideX = '';
var autoSlideShow;

window.onload = function(){
    preLoader.style.display = "none";
    slideShowX.style.display = "flex";

    for (let i = 0; i < images.length; ++i) {
        let divX = document.createElement('div');
        divX.classList = 'thumbs';
        thumbnails.appendChild(divX);
        // thumbnailsX.innerHTML += '<div class="thumbX"></div>';
    
        divX.style.backgroundImage = "url('assets/" + images[i] + "')";
    
        divX.onclick = function () {
            clearInterval(autoSlideShow);
            slideIndex = i;
            changeBg();
        }
    }
}



function checkIndex() {
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    
}

function changeBg(){
    currentSlideX = "url('assets/" + images[slideIndex]+"')";
    slideShowX.style.backgroundImage = currentSlideX;
    captionX.textContent = captionsX[slideIndex];
}

function nextPhoto(){
    ++slideIndex;
    checkIndex();
    changeBg();    
    clearInterval(autoSlideShow);
}
function previous(){
    --slideIndex;
    checkIndex();
    changeBg();
    clearInterval(autoSlideShow);
}
function autoMotion() {
    slideIndex++;
    checkIndex();
    changeBg();
}
// function imgSelect(n) {
//     clearInterval(autoSlideShow);
//     slideShowX.style.backgroundImage = "url('assets/" + images[n] + "')";
//     captionX.textContent = captionsX[n];
// }
autoSlideShow = setInterval(autoMotion, 2500);
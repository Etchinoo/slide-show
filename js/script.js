var preLoader = document.querySelector('.preLoader');
var slideShowX = document.getElementById('slideShowX');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var label = document.querySelector('h2');
var images = ["bmw100", "bmw101", "bmw102", "bmw103", "bmw104", "bmw105"];

var slideIndex = 0;
var currentSlideX = '';
var autoSlideShow;

window.onload = function(){
    preLoader.style.display = "none";
    slideShowX.style.display = "flex";
}

function checkIndex() {
    // label.textContent = slideIndex + 1 +"/6";
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    if(label.textContent == "0"); {
        label.textContent = slideIndex + 1 +"/" + images.length;
    }
}

function changeBg(){
    currentSlideX = "url('assets/" + images[slideIndex] + ".jpg')";
    slideShowX.style.backgroundImage = currentSlideX;
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
function imgSelect(n) {
    slideShowX.style.backgroundImage = "url('assets/" + images[n] + ".jpg')";
    label.textContent = [n+1] + "/" + images.length;
}
autoSlideShow = setInterval(autoMotion, 2500);
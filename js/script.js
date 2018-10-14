var preLoader = document.querySelector('.preLoader');
var slideShowX = document.getElementById('slideShowX');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var label = document.querySelector('h2');

var slideIndex = 100;
var currentSlideX;

window.onload = function(){
    preLoader.style.display = "none";
    slideShowX.style.display = "flex";
}

function checkIndex() {
    if (slideIndex < 100) {
        slideIndex = 105;
    } else if(slideIndex > 105) {
        slideIndex = 100;
    }
}

function changeBg(){
    currentSlideX = "url('images/bmw" + slideIndex +".jpg')"
    slideShowX.style.backgroundImage = currentSlideX;
}

label.textContent = "image " + slideIndex;

function nextPhoto(){
    ++slideIndex;
    checkIndex();
    changeBg();
    label.textContent = "image " + slideIndex;
}
function previous(){
    --slideIndex;
    checkIndex();
    changeBg();
    label.textContent = "image " + slideIndex;
}

// var main = document.getElementById("mainx");
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");

// function nextPhoto () {
//     main.style.backgroundImage = "url('../images/bmw101.jpg')";
// }
// function previousPhoto () {
//     main.style.backgroundImage = "url('../images/bmw102.jpg')";
// }

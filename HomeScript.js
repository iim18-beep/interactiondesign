// @ts-check

const body = document.body;
const flashElement = document.getElementById("flash");
const audioElement = document.getElementById("thunder");

body.addEventListener("click", function() {

    audioElement.currentTime = 0;
    audioElement.play();

    flashElement.classList.add("active");

    setTimeout (function () {
        flashElement.classList.remove("active");
    }, 1000);

});
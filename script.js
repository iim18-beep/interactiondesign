// List of image URLs (replace with your filenames)
const images = [
  "images/PlazaBackground1.png",
  "images/PlazaBackground2.png",
  "images/PlazaBackground3.png",
  "images/PlazaBackground4.png",
  "images/PlazaBackground5.png",
  "images/PlazaBackground6.png",
  "images/PlazaBackground7.png",
  "images/PlazaBackground8.png",
  "images/PlazaBackground9.png",
  "images/PlazaBackground10.png",
  "images/PlazaBackground11.png",
  "images/PlazaBackground12.png",
];

const img = document.getElementById("switcher");
let index = 0;

img.addEventListener("click", () => {
  // Move to next image
  index = (index + 1) % images.length;

  // Change image source
  img.src = images[index];
});
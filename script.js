const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const largeImage = document.getElementById("largeImage");

images.forEach(function (img) {
  img.style.cursor = "pointer";

  img.addEventListener("click", function () {
    largeImage.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", function () {
  lightbox.style.display = "none";
});

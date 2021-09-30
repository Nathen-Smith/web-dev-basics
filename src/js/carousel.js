const carouselImages = document.querySelectorAll("div.carousel-images > img");
const imageCount = carouselImages.length;
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
var imageIdx = 0;

function showImages() {
    carouselImages.forEach((image) => {
        image.style.display = "none";
    })
    carouselImages[imageIdx].style.display = "block";
}

leftArrow.addEventListener("click", () => {
    if (imageIdx == 0) {
        imageIdx = imageCount - 1;
    } else {
        imageIdx -= 1;
    }
    showImages();
})

rightArrow.addEventListener("click", () => {
    if (imageIdx == imageCount - 1) {
        imageIdx = 0;
    } else {
        imageIdx += 1;
    }
    showImages();
})

showImages();

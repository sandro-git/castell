var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(0);
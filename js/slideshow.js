var Index = 1;
showSlides(Index);

function plusSlides(x) {
  showSlides(Index += x);
}

// Thumbnail image controls
function currentSlide(x) {
  showSlides(Index = x);
}

function showSlides(x) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (x > slides.length) {Index = 1}
  if (x < 1) {Index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[Index-1].style.display = "block";
}
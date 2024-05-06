var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = '';
  }
  slides[slideIndex].style.display = 'block';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function() {
  plusSlides(-1);
});

nextBtn.addEventListener("click", function() {
  plusSlides(1);
});
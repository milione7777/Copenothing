document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");

  const shopping = document.querySelector(".svg_shopping");

  if (this.classList.contains("active")) {
    shopping.style.display = "none";
  } else {
    shopping.style.display = "block";
  }
});

const shopping = document.querySelector(".svg_shopping");

shopping.addEventListener("click", () => {
  shopping.style.display = "none";
});
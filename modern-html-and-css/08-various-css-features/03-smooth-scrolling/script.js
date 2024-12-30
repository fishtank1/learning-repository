let header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (header.offsetTop > 0) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});

const btnHeader = document.querySelector("#btnHeader");

const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnHeader.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    //close hamburger menu

    body.classList.remove("noscroll");
    header.classList.remove("open");

    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open hamburger menu

    body.classList.add("noscroll");
    header.classList.add("open");

    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

let icon = document.querySelector(".check");
let ul = document.querySelector("#list");
let toTop = document.querySelector(".scroll-to-top");
icon.onclick = function () {
  if (ul.style.right === "-100%") {
    ul.style.right = "0";
  } else {
    ul.style.right = "-100%";
  }
};
toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// ------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
// ------------
var swiper = new Swiper(".mysecSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
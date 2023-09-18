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

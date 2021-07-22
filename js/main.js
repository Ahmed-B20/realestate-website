// start nav
let btn = document.getElementById("menu-bars");
let nav = document.querySelector(".navbar");
let list = document.querySelectorAll(".one");

list.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    e.classList.add("active");
    nav.classList.remove("active");
    btn.classList.remove("fa-times");
  });
});

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("fa-times");
});

window.onscroll = function () {
  nav.classList.remove("active");
  btn.classList.remove("fa-times");
};
// end nav

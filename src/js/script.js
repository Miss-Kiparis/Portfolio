// Menu Burger
const burger = document.querySelector(".burger-menu");
const menuExtended = document.querySelector(".menu__list");

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.closest(".burger-menu").classList.toggle("checked");
  if (burger.classList.contains("checked")) {
    menuExtended.classList.add("menu-extended");
  } else {
    menuExtended.classList.remove("menu-extended");
  }
});

document.addEventListener("click", function (e) {
  if (
    e &&
    e.target.className !== "menu__list--item" &&
    e.target.className !== "menu__list--item__link"
  ) {
    burger.classList.remove("checked");
    menuExtended.classList.remove("menu-extended");
  }
});

document.addEventListener("keydown", function (el) {
  if (el.key == "Escape") {
    menuExtended.classList.remove("menu-extended");
    burger.classList.remove("checked");
  }
});

// END Burger

//  Scroller
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = "${pathLength} ${pathLength}";
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashofset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//  onScroll
window.addEventListener("scroll", () => {
  updateDashofset();

  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up--active");
  } else {
    scrollUp.classList.remove("scroll-up--active");
  }
});

//  click
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// END Scroller

// import { useDynamicAdapt } from "./module/dynamicAdapt.js";
// useDynamicAdapt();
// Dynamic Adaptive

// Burger Menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const menuClose = document.querySelector(".header__menu-close");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("header__menu--active");
  document.body.classList.add("no-scroll");
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("header__menu--active");
  document.body.classList.remove("no-scroll");
  overlay.classList.remove("overlay--active");
});

//products slider

$(".product").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
//sales slider
$(".sale__items").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//banner slider
$(".banner__inner").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        // centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//news slider
$(".news__items").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//article slider
$(".article__items").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  rows: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});

//service slider
$(".service__items").slick({
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 961,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: false,
      },
    },
  ],
});

//tab-menu footer
const title = document.querySelectorAll(".footer__items-title");

title.forEach((elem) => {
  const list = elem.parentNode.lastElementChild;

  elem.addEventListener("click", () => {
    elem.classList.toggle("footer__items-title--active");

    // При клике изменяем max-height в зависимости от состояния
    if (elem.classList.contains("footer__items-title--active")) {
      list.style.height = list.scrollHeight + "px";
    } else {
      list.style.height = "0";
    }
  });
});

$(".intro__slider").slick({
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  rows: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: "unslick",
    },
  ],
});

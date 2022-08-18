/* style_banner */

$(function () {
  function topBannerHandler() {
    $(".style_banner").slideUp();
  }
  $(".style_banner .style_banner_inner .close_btn").on(
    "click",
    topBannerHandler
  );
});

/* search_box */

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector("#search_box");
  const searchForm = document.querySelector("#search_form");

  searchBox.addEventListener("mouseenter", () => {
    searchForm.setAttribute("placeholder", "SEARCH");
  });

  searchBox.addEventListener("blur", () => {
    searchForm.setAttribute("placeholder", "");
  });
});

/* lnb_subMenu */

$(document).ready(function () {
  $("#menuBtn").mouseover(function () {
    $(".menuWrap").slideDown(200);
    $(".brand_search").css("display", "none");
  });
  $("#menuBtn").click(function () {
    $(".menuWrap").slideUp(200);
  });
});

/* brand_search */

$(function () {
  let btn = $(".lnb .brand_list");
  let list = $(".brand_search");

  btn.click(function () {
    $(".logoBox").addClass("border");
    list.slideToggle("fast");
    $(".menuWrap").css("display", "none");
  });
});

/* scroll Header */

$(window).scroll(function () {
  var position = $(window).scrollTop();
  if (position > 106) {
    $(".headerWrap").addClass("fix");
    $(".brand_search").addClass("position");
    $(".logoBox").addClass("border");
    $(".headerWrap").addClass("border");
    $(".menuWrap").addClass("position");
  } else if (position < 106) {
    $(".logoBox").removeClass("border");
    $(".headerWrap").removeClass("fix");
    $(".brand_search").removeClass("position");
    $(".headerWrap").removeClass("border");
    $(".menuWrap").removeClass("position");
  }
});

/* AOS animation */

AOS.init({
  disable: "phone",
  once: false,
});

$(window).resize(function () {
  AOS.init({
    disable: "phone",
    once: false,
  });
});

/* best tabmenu */

$(function () {
  let tab = $(".best .tab li");
  let sheet = $(".best .tab_sheet > div");

  tab.click(function () {
    let target = $(this);
    let i = target.index();

    tab.removeClass("on");
    tab.eq(i).addClass("on");

    sheet.removeClass("on_sheet");
    sheet.eq(i).addClass("on_sheet");
  });
});

/* shopping_cart click */

document.addEventListener("DOMContentLoaded", () => {
  const plus = document.querySelectorAll(".shopping_cart");
  let resultElement = document.querySelector(".count");
  let number = resultElement.innerText;

  plus.forEach(function (value) {
    value.addEventListener("click", () => {
      number = parseInt(number) + 1;
      resultElement.innerText = number;
    });
  });
});

/* hot_contents logo */

$(function () {
  let tab = $(".hot .hot_wrap .logo > div");
  let sheet = $(".hot_contents_wrap > div");

  tab.click(function () {
    let target = $(this);
    let i = target.index();

    tab.removeClass("on");
    tab.eq(i).addClass("on");

    sheet.removeClass("on_sheet");
    sheet.eq(i).addClass("on_sheet");
  });
});

/* roastery swiper-slide */

var swiper = new Swiper(".mySwiper01", {
  slidesPerView: 6,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* hot_contents swiper-slide */

var swiper = new Swiper(".mySwiper02", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* sub_banner ScrollMagic */

const scrollEls = document.querySelectorAll(".scroll_el");

scrollEls.forEach((scrollEl) => {
  new ScrollMagic.Scene({
    triggerElement: scrollEl, //감지해야할 대상
    triggerHook: 0.7, //감지 위치
  })
    .setClassToggle(scrollEl, "show")
    .addTo(new ScrollMagic.Controller());
});

/* sub_banner video */

$(".movieBg i:first-child").on("click", function () {
  $("#bgndVideo").YTPPause();
});

$(".movieBg i:last-child").on("click", function () {
  $("#bgndVideo").YTPPlay();
});

$("#bgndVideo").YTPlayer({
  videoURL: "F-o1wmQ1AKA",
  containment: ".movieBg",
  autoPlay: true,
  mute: true,
  startAt: 0,
  opacity: 1,
  showControls: false,
  playOnlyIfVisible: true,
});

/* quick_menu fade_in,out & click*/

$(document).ready(function () {
  //TOP 버튼
  $(".goTop").fadeOut();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $(".goTop").fadeIn();
    } else {
      $(".goTop").fadeOut();
    }
  });
  $(".goTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
});
var scrollHeight = $(document).height();

$(document).ready(function () {
  //BOTTOM 버튼
  $(".goBottom").fadeOut();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $(".goBottom").fadeIn();
    } else {
      $(".goBottom").fadeOut();
    }
  });

  $(".goBottom").click(function () {
    $("html, body").animate({ scrollTop: scrollHeight }, 300);
    return false;
  });
});

/* quick_menu hover */

$(document).ready(function () {
  $(".quick_menu > div").hover(
    function () {
      $(".quick_menu_hover > div").css("display", "block");
    },
    function () {
      $(".quick_menu_hover > div").css("display", "none");
    }
  );
});

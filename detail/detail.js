$(function () {
  function topBannerHandler() {
    $(".style_banner").slideUp();
  }
  $(".style_banner .style_banner_inner .close_btn").on(
    "click",
    topBannerHandler
  );
});

$(document).ready(function () {
  $("#menuBtn").mouseover(function () {
    $(".menuWrap").slideDown(200);
    $(".brand_search").css("display", "none");
  });
  $("#menuBtn").click(function () {
    $(".menuWrap").slideUp(200);
  });
});

$(function () {
  let btn = $(".lnb .brand_list");
  let list = $(".brand_search");

  btn.click(function () {
    $(".logoBox").addClass("border");
    list.slideToggle("fast");
    $(".menuWrap").css("display", "none");
  });
});

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

/* product&event ScrollMagic */
const scrollEls = document.querySelectorAll(".scroll_el");

scrollEls.forEach((scrollEl) => {
  new ScrollMagic.Scene({
    triggerElement: scrollEl, //감지해야할 대상
    triggerHook: 0.7, //감지 위치
  })
    .setClassToggle(scrollEl, "show")
    .addTo(new ScrollMagic.Controller());
});

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

/* size click */
var div2 = document.querySelectorAll(".bean_capacity ul li");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}
init();

/* size click */
var div1 = document.querySelectorAll(".crush_selection ul li");

function handleClick01(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < div1.length; i++) {
      div1[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init01() {
  for (var i = 0; i < div1.length; i++) {
    div1[i].addEventListener("click", handleClick01);
  }
}
init01();
/* size click */
var div3 = document.querySelectorAll(".subscribed ul li");

function handleClick02(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < div3.length; i++) {
      div3[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init02() {
  for (var i = 0; i < div3.length; i++) {
    div3[i].addEventListener("click", handleClick02);
  }
}
init02();

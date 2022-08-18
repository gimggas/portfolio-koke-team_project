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

/* image replacement */

document.addEventListener("DOMContentLoaded", () => {
  let mainImg = document.querySelector(".img_photo_big >img");
  let thumImg = document.querySelectorAll(".slider_wrap .thumbnail > img");

  for (let i = 0; i < thumImg.length; i++) {
    thumImg[i].onclick = mainBox;
  }

  function mainBox() {
    let newImg = this.src;
    mainImg.setAttribute("src", newImg);
  }
});

/* subscribed click*/

document.addEventListener("DOMContentLoaded", () => {
  let isOpen = false;
  // is -> true, false (불데이터저장된변수)
  let btn = document.querySelector(".item_detail_cont .btn");
  btn.addEventListener("click", function () {
    if (isOpen == false) {
      document.querySelector(".subscribed dt").style.display = "block";
      document.querySelector(".subscribed ul").style.display = "block";
      document.querySelector(".purchase").classList.remove("translate-x_left");
      document.querySelector(".purchase").classList.add("translate-x");
      isOpen = true;
    } else {
      document.querySelector(".subscribed dt").style.display = "none";
      document.querySelector(".subscribed ul").style.display = "none";
      document.querySelector(".purchase").classList.add("translate-x_left");
      document.querySelector(".purchase").classList.remove("translate-x");
      isOpen = false;
    }
  });
});

/* bean_capacity click */
var div2 = document.querySelectorAll(".bean_capacity ul li");

function handleClick(event) {
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

/* crush_selection click */
var div1 = document.querySelectorAll(".crush_selection ul li");

function handleClick01(event) {
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

/* item_goods_tab */

$(function () {
  $(".item_goods_tab a").click(function (e) {
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000);
  });
});

/* More information */

document.addEventListener("DOMContentLoaded", () => {
  let isOpen = false;
  let btn = document.querySelector(".detail_read_more");
  btn.addEventListener("click", function () {
    if (isOpen == false) {
      this.innerText = "상세정보 닫기";
      document.querySelector(".detail_page_02").style.display = "block";
      isOpen = true;
    } else {
      this.innerText = "상세정보 더보기";
      document.querySelector(".detail_page_02").style.display = "none";
      isOpen = false;
    }
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

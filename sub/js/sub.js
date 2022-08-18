/* style_banner */

$(function () {
  function styleBannerHandler() {
    $(".style_banner").slideUp();
  }
  $(".style_banner .close_btn").on("click", styleBannerHandler);
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

/* scroll Header */

$(window).scroll(function () {
  var position = $(window).scrollTop();
  if (position > 106) {
    $(".headerWrap").addClass("fix");
    $(".brand_search").addClass("position");
    $(".logoBox").addClass("border");
    $(".menuWrap").addClass("position");
  } else if (position < 106) {
    $(".logoBox").removeClass("border");
    $(".headerWrap").removeClass("fix");
    $(".brand_search").removeClass("position");
    $(".menuWrap").removeClass("position");
  }
});

/* taste click  */

var div2 = document.querySelectorAll(".taste >div");

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

/* search coffee */

let header = document.querySelector(".hide_mobile");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  // 스크롤 세로값이 헤더높이보다 크거나 같으면
  // 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  }
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("drop");
  }
};

/* shopping_cart click */

document.addEventListener("DOMContentLoaded", () => {
  const plus = document.querySelectorAll(".icon03");
  let resultElement = document.querySelector(".count");
  let number = resultElement.innerText;

  plus.forEach(function (value) {
    value.addEventListener("click", () => {
      number = parseInt(number) + 1;
      resultElement.innerText = number;
    });
  });
});

/* items_coffees tabMenu */

$(function () {
  let tab = $(".style_main .tab li");
  let sheet = $(".tab_sheet ul");

  tab.click(function () {
    let target = $(this);
    let i = target.index();

    tab.removeClass("on");
    tab.eq(i).addClass("on");

    sheet.removeClass("on_sheet");
    sheet.eq(i).addClass("on_sheet");
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

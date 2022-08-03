$(function () {
  function styleBannerHandler() {
    $(".style_banner").slideUp();
  }
  $(".style_banner .close_btn").on("click", styleBannerHandler);
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

// quick_menu
$(window).load(function () {
  $(function () {
    $(".quick_menu div").hover(
      function () {
        $(".quick_menu_hover div").fadeIn();
      },
      function () {
        $(".quick_menu_hover div").fadeOut();
      }
    );
  });
});

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
  //TOP 버튼
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

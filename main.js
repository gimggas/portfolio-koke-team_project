// style_banner

$(function () {
  function styleBannerHandler() {
    $(".style_banner").slideUp();
  }
  $(".style_banner .close_btn").on("click", styleBannerHandler);
});

// 유튜브 플레이어 ytplayer
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

$(".movieBg i:first-child").on("click", function () {
  $("#bgndVideo").YTPPause();
});

$(".movieBg i:last-child").on("click", function () {
  $("#bgndVideo").YTPPlay();
});

$(function () {
  var $firstmenu = $("nav > ul > li"),
    $header = $("header");
  $firstmenu
    .mouseenter(function () {
      $header.stop().animate({ height: "300px" }, 200);
    })
    .mouseleave(function () {
      $header.stop().animate({ height: "50px" }, 200);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  let plus = document.querySelector(".shopping_cart");
  let total = document.querySelector(".count");
  const resultElement = document.getElementById("result");
  let number = resultElement.innerText;

  plus.addEventListener("click", () => {
    price += 1;
    total.value = price;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  });
});

let all = document.querySelectorAll("[data-group]");
let values = document.querySelectorAll("[data-value]");
let rowid = 0;
let colid = 0;

el.addEventListener("click", function (event) {
  values.forEach((el) => {
    rowid = -1; // 동일하게 row값 -1
    colid = 0; // 마찬가지로 col값 0
    let idx = 0; // show 되는 요소들의 인덱스 값

    let val = event.target.dataset.value;
    all.forEach((el) => {
      let arr = el.dataset.group.split(" ");
      for (let a of arr) {
        if (a == val) {
          el.setAttribute("class", "show");
          /* 클릭시 정렬 기능 자리 */

          if (idx % 4 == 0) {
            // 초기 정렬과 동일함
            rowid++;
            colid = 0;
          }

          el.style.transform = `scale3d(1,1,1) translate3d(${110 * colid}px, ${
            160 * rowid
          }px,0px)`;
          // 보기 쉽게 item.clientHeight+10을 축약함 (초기정렬과 동일함)
          colid++;
          idx++; // 초기와 달리 show일때 수동으로 카운트해야하므로 1씩 증가

          break;
        } else {
          el.setAttribute("class", "hide");
          /* 클릭시 정렬 기능 자리 */
          el.style.transform = `scale3d(0,0,1) translate3d(0px,0px,-1px)`;
          // hide일때 시작점으로 모이게 함
        }
      }
    });
  });
});

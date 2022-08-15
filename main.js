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

// 검색할 배열
var arr = [
  { name: "리플로우 커피" },
  { name: "디카프워크룸" },
  { name: "웨이브온 커피" },
  { name: "슬러핀 커피" },
  { name: "리플렉트 커피" },
  { name: "55도 커피" },
  { name: "프로토콜 커피" },
  { name: "토치 커피" },
  { name: "FELT" },
  { name: "컬러드 빈" },
  { name: "카페플롬" },
  { name: "식물학 커피" },
  { name: "오드이븐" },
  { name: "하우트 커피컴퍼니" },
  { name: "히떼 로스터리" },
  { name: "콩볶는 사람들" },
  { name: "커넥츠커피" },
  { name: "베르크" },
  { name: "커피몽타주" },
  { name: "폰트 커피" },
  { name: "한국 커피" },
  { name: "하늘에 커피" },
  { name: "차군 커피" },
  { name: "리버벨" },
  { name: "디벨로핑룸" },
  { name: "알렉스더커피" },
  { name: "수수커피" },
];

// object 에 초성필드 추가 {name:"홍길동", diassembled:"ㅎㄱㄷ"}
arr.forEach(function (item) {
  var dis = Hangul.disassemble(item.name, true);
  var cho = dis.reduce(function (prev, elem) {
    elem = elem[0] ? elem[0] : elem;
    return prev + elem;
  }, "");
  item.diassembled = cho;
});

console.log(arr);

var ul = document.getElementById("find");
document.getElementById("txt").addEventListener("keyup", function () {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  var search = this.value;
  var search1 = Hangul.disassemble(search).join(""); // ㄺ=>ㄹㄱ

  arr
    // 문자열 검색 || 초성검색
    .filter(function (item) {
      return item.name.includes(search) || item.diassembled.includes(search1);
    })
    // 검색결과 ul 아래에 li 로 추가
    .forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = item.name;

      ul.appendChild(li);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  let mainImg = document.querySelector(".img_photo_big >img");
  let thumImg = document.querySelectorAll(".slider_wrap li > img");

  for (let i = 0; i < thumImg.length; i++) {
    thumImg[i].onclick = mainBox;
  }

  function mainBox() {
    let newImg = this.src;
    mainImg.setAttribute("src", newImg);
  }
});

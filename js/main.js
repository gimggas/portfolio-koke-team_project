$(function () {
  function topBannerHandler() {
    $(".style_banner").slideUp();
  }
  $(".style_banner .style_banner_inner .close_btn").on(
    "click",
    topBannerHandler
  );
});

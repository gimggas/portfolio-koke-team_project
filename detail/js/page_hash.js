$(function () {
  $(".lnb a").click(function (e) {
    e.preventDefault();

    $(window).scrollTo(this.hash || 0, 1000);
  });
});

$(function () {
  $(".box").append("<div class='box-p'>");
  $(".box-p").each(function () {
    $(this).html("<p>" + $(this).parent().children("figure").children("img").attr("alt") + "</p>");
  });
    if (window.matchMedia( "(min-width: 768px)" ).matches) {
      $(".box").hover(function () {
        $(this).children(".box-p").stop().fadeIn(300);
        $(this).children(".box-p").children("p").stop().animate({ "top": 0 }, 300);
      }, function () {
        $(this).children(".box-p").stop().fadeOut(300);
        $(this).children(".box-p").children("p").stop().animate({ "top": "10px" }, 300);
      });
    } else {
      $(".box .box-p").css({'position':'relative','display':'block','height':'100%',
      'background':'none'});
    }
});
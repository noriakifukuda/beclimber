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

$(function () {
  $(document).ready(function () {
    // スクロールで反応するアニメーション
    $(window).on('load scroll', function () {
      SetScrollTiming('.ani');
    });
  });

  // スクロールのタイミングでアニメーションさせる
  function SetScrollTiming(target) {
    var box = $(target);
    var animated = 'animated';

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if (scrollPos > boxOffset - wh ) {
        $(this).addClass('move');
      }
    });
  }
});

$(function () {
  $(document).ready(function () {
    // スクロールで反応するアニメーション
    $(window).on('load scroll', function () {
      SetScrollTiming('.ani2');
    });
  });

  // スクロールのタイミングでアニメーションさせる
  function SetScrollTiming(target) {
    var box = $(target);
    var animated = 'animated';

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass('move');
      }
    });
  }
});

$(function () {
  $(document).ready(function () {
    // スクロールで反応するアニメーション
    $(window).on('load scroll', function () {
      SetScrollTiming('.ani3');
    });
  });

  // スクロールのタイミングでアニメーションさせる
  function SetScrollTiming(target) {
    var box = $(target);
    var animated = 'animated';

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if (scrollPos > boxOffset - wh + 200) {
        $(this).addClass('move');
      }
    });
  }
});

$(function () {
  $(document).ready(function () {
    // スクロールで反応するアニメーション
    $(window).on('load scroll', function () {
      SetScrollTiming('.ani4');
    });
  });

  // スクロールのタイミングでアニメーションさせる
  function SetScrollTiming(target) {
    var box = $(target);
    var animated = 'animated';

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if (scrollPos > boxOffset - wh + 300) {
        $(this).addClass('move');
      }
    });
  }
});

$(function () {
  $(document).ready(function () {
    // スクロールで反応するアニメーション
    $(window).on('load scroll', function () {
      SetScrollTiming('.ani5');
    });
  });

  // スクロールのタイミングでアニメーションさせる
  function SetScrollTiming(target) {
    var box = $(target);
    var animated = 'animated';

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if (scrollPos > boxOffset - wh + 400) {
        $(this).addClass('move');
      }
    });
  }
});
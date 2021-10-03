$(function () {


  // レスポンシブメニュー
  // $(".logo_menu").click(function () {
  //   $("nav").slideToggle(300);
  // });
  // $(window).on('load resize', function () {
  //   console.log($(window).innerWidth());
  //   if ($(window).innerWidth() > 768) {
  //     $("nav").css("display", "flex");
  //   } else {
  //     $("nav").css("display", "none");
  //   }
  // });


  // トップからスクロール
  $('a[href^="#todown"]').click(function () {
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    position -= 70;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });


  //  トップに戻るクライマー
  $(window).scroll(function () {
    //  スクロール量
    $(window).scrollTop();

    if ($(window).scrollTop() > 600) {
      $(".line ,.top_climber").fadeIn();
    } else {
      $(".line , .top_climber").fadeOut();
    }
  });
  //トップへ戻るをクリックでするするっと戻る
  $(".top_climber").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  //パララックス クライマー
  var target1 = $(".top_climber");
  var target2 = $("main");
  var targetPosOT1 = target2.offset().top;
  var targetFactor = 0.23;
  var windowH = $(window).height();
  var scrollYStart1 = targetPosOT1 - (windowH);
  var scrollY = $(this).scrollTop();

  if (scrollY > scrollYStart1) {
    target1.css('top', (scrollY - targetPosOT1) * targetFactor + 'px');
  }

  $(window).on('scroll', function () {
    scrollY = $(this).scrollTop();
    if (scrollY > scrollYStart1) {
      target1.css('top', (scrollY - targetPosOT1) * targetFactor + 'px');
    }
  });

  if (window.matchMedia('(max-width: 768px)').matches) {
    $(function () {
      var target1 = $(".top_climber");
      var target2 = $("main");
      var targetPosOT1 = target2.offset().top;
      var targetFactor = 0.13;
      var windowH = $(window).height();
      var scrollYStart1 = targetPosOT1 - (windowH);
      var scrollY = $(this).scrollTop();

      if (scrollY > scrollYStart1) {
        target1.css('top', (scrollY - targetPosOT1) * targetFactor + 'px');
      }

      $(window).on('scroll', function () {
        scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
          target1.css('top', (scrollY - targetPosOT1) * targetFactor + 'px');
        }
      });
    });
  }
  //トップへ戻るここまで

  $(function () {
    $('nav li a').each(function () {
      //href属性をスラッシュの文字で分割
      var $href = $(this).attr('href').split("/")[1];
      //      console.log($href);
      //現在のURLをスラッシュで分割
      var array = location.href.split("/");
      console.log(array[array.length - 2]);
      //navのaのhref属性と、現在のURL（フォルダ名）が同じであれば
      if ($href == array[array.length - 2]) {
        $(this).parent().addClass('current');
      } else if (array[array.length - 2] == 'beclimber') {
        $('nav li:first-child').addClass('current');
      } else {
        $(this).parent().removeClass('current');
      }
    });
  });

});

// 追加部分
$(function () {
  $(document).ready(function () {
    // スクロールで反応するアニメーション
    $(window).on('load scroll', function () {
      SetScrollTiming('.ani1');
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
      if (scrollPos > boxOffset - wh + 475) {
        $(this).addClass('move');
      }
    });
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
      if (scrollPos > boxOffset - wh + 200) {
        $(this).addClass('move');
      }
    });
  }
});
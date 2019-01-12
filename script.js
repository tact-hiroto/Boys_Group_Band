$(function () {
    
    
    $('.newsLink').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 600
        }, 800);
    });
    
    $('.bandLink').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 1250
        }, 800);
    });
    
    $('.movieLink').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 2010
        }, 800);
    });
    
    $('#slider').bxSlider({
    ticker: true,
    minSlides: 3,
    maxSlides: 10,
    slideWidth: 300,
    slideMargin: 0,
    speed: 50000
  });
    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 550) {
            $('.Title-News').animate({
                top: '-600px',
                opacity: 0
            }, 600);

        }
    });
    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1200) {
            $('.Title-Band').animate({
                top: '-600px',
                opacity: 0
            }, 600);

        }
    });
    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 1800) {
            $('.Title-Movie').animate({
                top: '-600px',
                opacity: 0
            }, 600);

        }
    });
    
    $(window).load(function () {
        // 消えるタイミングはお好みで
        $('.loading').delay(5000).fadeOut(4000);
    });

    // 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
    function stopload() {
        $('.loading').delay(1000).fadeOut(7000);
    }
    setTimeout('stopload()', 1000);

    
    
    
    
});
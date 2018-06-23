$(function () {
    $('.newsLink').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 800
        }, 800);
    });
    $('.bandLink').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 500
        }, 800);
    });
    $('.photoLink').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 1000
        }, 800);
    });
});
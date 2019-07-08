/*jslint browser: true*/
/*global $*/

var syncerTimeout = null;//グローバル変数

$(function () {
    "use strict";
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
                opacity: 0 ,
                zIndex: -1
            }, 600);

        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1200) {
            $('.Title-Band').animate({
                top: '-600px',
                opacity: 0 ,
                zIndex: -1
            }, 600);

        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1800) {
            $('.Title-Movie').animate({
                top: '-600px',
                opacity: 0 ,
                zIndex: -1
            }, 600);

        }
    });




    $(window).load(function () {
        $('.loading').delay(5000).fadeOut(4000);
    });

    function stopload() {
        $('.loading').delay(1000).fadeOut(7000);
    }
    setTimeout(stopload(), 1000);

    $(window).scroll(function () {
        if (syncerTimeout === null) {
            syncerTimeout = setTimeout(function () {

                var element = $('#page-top'),

                    visible = element.is(':visible'),

                    now = $(window).scrollTop(),

                    under = $('body').height() - (now + $(window).height());


                if (now > 1500 ) {
                    if (!visible) {
                        element.fadeIn('slow');
                    }
                } else if (visible) {

                    element.fadeOut('slow');
                }


                syncerTimeout = null;
            }, 1000);
        }
    });

    $('#move-page-top').click(
        function () {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
        }
    );





});
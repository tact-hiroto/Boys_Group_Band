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
            scrollTop: 1810
        }, 800);
    });
    $(window).scroll(function(){
        if($(document).scrollTop() > 550){
            $('.Title-News').animate({
                top:'-600px',
                opacity: 0
            },600);
            
        }
    });
    $(window).scroll(function(){
        if($(document).scrollTop() > 1200){
            $('.Title-Band').animate({
                top:'-600px',
                opacity: 0
            },600);
            
        }
    });
    $(window).scroll(function(){
        if($(document).scrollTop() > 1800){
            $('.Title-Movie').animate({
                top:'-600px',
                opacity: 0
            },600);
            
        }
    });
});


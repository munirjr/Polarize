$('.menu li').hover(function () {
    $(this).children('ul').stop(true, false).slideDown();
},
function () {
    $(this).children('ul').stop(true, false).slideUp();
});

$(document).on('click','.hamburguer', function(){
    $('.mobile-menu').addClass('actived');
});

$(document).on('click','.close,.item', function(){
    $('.mobile-menu').removeClass('actived');
    $('.service').slideUp();
});

$(document).on('click','.mobile-menu li', function(){
    $(this).children('ul').slideToggle();
});
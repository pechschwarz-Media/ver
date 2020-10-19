/* Header */

$(document).scroll(function() {
    if ($(document).scrollTop() >= 300) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
});

$('header .mobile-controls .nav-toggle').click(function() {
    $(this).toggleClass('open');
    $(this).parents('header').find('.main-nav').toggleClass('open');
    $('body').toggleClass('open-nav');
});

$('header .main-nav ul li span').click(function() {
    $(this).toggleClass('open');
    $(this).parent().find('.sub-menu').slideToggle(400);
});

/* Datepicker */

$(document).ready(function() {
    $('.connection-check .connection-check__inner .input-date input').datepicker({
        autoShow: false,
        autoPick: true,
        autoHide: true,
        zIndex: 99999999999,
        offset: 10,
        trigger: $('.connection-check .connection-check__inner .date-toggle'),
        placement: "bottom-right",
        language: "de-DE",
        format: "dd.mm.yyyy",
        days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        daysShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
        daysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
    });
});

$('.connection-check .connection-check__inner .input-date .left').click(function() {
    var date = $('.connection-check .connection-check__inner .input-date input').datepicker('getDate');
    date.setDate(date.getDate() - 1);
    $('.connection-check .connection-check__inner .input-date input').datepicker('setDate', date);
});

$('.connection-check .connection-check__inner .input-date .right').click(function() {
    var date = $('.connection-check .connection-check__inner .input-date input').datepicker('getDate');
    date.setDate(date.getDate() + 1);
    $('.connection-check .connection-check__inner .input-date input').datepicker('setDate', date);
});

function getCurrentTime(date) {
        var h = (date.getHours().toString().length == 1) ? "0" + date.getHours() : date.getHours();
            m = (date.getMinutes().toString().length == 1) ? "0" + date.getMinutes() : date.getMinutes()
            time = h + ":" + m;

    $('.connection-check .connection-check__inner .input-time input').val(time);
}

function decTime() {
    var time = $('.connection-check .connection-check__inner .input-time input').val(),
        date = new Date('1995-06-21T' + time);

    if(date.getMinutes() == 00) {
        var h = ((date.getHours() - 1).toString().length == 1) ? "0" + (date.getHours() - 1) : date.getHours() - 1,
            m = "59";
    } else {
        var h = (date.getHours().toString().length == 1) ? "0" + date.getHours() : date.getHours(),
            m = ((date.getMinutes() - 1).toString().length == 1) ? "0" + (date.getMinutes() - 1) : date.getMinutes() - 1;
    }

    var date = new Date('1995-06-21T' + h + ":" + m);
    getCurrentTime(date);
}

function incTime() {
    var time = $('.connection-check .connection-check__inner .input-time input').val(),
        date = new Date('1995-06-21T' + time);

    if(date.getMinutes() == 59) {
        var h = ((date.getHours() + 1).toString().length == 1) ? "0" + (date.getHours() + 1) : date.getHours() + 1,
            m = "00";
    } else {
        var h = (date.getHours().toString().length == 1) ? "0" + date.getHours() : date.getHours(),
            m = ((date.getMinutes() + 1).toString().length == 1) ? "0" + (date.getMinutes() + 1) : date.getMinutes() + 1;
    }

    var date = new Date('1995-06-21T' + h + ":" + m);
    getCurrentTime(date);
}

$(document).ready(function() {
    var date = new Date();
    getCurrentTime(date);
});

$('.connection-check .connection-check__inner .input-time .right').click(function() {
    incTime();
});

$('.connection-check .connection-check__inner .input-time .left').click(function() {
    decTime();
});

/* Search Overlay */

$('header .search').click(function() {
    $('.search-overlay').css('display', 'flex').hide().fadeIn(400);
});

$('.search-overlay .close').click(function() {
    $(this).parent().fadeOut(400);
});

/* Connection Check */

$('.connection-check .connection-check__toggle').click(function() {
    $(this).parent().toggleClass('show');
});

/* Home Slider */

$('.home-slider .home-slider__slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: false
});

/* Home Traffic Slider */

$('.home-traffic .home-traffic__slider .slider').on('init', function(event, slick){
    $('.home-traffic .home-traffic__slider .slider-nav .count .total').text(slick.slideCount);
});

$('.home-traffic .home-traffic__slider .slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    dots: false,
    nextArrow: $('.home-traffic .home-traffic__slider .slider-nav .next-slide'),
    prevArrow: $('.home-traffic .home-traffic__slider .slider-nav .prev-slide')
});

$('.home-traffic .home-traffic__slider .slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var i = currentSlide + 1;
    $('.home-traffic .home-traffic__slider .slider-nav .count .current').text(i);
});

/* Home Counter */

$('.home-counter .home-counter__container .count .number span').counterUp({
    delay: 10,
    time: 3000
});
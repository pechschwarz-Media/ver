/* Header */

$(document).scroll(function() {
    if ($(document).scrollTop() >= 300) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
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
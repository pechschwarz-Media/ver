/* Apply Form */

$('.apply-form input, .apply-form textarea').focusout(function() {
    $(this).addClass("check");
});

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
    $('header .main-nav ul li span').removeClass('open');
    $('header .main-nav ul li .sub-menu').slideUp(400);
    $(this).toggleClass('open');
    $(this).parent().find('.sub-menu').slideToggle(400);
});

/* SMOOTH SCROLL */

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* Connection Check */

$(document).scroll(function() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom >= ($(document).height() - 600)) {
        $('.connection-check').addClass('moved');
    } else {
        $('.connection-check').removeClass('moved');
    }
});

$(document).ready(function() {
    $('.connection-check .connection-check__inner .input-date input').datepicker({
        autoShow: false,
        autoPick: true,
        autoHide: true,
        zIndex: 99999999999,
        offset: 10,
        trigger: $('.connection-check .connection-check__inner .input-date i'),
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

function getCurrentTime(date) {
        var h = (date.getHours().toString().length == 1) ? "0" + date.getHours() : date.getHours();
            m = (date.getMinutes().toString().length == 1) ? "0" + date.getMinutes() : date.getMinutes()
            time = h + ":" + m;

    $('.connection-check .connection-check__inner .input-time input').val(time);
}

$(document).ready(function() {
    var date = new Date();
    getCurrentTime(date);
});

$('.connection-check .connection-check__inner .input-start-point span').click(function() {
    var start_city = $('.input-start-city input').val(),
        start_point = $('.input-start-point input').val(),
        end_city = $('.input-end-city input').val(),
        end_point = $('.input-end-point input').val();

    $('.input-start-city input').val(end_city);
    $('.input-start-point input').val(end_point);
    $('.input-end-city input').val(start_city);
    $('.input-end-point input').val(start_point);
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

/* News Slider */

$('.news-overview .news-overview__slider').slick({
    autoplay: false,
    arrows: false,
    dots: true
});

/* Traffic Overview (Accordion) */

$(document).ready(function(){
    $('.traffic-overview .traffic-overview__single .title').click(function() {
        $(this).toggleClass('open');
        $accordion_content = $(this).next('.content');
        $('.traffic-overview .traffic-overview__single .content').not($accordion_content).slideUp();
        $('.traffic-overview .traffic-overview__single .content').not($accordion_content).prev('.title').removeClass('open');
        $accordion_content.stop(true, true).slideToggle(500);
    });
});

/* Timetable */

$('.timetable .timetable__child .form-container').click(function() {
    var parent = $(this).parent();
    parent.addClass('full');
    $('.timetable .timetable__child').not(parent).addClass('hide');
});

$('.timetable .timetable__child .close').click(function() {
    var parent = $(this).parent();
    parent.removeClass('full');
    $('.timetable .timetable__child').not(parent).removeClass('hide');
});

$(document).ready(function() {
    var date = new Date($.now()),
        y = date.getFullYear(),
        m = (date.getMonth().toString().length == 1) ? "0" + date.getMonth() : date.getMonth(),
        d = (date.getDay().toString().length == 1) ? "0" + date.getDay() : date.getDay(),
        h = (date.getHours().toString().length == 1) ? "0" + date.getHours() : date.getHours(),
        mi = (date.getMinutes().toString().length == 1) ? "0" + date.getMinutes() : date.getMinutes(),
        dateOutput = y + "-" + m + "-" + d + "T" + h + ":" + mi;

    $('.timetable .timetable__child .form-container form .datetime input').val(dateOutput);
});

$('.timetable .timetable__child .form-container form .datetime i').click(function() {
    $('.timetable .timetable__child .form-container form .datetime input').focus();
});

/* Downloads (Filter) */

$('.downloads .downloads__filter select').change(function() {
    var value = $(this).val();

    if(value == "*") {
        $('.downloads .downloads__list .download').show();
    } else {
        $('.downloads .downloads__list .download').hide();
        $('.downloads .downloads__list .download[data-filter="' + value + '"]').show();
    }
});

/* Accordion */

$(document).ready(function(){
    $('.accordion__single .title').click(function() {
        $(this).toggleClass('open');
        $accordion_content = $(this).next('.content');
        $('.accordion__single .content').not($accordion_content).slideUp();
        $('.accordion__single .content').not($accordion_content).prev('.title').removeClass('open');
        $accordion_content.stop(true, true).slideToggle(500);
    });
});

/* Tickets (Equalizer) */

function ticket_equalizer() {
    $('.tickets').each(function() {
        var heightMax = 0;
        $(this).find('.features').each(function() {
            var height = $(this).outerHeight();
            if(height > heightMax) {
                heightMax = height;
            }
        });
        $(this).find('.features').css('min-height', heightMax + "px");
    });
}
ticket_equalizer();

/* Ticket Accordion */

$(document).ready(function(){
    $('.ticket-accordion .accordion .title').click(function() {
        $(this).toggleClass('open');
        $accordion_content = $(this).next('.content');
        $('.accordion .content').not($accordion_content).slideUp();
        $('.accordion .content').not($accordion_content).prev('.title').removeClass('open');
        $accordion_content.stop(true, true).slideToggle(500);
    });
});

/* Select Center (Contact) */

$('#select-center').change(function() {
    var center = $(this).val();
    $('.contact-map .location').hide();
    $('.contact-map .location[data-center="' + center + '"]').show();
});

/* Select (Citizen) */

$('#select-citizen').change(function() {
    var value = $(this).val();
    $('[data-citizen]').hide();
    $('[data-citizen="' + value + '"]').show();
});

/* Jobs (Equalizer) */

function job_equalizer() {
    var heightMax = 0;
    $('.job-detail__box .content').each(function() {
        var height = $(this).outerHeight();
        if(height > heightMax) {
            heightMax = height;
        }
    });
    $('.job-detail__box .content').css('min-height', heightMax + "px");
}
job_equalizer();

/* Select Center */

$('#select-customer-center').change(function() {
    var id = $(this).val();
    $('.customer-center .customer-center__container').hide();
    $('.customer-center .customer-center__container[data-center="' + id + '"]').show();

    $('.customer-center .image').hide();
    $('.customer-center .image[data-center="' + id + '"]').show();
});

/* FAQ (Accordion) */

$(document).ready(function(){
    $('.faq .faq__single .question').click(function() {
        $(this).toggleClass('open');
        $accordion_content = $(this).next('.answer');
        $('.faq .faq__single .answer').not($accordion_content).slideUp();
        $('.faq .faq__single .answer').not($accordion_content).prev('.question').removeClass('open');
        $accordion_content.stop(true, true).slideToggle(500);
    });
});

/* History */

/*$(document).ready(function() {
    $('.history svg .point').each(function() {
        var point = $(this),
            pos = point.position(),
            id = $(this).data("content"),
            date = $('.history__date[data-content="' + id + '"]');

        date.css("top", pos.top);
        date.css("left", pos.left);
    });
});

function historyPrepare($el) {
    var length = $el[0].getTotalLength();
    $el.css("stroke-dasharray", length);
    $el.css("stroke-dashoffset", length);
}

var $line = $('#primary-line');
historyPrepare($line);

var controller = new ScrollMagic.Controller();
var historyHeight = $('.history').height();

var historyLine = new ScrollMagic.Scene({
    triggerElement: ".history",
    duration: historyHeight + "px",
    tweenChanges: true,
    triggerHook: 0.5
})
.setTween('#primary-line', {'strokeDashoffset': 0, ease: Linear.easeNone})
.addTo(controller);

$('.history svg .point').each(function() {
    var element = this;

    var historyPoint = new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.5,
    })
    .setClassToggle(element, "visible")
    .duration("1000%")
    .addTo(controller);
});

$('.history svg .point').click(function() {
    var id = $(this).data("content");
    $('.history .history__content').removeClass("visible");
    $('.history .history__content[data-content="' + id + '"]').addClass("visible");
});

$('.history .history__content .close').click(function() {
    $(this).parent().removeClass('visible');
});*/

var controller = new ScrollMagic.Controller();
var historyHeight = $('.history .history__timeline').outerHeight();

var historyLine = new ScrollMagic.Scene({
    triggerElement: ".history",
    duration: historyHeight + "px",
    triggerHook: 0.5
})
.setTween('.history .history__timeline .line', {'height': '100%', ease: Linear.easeNone})
.addTo(controller);

$('.history .history__timeline .timeline-item').each(function() {
    var element = this;
    new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.5
    })
    .setClassToggle(element, "visible")
    .reverse(false)
    .addTo(controller)
});
// Sticky navbar 
var scrollPosition = window.scrollY;
if (scrollPosition >= 1) {
    $("#header").addClass('active');

}
var header = $("#header");
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 1) {
        header.removeClass("active");
    } else {
        header.addClass("active");
    }
});



// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});
//Click event to scroll to top
$('.scrollToTop').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});



// Slick slider js
$(document).ready(function() {
    $('.slick-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    });
});



// Line progress bar
// activate jprogress
$(".progressbars").jprogress({
    background: "#FF2D55"
});


// AOS init
AOS.init({
    duration: 500,
    once: true
});


// popup
$('.portfolio-item').on('click', function () {
    $(this).parent(".popup-section").children(".portfolio-description").addClass("active");
    $('.off-canvas-overlay').addClass('active');
})

$('.close').on('click', function () {
    $(this).parent(".portfolio-description").removeClass("active");
    $('.off-canvas-overlay').removeClass('active');
})


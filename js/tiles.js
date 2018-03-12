$(document).ready(function() {
    var $carousel = $(".carousel");
    $carousel.carousel();
    var carousels = {0: "user-voices-carousel", 1: "f-droid-carousel"};
    var paused = new Object();
    for (var key in carousels) {
        if (!carousels.hasOwnProperty(key)) continue;
        paused[key] = false;
    }
    var w, wTop, fTop, fHeight;

    /**
     * Prevent jumping page on small screens
     * caused by a not-fixed height of the F-Droid carousel
     */
    function preventSingleCarouselJumping() {
        w = $(window).width();
        wTop = $(window).scrollTop();
        for (var c in carousels) {
            var $ca = $("#" + carousels[c]);
            fTop = $ca.offset().top;
            fHeight = $ca.outerHeight();
            if (w < 768 && !paused[c] && wTop > fTop + fHeight) { // pause cycling when slides are not displayed
                paused[c] = true;
                $ca.carousel('pause');
            } else if (w < 768 && paused[c] && wTop <= fTop + fHeight // enable cycling when they are displayed
                || w >= 768 && paused) { // enable cycling when window got resized
                paused[c] = false;
                $ca.carousel('cycle');
            }
        }
    }

    $(window).scroll(preventSingleCarouselJumping);
    $(window).resize(preventSingleCarouselJumping);
    preventSingleCarouselJumping();

});
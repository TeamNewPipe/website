document.documentElement.className += (!("ontouchstart" in document.documentElement) ? "no-" : "") + "touch";

if ("ontouchstart" in document.documentElement) {
    let userVoicesSwiper = new Swipe('#user-voices');
    userVoicesSwiper.onLeft(function () {
        $('#user-voices-carousel').carousel('next');
    });
    userVoicesSwiper.onRight(function () {
        $('#user-voices-carousel').carousel('prev');
    });
    userVoicesSwiper.run();
    let downloadFdroidSwiper = new Swipe('#download-info-carousel-container');
    downloadFdroidSwiper.onLeft(function () {
        $('#f-droid-carousel').carousel('next');
    });
    downloadFdroidSwiper.onRight(function () {
        $('#f-droid-carousel').carousel('prev');
    });
    downloadFdroidSwiper.run();
}

// collapse qr-code
$(document).ready(function () {
    let $qrCodeToggled = $('.f-droid-qr-code-toggled');
    $('#f-droid-qr-code-toggle').click(function () {
        $qrCodeToggled.toggleClass('shown');
        $qrCodeToggled.toggleClass('hidden');
    });
});

let loaded = false;
let playing = false;
let animation = $('#animation').get(0);
$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 767 && !loaded) {
        animation.load();
        loaded = true;
        animation.play();
        playing = true;
    } else if ($(window).width() > 767 && !playing) {
        animation.play();
        playing = true;
    } else if ($(window).width() <= 767 && loaded && playing) {
        animation.pause();
        playing = false;
    }
});

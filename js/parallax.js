var headerHeight, featuresHeight, featuresPosition;

function parallax_reset() {
    headerHeight = $('.header-wrapper').outerHeight();
    /* check whether the height can encrease as navbar can be (un-)collapsed */
    if($(window).width() > 767){
        $('.header-background').css('height', headerHeight + 'px');
    }
    else {
        $('.header-background').css('height', '100vh');
    }
    featuresHeight = $('.features-wrapper').outerHeight();
    featuresPosition = $('.features-wrapper').position().top;
    $('.features-background').css('height', featuresHeight + 'px');
}

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.header-background').css('height', (headerHeight - scrolled) + 'px');
    $('.features-background').css('height', (featuresHeight - scrolled + featuresPosition) + 'px');
}

$(window).scroll(function(e) {
    if($(window).width() > 767){
        parallax();
    }
});

$(window).resize(function(e) {
    /* timeout because gallery_resize needs some time to execute - only nacessary until parallax is pure CSS without JS */
    window.setTimeout(function(){
        parallax_reset();
        parallax();
    },100);
});

parallax_reset();
parallax();
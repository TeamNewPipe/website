var headerHeight, featuresHeight, featuresPosition;

function parallax_reset() {
    featuresHeight = $('.features-wrapper').outerHeight();
    featuresPosition = $('.features-wrapper').position().top;
    $('.features-background').css('height', featuresHeight + 'px');
        var scrolled = $(window).scrollTop();
    $('.phone-background').css('height', (featuresPosition + featuresHeight - scrolled / 2) + 'px' );
}

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.features-background').css('height', (3*featuresHeight - scrolled + featuresPosition) + 'px' );
    $('.phone-background').css('height', (featuresPosition + featuresHeight - scrolled) * 0.8 + 'px' );
    //$('.phone-background img').css('top', ((featuresPosition > scrolled + featuresHeight) ? (scrolled * 0.3  + 'px') : (0 + 'px') ));
    //$('.phone-background img').css('top', ((featuresPosition - 1.75*scrolled + featuresHeight) *0.2 + 'px') );
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
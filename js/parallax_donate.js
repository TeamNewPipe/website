/* TODO: replace that shit with CSS */
let  featuresHeight, featuresPosition, windowHeight;

function parallax_reset() {
    windowHeight = $(window).height();
    featuresHeight = $('#donate-wrapper').outerHeight(true);
    featuresPosition = $('#donate-wrapper').position().top;
    $('#parallax-background').css('height', featuresHeight + 'px');
}

function parallax() {
    const scrolled = $(window).scrollTop();
    //console.log(featuresHeight + " " + featuresPosition + " " + bitcoinHeight + " " + windowHeight  + " " +  scrolled  + " " + (featuresHeight - scrolled + featuresPosition));
    if ($(document).height() <= $(window).height()) {
        $('#parallax-background').css('height', (featuresHeight + featuresPosition - scrolled) + 'px');
    } else {
        $('#parallax-background').css('height', (featuresHeight + featuresPosition + windowHeight - scrolled) + 'px');
    }
    //$('.phone-background').css('top', featuresPosition + bitcoinHeight + featuresHeight/2 - scrolled*0.9 + 'px');
}

$(window).scroll(function(e) {
    if ($(window).width() > 767){
        parallax();
    }
});

$(window).resize(function(e) {
    parallax_reset();
    parallax();
    /*if($(window).width() < 767){
        $('.phone-background img').hide();
    }
    else {
        $('.phone-background img').show();
    }*/
});

$(window).on("load", function() {
    parallax_reset();
    parallax();
    //if($(window).width() > 767) $('.phone-background img').show();
});

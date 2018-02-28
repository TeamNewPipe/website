var  featuresHeight, featuresPosition, windowHeight, bitcoinHeight;

function parallax_reset() {
    var collapsed;

    if ($('#bitcoin-donation').css('display') == 'none' ) {
        collapsed = true;
        $('#bitcoin-donation').toggle();
        bitcoinHeight = $('#bitcoin-donation').outerHeight(true);
    }
    windowHeight = $(window).height();
    bitcoinHeight = $('#bitcoin-donation').outerHeight(true);

    featuresHeight = $('#donate-wrapper').outerHeight(true);
    featuresPosition = $('#donate-wrapper').position().top;
    $('#parallax-background').css('height', featuresHeight + 'px');

    if (collapsed != null) {
        $('#bitcoin-donation').toggle();
    }
}

function parallax() {
    var scrolled = $(window).scrollTop();
    //console.log(featuresHeight + " " + featuresPosition + " " + bitcoinHeight + " " + windowHeight  + " " +  scrolled  + " " + (featuresHeight - scrolled + featuresPosition));
    if ($(document).height() <= $(window).height())
        $('#parallax-background').css('height', (featuresHeight + featuresPosition + bitcoinHeight - scrolled) + 'px');
    else
        $('#parallax-background').css('height', (featuresHeight + featuresPosition + bitcoinHeight + windowHeight - scrolled) + 'px');
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

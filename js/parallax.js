
var headerHeight = $('.header-wrapper').outerHeight();
$('.header-background').css('height', headerHeight + 'px');
var featuresHeight = $('.features-wrapper').outerHeight();
var featuresPosition = $('.features-wrapper').position().top;
$('.features-background').css('height', featuresHeight + 'px');
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.header-background').css('height', (headerHeight - scrolled) + 'px');
    $('.features-background').css('height', (featuresHeight - scrolled + featuresPosition) + 'px');
}

$(window).scroll(function(e){
    if($(window).width() > 767){
        parallax();
    }
});

$(window).resize(function(e) {
    featuresPosition = $('.features-wrapper').position().top;
    parallax();
});

parallax();
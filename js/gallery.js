var slider;

$(document).ready(function(){
    /* create slider */
    slider = $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 10000,
        slideMargin: 0,
        moveSlides: 1,
        easing: 'ease-in-out',
        speed: 1000,
        mode: 'horizontal',
        responsive: true,
        adaptiveHeight: false,
        touchEnabled: ($(window).width() > 544) ? true : false
    });

    slideshow();
});

$(window).on("orientationchange load resize", function () {
    gallery_resize();
});

function gallery_slide(s,dbclick){
    if($(window).width() > 543 || dbclick)
        slider.goToSlide(s);
}

function gallery_resize(){
    slider.reloadSlider({
        touchEnabled: ($(window).width() > 544) ? true : false,
        startSlide:slider.getCurrentSlide()
    });
}

/* Bootstrap 3 collapse function has some bugs wich cause ugly toggles */
var visibleDescription = null;

function collapseDescription(dest) {
    if($(window).width() <= 543) {
        if($(dest).css('display') == 'none'){
            $('.text .description-text').hide();
            $(dest).show();
            visibleDescription = $(dest);
        }
        else {
            $(dest).hide();
            visibleDescription = null;
        }
    }
}

$(window).on("load orientationchange resize", function () {
    if($(window).width() > 543){
        $('.text .description-text').show();
    }
    else {
        $('.text .description-text').hide();
        visibleDescription = null;
    }
    if(visibleDescription != null) 
        $(visibleDescription).show();
});

function slideshow(){
    $(".details-image.image-slideshow").each(function(){
        var currentIndex = 0;
        $(this).children().each(function(index){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
                currentIndex = index;
            }
            else if(currentIndex + 1 == index){
                $(this).addClass("active");
            }
        });
        if(currentIndex == $(this).children().length - 1){
            $(this).children().eq(0).addClass("active");
        }
    });

    setTimeout(function(){slideshow();}, 5000);
}
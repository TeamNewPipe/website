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
        adaptiveHeight: false
    });
    
    /* do not display slides at small screens that are only used for large screens */
    el = $('.gallery-element-wrapper.gallery-desktop-item');
    comment = document.createComment(el.get(0).outerHTML);
    lastWindowWidth = $(window).width();
    if(lastWindowWidth <= 767){
        el.replaceWith(comment);
        slider.reloadSlider();
    }
    
    $(window).on("orientationchange load resize", function () {
        gallery_resize();
    });
});

function gallery_slide(s){
    slider.goToSlide(s);
}

function gallery_resize(){
    el = $('.gallery-element-wrapper.gallery-desktop-item');
    
    /* small screens */
    if($(window).width() <= 767 && lastWindowWidth > 767){
        lastWindowWidth = $(window).width();
        el.replaceWith(comment);
        slider.reloadSlider({
            startSlide: (slider.getCurrentSlide() == 0) ? slider.getCurrentSlide() : slider.getCurrentSlide() - 1,
            adaptiveHeight: true
        });
    }
    
    /* medium and large screens */
    else if($(window).width() > 767 && lastWindowWidth <= 767) {
        lastWindowWidth = $(window).width();
        $(comment).parent().prepend(comment.nodeValue);
        $(comment).remove();
        slider.reloadSlider({
            startSlide: (slider.getCurrentSlide() + 1)
        });
    }
    
    /* prevent template's bug, which does not allow responsive behavior in some browsers */
    else {
        slider.reloadSlider({
            startSlide:slider.getCurrentSlide()
        });
    }
}
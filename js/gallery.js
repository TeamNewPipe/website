var number = parseInt($('.controls-bottom a').last().attr('href').substr(5));
var current = 1;

$(document).ready(function() {
    
    /* Check if CSS variables are supported */
    if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        galleryAddStyle();
    }
    else if(!window.CSS.supports('--items-desktop', 0) && !window.CSS.supports('--items-mobile', 0)){
        galleryAddStyle();
    }
    
    //current = parseInt($('.controls-bottom .selected').first().attr('href').substr(5));
    current = galleryFirst();

    $('.gallery a').click(function() {
        if(current != parseInt($(this).attr('href').substr(5))){
            current = parseInt($(this).attr('href').substr(5));
            galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
            var clicked = $('[name=' + $(this).attr('href').substr(1) +']').position().left;
            galleryScroll(clicked);  
        }
    });
    
    $('.controls-left').click(function() {
        galleryPrev();
    });
    
    $('.controls-right').click(function() {
        galleryForw();
    });
    
    $(window).resize(function() {
        galleryResize();
    });

});

function galleryFirst(){
    if($(window).width() > 767){
        return 1;
    }
    else {
        return 2;
    }
}

function galleryPrev(){
    if(current != galleryFirst()){
        current--;
    }
    else {
        current = number;
    }
    var nextLeft = $('.gallery-element[name="item'+ (current) +'"]').position().left;
    galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
    galleryScroll(nextLeft);
}

function galleryForw(){
    if(current != number){
        current++;
    }
    else {
        current = galleryFirst();
    }
    var nextLeft = $('.gallery-element[name="item'+ (current) +'"]').position().left;
    galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
    galleryScroll(nextLeft);
}

function galleryScroll(x){
    $('.gallery').animate({
        marginLeft: -x + "px"
    }, 1000);
    $('.gallery-controls').animate({
        marginLeft: x + "px"
    }, 1000);
}

function galleryControllerBar(c){
    $('.controls-bottom a').addClass('unselected');
    $('.controls-bottom a').removeClass('selected');
    $(c).addClass('selected');
    $(c).removeClass('unselected');
}

function galleryResize() {
    width = $(window).width();
    height = $(window).height();
    if($(window).width() > 767){
        $('.gallery').css('marginLeft', -(current - galleryFirst()) * width + 'px');
        $('.gallery-controls').css('marginLeft', (current - galleryFirst()) * width + 'px');
    }
    else {
        if(current == 1){
            current = galleryFirst();
            galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
        }
        $('.gallery').css('marginLeft', -(current - 2) * width + 'px');
        $('.gallery-controls').css('marginLeft', (current - 2) * width + 'px');
    }
}

function galleryAddStyle(){
    var nd = $('.gallery-element[name*="item"]').length;
    var nm = nd - 1;
    document.querySelector('style').textContent +=             
    ".gallery { width: calc(100% * " + nd + " );} .gallery-element, .gallery-controls { width: calc(100% / " + nd + " ); } @media (max-width:766px) { .gallery { width: calc(100% * " + nm + " );} .gallery-element, .gallery-controls { width: calc(100% / " + nm + " ); } }";
}
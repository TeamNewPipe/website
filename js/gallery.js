var items;
var current = 1;
var resizeChange = false;

$(document).ready(function() {
    
    /* Check if CSS variables are supported */
    if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        galleryAddStyle();
    }
    else if(!window.CSS.supports('--items-desktop', 0) && !window.CSS.supports('--items-mobile', 0)){
        galleryAddStyle();
    }
    
    /* Initialize gallery */
    items = $('.gallery-desktop-item').length;
    galleryAddControls();
    
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
        return parseInt($('.gallery-desktop-item').first().attr("name").substr(4));
    }
    else {
        return parseInt($('.gallery-mobile-item').first().attr("name").substr(4));
    }
}

function galleryPrev(){
    if(current != galleryFirst()){
        current--;
    }
    else {
        current = items;
    }
    var nextLeft = $('.gallery-element[name="item'+ (current) +'"]').position().left;
    galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
    galleryScroll(nextLeft);
    resizeChange = false;
}

function galleryForw(){
    if(current != items){
        current++;
    }
    else {
        current = galleryFirst();
    }
    var nextLeft = $('.gallery-element[name="item'+ (current) +'"]').position().left;
    galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
    galleryScroll(nextLeft);
    resizeChange = false;
}

function galleryScroll(x){
    $('.gallery').animate({
        marginLeft: -x + "px"
    }, 1000);
    $('.gallery-controls').animate({
        marginLeft: x + "px"
    }, 1000);
}

function galleryControllerBar(control){
    $('.controls-bottom a').addClass('unselected');
    $('.controls-bottom a').removeClass('selected');
    $(control).addClass('selected');
    $(control).removeClass('unselected');
}

function galleryResize() {
    width = $(window).width();
    height = $(window).height();
    if($(window).width() > 767){
        if(resizeChange){
            current = galleryFirst();
            galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
            resizeChange = false;
        }
        $('.gallery').css('marginLeft', -(current - galleryFirst()) * width + 'px');
        $('.gallery-controls').css('marginLeft', (current - galleryFirst()) * width + 'px');
    }
    else {
        if(current == 1){
            current = galleryFirst();
            galleryControllerBar($('.controls-bottom a[href="#item'+ (current) +'"]'));
            resizeChange = true;
        }
        $('.gallery').css('marginLeft', -(current - 2) * width + 'px');
        $('.gallery-controls').css('marginLeft', (current - 2) * width + 'px');
    }
}

function galleryAddControls(){
    $('.controls-bottom').empty();
    for(var i = 1; i < items + 1; i++){
        if(i == 1){
            $('.controls-bottom').append('<a href="#item'+ i +'" class="selected"><div></div></a>');
        }
        else {
            $('.controls-bottom').append('<a href="#item'+ i +'" class="unselected"><div></div></a>');
        }
    }
}

function galleryAddStyle(){
    var nd = $('.gallery-desktop-item').length + 1;
    var nm = $('.gallery-mobile-item').length + 1;
    document.querySelector('style').textContent +=             
    ".gallery { width: calc(100% * " + nd + " );} .gallery-element, .gallery-controls { width: calc(100% / " + nd + " ); } @media (max-width:766px) { .gallery { width: calc(100% * " + nm + " );} .gallery-element, .gallery-controls { width: calc(100% / " + nm + " ); } }";
}
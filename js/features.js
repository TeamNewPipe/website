/**
 * feature.js functoins and animations for the feature section in the main page
 * @author Tobias Groza
 * @licence MIT
 */

/**
 * IDs of all feature slides
 * @type {Array}
 */
var features = [
    "lightweight", "downloads", "privacy", "background", "popup",
    "subscriptions", "bookmarks", "history", "code", "price"];
var currentFeature = -1;
var isFullscreen = false;
var isActive = false;


$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 767) {
        if (!isActive) {
            if (currentFeature == -1) currentFeature = 0;
            $('#' + features[currentFeature]).addClass('active');
            $("#features-sidebar .list-group a").eq(currentFeature).addClass('active');
            isActive = true;
        }
        if (isFullscreen) {

        }
    } else {
        if (isActive) {
            if (currentFeature == -1) currentFeature = 0;
            $('#' + features[currentFeature]).removeClass('active');
            $('body').removeClass('feature-fullscreen');
            isActive = false;
        }
    }
});


$('.feature2-close-detail').click(function () {
    $("#features-sidebar .list-group .active").removeClass('active');
    $(this).parent().removeClass('active');
    $('body').removeClass('feature-fullscreen');
    $(document).trigger('bodyClassChanged');
    history.pushState(null, null, "#"); // make sure to work with currentFeature
});

/**
 * Onclick-listener for the features
 * Changes the slides
 */
$('#features-sidebar .list-group a').click(function (event) {
    event.preventDefault();
    var hash = $(this).attr('href');
    $('.list-group > .active').removeClass('active');
    $(this).addClass('active');
    $('.feature2-detail.active').removeClass('active');
    $(hash).addClass('active');
    currentFeature = features.indexOf(hash.substr(1));
    if (currentFeature == 0) {
        animateCircleProgress(true);
    }
    if ($("body").outerWidth() > 767) {


    } else {
        $("body").addClass("feature-fullscreen");
        isFullscreen = true;
    }
    history.pushState(null, null, hash);
});

/**
 * Check if the hash changed and update the features if necessary
 */
$(window).on('hashchange load', function(){
    var hash = window.location.hash;
    console.log(">"+hash);
    if (hash != "" && hash != null && hash != "undefined"
        && features.includes(hash.substr(1))
        && !$(hash).hasClass('active')) {
        if ($(window).width() <= 767) $('body').addClass('feature-fullscreen');
        $('.feature2-detail.active').removeClass('active');
        $(hash).addClass('active');
        currentFeature = features.indexOf(hash.substr(1));
        $("#features-sidebar .list-group a").eq(currentFeature).addClass('active');
        if (currentFeature == 0) animateCircleProgress(true);
    } else if(hash == "" && $(window).width() < 767) { // enables hardware back button or back key on keyboard to close the detail view
        $("#features-sidebar .list-group .active").removeClass('active');
        $('.feature2-detail.active').removeClass('active');
        $('body').removeClass('feature-fullscreen');
        $(document).trigger('bodyClassChanged');
        currentFeature = -1;
    }
});


//////////////////////////
//                      //
//      ANIMATIONS      //
//                      //
//////////////////////////


/////////////////////
// Progress Animation
/////////////////////

/**
 * Checks if an element is visible to the user
 * @param x how much of the element must be on screen; value from 0 to 1
 * @param y how much of the element must be on screen; value from 0 to 1
 * @returns {boolean}
 */
$.fn.isOnScreen = function(x, y){

    if(x == null || typeof x == 'undefined') x = 1;
    if(y == null || typeof y == 'undefined') y = 1;

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var height = this.outerHeight();
    var width = this.outerWidth();
    if(!width || !height){
        return false;
    }

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    console.log(viewport.bottom + "   " + bounds.bottom);
    if (viewport.bottom > bounds.bottom) return true;

    if(!visible){
        return false;
    }

    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

};

/**
 * Shows and Animates the progress circle when it is completely visible to the viewer
 * @param force - boolean forces the progress circles to show
 */
function animateCircleProgress (force) {
    if (force == null || typeof force == 'undefined' || force == "") force = false;
    $('#lightweight .feature2-description .single-chart').each(function () {
        if(force || !$(this).hasClass('in') && $(this).isOnScreen()) {
            $(this).addClass('in');
        }
    });
}

$(window).on("load, scroll", function () {
    animateCircleProgress()
});

//////////////////
// Hover Animation
//////////////////

(function( $ ){
    $.fn.animateCircle = function() {
        if (!$(this).hasClass('animated')) {
            $(this).addClass('animated');
            var circle = $(this);
            setTimeout(function () {
                circle.removeClass('animated')
            }, 1750);
        }
    };
})( jQuery );

$('.single-chart').hover(function () {
    $(this).animateCircle();
});

/* TODO Write methods for toggling .active class, feature-fullscreen detection at resize, back-button behavior */

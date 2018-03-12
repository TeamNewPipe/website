/**
 * feature.js functoins and animations for the feature section in the main page
 * @author Tobias Groza
 * @licence MIT
 */

$(function() {

//////////////////////////
//                      //
//   Slides Lifecycle   //
//                      //
//////////////////////////

/**
 * IDs of all feature slides
 * @type {Array}
 */
var features = [
    "lightweight", "downloads", "privacy", "background", "popup",
    "subscriptions", "bookmarks", "history"];
var currentFeature = -1,
    isFullscreen = false,
    isActive = false;
var $f = $("#features"),
    $s = $("#features-sidebar"),
    $b = $("body");


function resizeHandler() {
    if ($(window).width() > 767) {
        if (!isActive) {
            if (currentFeature === -1) currentFeature = 0;
            $('#' + features[currentFeature]).addClass('active');
            $s.find(".list-group > a").eq(currentFeature).addClass('active');
            isActive = true;
        }
    } else {
        if (isActive) {
            if (currentFeature === -1) currentFeature = 0;
            $('#' + features[currentFeature]).removeClass('active');
            $b.removeClass('feature-fullscreen');
            isActive = false;
        }
    }
}

resizeHandler();

$(window).on("orientationchange resize", resizeHandler);


/**
 * Close fullscreen feature
 */
$f.find('.feature-close-detail').click(function () {
    $s.find(".list-group > .active").removeClass('active');
    $(this).parent().removeClass('active');
    $b.removeClass('feature-fullscreen');
    history.pushState(null, null, "#"); // make sure to work with currentFeature
});

/**
 * Onclick-listener for the features
 * Changes the slides
 */
$s.find('.list-group > a').click(function (event) {
    event.preventDefault();
    var hash = $(this).attr('href');
    $f.find('.list-group > .active').removeClass('active');
    $(this).addClass('active');
    $f.find('.feature-detail.active').removeClass('active');
    $(hash).addClass('active');
    currentFeature = features.indexOf(hash.substr(1));
    if (currentFeature === 0) animateCircleProgress(true);
    if ($b.outerWidth() <= 767) {
        $b.addClass("feature-fullscreen");
        isFullscreen = true;
    }
    history.pushState(null, null, hash);
});

/**
 * Check if the hash changed and update the features if necessary
 * When the document is ready check if the screen is small,
 * a slide is called via the URL and open it if necessary.
 */
function a() {
    var hash = window.location.hash;
    if (hash !== "" && hash != null && hash != "undefined"
        && features.includes(hash.substr(1))
        && !$(hash).hasClass('active')) {
        if ($(window).width() <= 767) $b.addClass('feature-fullscreen');
        $('.feature-detail.active').removeClass('active');
        $(hash).addClass('active');
        currentFeature = features.indexOf(hash.substr(1));
        var $l = $s.find(".list-group > a");
        $l.removeClass('active');
        $l.eq(currentFeature).addClass('active');
        if (currentFeature === 0) animateCircleProgress(true);
    } else if (hash === "" && $(window).width() <= 767) { // enables hardware back button or back key on keyboard to close the detail view
        $s.find(".list-group > .active").removeClass('active');
        $f.find('.feature-detail.active').removeClass('active');
        $b.removeClass('feature-fullscreen');
        currentFeature = -1;
    }
}

a();

$(window).on('hashchange', a);

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
$.fn.isOnScreen = function (x, y) {

    if (x == null || typeof x == 'undefined') x = 1;
    if (y == null || typeof y == 'undefined') y = 1;

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var height = this.outerHeight();
    var width = this.outerWidth();
    if (!width || !height) {
        return false;
    }

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    if (viewport.bottom > bounds.bottom) return true;

    if (!visible) {
        return false;
    }

    var deltas = {
        top: Math.min(1, (bounds.bottom - viewport.top) / height),
        bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
        left: Math.min(1, (bounds.right - viewport.left) / width),
        right: Math.min(1, (viewport.right - bounds.left) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

};

/**
 * Shows and Animates the progress circle when it is completely visible to the viewer
 * @param force - boolean forces the progress circles to show
 */
function animateCircleProgress(force) {
    if (force == null || typeof force == 'undefined' || force == "") force = false;
    $('#lightweight .single-chart').each(function () {
        if (force || !$(this).hasClass('in') && $(this).isOnScreen()) {
            $(this).addClass('in');
        }
    });
}

animateCircleProgress();

$(window).scroll(animateCircleProgress);

//////////////////
// Hover Animation
//////////////////

(function ($) {
    $.fn.animateCircle = function () {
        if (!$(this).hasClass('animated')) {
            $(this).addClass('animated');
            var circle = $(this);
            setTimeout(function () {
                circle.removeClass('animated')
            }, 1750);
        }
    };
})(jQuery);

$('#lightweight .single-chart').mouseenter($(this).animateCircle);

});

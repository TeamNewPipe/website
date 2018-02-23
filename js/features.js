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

/*$('#features2').click(function(){
    $('#features2 .progress-bar').addClass('active');
});

$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 544) {
        $('#features2 *').attr('data-role', 'none');
    }
});*/

/*$("body").page({
    keepNative: "#features2 *"
});*/
$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 767) {
        if (!isActive) {
            if (currentFeature == -1) currentFeature = 0;
            $('#' + features[currentFeature]).addClass('active');
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

/*$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 767 && $(window).height() < 665 + 60) {
        $('.feature2-media').css('width', 'calc(33% - 15px)');
        $('.feature2-description').css('width', 'calc(66% - 15px)');
    }
});*/

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
$(window).on('hashchange load', function(e){
    var hash = window.location.hash;
    console.log(">"+hash);
    if (hash != "" && hash != null && hash != "undefined"
        && features.includes(hash.substr(1))
        && !$(hash).hasClass('active')) {
        if ($(window).width() <= 767) $('body').addClass('feature-fullscreen');
        $('.feature2-detail.active').removeClass('active');
        $(hash).addClass('active');
        currentFeature = features.indexOf(hash.substr(1));
    } else if(hash == "" && $(window).width() < 767) { // enables hardware back button or back key on keyboard to close the detail view
        $("#features-sidebar .list-group .active").removeClass('active');
        $('.feature2-detail.active').removeClass('active');
        $('body').removeClass('feature-fullscreen');
        $(document).trigger('bodyClassChanged');
        currentFeature = -1;
    }
});

/* TODO Write methods for toggling .active class, feature-fullscreen detection at resize, back-button behavior */

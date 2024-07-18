/**
 * Corrects the window scroll position
 * because the fixed nav bar needs some space on the top.
 * This makes navigation via HTML anchors difficult,
 * because a part of the element is hidden behind the navigation bar.
 */
function correctAnchors() {
    var hash = window.location.hash.substr(1);
    if (typeof hash == 'undefined' || hash === "" || hash == null) return;
    var top = $("#" + hash).offset().top;
    var nav = $("#header").outerHeight(true);
    window.scrollTo(0, top - nav);
}
$(window).on("load", correctAnchors);
$(window).on('hashchange', correctAnchors);

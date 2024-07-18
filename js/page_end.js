/* Prevent search CSS transition on window resize */

let windowWidth = window.innerWidth;
document.getElementsByTagName("BODY")[0].onresize = function(){
    /* Only necessary when the user leaves the mobile size */
    if (windowWidth < window.innerWidth && windowWidth < 767) {
        document.getElementById("navigation-search-input").classList.add("noTransition");
        setTimeout(function(){ document.getElementById("navigation-search-input").classList.remove("noTransition");}, 900);
    }
    windowWidth = window.innerWidth;
};

/* Prevent search submit when search field is empty. Important for touch devices
with medium or large screens because search input textfield is hidden when not focused */

$(".nav .search-form").submit(function(e){
    if ($(".nav .search-input").val().replace(/ /g, '').length === 0) {
        e.preventDefault();
        $(".nav .search-input").addClass("invalid-input");
        setTimeout(function(){ $(".nav .search-input").removeClass("inavlid-input");}, 10500);
    }
});

/* Since we have no form as parent of the input field, the pressing the enter key
does not trigger a new search. That's why we call the onclick event of the submit button. */

document.getElementById("search-box").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("search-submit").click();
    }
});

/**
 * Corrects the window scroll position
 * because the fixed nav bar needs some space on the top.
 * This makes navigation via HTML anchors difficult,
 * because a part of the element is hidden behind the navigation bar.
 */
function correctAnchors() {
    let hash = window.location.hash.substr(1);
    if (typeof hash == 'undefined' || hash === "" || hash == null) return;
    let top = $("#" + hash).offset().top;
    let nav = $("#header").outerHeight(true);
    window.scrollTo(0, top - nav);
}
$(window).on("load", correctAnchors);
$(window).on('hashchange', correctAnchors);

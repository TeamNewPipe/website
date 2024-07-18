document.addEventListener('DOMContentLoaded', function() {
    // show and jump to FAQ list elements which are referenced by the URL anchor
    let url = window.location.href;

    if (url.includes('FAQ/#') || url.includes('FAQ#')) {
        // we are on the FAQ main page and a FAQ should be opened
        // first, display the FAQ to ensure it is there
        let itemId = window.location.hash.substr(1);
        showOne(itemId);
    }

    if (url.includes('#') && !url.includes('FAQ/tutorials/')) {
        // some other FAQ page with FAQ list elements
        let itemId = window.location.hash.substr(1);
        let listElement = document.getElementById(itemId);
        if (listElement != null) {
            // un-collapse element without animation
            listElement.getElementsByClassName('tile-head')[0].classList.add('active');
            listElement.getElementsByClassName('tile-body')[0].style.display = 'block';

            // scroll to element without having the navbar hiding it
            let navbarHeight = document.getElementById("header").offsetHeight;
            let elementPos = listElement.offsetTop;
            let scrollPos = elementPos - navbarHeight - 15; // 15px margin to navigation bar for design reasons :)
            // window.scrollTo(0,  scrollPos); does not work for whatsoever reason.... using JQuery instead
            $('html, body').animate({scrollTop: scrollPos}, 1);
        }
    }

    clickListener();
});

function clickListener() {
    $(".faq-tiles .tile > .tile-head > :not(.tile-anchor)").click(function () {
        let $tile = $(this).closest('.tile');
        $tile.hasClass("active") ? $tile.find(".tile-body").slideUp() : $tile.find(".tile-body").slideDown();
        $tile.toggleClass("active");
    });
    $(".faq-tiles .tile > .tile-head > .tile-anchor").click(function (event) {
        onTilesAnchorClick(event, $(this));
    });
}

function onTilesAnchorClick(event, $tileAnchor) {
    // prevent event / location change in case a tutorial was clicked
    event.preventDefault();

    let $tile = $tileAnchor.closest('.tile');
    // change URL in browser address abr
    let anchor = $tile.prop('id');
    let url = window.location.href.split('#')[0] + '#' + anchor;
    history.pushState({}, '', url);

    // copy the new url to the clipboard
    // this is hackish, because we do not use the external (but always recommended) clipboard.js API to keep the site small
    if ($($tile.find('.tile-type').get(0)).hasClass('tutorial')) {
        // if this is a tutorial, we copy the URL to the tutorial
        url = $tile.parent().prop('href');
    }
    let tempSelect = $('<input>').val(url).appendTo('body').select();
    document.execCommand('copy');
    tempSelect.remove();
}

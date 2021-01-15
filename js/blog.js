$(document).ready(function() {
    /*
    Make single post tiles clickable
     */
    $('.border-box').click(function (event) {
        if (event.target.nodeName === 'a' || event.target.nodeName === 'A'
            || event.target.tagName === 'a' || event.target.tagName === 'A') {
            return;
        }
        let url = $(this).attr('data-href');
        if (url !== "" && url.startsWith("{{ site.url }}"))
            window.location.href = url;
    });
});

---
# yaml header to enable parsing
# without this header, the {{ site.url }} is not parsed
#// noinspection JSAnnotator
---
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
        if (url !== undefined && url != null && url !== "" && url.startsWith("{{ site.url }}"))
            window.location.href = url;
    });
});

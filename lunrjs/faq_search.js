---
---
window.store = {
{% assign faqs = site.faq | concat: site.tutorials %}
{% for item in faqs %}
"{{ item.title | slugify }}": {
    "title": "{{ item.title | xml_escape }}",
    "url": "{{ item.url | xml_escape }}",
    "content": {{ item.content | strip_newlines | jsonify}},
    "type": "{{ item.type }}",
    "categories": [{% for category in item.categories %}"{{ category }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
}{%- unless forloop.last -%},{%- endunless -%}
{% endfor %}
};

function search() {
    searchTerm = document.getElementById('search-box').value;
    if (searchTerm.replace(/\s/g, '').length === 0) return;

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('categories', { boost: 5 });
        this.field('content');
        this.field('type');
        this.field('url');
    });

    for (var key in window.store) { // Add the data to lunr
        idx.add({
            'id': key,
            'title': window.store[key].title,
            'categories': window.store[key].categories,
            'content': window.store[key].content,
            'type': window.store[key].type,
            'url': window.store[key].url
        });
    }

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results); // We'll write this in the next section
}

function displaySearchResults(results) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        var ret = '';

        for (var i = 0; i < results.length; i++) {  // Iterate over the results
            var item = window.store[results[i].ref];
            if (item.type === 'tutorial')
                ret += '<a href="' + item.url + '">';
            ret += '<article class="col-md-8 col-md-offset-2 tile">\n'
                + '<header class="tile-head">\n'
                + '<span class="' + item.type + '">'
                + '<i class="fa fa-';
            switch (item.type) {
                case 'info':
                    ret += "info-circle";
                    break;
                case 'tutorial':
                    ret += "graduation-cap";
                    break;
            }
            ret += '"></i></span>'
                + item.title
                + '</header>';
            if (item.type != 'tutorial') ret += '<div class="tile-body">' + item.content + '</div>';
            ret += '</article>';
            if (item.tutorial === 'tutorial') ret += '</a>';
        }

        searchResults.innerHTML = ret;
    } else {
        searchResults.innerHTML = '<div id="no-search-results"><br><p class="text-center"><i class="fa fa-3x fa-meh-o" aria-hidden="true"></i><br><br>No results found</p></div>';
    }

    // uncollapse content when there is only one result
    if (results.length === 1) {
        $('.faq-tiles .tile').addClass("active");
        $('.faq-tiles .tile').find(".tile-body").show();
    }

    searchResults.classList.add("active");
    clickListener();
}

function clickListener() {
    $(".faq-tiles .tile > .tile-head").click(function () {
        $(this).parent().hasClass("active") ? $(this).parent().find(".tile-body").slideUp() : $(this).parent().find(".tile-body").slideDown();
        $(this).parent().toggleClass("active");
    });
}

$("#search-box").keydown(function (e) {
    if (e.keyCode == 13) { // Enter
        search();
    }
});

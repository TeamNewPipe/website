---
---
window.store = {
{%- assign faqs = site.faq | concat: site.tutorials %}
{% for item in faqs %}
"{{ item.title | slugify }}": {
    "id": "{{ item.relative_path | split: "/" | last | replace: ".html", "" }}",
    "title": "{{ item.title | xml_escape }}",
    "url": "{{ item.url | xml_escape }}",
    "content": {{ item.content | strip_newlines | jsonify}},
    "type": "{{ item.type }}",
    "categories": [{% for category in item.categories %}"{{ category }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
}{%- unless forloop.last -%},{%- endunless -%}
{% endfor %}
};
var idx;
function search() {
    searchTerm = document.getElementById('search-box').value;
    if (searchTerm.replace(/\s/g, '').length === 0) return;

    // Initialize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('categories', { boost: 5 });
        this.field('content');
        this.field('type');
        this.field('url');
    });

    for (let key in window.store) { // Add the data to lunr
        idx.add({
            'id': key,
            'title': window.store[key].title,
            'categories': window.store[key].categories,
            'content': window.store[key].content,
            'type': window.store[key].type,
            'url': window.store[key].url
        });
    }

    let results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results); // We'll write this in the next section
}

function displaySearchResults(results) {
    let searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        let ret = '';
        for (let result in results) {
            let item = window.store[results[result].ref];
            ret += renderItem(item);
        }
        searchResults.innerHTML = ret;
        // un-collapse content when there is only one result
        if (results.length === 1) {
            let $tile = $('.faq-tiles .tile');
            $tile.addClass("active");
            $tile.find(".tile-body").show();
        }
    } else {
        searchResults.innerHTML = '<div id="no-search-results"><br><p><i class="fa fa-3x fa-meh-o" aria-hidden="true"></i><br><br>No results found</p></div>';
    }

    searchResults.classList.add("active");
    clickListener();
}

function renderItem(item) {
    let ret = "";
    if (item.type === 'tutorial')
        ret += '<a href="' + item.url + '">';
    ret += '<article class="col-md-8 col-md-offset-2 tile" id="' + item.id + '">\n'
        + '<header class="tile-head">\n'
        + '<span class="tile-type ' + item.type + '">'
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
        + '<div class="tile-title">' + item.title + '</div>'
        + '<span class="tile-anchor" title="Copy link to this ' + (item.type === 'tutorial' ? 'tutorial' : 'FAQ entry')
        + '">' + '<i class="fa fa-link fa-flip-horizontal"></i></span>'
        + '</header>';
    if (item.type !== 'tutorial') ret += '<div class="tile-body">' + item.content + '</div>';
    ret += '</article>';
    if (item.type === 'tutorial') ret += '</a>';

    return ret;
}

function showAll() {
    let ret = "";
    for (let key in window.store) {
        ret += renderItem(window.store[key]);
    }
    let searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ret;
    searchResults.classList.add("active");
    clickListener();
}

function showOne(itemId) {
    for (let key in window.store) {
        if (window.store[key].id === itemId) {
            displaySearchResults([{ref: key}]);
            return;
        }
    }
}

$("#search-box").keydown(search);

$("#tile-show-all").click(showAll);

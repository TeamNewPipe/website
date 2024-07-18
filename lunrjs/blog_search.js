---

---

const SITE_URL = "{{ site.url }}";
const SITE_BASE_URL = "{{ site.baseurl }}";

function renderSearchResults(results, store) { // rendering search results could be done with Jade or JSX in the future
    let searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        let appendString = '';

        for (let i = 0; i < results.length; i++) {  // Iterate over the results
            let item = store[results[i].ref];
            appendString += '<div class="border-box" data-href="' + SITE_URL + item.url+ '">'
                + '<h4><a href="' + item.url + '">' + item.title + '</a></h4>'
                + '<p><span>' + item.date+ ', by ' + item.author + '</span></p><br>';
            if (item.image !== "") {
                appendString += '<div class="row">\n'
                    + '        <a href="' + item.url + '">\n'
                    + '            <div class="col-md-3 col-img">\n'
                    + '                <img src="' + item.image + '" alt="post thumbnail" class="img-responsive postImg" />\n'
                    + '            </div>\n'
                    + '        </a>\n'
                    + '        <div class="col-md-9">'
                    + '            ' + item.excerpt
                    + '            <p><a href="' + item.url + '">Read more...</a></p>'
                    + '            ' + getCategories(item)
                    + '        </div>'
                    + '    </div>'; // row
            } else {
                appendString += item.excerpt
                    + '<p><a href="' + item.url + '">Read more...</a></p>'
                    + getCategories(item);
            }

            appendString += '<div class="anchor-right-full"></div>'
                + '</div>'; // border-box
        }

        searchResults.innerHTML = appendString;
    } else {
        searchResults.innerHTML = '<div id="no-search-results" class="border-box"><br><p><i class="fa fa-3x fa-meh-o" aria-hidden="true"></i><br><br>No posts found</p><br></div>';
    }
}

function getCategories(item) {
    let categ = "";
    if (item.category.length !== 0) {
        categ += '<p class="categories">';
        for (let c = 0; c < item.category.length; c++) {
            categ += '<a href="/' + SITE_BASE_URL + "blog/"
                + item.category[c].toLowerCase() + '"><i class="fa fa-tag" aria-hidden="true"></i>&nbsp;'
                + item.category[c] + '</a>';
        }
        categ += "</p>";
    }
    return categ;
}

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');

        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
    }
}
function search(type) {
    let searchTerm = false;
    if (type === "manual")
        searchTerm = document.getElementById('search-box').value;
    else if (type === "onload")
        searchTerm = getQueryVariable('s');
    else
        searchTerm = getQueryVariable('s');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initialize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        let idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category', { boost: 5 });
            this.field('date');
            this.field('content');
            this.field('excerpt', { boost: 2 });
        });

        for (let key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'author': window.store[key].author,
                'category': window.store[key].category,
                'date': window.store[key].date,
                'content': window.store[key].content,
                'excerpt': window.store[key].excerpt
            });

            let results = idx.search(searchTerm); // Get lunr to perform a search
            renderSearchResults(results, window.store); // We'll write this in the next section
        }
    }
}
search("onload");

document.addEventListener('DOMContentLoaded', function() {
    $("#search-box").on('keyup', function (e) {
        if (e.keyCode === 13) { // Enter key
            search('manual');
        }
    });
});

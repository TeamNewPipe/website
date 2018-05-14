---

---


var siteBaseUrl = "{{ site.baseurl }}";
function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        var appendString = '';

        for (var i = 0; i < results.length; i++) {  // Iterate over the results
            var item = store[results[i].ref];
            appendString += '<div class="border-box anchor-right-full-parent">'
                + '<h4><a href="' + item.url + '">' + item.title + '</a></h4>'
                + '<p><span>' + item.date+ ', by ' + item.author + '</span></p><br>';
            if (item.image != "") {
                appendString += '<div class="row">\n'
                    + '        <a href="' + item.url + '">\n'
                    + '            <div class="col-md-3 col-img">\n'
                    + '                <img src="' + item.image + '" class="img-responsive postImg" />\n'
                    + '            </div>\n'
                    + '        </a>\n'
                    + '        <div class="col-md-9">'
                    + '            ' + item.excerpt
                    + '<p><a href="' + item.url + '">Read more...</a></p>'
                    + getCategories(item)
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
        searchResults.innerHTML = '<div id="no-search-results"><br><p class="text-center"><i class="fa fa-3x fa-meh-o" aria-hidden="true"></i><br><br>No results found</p><br></div>';
    }
}

function getCategories(item) {
    var categ = "";
    if(item.category.length != 0) {
        categ += '<p class="categories">';
        for(var c = 0; c < item.category.length; c++) {
            categ += '<a href="/' + siteBaseUrl + item.category[c].toLowerCase() + '"><i class="fa fa-tag" aria-hidden="true"></i>&nbsp;' + item.category[c] + '</a>';
            if(item.category.length - c != 1) //not the last item
                categ += " &nbsp;|&nbsp; ";
        }
        categ += "</p>";
    }
    return categ;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');

        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
    }
}
function search(type) {
    if(type == "manual")
        searchTerm = document.getElementById('search-box').value;
    else if(type == "onload")
        var searchTerm = getQueryVariable('s');
    else
        var searchTerm = getQueryVariable('s');

    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category', { boost: 5 });
            this.field('date');
            this.field('content');
            this.field('excerpt', { boost: 2 });
        });

        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'author': window.store[key].author,
                'category': window.store[key].category,
                'date': window.store[key].date,
                'content': window.store[key].content,
                'excerpt': window.store[key].excerpt
            });

            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store); // We'll write this in the next section
        }
    }
}
search("onload");
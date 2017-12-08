#NewPipe Website Generator


Repo for the [NewPipe website](https://newpipe.schabi.org).
The new website is based on [Bootstrap](https://getbootstrap.com) 3.3.7 [Jekyll](https://jekyllrb.com/) 3.6.2.

## Press Kit

### Jekyll variables

##### Page metadata

`metatitle` - The title to display in the browser `<title></title`

`metades`   - The description to display as `<meta name="description">`

`metakey`   - Additional keywords for search engines `<meta name="keywords">`

`modified`  - The date the page was last modified. It will be displayed at the bottom of each page. Format `YYYY-MM-DD HH:MM:SS +/-TTTT`

##### Search

The variable `search` accepts following values wich modify the position in the search results:

`exclude` will exclude the whole page from the search

`major` will increase the importance of this page

`minor` will decrease the importance of this page
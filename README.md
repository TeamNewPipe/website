# NewPipe Website Generator

Repo for the static [NewPipe website](https://newpipe.net). The code for the blog commenting system [isso](https://posativ.org/isso) is located in [this repository](https://github.com/TeamNewPipe/isso).

All sites are based on [Bootstrap](https://getbootstrap.com) 3.4.1 and [Jekyll](https://jekyllrb.com/).


## Development

#### Installation
Install Jekyll and Bundler gems through RubyGems:
``` sh
~ $ gem install jekyll bundler
```

Navigate to the root directory of this project, dev environment:
``` sh
$ bundle install
```

Navigate to this directory and build the site on the preview server:
``` sh
$ bundle exec jekyll serve
```

Open http://localhost:4000 in your browser.

#### General

As this repository includes the press kit and the blog, we prefix all layouts and includes with either `press_` or `blog_`.

## Documentation

#### Categories / Tags
 
We do not make a difference between categories and tags, but only use categories.
Categories are used to tag posts, so they can be found easier.
Every tag has an overview page where you can find all posts with this tag.
Tags are also recognized as keywords by the search and posts get with these tags get an extra boost and are listed higher.
 
You can add a category / tag in the YAML header of each page:
 
 
`categories: category1`
 
`categories: [category1, category2, category3]`
 
Post with tags get the following permalink: `/blog/category1/category2/title`
 
These categories are implemented right now:
 
- release
- announcement
- talk
- download
- pinned
 
Every post which has the `announcement` category will also be shown in `press/announcements/`.

Posts with the `pinned` category appear on the right sidebar as _Also interesting_.

New categories can be implemented via an extra HTML page named `categoryName.html` and placed in `blog/`.
The new page should look like this:
 
``` yml
---
layout: blog_category
title: categoryName
category: categoryName
---
```


##### Post thumbnails

Post thumbnails which are going to be displayed at the left side of the post, need to be registered in [_data/images.yml](_data/images.yml) (see [Image metadata](#image-metadata) to learn how to do this correctly). Thumbnails should be squarish.

`image`          - Displays an image at the left side of the post. Use the key you registered in [_data/images.yml](_data/images.yml).

`imageHidePress` - Hides the image in the announcement page of the pres kit.


#### Image metadata

Image metadata can be set in [_data/images.yml](_data/images.yml). You can display an image in a post with following snippet: 

`<img src="/img/{{ site.data.images[IMAGE_NAME].url }}" />`

``` YML
newpipe-beta:                          # IMAGE_NAME which is used to display it
  url: logo_app_beta.svg               # path to the file relative to '/img/'
  type: svg                            # file extension like 'svg', 'png' or 'jpeg'
  size: 16583                          # file size of the image in bytes
  name: NewPipe Beta logo              # image description 
  author: Schabi                       # author
  origin: https://github.com/theScrabi # optional: link to the origin of this image when it is not created by one of our teeam members
  download: /press/logo/#logo-beta     # optional: this is a link to the internal download page with an anchor to the download form '/press/logo/#logo-beta'
```


##### Page metadata

`metatitle` - The title to display in the browser `<title></title>`

`metades`   - The description to display as `<meta name="description">`

`metakey`   - Additional keywords for search engines `<meta name="keywords">`

`modified`  - The date the page was last modified. It will be displayed at the bottom of each page. Format `YYYY-MM-DD HH:MM:SS +/-TTTT`


##### Search

At the moment there is one search engine for the press kit and another one for the blog.

The variable `search` accepts following values which modify the position in the search results:

`exclude`   - exclude the whole page from the search

---

#### FAQ & Tutorials

FAQ and tutorials are located at https://newpipe.net/FAQ/ and https://newpipe.net/FAQ/tutorials/.

Essentially FAQs and tutorials have the same structure: 
Both are collections (`faq` and `tutorials`) and can have the same attributes which are defined via the YAML front matter.
Nevertheless we make a distinction between FAQs and tutorials because there are different behaviours implemented for them.
While FAQs are displayed in multiple small collapsible boxes, every tutorial has its own page.

##### Writing FAQs & Tutorials

Since FAQs and tutorials are collections, firstly you need to create a new `.HTML` file in either `_faq/` or `_tutorials/`. 
Please put the category name first and then add the title behind it: `player_enable_autoplay.html`.
In the file, you need to define several things to get your post recognized and printed out correctly:
- Each post must have at least one category which assigns it to one of the subpages (`FAQ/player/`, `FAQ/download/`, `FAQ/bugs`).
```
categories:
- bugs
- player
- download
```
- There are two types a post can have: `type: info` or `type: tutorial`.
- Every post needs a title: `title: "Enable Autoplay"`

Before you can start writing, there are some more small things to notice to make your post look like the others. 
Writing short FAQs is quite easy and there are only few things to consider.
1. To structure the content, use `<section>`s. There should be no content which is not in a `<section>`.
2. To separate parts of your article with a thin line, use `<hr/>` tags. 
3. To insert images, use the `<img/>` tag inside of a `<figure>` tag. Additionally, each image needs a caption (`<figcaption>`).
4. Please keep your sentences as shorts as possible. This makes it easier to follow you and your instructions.

---

#### Usage of Website API
We have an API which provides data for running the website to not require visitors contacting other servers when visiting our website.
You can find its source code [on GitHub](https://github.com/TeamNewPipe/web-api) and the served data [here](https://newpipe.net/api/data.json).
If you want to use the API for other purposes than running or developing our website, please host it yourself.

To use API data, you need to add the `data-newpipe-api` attribute to an HTML tag containing the JSON identifier of the value you want to access:

``` HTML
<p>NewPipe has <span data-newpipe-api="stats.stargazers>10k</span> stars on GitHub.</p>"
```

By default, the inner HTML of tags which have the `data-newpipe-api` attribute will be replaced with the requested value. Nevertheless, you should put a value there to provide a fallback for the rare case, that our API failed to generate correct data. 
It is also possible to not replace the HTML, but store the API data in a referred attribute by adding the `data-newpipe-api-attribute` attribute:

``` HTML
<a data-newpipe-api="flavors.fdroid.stable.apk" data-newpipe-api-attribute="href">download NewPipe</a>
```
will result in something like
``` HTML
<a href="https://f-droid.org/repo/org.schabi.newpipe_953.apk">download NewPipe</a>
```

# NewPipe Website Generator

Repo for the [NewPipe website](https://newpipe.schabi.org/), which includes the blog and the press kit.

All sites are based on [Bootstrap](https://getbootstrap.com) 3.3.7 and [Jekyll](https://jekyllrb.com/) 3.7.2.


## Development

#### Installation
Install Jekyll and Bundler gems through RubyGems:
```
~ $ gem install jekyll bundler
```

Navigate to the root directory of this project, dev environment:
```
bundle install
```

Navigate to this directory and build the site on the preview server:
```
~ $ jekyll serve
```

Run http://localhost:4000/blog or http://localhost:4000/press.

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
 
```
---
layout: blog_category
title: categoryName
category: categoryName
---
```


##### Post thumbnails

Post thumbnails which are going to be displayed at the left side of the post, need to be registered in [_data/images.yml](_data/images.yml) (see [Image metadata](#image-metadata) to learn how to do this correctly). Thumbnails should be squarisch.

`image`          - Displays an image at the left side of the post. Use the key you registered in [_data/images.yml](_data/images.yml).

`imageHidePress` - Hides the image in the announcement page of the pres kit.


#### Image metadata

Image metadata can be set in [_data/images.yml](_data/images.yml). Ypu can display an image in a post with following snippet: 

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

The variable `search` accepts following values wich modify the position in the search results:

`exclude`   - exclude the whole page from the search

---

#### FAQ & Tutorials

FAQ and tutorials are located at https://newpipe.schabi.org/FAQ/ and https://newpipe.schabi.org/FAQ/tutorials/.

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

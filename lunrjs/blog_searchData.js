---
# Generates the data for the blog search as JSON
#
# There were some problems using Jekyll's "excerpt" variable which returns an excerpt of the post.
# By default that excerpt just captures the first paragraph of the post.
# There is the possibility to set the number of paragraphs an excerpt contains in EVERY SINGLE post.
# That is not flexible and good when there is a larger number of posts.
# Because we want two paragraphs, we need the following hack.
#
# Basically take the whole content of the post, split it at the end of each paragraph
# and only print the first two paragraphs.
---
window.store = {
{%- for post in site.posts -%}
  "{{ post.url | slugify }}": {
    "title": "{{ post.title | xml_escape }}",
    "author": "{{ post.author | xml_escape }}",
    "category": [{% for category in post.categories %}"{{ category }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
    "date": "{{ post.date | date_to_string }}",
    "content": {{ post.content | strip_newlines | jsonify }},
    "excerpt":
    {%- if post.excerpt_separator -%}
      {{ post.excerpt | normalize_whitespace | jsonify | replace: '\n', '' | prepend: ' '}}
    {%- else -%}
      {%- capture e -%}
        {%- assign exc = post.content | normalize_whitespace | split: '</p>' -%}
        {%- for excs in exc -%}
          {%- if forloop.index < 3 -%}{{ excs | append : '</p>'}}{%- endif -%}
        {%- endfor -%}
      {%- endcapture -%}{{ e |jsonify }}
    {%- endif -%},
    "image": "{% if post.image %}/img/{{ site.data.images[post.image].url }}{% endif %}",
    "url": "{{ post.url | xml_escape }}"
  }{%- unless forloop.last -%},{%- endunless -%}
{% endfor %}
};
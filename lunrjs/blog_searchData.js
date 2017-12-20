---

---
window.store = {
{% for post in site.posts %}
  "{{ post.url | slugify }}": {
    "title": "{{ post.title | xml_escape }}",
    "author": "{{ post.author | xml_escape }}",
    "category": [{% for category in post.categories %}"{{ category }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
    "date": "{{ post.date | date_to_string }}",
    "content": {{ post.content | strip_newlines | jsonify }},
    "url": "{{ post.url | xml_escape }}"
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
};
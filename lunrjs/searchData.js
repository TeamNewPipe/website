---

---

window.store = {
{% for page in site.html_pages %}
  {% if page.search != 'exclude' %}
  {% if page.title and page.date %}
  "{{ page.url | slugify }}": {
    "title": "{{ page.title | xml_escape }}",
    "date": "{{ page.date | date_to_string }}",
    "content": {{ page.content | strip_newlines | jsonify }},
    "url": "{{ page.url | xml_escape }}"
  }{% unless forloop.last %},{% endunless %}
  {% endif %}
  {% endif %}
{% endfor %}
};

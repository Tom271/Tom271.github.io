---
layout: page
title: Projects
permalink: /projects/
---
<!--
{% for post in site.posts %}
<a href="{{ post.url }}">
<img src="{{ site.baseurl }}/{{ post.feature-img }}" width="200"
   height="200"></a>
{% endfor %} -->

{% for my_post in site.posts -%}
{% if my_post.title -%}
|![]({{ site.baseurl }}/{{ my_post.feature-img }})  |[Click Here]({{ my_post.url }})  |
{% endif %}
{%- endfor -%}

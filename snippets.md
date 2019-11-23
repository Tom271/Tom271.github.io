---
layout: page
title: Useful Code Snippets
permalink: /snippets.html
hide: true
---
To build your jekyll website:
`bundle exec jekyll serve`

Jekyll rotating your image? Change it in Python(3)!
```python
from PIL.ExifTags import TAGS
from PIL import Image

image_file = "IMG_0646.JPG"
im = Image.open(image_file)

print("exif data:")
for tag, value in im._getexif().items():
    tag_name = TAGS.get(tag, tag)
    print("{}:{}".format(tag_name, value))
```

```python
im.transpose(Image.ROTATE_270).save(image_file)
```

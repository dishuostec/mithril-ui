Markdown 是一种轻量级标记语言，创始人为[约翰·格鲁伯]（英语：John Gruber）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档”。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。甚至Markdown能被使用来撰写电子书。

# H1
## H2
### H3
#### H4
##### H5
###### H6

*斜体* _斜体_

**粗体** __粗体__

**合并_使用_**

~~删除线~~


1. 项目 1
2. 项目 2
    * 无序子项目 2
1. 项目 3
    1. 有序子项目 3.1
4. 项目 4


*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.    


1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.
2.  Suspendisse id sem consectetuer libero luctus adipiscing.

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.


1.  Item 1
    1. A corollary to the above item.
    2. Yet another point to consider.
2.  Item 2
    * A corollary that does not need to be ordered.
    * This is indented four spaces
    * You might want to consider making a new list.
3.  Item 3


* 无序项目 *
- 无序项目 -
+ 无序项目 +


- [x] 任务单
- [ ] 任务单


[行内链接](https://www.google.com)

[行内链接 title](https://www.google.com "谷歌首页")

[引用链接 大小写不敏感][Google Home Page]

[引用链接 1][1]

[直接引用]

[google home page]: https://www.mozilla.org
[1]: https://youtube.com
[直接引用]: https://www.google.com

![淘宝 logo](https://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png "图片 title")

![淘宝的 logo][taobao logo]

[taobao logo]: https://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png "图片 title"

![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY
SURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)

![Alt text][id]

[id]:
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D
AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=

行内`代码`文字

```
// 代码块
var s = "JavaScript syntax highlighting";
alert(s);
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

> Markdown已经成为典型的转换为HTML的非正式规范[9]和参考实现。
> 随着时间的推移，出现了许多Markdown实现。
> 人们开发这些主要是由于在基本语法之上需要额外的功能 - 例如表格，脚注，定义列表（技术上的HTML描述列表）和HTML块内的Markdown。

> Markdown已经成为典型的转换为HTML的非正式规范[9]和参考实现。随着时间的推移，出现了许多Markdown实现。人们开发这些主要是由于在基本语法之上需要额外的功能 - 例如表格，脚注，定义列表（技术上的HTML描述列表）和HTML块内的Markdown。

> - 引用列表
> - 引用列表

<p>内嵌 HTML</p>

---

***

___

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...  
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.


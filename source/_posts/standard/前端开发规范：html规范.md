---
title: 前端开发规范：html规范
tags:
  - 开发规范
categories: 开发规范
keywords: '前端,开发规范,html规范'
description: 前端开发规范-html规范
cover: >-
  https://fastly.jsdelivr.net/gh/realwds/cdn@master/blog-cover/srchttpckimg.2mezruygtwu0.webp
abbrlink: a84fd31f
date: 2022-06-10 09:48:43
---

## 文档规范

使用 HTML5 的文档声明类型 : `<!DOCTYPE html>`

- DOCTYPE标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。
- 使用文档声明类型的作用是为了防止开启浏览器的怪异模式。
- 没有DOCTYPE文档类型声明会开启浏览器的怪异模式，浏览器会按照自己的解析方式渲染页面，在不同的浏览器下面会有不同的样式。
- 如果你的页面添加了<!DOCTYP>那么，那么就等同于开启了标准模式。浏览器会按照W3C标准解析渲染页面。

## 脚本加载

说到js和css的位置，大家应该都知道js放在下面，css放在上面。

但是，如果你的项目只需要兼容ie10+或者只是在移动端访问，那么可以使用HTML5的新属性`async`，将脚本文件放在`<head>`内

**兼容老旧浏览器(IE9-)时**：

脚本引用写在 body 结束标签之前，并带上 async 属性。这虽然在老旧浏览器中不会异步加载脚本，但它只阻塞了 body 结束标签之前的 DOM 解析，这就大大降低了其阻塞影响。

**而在现代浏览器中**：

脚本将在 DOM 解析器发现 body 尾部的 script 标签才进行加载，此时加载属于异步加载，不会阻塞 CSSOM（但其执行仍发生在 CSSOM 之后）。

综上所述，

所有浏览器中推荐:

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <!-- body goes here -->

    <script src="main.js" async></script>
  </body>
</html>
```

只兼容现代浏览器推荐:

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <script src="main.js" async></script>
  </head>
  <body>
    <!-- body goes here -->
  </body>
</html>
```

## 语义化

我们一直都在说语义化编程，语义化编程，但是在代码中很少有人完全使用正确的元素。使用语义化标签也是有理由SEO的。

> 语义化是指：根据元素其被创造出来时的初始意义来使用它。
> 
> 意思就是用正确的标签干正确的事，而不是只有`div`和`span`。

不推荐：

```html
<b>My page title</b>
<div class="top-navigation">
  <div class="nav-item"><a href="#home">Home</a></div>
  <div class="nav-item"><a href="#news">News</a></div>
  <div class="nav-item"><a href="#about">About</a></div>
</div>

<div class="news-page">
  <div class="page-section news">
    <div class="title">All news articles</div>
    <div class="news-article">
      <h2>Bad article</h2>
      <div class="intro">Introduction sub-title</div>
      <div class="content">This is a very bad example for HTML semantics</div>
      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
      <div class="article-foot-notes">
        This article was created by David <div class="time">2014-01-01 00:00</div>
      </div>
    </div>

    <div class="section-footer">
      Related sections: Events, Public holidays
    </div>
  </div>
</div>

<div class="page-footer">
  Copyright 2014
</div>
```

推荐：

```html
<!-- The page header should go into a header element -->
<header>
  <!-- As this title belongs to the page structure it's a heading and h1 should be used -->
  <h1>My page title</h1>
</header>

<!-- All navigation should go into a nav element -->
<nav class="top-navigation">
  <!-- A listing of elements should always go to UL (OL for ordered listings) -->
  <ul>
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#news">News</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
  </ul>
</nav>

<!-- The main part of the page should go into a main element (also use role="main" for accessibility) -->
<main class="news-page" role="main">
  <!-- A section of a page should go into a section element. Divide a page into sections with semantic elements. -->
  <section class="page-section news">
    <!-- A section header should go into a section element -->
    <header>
      <!-- As a page section belongs to the page structure heading elements should be used (in this case h2) -->
      <h2 class="title">All news articles</h2>
    </header>

    <!-- If a section / module can be seen as an article (news article, blog entry, products teaser, any other
     re-usable module / section that can occur multiple times on a page) a article element should be used -->
    <article class="news-article">
      <!-- An article can contain a header that contains the summary / introduction information of the article -->
      <header>
        <!-- As a article title does not belong to the overall page structure there should not be any heading tag! -->
        <div class="article-title">Good article</div>
        <!-- Small can optionally be used to reduce importance -->
        <small class="intro">Introduction sub-title</small>
      </header>

      <!-- For the main content in a section or article there is no semantic element -->
      <div class="content">
        <p>This is a good example for HTML semantics</p>
      </div>
      <!-- For content that is represented as side note or less important information in a given context use aside -->
      <aside class="article-side-notes">
        <p>I think I'm more on the side and should not receive the main credits</p>
      </aside>
      <!-- Articles can also contain footers. If you have footnotes for an article place them into a footer element -->
      <footer class="article-foot-notes">
        <!-- The time element can be used to annotate a timestamp. Use the datetime attribute to specify ISO time
         while the actual text in the time element can also be more human readable / relative -->
        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
      </footer>
    </article>

    <!-- In a section, footnotes or similar information can also go into a footer element -->
    <footer class="section-footer">
      <p>Related sections: Events, Public holidays</p>
    </footer>
  </section>
</main>

<!-- Your page footer should go into a global footer element -->
<footer class="page-footer">
  Copyright 2014
</footer>
```

## alt标签不为空

`<img>`标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。

假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：

- 网速太慢
- src 属性中的错误
- 浏览器禁用图像
- 用户使用的是屏幕阅读器

从SEO角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容

## 结构、表现、行为三者分离

尽量在文档和模板中只包含结构性的 HTML；而将所有表现代码，移入样式表中；将所有动作行为，移入脚本之中。

在此之外，为使得它们之间的联系尽可能的小，在文档和模板中也尽量少地引入样式和脚本文件。

建议：

- 不使用超过一到两张样式表
- 不使用超过一到两个脚本（学会用合并脚本）
- 不使用行内样式（`<style>.no-good {}</style>`）
- 不在元素上使用 style 属性（`<hr style="border-top: 5px solid black">`）
- 不使用行内脚本（`<script>alert('no good')</script>`）
- 不使用表象元素（`i.e. <b>, <u>, <center>, <font>, <b>`）
- 不使用表象 class 名（`i.e. red, left, center`）

## HTML只关注内容

- HTML只显示展示内容信息
- 不要引入一些特定的 HTML 结构来解决一些视觉设计问题
- 不要将`img`元素当做专门用来做视觉设计的元素
- 样式上的问题应该使用css解决

不推荐：

```html
<!-- We should not introduce an additional element just to solve a design problem  -->
<span class="text-box">
  <span class="square"></span>
  See the square next to me?
</span>

.text-box > .square {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
```

推荐：

```html

<!-- That's clean markup! -->
<span class="text-box">
  See the square next to me?
</span>

<!--  We use a :before pseudo element to solve the design problem of placing a colored square in front of the text content -->
.text-box:before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
```

**图片和 SVG 图形能被引入到 HTML 中的唯一理由是它们呈现出了与内容相关的一些信息。**

不推荐：

```html
<!-- Content images should never be used for design elements!  -->
<span class="text-box">
  ![](square.svg)
  See the square next to me?
</span>
```

推荐：

```html
<!-- That's clean markup! -->
<span class="text-box">
  See the square next to me?
</span>

<!-- We use a :before pseudo element with a background image to solve the problem  -->
.text-box:before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(square.svg) no-repeat;
  background-size: 100%;
}
```


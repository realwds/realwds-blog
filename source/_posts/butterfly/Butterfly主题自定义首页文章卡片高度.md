---
title: Butterfly 主题自定义首页文章卡片高度
tags:
  - Hexo
  - butterfly
categories: Butterfly魔改
keywords: hexo,butterfly,主题,doc,教程,文档
description: Butterfly 主题自定义首页文章卡片高度
large: true
abbrlink: 48bb9713
date: 2021-05-12 08:58:31
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/material-1.png
---


列表如果都是统一的样式、高度未免有些过于单调和重重复。在一些关键性文章中加一些特殊的样式也是我们常用的举措，例如文章置顶。但是文章置顶多了就会看不见新文章，置顶折叠展示的力度又不够。所以对于有特殊意义的文章展示特殊的效果是非常必要的，丰富层次。

这个文章的核心思路就是给文章的 markdown 文件里添加一个 ```large``` 参数，当 ```large=true``` 时，则文章会添加一个 class。然后针对这个 class 进行 css 的调整。让我们开始吧。

## 修改主题

文件地址：```themes/butterfly/layout/includes/mixins/post-ui.pug```

``` diff
mixin postUI(posts)
  each article , index in page.posts.data
    if article.hide !== true
-	    .recent-post-item
+      .recent-post-item(class= (article.large === true) ? 'post-card-large' : '')
```

## 修改 css

新建一个 css 文件，然后再 butterfly 主题下的 _config.yml 文件中 inject 引入该文件

``` css
@media screen and (min-width: 768px) {
  #recent-posts>.post-card-large {
    height: 16em!important;
  }
  
  #recent-posts > .post-card-large >.recent-post-info > .content{
    -webkit-line-clamp: 3!important;
    opacity: 1 !important;
  }
  #recent-posts > .post-card-large:hover >.recent-post-info > .content {
    opacity: 1;
    -webkit-line-clamp: 5!important;
  }
}

```

## 参考文献

[《基于Hexo的Butterfly下自定义指定首页文章卡片高度》 - 张洪Heo](https://blog.zhheo.com/p/77ebd8b5.html)

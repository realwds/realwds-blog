---
title: Hexo 的 Butterfly 下隐藏部分文章不在首页显示
tags:
  - 教程
  - Hexo
  - 主题
  - butterfly
categories: Butterfly魔改
keywords: 'hexo,butterfly,主题,doc,教程,文档'
abbrlink: 6acea012
---


有一些转载的文章我感觉没有太大的必要放在主页列表里，那些文章只是我用来检索知识库的，过多的转载文章还会影响浏览体验。这也是最近转载内容少了的缘故。这次给 butterfly 加了一个判断，这样的话就可以隐藏部分文章了。

之前使用过可以隐藏指定分类的插件，但是好像不能用（至少我是这样。而且分类起来还比较麻烦，还要重新改以前的文章。

## 修改主题

文件地址：```themes/butterfly/layout/includes/mixins/post-ui.pug```

注意，主要是添加了 ```if article.hide !== true``` 这一行，然后这一行后全部需要按下 tab 缩进一层。

``` pug
mixin postUI(posts)
  each article , index in page.posts.data
    if article.hide !== true
      .recent-post-item
```

## 修改文章

在 md 文件的头部信息中添加 ```hide: true```

``` md
---
title: Hexo 的 Butterfly 下隐藏部分文章不在首页显示
top: false
hide: true
...
---
```

## 大功告成

现在你可以发现只要在头部信息中包含 ```hide: true``` 的文章均不会出现在首页中，其他页面不影响。

问题：这个只影响了渲染，但是不影响生成器生成，所以如果你每页文章为 10 篇，而你第一页隐藏了 4 篇，那么首页第一页只会展示 6 篇。


参考文档：https://blog.zhheo.com/p/451ff5e9.html

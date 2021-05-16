---
title: Butterfly 主题 404 页面增加最近文章
tags:
  - Hexo
  - butterfly
  - 精选
categories: Butterfly魔改
keywords: 'hexo,butterfly,主题,doc,教程,文档'
abbrlink: 2c9bc301
date: 2021-05-13 17:08:31
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/material-2.png
---

404页面是在文件不存在的时候产生的。设想一个场景，用户急于寻找问题的答案，那么当用户通过例如搜索引擎和错误的内链进入到404网页时，用户可能下意识就会关闭网站。如何在404页面留住用户呢？

在无法判断用户的来源和目标的情况下，最好的还是做主动推荐。所以我在404页面的下方添加了最近的文章列表，使用的是butterfly的侧边栏最近文章列表的代码。

值得一提的是，最近文章模块没有必要在首页显示，因为和左侧的文章列表重复。

## 修改主题

文件地址：```themes/butterfly/layout/404.pug```

``` pug
- var top_img = theme.error_404.background || theme.default_top_img
- var bg_img = `background-image: url('${url_for(top_img)}')`

doctype html
html(lang=config.language data-theme=theme.display_mode)
  head
    include includes/head.pug
  body
    if theme.preloader
      !=partial('includes/loading/loading', {}, {cache: true})

    if theme.fireworks && theme.fireworks.enable
      canvas.fireworks
    
    if theme.background
      #web_bg

    #error-wrap
      .error-content
        .error-img(style=bg_img)
        .error-info
          h1.error_title= '404'
          .error_subtitle= theme.error_404.subtitle
          a.button--animated(href=config.root)
            i.fas.fa-rocket
            = _p('error404.back_button')

    .aside-list-404
      .aside-list-group
        - let postLimit = theme.aside.card_recent_post.limit === 0 ? site.posts.length : theme.aside.card_recent_post.limit || 5
        - let sort = theme.aside.card_recent_post.sort === 'updated' ? 'updated' : 'date'
        - site.posts.sort(sort, -1).limit(postLimit).each(function(article){
          - let link = article.link || article.path
          - let title = article.title || _p('no_title')
          - let no_cover = article.cover === false || !theme.cover.aside_enable ? 'no-cover' : ''
          - let post_cover = article.cover
          .aside-list-item(class=no_cover)
            if post_cover && theme.cover.aside_enable
              a.thumbnail(href=url_for(link) title=title)
                img(src=url_for(post_cover) onerror=`this.onerror=null;this.src='${url_for(theme.error_img.post_page)}'` alt=title)
            .content
              a.title(href=url_for(link) title=title)= title
              if theme.aside.card_recent_post.sort === 'updated'
                time(datetime=date_xml(article.updated) title=_p('post.updated') + ' ' + full_date(article.updated)) #[=date(article.updated, config.date_format)]
              else
                time(datetime=date_xml(article.date) title=_p('post.created') + ' ' + full_date(article.date)) #[=date(article.date, config.date_format)]
        - })
          
    include includes/additional-js.pug
```

## 引入 css

新建一个 css 文件，然后再 butterfly 主题下的 _config.yml 文件中 inject 引入该文件

``` css
#error-wrap{
  top: 40%;
}
#error-wrap .error-content .error-info .error_title{
  margin-top: -3rem!important;
}
#error-wrap .error-content{
  box-shadow: none!important;
  border-radius: 12px;
  background: var(--hassan-card-bg)!important;
}
.aside-list-404{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  bottom: 0;
  position: absolute;
  padding: 1rem;
  width: 100%;
  overflow: scroll;
}
.aside-list-404 .aside-list-group {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1200px;
  margin: 0 auto;
}
.aside-list-404 .aside-list-item{
  padding: .5rem;
}
.aside-list-404 .aside-list-item img{
  width: 100%;
  object-fit: cover;
  transition: .3s;
}
.aside-list-404 .aside-list-item img:hover {
  transform: scale(1.1);
}
.aside-list-404 .aside-list-item .thumbnail{
  overflow: hidden;
  width: 230px;
  height: 143px;
  display: flex;
  background: var(--wds-card-bg);
  border-radius: 12px;
}
.aside-list-404 .aside-list-item .content .title{
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
  padding-top: .5rem;
}
.aside-list-404 .aside-list-item .content time{
  display: none;
}
#error-wrap .error-content .error-info a {
  border-radius: 10px;
  overflow: hidden;
}
```

## 大功告成

[DEMO 查看](/404/)

- [参考文献](https://blog.zhheo.com/p/f48e518b.html)

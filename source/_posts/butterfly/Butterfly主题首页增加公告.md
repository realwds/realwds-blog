---
title: Butterfly 主题首页增加公告
tags:
  - Hexo
  - butterfly
categories:
  - Butterfly魔改
keywords: 'Butterfly,tag,公告'
description: Butterfly主题首页增加公告
cover: 'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/material-1.png'
abbrlink: 39c5cc87
date: 2021-05-24 16:20:31
---

之前首页公告一直用的 `哔哔` ，但是我的 `哔哔` 当随笔用了。里面放的是一些生活中的吐槽，看法，杂文之类的，不想把他和博客之类的东西混在一起。

所以单独搞了个公告页面，参考张洪大佬的博客，做出以下调整。


## 标签外挂引入

我的公告页面用的 `时间线标签外挂`，所以要引入，如果想 `DIY` 样式的可以不用引入。

### 引入 timeline.js

文件地址：```themes/butterfly/scripts/tag/timeline.js```

``` js
'use strict';

function postTimeline(args, content) {
  if (args.length > 0) {
    return `<div class="timeline"><p class='p h2'>${args}</p>${content}</div>`;
  } else {
    return `<div class="timeline">${content}</div>`;
  }
}

function postTimenode(args, content) {
  args = args.join(' ').split(',')
  var time = args[0]
  return `<div class="timenode"><div class="meta"><p>${hexo.render.renderSync({text: time, engine: 'markdown'})}</p></div><div class="body">${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}</div></div>`;
}


// {% timeline %}
// ... timenode ...
// {% endtimeline %}
hexo.extend.tag.register('timeline', postTimeline, {ends: true});

// {% timenode time %}
// what happened
// {% endtimenode %}
hexo.extend.tag.register('timenode', postTimenode, {ends: true});
```

### 引入 timeline.styl

文件地址：```themes/butterfly/sources/css/_tags/timeline.styl```

``` stylus
div
  &.timenode
    position relative
    &:before
      top 0
      height 6px
    &:after
      top 26px
      height calc(100% - 26px)
    &:last-child
      &:after
        height calc(100% - 26px - 16px)
        border-bottom-left-radius 2px
        border-bottom-right-radius 2px
    .meta
      position relative
      color var(--tab-botton-color)
      font-size 0.375rem
      line-height 32px
      height 32px
      &:before
        background rgba(68, 215, 182, 0.5)
        width 16px
        height 16px
        border-radius 8px
      &:after
        background #44d7b6
        margin-left 2px
        margin-top 2px
        width 12px
        height 12px
        border-radius 6px
        transform scale(0.5)
      p
        font-weight bold !important
        margin 0 0 0 24px !important
    .body
      margin 4px 0 10px 24px
      padding 10px
      border-radius 12px
      background #efeded
      display inline-block
      p
        &:first-child
          margin-top 0 !important
        &:last-child
          margin-bottom 0 !important
      .highlight
        background #fff7ea
        filter grayscale(0%)
        figcaption
          background #ffeed2
        .gutter
          background #ffedd0
    &:hover
      .meta
        color #444
        &:before
          background rgba(255, 87, 34, 0.5)
        &:after
          background #ff5722
          transform scale(1)

div.timenode:before,
div.timenode:after
  content ""
  z-index 1
  position absolute
  background rgba(68, 215, 182, 0.5)
  width 2px
  left 7px

div.timenode .meta,
div.timenode .body
  max-width calc(100% - 24px)

div.timenode .meta:before,
div.timenode .meta:after
  content ""
  position absolute
  top 8px
  z-index 2

[data-theme="dark"]
  div
    &.timenode
      .body
        background #2c2c2c
      &:hover
        .meta
          color #ccd0d7
      .meta
        color rgba(255, 255, 255, 0.6)
    &.timeline
      p
        &.p
          &.h2
            color rgba(255, 255, 255, 0.6)
```

## 公告模板引入

### 新建 homeNotice.pug

文件地址：```themes/butterfly/layout/includes/homeNotices.pug```

``` pug
#noticeList.container(onclick=`window.open('/notice/','_self')`)
    .nlogo="公告"
    .swiper-container
        #notice-item.swiper-wrapper
            if site.data.notice
                each i in site.data.notice
                    .li-style.swiper-slide=i.msg
    i.fas.fa-arrow-circle-right(title="查看全文")

.js-pjax
    script(src='https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',data-pjax='')
    script.
        new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            }
        })
```

### 引入 CSS 样式

``` css
#notice-item {
  width: 100%;
  height: 25px;
  line-height: 25px;
}
#notice-item .li-style {
  width: 100%;
  height: 25px;
  font-weight: 500;
  text-align: center;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s;
}
#noticeList {
  background: var(--card-bg);
  color: var(--font-color);
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
#noticeList .nlogo{
  color: var(--font-color);
  font-weight: 600;
  display: inline;
}
#noticeList .swiper-container{
  display: flex;
  flex: 1;
}
#noticeList i {
  text-align: right;
}
```

### 引入 homeNotice 模板

文件地址：```themes/butterfly/layout/index.pug```

``` diff
extends includes/layout.pug

block content
  include ./includes/mixins/post-ui.pug
  #recent-posts.recent-posts
+    include includes/homeNotice.pug
    +postUI
    include includes/pagination.pug
```

### 添加判断

文件地址：```themes/butterfly/layout/index.pug```

``` diff
when 'categories'
  include includes/page/categories.pug
+ when 'notice'
+   include includes/page/notice.pug
default
  include includes/page/default-page.pug
```

### 新建模板

``` sh
hexo new page notice
```

``` markdown
---
title: 公告
type: "notice"
aside: false
comments: false
---
...
```

### 引入 notice.yml

新增公告直接向上添加即可。文件地址：```source/_data/notice.yml```

``` yml
- date: 2021.05.24
  msg: Butterfly 主题首页增加公告
- date: 2021.04.29
  msg: 博客正式上线
```


## 大功告成

`hexo` 三连过后，惊喜出现了【 或者惊吓 (‧̣̥̇꒪່⍢꒪່ ) 】，快去试试看吧~

## 参考文献

[《Hexo-Butterfly 说说朋友圈适配》 - 张洪Heo](https://blog.zhheo.com/p/a6947667.html#%E5%BC%95%E5%85%A5%E5%88%B0%E4%B8%BB%E9%A1%B5)
[《基于 Butterfly 的外挂标签引入》 - Akilar](https://akilar.top/posts/615e2dec/#%E6%97%B6%E9%97%B4%E8%BD%B4-timeline)

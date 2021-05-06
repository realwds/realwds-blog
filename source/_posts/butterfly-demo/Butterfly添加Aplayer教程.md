---
title: Butterfly添加全局吸底Aplayer教程
tags:
  - 教程
  - Hexo
  - 主题
  - butterfly
  - Aplayer
categories: 进阶教程
keywords: 'hexo,butterfly,主题,doc,教程,文档,Aplayer,Aplayer吸底,pjax'
description: Butterfly添加全局吸底Aplayer教程
abbrlink: 3bd898ff
---

{% note info %}

以下文章只是教程
如果遇到使用问题，请仔细查看插件文档，或者到插件那里反馈

{% endnote%}
## 前言

如果你想使用aplayer，很多人都会推荐安装[hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)这款插件。这款插件通过Hexo独有的标籤外挂，我们可以很方便的写入一些参数，插件就会帮我们生成对应的html。如果你只是使用一些简单的功能，其实无需使用到这个插件，只需以html格式书写就行，不用插件去转换。

例如：

如果使用插件，在markdown中要这样写

```markdown
{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %}
```

其会被插件渲染为

```html
<div id="aplayer-uxAIfEUs" class="aplayer aplayer-tag-marker meting-tag-marker" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-mode="circulation" data-autoplay="false" data-mutex="true" data-listmaxheight="340px" data-preload="auto" data-theme="#3F51B5"></div>
```

如果我们不想使用插件，就需要在markdown中用html的格式书写，同时把主题配置文件中的`aplayerInject`开启

```markdown
<div class="aplayer" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-mutex="true" data-preload="auto" data-theme="#3F51B5"></div>
```

这样我们就可以不用使用多一个插件，当然这种东西见仁见智，选自己喜欢的就行。

回到正题，这篇文章将教大家如何在Butterfly上使用全局吸底Aplayer

![aplayer](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-aplayer-xidi.gif)

## 关闭 `asset_inject`

{% note info %}

此步骤适用于安装了`hexo-tag-aplayer`插件的人

{% endnote %}



由于需要全局都插入aplayer和meting资源，为了防止插入重複的资源，需要把asset_inject设为`false`

在Hexo的配置文件中

```yaml
aplayer:
  meting: true
  asset_inject: false
```

## 开启主题的`aplayerInject`

在主题的配置文件中，`enable`设为`true`和`per_page`设为`true`

```yaml
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
```

## 插入Aplayer html

为了适配hexo-tag-aplayer，主题内置的Meting js 仍为1.2版本，并非最新的2.x版本。

Aplayer html 例子：

```markdown
<div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div>
```

参数解释

| option             | default     | description                                                                                                                  |
| ------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| data-id            | **require** | song id / playlist id / album id / search keyword                                                                            |
| data-server        | **require** | music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu`                                                              |
| data-type          | **require** | `song`, `playlist`, `album`, `search`, `artist`                                                                              |
| data-fixed         | `false`     | enable fixed mode                                                                                                            |
| data-mini          | `false`     | enable mini mode                                                                                                             |
| data-autoplay      | `false`     | audio autoplay                                                                                                               |
| data-theme         | `#2980b9`   | main color                                                                                                                   |
| data-loop          | `all`       | player loop play, values: 'all', 'one', 'none'                                                                               |
| data-order         | `list`      | player play order, values: 'list', 'random'                                                                                  |
| data-preload       | `auto`      | values: 'none', 'metadata', 'auto'                                                                                           |
| data-volume        | `0.7`       | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| data-mutex         | `true`      | prevent to play multiple player at the same time, pause other players when this player start play                            |
| data-lrctype       | `0`         | lyric type                                                                                                                   |
| data-listfolded    | `false`     | indicate whether list should folded at first                                                                                 |
| data-listmaxheight | `340px`     | list max height                                                                                                              |
| data-storagename   | `metingjs`  | localStorage key that store player setting                                                                                   |

{% note info %}

`require`代表着这些参数是必须要使用的，其它的参数则可以根据自己需要配置。

配置全局吸底，`data-fixed`和`data-mini`也必须配置，配置为`true`

如果使用Pjax，则在class里需添加`no-destroy`，这样防止切换页面时Aplayer被销毁

{% endnote %}

把`aplayer代码`插入到主题配置文件的`inject.bottom`去

```yaml
inject:
  head:
  bottom:
    - <div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div>
```

运行Hexo就可以看到网页左下角出现了Aplayer

最后，如果你想切换页面时，音乐不会中断。请把主题配置文件的`pjax`设为`true`

## UI 调整

按照上面的步骤设置完成后，浏览器左下角会出现Aplayer。打开文章页面时，你会发现打开Toc目录的按钮被遮挡了。我们需要修改CSS来改变按钮的位置。
位置怎么移动根据自己需求决定，这里列出2种方法。

### 向上调整

```css
#toggle-sidebar {
  bottom: 80px
}
```

![aplayer1](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-add-aplayer-css-bottom.gif)

在主题配置文件中，添加到`inject`去

```yaml
inject:
  head:
    - '<style type="text/css">#toggle-sidebar {bottom: 80px}</style>'
```

### 向右调整

```css
#toggle-sidebar {
  left: 100px
}
```

![butterfly-add-aplayer-left](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-add-aplayer-left.gif)

在主题配置文件中，添加到`inject`去

```yaml
inject:
  head:
    - '<style type="text/css">#toggle-sidebar {left:100px}</style>'
```


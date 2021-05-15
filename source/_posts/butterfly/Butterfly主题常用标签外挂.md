---
title: Butterfly主题常用标签外挂
date: 2021-05-08 08:58:31
tags:
  - 标签
  - Hexo
  - butterfly
categories:
  - Butterfly魔改
keywords: 'Butterfly,标签,tag'
description: 主题标签外挂使用样例
# sticky: 100
abbrlink: b8a0d4e7
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/material-9.png
---

## 引用 node

``` markdown
{% note no-icon %}{% endnote %}
{% note blue no-icon %}{% endnote %}
{% note pink no-icon %}{% endnote %}
{% note red no-icon %}{% endnote %}
{% note orange no-icon %}{% endnote %}
{% note purple no-icon %}{% endnote %}
{% note green no-icon %}{% endnote %}
```

{% note no-icon %}数学系的挨踢者{% endnote %}
{% note blue no-icon %}数学系的挨踢者{% endnote %}

## 时间轴 Timeline

``` markdown
{% timeline %}
{% timenode 2014-9 %}
进入大学校门
{% endtimenode %}
{% timenode 2018-6 %}
离开大学，步入社会
{% endtimenode %}
{% timenode 2021-5 %}
博客搭建成功
{% endtimenode %}
{% endtimeline %}
```
{% timeline %}
{% timenode 2014-9 %}
进入大学校门
{% endtimenode %}
{% timenode 2018-6 %}
离开大学，步入社会
{% endtimenode %}
{% timenode 2021-5 %}
博客搭建成功
{% endtimenode %}
{% endtimeline %}

## 链接卡片 Link

``` markdown
{% link <链接名>, <链接地址>, <链接图像> %}
```

{% link realwds, https://realwds.vercel.app, https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/20210115180321.png %}

## 行内图片 Inline Image

``` markdown
<文字> {% inlineimage <图片链接> %} <文字>
```

数学系的挨踢者{% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif %}

## 单张图片 Single Image

``` markdown
可选参数：宽度width、描述alt

{% image <图片链接>, width=<Custom>px, alt=<Custom> %}
```

{% image https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/20201216165804.jpg, width=100% %}

## 相册 Gallery

### gallerygroup 相册库

``` markdown
<div class="gallery-group-main">
{% galleryGroup <相册名> <相册描述> '<相册地址>' <相册背景图地址> %}
</div>
```
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

### gallery 相册

``` markdown
{% gallery %}
![](<图片地址>)
![](<图片地址>)
{% endgallery %}
```
{% gallery %}
![](https://i.loli.net/2019/12/25/eqBGrXx9tWsZOao.jpg)
![](https://i.loli.net/2019/12/25/LjW2CfNSD7OaY4v.jpg)
{% endgallery %}

## 折叠框 Folding

``` markdown
颜色参数：[不填默认灰色]，cyan,green,yellow,red,blue
展开参数：[不填默认关闭]，open

{% folding [颜色参数] [展开参数], <标题> %}
<Cusotm>
{% endfolding %}
```

{% folding blue, 蓝色折叠框 %}
我是蓝色折叠框
{% endfolding %}

{% folding blue open, 打开状态的蓝色折叠框 %}
我是打开状态的蓝色折叠框
{% endfolding %}

## 分栏 Tab

``` markdown
{% tabs Tags %}
<!-- tab 李白 -->
<!-- endtab -->
<!-- tab 李白 -->
<!-- endtab -->
<!-- tab 李白 -->
<!-- endtab -->
{% endtabs %}
```

{% tabs Tags %}
<!-- tab 李白 -->
李白（701年5月19日－762年11月30日），字太白，号青莲居士，中国唐朝诗人，自言祖籍陇西成纪（今甘肃省天水市秦安县），先世西凉武昭王李暠之后，与李唐皇室同宗。幼时内迁，寄籍剑南道绵州（今四川省江油市青莲镇）。另外，郭沫若研究认为李白出生于吉尔吉斯碎叶河上的碎叶城，属唐安西都护府（今楚河州托克马克市），该説有一定影响。有「诗仙」、「诗侠」、「酒仙」、「谪仙人」等称呼，活跃于盛唐，为杰出的浪漫主义诗人。与杜甫合称「李杜」。被贺知章惊呼为「天上谪仙」。
<!-- endtab -->

<!-- tab 李白 -->
李白（701年5月19日－762年11月30日），字太白，号青莲居士，中国唐朝诗人，自言祖籍陇西成纪（今甘肃省天水市秦安县），先世西凉武昭王李暠之后，与李唐皇室同宗。幼时内迁，寄籍剑南道绵州（今四川省江油市青莲镇）。另外，郭沫若研究认为李白出生于吉尔吉斯碎叶河上的碎叶城，属唐安西都护府（今楚河州托克马克市），该説有一定影响。有「诗仙」、「诗侠」、「酒仙」、「谪仙人」等称呼，活跃于盛唐，为杰出的浪漫主义诗人。与杜甫合称「李杜」。被贺知章惊呼为「天上谪仙」。
<!-- endtab -->

<!-- tab 李白 -->
李白（701年5月19日－762年11月30日），字太白，号青莲居士，中国唐朝诗人，自言祖籍陇西成纪（今甘肃省天水市秦安县），先世西凉武昭王李暠之后，与李唐皇室同宗。幼时内迁，寄籍剑南道绵州（今四川省江油市青莲镇）。另外，郭沫若研究认为李白出生于吉尔吉斯碎叶河上的碎叶城，属唐安西都护府（今楚河州托克马克市），该説有一定影响。有「诗仙」、「诗侠」、「酒仙」、「谪仙人」等称呼，活跃于盛唐，为杰出的浪漫主义诗人。与杜甫合称「李杜」。被贺知章惊呼为「天上谪仙」。
<!-- endtab -->
{% endtabs %}


## 标签隐藏 Tag Hide

### 行内 Inline

``` markdown
{% hideInline <文本内容>,[按钮显示的字],[按钮背景颜色],[按钮文字颜色] %}
```
哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}
门裡站著一个人? {% hideInline 闪 %}

### 块 Block

``` markdown
{% hideBlock [按钮显示的字],[按钮背景颜色],[按钮文字颜色] %} 
<文本内容>
{% endhideBlock %}
```

美女
{% hideBlock 查看答案 %}
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
{% endgallery %}
{% endhideBlock %}

### hide-toggle

``` markdown
{% hideToggle [展示文字] %}
[折叠内容]
{% endhideToggle %}
```

{% hideToggle Butterfly安装方法 %}
在你的博客根目录里
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
{% endgallery %}
{% endhideToggle %}


## 诗词标签 Poem

``` markdown
{% poem [标题],[作者] %}
<诗词内容>
{% endpoem %}
```

{% poem 咏鹅,骆宾王  %}
鹅鹅鹅，
曲项向天歌。
白毛浮绿水，
红掌拨清波。
{% endpoem %}

---
title: Butterfly主题标签外挂使用样例-Tag-Plugins
date: 2021-05-08 08:58:31
tags:
  - 标签
  - Hexo
  - butterfly
categories:
  - Butterfly魔改
keywords: 'Butterfly,标签,tag'
description: 主题标签外挂使用样例
abbrlink: b8a0d4e7
---

## Tabs

{% tabs Tags %}
<!-- tab 出师表 -->
臣亮言：先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍衞之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中府中，俱为一体；陟罚臧否，不宜异同：若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理；不宜偏私，使内外异法也。
侍中、侍郎郭攸之、费禕、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下：愚以为宫中之事，事无大小，悉以谘之，然后施行，必能裨补阙漏，有所广益。
将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰“能”，是以众议举宠为督：愚以为营中之事，悉以谘之，必能使行阵和睦，优劣得所。
亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不歎息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之、信之，则汉室之隆，可计日而待也。
臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，谘臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间：尔来二十有一年矣。
先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧歎，恐託付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、禕、允之任也。
愿陛下託臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、禕、允等之慢，以彰其咎；陛下亦宜自谋，以谘诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。
今当远离，临表涕零，不知所言。
<!-- endtab -->

<!-- tab 图库 -->
{% gallery %}
![](https://i.loli.net/2019/12/25/Jj8FXuKVlOea4Ec.jpg)
![](https://i.loli.net/2019/12/25/eqBGrXx9tWsZOao.jpg)
![](https://i.loli.net/2019/12/25/LjW2CfNSD7OaY4v.jpg)
![](https://i.loli.net/2019/12/25/pGIhaPjxtl438U9.jpg)
![](https://i.loli.net/2019/12/25/hzjJBR2x5SEmsbC.jpg)
![](https://i.loli.net/2019/12/25/ucNDmUqQkrFfAWv.jpg)
![](https://i.loli.net/2019/12/25/oj1wAnGSKtFvXIJ.jpg)
{% endgallery %}
<!-- endtab -->

<!-- tab 李白 -->
李白（701年5月19日－762年11月30日），字太白，号青莲居士，中国唐朝诗人，自言祖籍陇西成纪（今甘肃省天水市秦安县），先世西凉武昭王李暠之后，与李唐皇室同宗。幼时内迁，寄籍剑南道绵州（今四川省江油市青莲镇）。另外，郭沫若研究认为李白出生于吉尔吉斯碎叶河上的碎叶城，属唐安西都护府（今楚河州托克马克市），该説有一定影响。有「诗仙」、「诗侠」、「酒仙」、「谪仙人」等称呼，活跃于盛唐，为杰出的浪漫主义诗人。与杜甫合称「李杜」。被贺知章惊呼为「天上谪仙」。
<!-- endtab -->
{% endtabs %}


## Note (Bootstrap Callout)

> no-icon

{% note no-icon %}
默认 提示块标籤
{% endnote %}

{% note default no-icon %}
default 提示块标籤
{% endnote %}

{% note primary no-icon %}
primary 提示块标籤
{% endnote %}

{% note success no-icon %}
success 提示块标籤
{% endnote %}

{% note info no-icon %}
info 提示块标籤
{% endnote %}

{% note warning no-icon %}
warning 提示块标籤
{% endnote %}

{% note danger no-icon %}
danger 提示块标籤
{% endnote %}

### 方法二

> simple

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最讨厌的浏览器
{% endnote %}

> modern


{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最讨厌的浏览器
{% endnote %}

> flat


{% note 'fab fa-cc-visa' flat%}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
小心开车 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石头布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最讨厌的浏览器
{% endnote %}


> no-icon
{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}


## Gallery 相册图库

<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>


### hide-inline

哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门裡站著一个人? {% hideInline 闪 %}

### hide-block

美女

{% hideBlock 查看答案 %}
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
{% endhideBlock %}

### hide-toggle

{% hideToggle Butterfly安装方法 %}
在你的博客根目录里

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

{% endhideToggle %}
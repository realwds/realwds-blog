---
title: CSS 常用知识点回顾
abbrlink: 5a89e08f
date: 2021-05-19 12:01:06
tags:
  - css
  - 精选
  - 知识点
categories: CSS
keywords: css,知识点
description: CSS 常用知识点回顾
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/css.66y0hzd74js0.png
---

## 隐藏元素

- `display: none;` 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden;` 不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见。
- `display: none;` 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；`visibility: hidden;` 是继承属性，子孙节点消失由于继承了hidden，通过设置 `visibility: visible;` 可以让子孙节点显式。
- 修改常规流中元素的 `display` 通常会造成文档重排。修改 `visibility` 属性只会造成本元素的重绘。
- 读屏器不会读取 `display: none;` 元素内容；会读取 `visibility: hidden;` 元素内容。

## 盒模型

页面渲染时，`dom` 元素所采用的布局模型。可通过 `box-sizing` 进行设置。根据计算宽高的区域可分为：

- `content-box` (W3C 标准盒模型)
- `border-box` (IE 盒模型)
- `padding-box`
- `margin-box` (浏览器未实现)

## BFC

块级格式化上下文，是一个独立的渲染区域，让处于 `BFC` 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

### 触发条件

- 根元素
- position: absolute / fixed
- display: inline-block / table
- float 元素
- ovevflow !== visible

### 规则

- 属于同一个 `BFC` 的两个相邻 `Box` 垂直排列
- 属于同一个 `BFC` 的两个相邻 `Box` 的 `margin` 会发生重叠
- `BFC` 中子元素的 `margin box` 的左边， 与包含块 (BFC) `border box` 的左边相接触 (子元素 `absolute` 除外)
- `BFC` 的区域不会与 `float` 的元素区域重叠
- 计算 `BFC` 的高度时，浮动子元素也参与计算
- 文字层不会被浮动层覆盖，环绕于周围

### 应用

- 阻止 `margin` 重叠
- 可以包含浮动元素 ------ 清除内部浮动 (清除浮动的原理是两个 `div` 都位于同一个 `BFC` 区域之中)
- 自适应两栏布局
- 可以阻止元素被浮动元素覆盖

## 居中布局

### 水平居中

- 行内元素：text-align: center
- 块级元素：margin: 0 auto
- absolute + transform
- flex + justify-content: center

### 垂直居中

- line-height: height
- absolute + transform
- flex + align-items: center
- table

### 水平垂直居中

- absolute + transform
- flex + justify-content + align-items

## 选择器以及优先级

- id 选择器（ # myid）
- 类选择器（.myclassname）
- 标签选择器（div, h1, p）
- 相邻选择器（h1 + p）
- 子选择器（ul > li）
- 后代选择器（li a）
- 通配符选择器（ * ）
- 属性选择器（a[rel = "external"]）
- 伪类选择器（a:hover, li:nth-child）
- !important > 行内样式 > #id > .class > tag > * > 继承 > 默认
- 选择器 从右往左 解析

## 弹性盒子中 flex: 0 1 auto 分别表示什么

三个参数分别对应的是 `flex-grow`, `flex-shrink` 和 `flex-basis`，默认值为 `0 1 auto`。

- `flex-grow` 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- `flex-shrink` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- `flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。

## link 与 @import 的区别

-   `link` 功能较多，可以定义 `RSS`，定义 `Rel` 等作用，而 `@import` 只能用于加载 `css`
-   当解析到 `link` 时，页面会同步加载所引的 `css`，而 `@import` 所引用的 `css` 会等到页面加载完才被加载
-   `@import` 需要 IE5 以上才能使用
-   `link` 可以使用 `js` 动态引入，`@import` 不行

## 伪类和伪元素

`CSS` 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素都是用来修饰不在文档树中的部分

### 伪类

伪类存在的意义是为了通过选择器找到那些不存在 DOM 树中的信息以及不能被常规 CSS 选择器获取到的信息

- 获取不存在与 DOM 树中的信息。比如 `a` 标签的 `:link`、`visited` 等，这些信息不存在与 DOM 树结构中，只能通过 CSS 选择器来获取；
- 获取不能被常规 CSS 选择器获取的信息。比如：要获取第一个子元素，我们无法用常规的 CSS 选择器获取，但可以通过 `:first-child` 来获取到。

![](https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog/false-class.81137d65.47ajvus48zs0.png)

### 伪元素

伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过 `:before` 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。常见的伪元素有：`::before`，`::after`，`::first-line`，`::first-letter`，`::selection`、`::placeholder`等

因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素

### `::after`和`:after`的区别

在实际的开发工作中，我们会看到有人把伪元素写成 `:after`，这实际是 CSS2 与 CSS3 新旧标准的规定不同而导致的。 CSS2 中的伪元素使用1个冒号，在 CSS3 中，为了区分伪类和伪元素，规定伪元素使用2个冒号。所以，对于 CSS2 标准的老伪元素，比如 `:first-line`，`:first-letter`，`:before`，`:after`，写一个冒号浏览器也能识别，但对于 CSS3 标准的新伪元素，比如 `::selection`，就必须写2个冒号了

### CSS3新增伪类有那些？

- `p:first-of-type` 选择属于其父元素的首个 `<p>` 元素的每个 `<p>` 元素。
- `p:last-of-type` 选择属于其父元素的最后 `<p>` 元素的每个 `<p>` 元素。
- `p:only-of-type` 选择属于其父元素唯一的 `<p>` 元素的每个 `<p>` 元素。
- `p:only-child` 选择属于其父元素的唯一子元素的每个 `<p>` 元素。
- `p:nth-child(2)` 选择属于其父元素的第二个子元素的每个 `<p>` 元素。
- `:after` 在元素之前添加内容,也可以用来做清除浮动。
- `:before` 在元素之后添加内容。
- `not(elem)` 选择非 elem 元素的每个元素。
- `:enabled` 控制表单控件的禁用状态。
- `:disabled` 控制表单控件的禁用状态。
- `:checked` 单选框或复选框被选中。

---
title: 博客统计
tip: 统计功能来源：<a href="https://blog.eurkon.com/post/1213ef82.html">Eurkon</a>
top_img: false
comments: false
aside: false
---

<script src="https://fastly.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js"></script>

### 仓库提交

<a href="https://github.com/realwds" target="_blank">
  <img class="githubCard" src="https://ghchart.rshah.org/realwds" alt="github" />
</a> 

### 文章发布时间统计图

<div class="js-pjax" id="posts-chart" style="background-color: #20232a; border-radius: 8px; height: 300px; padding: 0.5rem;"></div>

### 文章标签统计图

<div class="js-pjax" id="tags-chart" data-length="10" style="background-color: #20232a; border-radius: 8px; height: 300px; padding: 0.5rem;"></div>

### 文章分类统计图

<div class="js-pjax" id="categories-chart" style="background-color: #20232a; border-radius: 8px; height: 300px; padding: 0.5rem;"></div>

<style>
.githubCard {
  padding: 10px;
  margin-top: 20px;
  border: 4px dotted #929d99;
  box-sizing: border-box;
  filter: blur(15px);
}
.githubCard.loaded {
  width: 100%;
  filter: blur(0);
  will-change: opacity;
  animation: realImg .5s linear;
}
</style>

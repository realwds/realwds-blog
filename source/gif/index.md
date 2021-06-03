---
title: 每日动图
aside: false
comments: false
keywords: 搞笑图片,搞笑动图,gif,sina gif,新浪动图,sina动图
description: 每日新浪搞笑动图分享！
---

<style>
#article-container .gif-page .gif-con p.date {
  font-size: 14px;
}
.gif-page .gif-con img {
  filter: blur(6px);
}
.gif-page .gif-con img.loaded {
  filter: blur(0);
  will-change: opacity;
  animation: realImg .2s linear;
}
.gif-page .gif-cop {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.gif-page .gif-cop button {
  width: 90%;
  color: #fff;
  background-color: var(--wds-main);
  padding: 12px;
  font-size: 14px;
  border-radius: 12px;
}
.gif-page .gif-cop button:hover{
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 24%), 0 8px 16px 0 rgb(0 0 0 / 19%);
}
</style>

<div class="gif-page">
  <div class="gif-script"></div>
  <div class="timeline gif-con"></div> 
  <div class="gif-cop">
    <button onclick="loadingPage()">加载更多...</button>
  </div>
</div>

<script>

function refresh(page){
  var script = document.createElement('script')
  script.src = 'https://interface.sina.cn/tech/gif/album.d.json?num='+10+'&page='+page+'&jsoncallback=jsonp1'
  document.querySelector('.gif-script').insertBefore(script, document.querySelector('.gif-script').firstChild)
}

function jsonp1(res){
  var gifCon = document.querySelector('.gif-con')
  document.querySelector('.gif-script').innerHTML = ''
  res.data.forEach((item)=>{
    gifCon.innerHTML +=  `
    <div class="timenode">
      <div class="meta"><p></p><p class="date">${item.createtime}</p><p></p></div>
      <div class="body"><p>${item.name}</p><img src="${item.img_url}" /></div>
    </div>
  `
  })
  lazyLoadInstance.update()
}

refresh(1)

var page=1
function loadingPage(){
  page++
  refresh(page)
}

</script>

---
title: 必应壁纸
aside: false
comments: false
date: 2021-06-07 10:55:56
keywords:
description:
---

<style>
#article-container .wallpaper-page .wallpaper-con p.date {
  font-size: 14px;
}
.wallpaper-page .wallpaper-con img {
  filter: blur(6px);
}
.wallpaper-page .wallpaper-con img.loaded {
  filter: blur(0);
  will-change: opacity;
  animation: realImg .2s linear;
}
.wallpaper-page .wallpaper-cop {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.wallpaper-page .wallpaper-cop button {
  width: 90%;
  color: #fff;
  background-color: var(--wds-main);
  padding: 12px;
  font-size: 14px;
  border-radius: 12px;
}
.wallpaper-page .wallpaper-cop button:hover{
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 24%), 0 8px 16px 0 rgb(0 0 0 / 19%);
}
</style>


<div class="wallpaper-page">
  <div class="timeline wallpaper-con"></div> 
  <div class="wallpaper-cop">
    <button onclick="loadingWall()">加载更多...</button>
  </div>
</div> 

<script>

function refresh(start) {

  var url = `https://realwds-api.vercel.app/360/getAppsByCategory?cid=new&&start=${start}&&count=1`
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.send()

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = xhr.responseText
      var obj = eval('(' + json + ')')
      var wallCon = document.querySelector('.wallpaper-con')
      wallCon.innerHTML +=  `
      <div class="timenode">
        <div class="meta"><p></p><p class="date">${obj.data.data[0].create_time}</p><p></p></div>
        <div class="body">
          <p>${obj.data.data[0].utag}</p>
          <img src="${obj.data.data[0].url_thumb}" />
        </div>
      </div>
      `
      lazyLoadInstance.update()
    }
  }

}

refresh(0)

var start = 0
function loadingWall(){
  start ++
  refresh(start)
}
</script>  

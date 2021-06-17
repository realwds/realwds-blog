---
title: 视频解析
tip: 本站不存储任何链接，播放内容与本站无关，接口源于互联网，仅供学习交流。
aside: false
comments: false
keywords: vip视频解析,vip视频在线解析,vip解析,万能vip视频解析,vip视频全能解析,vip视频,手机vip视频解析,手机在线解析vip视频,优酷vip解析,爱奇艺vip解析,腾讯vip解析,乐视vip解析,芒果vip解析
description: 本站提供vip视频在线免费解析，vip视频解析，优酷vip解析，爱奇艺vip解析，腾讯vip解析，乐视vip解析，芒果vip解析服务！
---

<style>
.select-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.select-container .select select {
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 14px;
  outline: none;
  color: var(--wds-secondtext);
  -webkit-appearance: none;  
  background: url("https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/aaa.3lcrtaf9uk60.svg")no-repeat right;
  background-size: 0.3rem;
  background-position-x: 96%;
}
[data-theme=dark] .select-container .select select {
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 14px;
  outline: none;
  color: var(--wds-secondtext);
  -webkit-appearance: none;  
  background: url("https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/aadark.4sucly1njfg0.svg")no-repeat right;
  background-size: 0.3rem;
  background-position-x: 96%;
}

.select-container .url-input {
  flex: 1;
  margin: 0 30px;
}
.select-container .url-input input {
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 14px;
  outline: none;
  width: 100%;
  color: var(--wds-secondtext);
  background: 0;
}
.select-container .btn button{
  color: var(--wds-white);
  background-color: var(--wds-main);
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.main-iframe {
  margin-top: 30px;
  height: 500px;
  background-color: #ecf5ff;
  border-radius: 6px 6px 0 0;
  position: relative;
}

.main-iframe #video-iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: none;
}
.video-alert{
  border-radius: 0 0 6px 6px;
  background-color: #f0f9eb;
  padding: 12px;
  text-align: center;
  font-size: 14px;
  color: #67c23a;
}
.others {
  margin-top: 40px;
  padding-bottom: 30px;
  display: flex;
}
.others a {
  display: inline-block;
  width: calc(100% / 2 - 6px);
  border-bottom: none !important ;
}
.others a:hover {
  background-color: var(--wds-white) !important;
}
.others a img {
  margin-top: .8rem !important;
  height: 44px;
  filter: blur(15px);
}
.others a img.loaded {
  filter: blur(0);
  will-change: opacity;
  animation: realImg .5s linear;
}
@media screen and (max-width: 600px) {
  .select-container {
    display: block
  }
  .select-container .select select {
    width: 100%;
  }
  .select-container .url-input {
    margin: 0;
    margin-top: 20px;
  }
  .select-container .btn button {
    margin-top: 20px;
    width: 100%;
  }
  .main-iframe {
    height: 280px;
  }
  .others {
    display: block;
  }
}
</style>
<div class="jiexi-container">
  <div class="select-container">
    <div class="select">
      <select id="video-jiexi" >  
        <option value="https://www.playm3u8.cn/jiexi.php?url=" selected="">一号解析接口</option>   
        <option value="https://api.yueliangjx.com/?url=">二号解析接口</option>
        <option value="https://jx.elwtc.com/vip/?url=">三号解析接口</option>
        <option value="https://www.qianyicp.com/jiexi/index.php?url=">四号解析接口</option> 
      </select> 
    </div>
    <div class="url-input">
      <input type="text" id="video-link" placeholder="输入视频播放地址，如：http://v.youku.com/v_show/id_xxxx" />
    </div>
    <div class="btn">
      <button onclick="seeVideo()">立即播放</button>
    </div>
  </div> 
  <div class="main-iframe">
    <iframe id="video-iframe" allowfullscreen="true"></iframe>
  </div>
  <div class="video-alert">选择接口，填写视频地址，点击“立即播放”按钮，畅享vip视频</div>
  <div class="others">
    <a href="https://v.qq.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/qqlogo.2zanrv8bd820.png" alt="腾讯视频" /></a> 
    <a href="https://www.iqiyi.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/iqiyi.6byskr7b5000.png" alt="爱奇艺" /></a> 
    <a href="https://youku.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/youkulogo.2jo1c1m2gfc0.png" alt="优酷视频" /></a> 
    <a href="https://www.mgtv.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/hunantvlogo.606ewgjk63c0.png" alt="芒果TV" /></a> 
    <a href="https://www.bilibili.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/bilibili.3q0x0tj8tbw.png" alt="哔哩哔哩" /></a> 
    <a href="https://www.yinyuetai.com/" target="_blank"> <img src="https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/yinyuetailogo.40ahfxetoc80.png" alt="音悦台" /></a> 
  </div>
</div>

<script>
  var num=0
  function seeVideo(){
    var link = document.getElementById('video-link').value
    var jiexi = document.getElementById('video-jiexi').value
    var video = document.getElementById("video-iframe")
    video.style.display= 'block'
    video.src = jiexi + link
    num=0
  }
</script>

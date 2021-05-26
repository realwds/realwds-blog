---
title: 关于博主
date: 2021-05-01 15:39:25
top_img: false
comments: false
aside: false
---

{% note blue no-icon %}

2014届 ```安徽科技学院``` 毕业生，信息与计算科学专业，数学系的挨踢者。
现居 ```浙江杭州```，前端打字员，最常用的按键 ```CTRL+C``` ```CTRL+V```。

{% endnote %}

<!-- ![](https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/20201216165804.jpg) -->

<!-- ## 上菜

{% note blue no-icon %}
我是一条酸菜鱼，又酸又菜又多余。
我是一只黄焖鸡，又黄又闷又垃圾。
我是一条土豆丝，又土又逗有屌丝。
我是一个剑齿鲨，又贱又痴又很傻。
我是一份小炒肉，又小又吵又有肉。
我是一碗回锅肉，又灰又裹又多肉。
我是一瓶二锅头，又二又乖又上头。
我是一份香辣鱼，再香再辣也多余。
{% endnote %} -->

<div class="js-pjax" id="mse-video" style="z-index:1"></div>
<!-- <div class="js-pjax" id="mse-music" style="margin-top:20px"></div> -->
<script data-pjax src="//sf1-ttcdn-tos.pstatp.com/obj/unpkg/xgplayer/2.9.6/browser/index.js" charset="utf-8"></script>
<script data-pjax src="//sf1-ttcdn-tos.pstatp.com/obj/unpkg/xgplayer-mp4/1.1.8/browser/index.js" charset="utf-8"></script>
<!-- <script data-pjax src="//sf1-ttcdn-tos.pstatp.com/obj/unpkg/xgplayer-music/2.1.7/browser/index.js" charset="utf-8"></script> -->
<script data-pjax type="text/javascript">
  new Player({
    id: 'mse-video',
    autoplay: false,
    volume: 0.3, //初始音量
    url:'https://cdn.jsdelivr.net/gh/realwds/cdn/video/geu.mp4',
    poster: "https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/20201216165804.jpg",
    playsinline: true,
    fluid: true, //流式布局
    danmu: {
      comments: [
        {
          duration: 12000,
          id: '1',
          start: 200,
          txt: '勇敢去做你认为正确的事',
          style: {  //弹幕自定义样式
            color: '#fff',
            fontSize: '20px',
          }
        },
        {
          duration: 12000,
          id: '2',
          start: 300,
          txt: '不要被世俗的流言蜚语所困扰',
          style: {  //弹幕自定义样式
            color: '#fff',
            fontSize: '20px',
          }
        },
        {
          duration: 15000,
          id: '3',
          start: 1500,
          txt: 'realwds’s blog',
          style: {  //弹幕自定义样式
            color: '#fff',
            fontSize: '20px',
          }
        },
        {
          duration: 15000,
          id: '4',
          start: 2000,
          txt: '出淤泥而不染',
          style: {  //弹幕自定义样式
            color: '#fff',
            fontSize: '20px',
          }
        },
        {
          duration: 12000,
          id: '5',
          start: 2800,
          txt: '前面的大佬等等我',
          style: {  //弹幕自定义样式
            color: '#fff',
            fontSize: '20px',
          }
        }
      ],
      area: {
        start: 0,
        end: 1
      }
    }
  });
  // new window.Music({
  //   id: 'mse-music',
  //   url: [{src: 'https://cdn.jsdelivr.net/gh/realwds/cdn/music/%E7%88%B1%E7%9A%84%E5%8F%AF%E8%83%BD%20-%20%E5%8F%B6%E5%80%A9%E6%96%87.mp3', name: '叶倩文·爱的可能', poster: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2464604322,652270656&fm=179&app=42&f=JPEG?w=150&h=150&s=ACB15994D2A646BCE09CA897030090E2'}],
  //   volume: 0.6,
  //   width: '100%',
  //   height: 50
  // });
</script>

<!-- <style>
.xgplayer-music xg-next,xg-prev,xg-backward,xg-forward{
  display:none
}
</style> -->

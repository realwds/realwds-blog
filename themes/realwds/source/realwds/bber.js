// if (document.querySelector('#bber-loading')) {
//   var loading_pic = document.getElementById('bber-loading');
//   loading_pic.innerHTML = '<span id="moments_loading"><i class="fa fa-spinner fa-spin"></i></span>';
// }

function getbbdata(){
  var bbsurl = bbapiurl
  
  var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
  httpRequest.open('GET', bbsurl, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
  httpRequest.send();//第三步：发送请求  将请求参数写在URL中
  /**
   * 获取数据后的处理程序
   */
  httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      var json = httpRequest.responseText;//获取到json字符串，还需解析
      var obj = eval('(' + json + ')');
      // console.log(obj.data)
      const bbArray = obj.data.map(e => {
      return {
          'date': e.date,
          'content': e.content,
          'from': e.from
      }
      })
      // console.log(fundsArray)
      saveToLocal.set('zhheo-bb', JSON.stringify(bbArray), 5 / (60 * 24))
      const data = saveToLocal.get('zhheo-bb');
      generateBBHtml(JSON.parse(data))
  }
  };
}

var generateBBHtml = array => {
  var $dom = document.querySelector('#bber');
  var result = '<section class="timeline page-1"><ul><div class="list">'
  console.log(array)

  if (array.length) {
    for (let i = 0; i < array.length; i++) {
      var from_icon = '';
          if (array[i].from.indexOf("iPhone") != -1){
            from_icon = '<i class="fas fa-mobile-alt"></i>';
          }else if (array[i].from.indexOf("iPad") != -1){
            from_icon = '<i class="fas fa-tablet-alt"></i>';
          }else if (array[i].from.indexOf("Mac") != -1){
            from_icon = '<i class="fas fa-laptop"></i>';
          }else if (array[i].from.indexOf("微信") != -1){
            from_icon = '<i class="fab fa-weixin" style="font-size: 0.6rem"></i>';
          }else{
            from_icon = '<i class="fas fa-tools"></i>';
          };

      var d = new Date(array[i].date);
      var dtime = array[i].date,data = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate() +' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
      var dataCont = '<p class="datacont">'+urlToLink(array[i].content)+'</p>';
      var dataTime = '<p class="datatime">'+data+'</p>';


      result += `<li class="item"><div>`+ dataTime  + dataCont +`</p><p class="datafrom"><small>`+ from_icon + array[i].from +`</small></p></div></li>`;
    }
  } else {
    result += '!{_p("aside.card_funds.zero")}';
  }
  result += '</div></ul></section>'
  
  var $dom = document.querySelector('#bber');
  
  $dom.innerHTML = result;
  Lately({ 'target': '#bber .datatime' });
  window.lazyLoadInstance && window.lazyLoadInstance.update();
  window.pjax && window.pjax.refresh($dom);
}

if (document.querySelector('#bber')) {
  getbbdata()
}

function urlToLink(str) {
var re =/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif))\S+/g;
var re_forpic =/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp))/g;
str =str.replace(re_forpic,function (imgurl) {
  return '<a href="' + imgurl + '"><img src="' + imgurl + '" /></a>';
});
str =str.replace(re,function (website) {
  return " <a href='" + website + "'rel='noopener' target='_blank'>↘链接↙</a> ";
});
// str = qqWechatEmotionParser(str)
return str; 
}
/*
MIT License - http://www.opensource.org/licenses/mit-license.php
For usage and examples, visit:
https://tokinx.github.io/lately/
Copyright (c) 2017, Biji.IO
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(b){var g=0;return function(){return g<b.length?{done:!1,value:b[g++]}:{done:!0}}};$jscomp.arrayIterator=function(b){return{next:$jscomp.arrayIteratorImpl(b)}};$jscomp.makeIterator=function(b){var g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];return g?g.call(b):$jscomp.arrayIterator(b)};
(function(b,g){var p=function(h){var d=h.lang||{second:"\u79d2",minute:"\u5206\u949f",hour:"\u5c0f\u65f6",day:"\u5929",month:"\u4e2a\u6708",year:"\u5e74",ago:"\u524d",error:"NaN"};h=$jscomp.makeIterator(document.querySelectorAll(h.target||".time"));for(var c=h.next();!c.done;c=h.next()){c=c.value;var a=c.dateTime;var e=c.title,f=c.innerHTML;if(!a||isNaN(new Date(a=a.replace(/(.*)[a-z](.*)\+(.*)/gi,"$1 $2").replace(/-/g,"/"))))if(e&&!isNaN(new Date(e=e.replace(/-/g,"/"))))a=e;else if(f&&!isNaN(new Date(f=
f.replace(/-/g,"/"))))a=f;else break;c.title=a;a=new Date(a);a=((new Date).getTime()-a.getTime())/1E3;e=a/60;f=e/60;var k=f/24,l=k/30,m=l/12;c.innerHTML=(1<=m?Math.floor(m)+d.year:1<=l?Math.floor(l)+d.month:1<=k?Math.floor(k)+d.day:1<=f?Math.floor(f)+d.hour:1<=e?Math.floor(e)+d.minute:1<=a?Math.floor(a)+d.second:d.error)+d.ago}};var n=function(){return this||(0,eval)("this")}();"Lately"in n||(n.Lately=p)})();
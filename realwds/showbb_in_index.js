"use strict";function getbbdata(){var bbsurl=bbShortApiUrl,httpRequest=new XMLHttpRequest;httpRequest.open("GET",bbsurl,!0),httpRequest.send(),httpRequest.onreadystatechange=function(){var json,obj,bbArray,data;4==httpRequest.readyState&&200==httpRequest.status&&(json=httpRequest.responseText,obj=eval("("+json+")"),bbArray=obj.data.map(function(e){return{date:e.date,content:e.content,from:e.from}}),saveToLocal.set("zhheo-bb",JSON.stringify(bbArray),5/1440),data=saveToLocal.get("zhheo-bb"),generateBBHtml(JSON.parse(data)))}}var generateBBHtml=function(e){var t=document.querySelector("#bber-talk"),a="";if(e.length)for(var n=0;n<e.length;n++){var r=e[n].content.replace(/(https?:[^:<>"]*\/)([^:<>"]*)(\.((png!thumbnail)|(png)|(jpg)|(webp)|(jpeg)|(gif)))/g," [图片] ");a+="<div class='li-style swiper-slide'>".concat(r,"</div>")}else a+='!{_p("aside.card_funds.zero")}';(t=document.querySelector("#bber-talk")).innerHTML=a,window.lazyLoadInstance&&window.lazyLoadInstance.update(),window.pjax&&window.pjax.refresh(t);new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0}})},bbInit=function(){var e;document.querySelector("#bber-talk")&&((e=saveToLocal.get("zhheo-bb"))?generateBBHtml(JSON.parse(e)):getbbdata())};bbInit(),document.addEventListener("pjax:complete",bbInit);
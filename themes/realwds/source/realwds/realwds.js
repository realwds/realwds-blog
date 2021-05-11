"use strict";
function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  }
  : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }
  )(e)
}

var navFn = {
  switchDarkMode: function() {
    "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(),
    saveToLocal.set("theme", "dark", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(),
    saveToLocal.set("theme", "light", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
    "function" == typeof utterancesTheme && utterancesTheme(),
    "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(),
    window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function() {
      return window.disqusReset()
    }, 200)
  }
}


//滚动条自动隐藏
var t1 = 0;
var t2 = 0;
var timer = null; // 定时器
document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','display:none;');

// scroll监听
document.onscroll = function() {
  clearTimeout(timer);
  timer = setTimeout(isScrollEnd, 1000);
  t1 = document.documentElement.scrollTop || document.body.scrollTop;
  document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','display:block;');
}

function isScrollEnd() {
  t2 = document.documentElement.scrollTop || document.body.scrollTop;
  if(t2 == t1){
    document.styleSheets[0].addRule('*::-webkit-scrollbar-thumb','display:none;');
  }
}

var OriginTitile = document.title, titleTime;
document.addEventListener("visibilitychange", function() {
    document.hidden ? (document.title = "realwds's blog",
    clearTimeout(titleTime)) : document.title = OriginTitile
});
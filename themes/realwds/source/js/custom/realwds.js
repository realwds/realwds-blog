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

var OriginTitile = document.title, titleTime;
document.addEventListener("visibilitychange", function() {
    document.hidden ? (document.title = "(゜-゜)つロ realwds's blog",
    clearTimeout(titleTime)) : document.title = OriginTitile
});

var getTimeState = function() {
  var e = (new Date).getHours() , t = "";
  return 0 <= e && e <= 5 ? t = "夜深了" : 5 < e && e <= 10 ? t = "早上好" : 10 < e && e <= 13 ? t = "中午好" : 13 < e && e <= 18 ? t = "下午好" : 18 < e && e <= 24 && (t = "晚上好"),
  t
};
function sayhi() {
  document.querySelector("#author-info__sayhi") && (document.getElementById("author-info__sayhi").innerHTML = "👋 " + getTimeState() + "！这里是")
}

function coverColor() {
  var _document$getElementB, path = null === (_document$getElementB = document.getElementById("post-cover")) || void 0 === _document$getElementB ? void 0 : _document$getElementB.src;
  void 0 !== path ?(
    RGBaster.colors(path, {
      paletteSize: 30, // 调色板大小
      exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)', 'rgb(254,254,254)'],  // 不包括颜色
      success: function(payload) {
        document.styleSheets[0].addRule(":root", "--wds-main:" + payload.dominant + "!important")
        document.getElementById("coverdiv").classList.add("loaded")
      },
      error: function(){
        document.styleSheets[0].addRule(":root", "--wds-main: #057748 !important")
      }
    })
  ) : document.styleSheets[0].addRule(":root", "--wds-main: #057748 !important")
}

console.log(`
┌─┐       ┌─┐ + +
┌──┘ ┴───────┘ ┴──┐++
│                 │
│       ───       │++ + + +
███████───███████ │+
│                 │+
│       ─┴─       │
│                 │
└───┐         ┌───┘
    │         │
    │         │   + +
    │         │
    │         └──────────────┐
    │                        │
    │    realwds's blog      ├─┐
    │                        ┌─┘
    │                        │
    └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +
      │ ─┤ ─┤       │ ─┤ ─┤
      └──┴──┘       └──┴──┘  + + + +

Delicate facial features are the beginning of the heart, 
charming temperament is the abyss of emotion.

`)
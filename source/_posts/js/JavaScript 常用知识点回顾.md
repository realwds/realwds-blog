---
title: JavaScript 常用知识点回顾
abbrlink: 5b7188dc
date: 2021-05-19 11:43:04
tags:
  - js
  - 精选
  - 知识点
categories: JavaScript
keywords: js,知识点,JavaScript
description: JavaScript 常用知识点回顾
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/js.61y0s3aqj0w0.jpg
---

## 内置类型

- `JS` 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（Object）。
- 基本类型有六种：`null`，`undefined`，`boolean`，`number`，`string`，`symbol`。
- 其中 JS 的数字类型是浮点类型的，没有整型。并且浮点类型基于 IEEE 754 标准实现，在使用中会遇到某些 Bug。`NaN` 也属于 `number` 类型，并且 `NaN` 不等于自身。
- 对于基本类型来说，如果使用字面量的方式，那么这个变量只是个字面量，只有在必要的时候才会转换为对应的类型。

``` js
let a = 111 // 这只是字面量，不是 number 类型
a.toString() // 使用时候才会转换为对象类型
```

> 对象（Object）是引用类型，在使用过程中会遇到浅拷贝和深拷贝的问题。

``` js
let a = { name: 'FE' }
let b = a
b.name = 'EF'
console.log(a.name) // EF
```

## null 和 undefined 的区别

`null` 是一个表示"无"的对象，转为数值时为0；`undefined` 是一个表示"无"的原始值，转为数值时为 NaN。

当声明的变量还未被初始化时，变量的默认值为 `undefined`。 `null` 用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。

`undefined` 表示“缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：

- 变量被声明了，但没有赋值时，就等于 undefined。
- 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
- 对象没有赋值的属性，该属性的值为 undefined。
- 函数没有返回值时，默认返回 undefined。

`null` 表示“没有对象”，即该处不应该有值。典型用法是：

- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

## new 操作符具体干了什么

- 创建一个空对象，并且 `this` 变量引用该对象，同时还继承了该函数的原型。
- 属性和方法被加入到 `this` 引用的对象中。
- 新创建的对象由 `this` 所引用，并且最后隐式的返回 `this`。

## call、apply、bind 三者的异同点

`bind`、`apply`、`call` 三者都可以用来改变 `this` 的指向, 下面分别对他们进行比较分析：

`apply` 和 `call` 二者都是 `Function` 对象的方法，每个函数都能调用 二者的第一个参数都是你要指定的执行上下文。

`apply` 和 `call` 的区别是： `call` 方法接受的是若干个参数列表，而 `apply` 接收的是一个包含多个参数的数组。

``` js
var a = {
  name: 'Cherry',
  fn: function(a, b) {
    console.log(a + b)
  },
}
var b = a.fn
b.apply(a, [1, 2]) // 3
b.call(a, 4, 5, 6) // 15
```

我们常常使用的验证是否是数组（前提是 `toString()` 方法没有被重写过）：

``` js
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
```

我们发现 `bind()` 方法还需要调用一次；是由于 `bind()` 方法创建一个新的函数,我们必须手动去调用。

``` js
var a = {
  name: 'Cherry',
  fn: function(a, b) {
    console.log(a + b)
  },
}
var b = a.fn
b.bind(a, 1, 2)() // 3 
```

`bind`、`apply`、`call` 的共同和不同点：

- 三者都可以用来改变 `this` 的指向
- 三者第一个参数都是 `this` 要指向的对象，也就是想指定的上下文，上下文就是指调用函数的那个对象。（点前的那个对象，没有就是全局 window）
- 三者都可以传参，但是 `apply` 是数组，而 `call` 是有顺序的传入
- `bind` 是返回对应函数，便于稍后调用；`apply`、`call` 则是立即执行

## 跨域问题解决方式

- 通过 `jsonp` 跨域
- 跨域资源共享（`CORS`）
- `nodejs` 中间件代理跨域
- `nginx` 反向代理中设置 `proxy_cookie_domain`

### 1. 通过 jsonp 跨域

通常为了减轻 web 服务器的负载，我们把 js、css、img 等静态资源分离到另一台独立域名的服务器上，在 html 页面中再通过相应的标签从不同域名下加载静态资源，而被浏览器允许，基于此原理，我们可以通过动态创建 script，再请求一个带参网址实现跨域通信。

``` js
var script = document.createElement('script');
script.type = 'text/javascript';

// 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
script.src = 'http://www.xxx.com:8080/login?user=admin&callback=jsonCallback';
document.head.appendChild(script);

// 回调执行函数
function jsonCallback(res) {
    alert(JSON.stringify(res));
}
```

### 2. 跨域资源共享（CORS）

`CORS` 是一个 W3C 标准，全称是“跨域资源共享”（`Cross-origin resource sharing`）跨域资源共享 `CORS` 详解。看名字就知道这是处理跨域问题的标准做法。`CORS` 有两种请求，简单请求和非简单请求。

**简单请求：**

- 请求方法是 `HEAD`、`GET` 、`POST` 三种方法之一
- HTTP 请求头的信息不超出以下几种字段：
  - Accept
  - Accept-Language
  - Content-Language
  - Last-Event-ID
  - Content-Type：只限于 application/x-www-form-urlencoded、multipart/form-data、text/plain

**复杂请求：**

如果前端要带 `cookie`, 前端也需要单独设置

``` js
var xhr = new XMLHttpRequest();
// 前端设置是否带cookie
xhr.withCredentials = true;
...
```

### 3. Nodejs 中间件代理跨域

通过起一个代理服务器， 实现数据的转发，也可以通过设置 `cookieDomainRewrite` 参数修改响应头 `cookie` 中域名,实现当前域下 `cookie` 的写入

在 vue 框架下实现跨域

利用 `node + webpack + webpack-dev-server` 代理接口跨域。在开发环境下，由于 `vue` 渲染服务和接口代理服务都是 `webpack-dev-server` 同一个，所以页面与代理接口之间不再跨域，无须设置 `headers` 跨域信息了。后台可以不做任何处理。

``` js
module.exports = {
  entry: {},
  module: {},
  ...
  devServer: {
      historyApiFallback: true,
      proxy: [{
        context: '/login',
        target: 'http://xxx.com:8080',  // 代理跨域目标接口
        changeOrigin: true,
        secure: false,  // 当代理某些https服务报错时用
        cookieDomainRewrite: 'xxx.com'  // 可以为false，表示不修改
      }],
      noInfo: true
  }
}
```

### 4. Nginx 反向代理中设置

和使用 `node` 中间件跨域原理相似。前端和后端都不需要写额外的代码来处理， 只需要配置一下 `Nginx`

``` sh
server {
  listen 80;
  server_name aa.com;
  location ^~ /api {
    proxy_pass http://xxx.com;
  }
}
```

##  defer 和 async 的区别

``` html
<script src="script.js"></script>
```

没有 `defer` 或 `async`，浏览器会立即加载并执行指定的脚本，"立即"指的是在渲染该 `script` 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

``` html
<script async src="script.js"></script>
```

有 `async`，加载和渲染后续文档元素的过程将和 `script.js` 的加载与执行并行进行（异步）。

``` html
<script defer src="myscript.js"></script>
```

有 `defer`，加载后续文档元素的过程将和 `script.js` 的加载并行进行（异步），但是 `script.js` 的执行要在所有元素解析完成之后，`DOMContentLoaded` 事件触发之前完成。

![](https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog/script-defer-async.84113912.1idrxdvmec2o.jpg)

> 蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

## 数据类型转换

JS 中在使用运算符号或者对比符时，会自带隐式转换，规则如下:

转化规则

- `-` 、`*` 、`/` 、`%`：一律转换成数值后计算
- `+`：
  - 数字 + 字符串 = 字符串， 运算顺序是从左到右
  - 数字 + 对象， 优先调用对象的 `valueOf -> toString`
  - 数字 + `boolean/null` -> 数字
  - 数字 + `undefined -> NaN`
- `[1].toString() === '1'`
- `{}.toString() === '[object object]'`
- `NaN !== NaN` 、`+undefined` 为 `NaN`

在 JS 中类型转换只有三种情况，分别是：

- 转换为布尔值
- 转换为数字
- 转换为字符串

| 原始值 | 转换目标 | 结果 |
| --- | --- | --- |
| number | 布尔值 | 除了 0、-0、NaN 都为 true |
| string | 布尔值 | 除了空字符串都为 true |
| undefined、null | 布尔值 | false |
| 引用类型 | 布尔值 | true |
| number | 字符串 | 5 => '5' |
| Boolean、函数、Symbol | 字符串 | 'true' |
| 数组 | 字符串 | [1, 2] => '1, 2' |
| 对象 | 字符串 | '[Object Object]' |
| string | 数字 | '1' => 1, 'a' => NaN |
| 数组 | 数字 | 空数组为0，存在一个元素且为数字转为数字，其他情况NaN |
| null | 数字 | 0 |
| 除了数组的引用类型 | 数字 | NaN |
| Symbol | 数字 | 抛错 |

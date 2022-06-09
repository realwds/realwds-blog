---
title: Vercel 改写网络接口，前端跨域问题秒解
tags:
  - vercel
  - 跨域
  - cors
categories: Git相关
keywords: 跨域,vercel,github,cors
description: Vercel 改写网络接口，前端跨域问题秒解
cover: https://fastly.jsdelivr.net/gh/realwds/cdn@master/blog-cover/vercel.3umkcz88tkw0.png
abbrlink: 49fde86b
date: 2021-06-07 10:00:00
---

前端跨域问题一直以来都是非常头疼的问题，有时候想不借助后端，自己渲染个网络接口，太难了。
就拿必应壁纸来说，已知接口地址，但由于跨域，前端无法渲染数据。
全能圣手 `Vercel` 利用 `vercel.json` 的 `CORS` 就可以解决这个问题。

## 编写代码

新建目录文件，改写网络接口。

``` js
const axios = require('axios')

module.exports = async (req, res) => {
  const start = req.query.start ? req.query.start : 0
  const count = req.query.count ? req.query.count : 1

  const result = await axios({
    method: 'get',
    url: `http://cn.bing.com/HPImageArchive.aspx?format=js&idx=${start}&n=${count}`
  })

  res.json({
    status: 'ok',
    data: result.data
  })
}

```

`package.json` 中引入 `axios` 模块。

项目根目录新建 `vercel.json` 文件，启用 `CORS`

``` json
{
  "name": "realwds-api",
  "version": 2,
  "routes": [
    {
      "src": "/",
      "headers": {
        "cache-control": "no-cache, no-store, must-revalidate",
        "Access-Control-Allow-Origin": "*"
      },
      "dest": "/api"
    },
    {
      "src": "/bing",
      "headers": {
        "cache-control": "no-cache, no-store, must-revalidate",
        "Access-Control-Allow-Origin": "*"
      },
      "dest": "/api/bing/"
    }
  ]
}
```

推送 `GitHub` 仓库，用 `Vercel` 部署指定项目。

## 大功告成

[接口预览](https://realwds-api.vercel.app/bing)

[项目地址](https://github.com/realwds/realwds-api)

## 参考文献

[《 Runtime Node.js 》 - Vercel ](https://vercel.com/docs/runtimes#official-runtimes/node-js)
[《 Enabling CORS using vercel.json 》 - Vercel](https://vercel.com/support/articles/how-to-enable-cors?query=vercel.json#enabling-cors-using-vercel.json)

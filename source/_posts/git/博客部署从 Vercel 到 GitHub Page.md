---
title: 博客部署从 Vercel 到 GitHub Page
tags:
  - 博客部署
  - GitHub
  - vercel
categories: Git相关
keywords: 博客部署,vercel,github
description: 博客部署从 Vercel 到 GitHub Page
cover: https://fastly.jsdelivr.net/gh/realwds/cdn@master/blog-cover/20210330-135551-2b69.696up9ch5r00.26ommgpec1pc.png
abbrlink: 2a6b5553
date: 2021-05-20 15:45:20
---

看到标题，肯定有小伙伴想，好一波反向操作。

但是最近 `vercel` 解析的域名访问太不给力了，经常崩，体验极差。

我能怎么办，我也很绝望啊！

思前想后，还是 `Github Page` 稳如老狗啊，虽然对国内而言速度有点慢，但是还可以，毕竟考虑到咱的博客也是要面向世界的 （一本正经滑稽脸）

## 前因后果

由于我的源码没有公开，所以只想把产物给展示出来，推送到一个新的仓库，具体操作可以查看 《[Github Action 将构建产物自动推送到令一个仓库](/posts/a3cc0a75.html)》 的文章，当然对于 `hexo` 也可以用 `deploy` 进行跨仓库产物提交。

但是有一个问题就是，我的源码里存在很多路径问题，所以不能放到除 `realwds.github.io` 的其他仓库。也就是只能放到主仓库，可是我的主仓库已经有了内容，并且解析好了，不是很想动。

组织账号！没错，个人可以新建组织，组织账户的主仓库也可以搞，这就解决了我必须要提交到主仓库的问题。


## 代码编写

利用 `hexo` 的 `deploy` 推送到组织仓库

``` yml
deploy:
  type: git
  repo: git@github.com:hiwego/hiwego.github.io.git
  branch: master
```

编写 `package.json` 文件

``` json
"scripts": {
  "dev": "hexo clean && hexo s",
  "build": "hexo generate",
  "upload": "hexo clean && hexo g && copy README.md public\\README.md && gulp && hexo d && git config --global user.name 'Alejandro' && git config --global user.email 'wds@disnot.com' && git add . && git commit -am"
}
```

- `hexo` 经典三连，由于仓库中不含 `README.md` 文件，感觉不是很好看，便复制了源码仓库 `README.md` 到产物仓库。
- 我用了 `gulp` 进行代码的压缩，所以在部署前进行 `gulp` 命令压缩。
- 公司用的 `git` 名和我自己的不一样，所以提交前进行修改。
- 每次运行 `npm run upload <提交信息备注>` 即可，最后别忘了 `git push`。

## 查漏补缺

提交到组织仓库，缺失`CNAME`，导致域名无法访问。所以要在项目的 `source` 文件夹下新建 `CNAME` 文件，里面放入自己要解析的域名即可。

## 大功告成

打开域名 https://blog.realwds.com 访问成功！


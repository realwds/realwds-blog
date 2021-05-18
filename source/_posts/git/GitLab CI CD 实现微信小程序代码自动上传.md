---
title: miniprogram+GitLab CI/CD 实现微信小程序代码自动上传
tags:
  - 小程序
  - GitLab
  - 持续集成
  - CI/CD
categories: Git相关
keywords: 'gitlab,小程序,ci,cd,持续集成'
description: miniprogram+GitLab CI/CD 持续集成实现微信小程序代码自动上传
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/gitlab.132o7usr5uuo.png
abbrlink: 7d6b9bff
date: 2021-05-15 09:55:12
---

利用 GitLab CI/CD 持续集成，并结合微信小程序 miniprogram-ci 编译模块，实现代码自动上传，解决了平时要通过微信开发者工具手动上传的痛点。

## 代码编写

### miniprogram-ci

miniprogram-ci 是从微信开发者工具中抽离的关于小程序/小游戏项目代码的编译模块。[官方地址文档地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)

``` js
const ci = require('miniprogram-ci')
let version = process.argv.slice(2)[0] //接收命令行传入版本参数
let desc = process.argv.slice(3)[0] //接收命令行传入描述参数

if (!version) version = 'v1.0.0'
if (!desc) desc = new Date() + 'Robot上传'

const project = new ci.Project({
  appid: '******', //你的APPID
  type: 'miniProgram',
  projectPath: process.cwd() + '/dist/build/mp-weixin', //项目路径
  privateKeyPath: '/app/mall/private.******.key', //私钥的路径
  ignores: ['node_modules/**/*'],
})
ci.upload({
  project,
  version,
  desc,
  setting: {
    es6: true,
  },
}).then(res => {
  console.log(res)
  console.log('上传成功')
}).catch(error => {
  if (error.errCode == -1) {
    console.log('上传成功')
  }
  console.log(error)
  console.log('上传失败')
  process.exit(-1)
})
```

### gitlab-ci

gitlab-ci 是 git 官方提供的的自动化部署持续集成工具。

``` yml
before_script:
  - date
  - npm -v
  - node -v
  - npm install
  - cp .env.example .env

after_script:
  - date
  
stages:
  - deploy

cache:
  paths:
    - ./node_modules

deploy:
  stage: deploy
  except:
    - tags
  script:
    - npm run build
    - VERSION=`node -p "require('./package.json').version"` #获取package.json版本号
    - DESCRIPTION=`git log -1 --pretty=format:%s` #获取最近一次git提交信息
    - node ./tool/upload.js $VERSION $DESCRIPTION  #执行

production:
  stage: deploy
  only:
    - tags
  script:
    - npm run build
    - DESCRIPTION=`git log -1 --pretty=format:%s`
    - node ./tool/upload.js $CI_BUILD_TAG $DESCRIPTION 
```

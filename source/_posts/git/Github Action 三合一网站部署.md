---
title: GitHub Action 三合一网站部署
tags:
  - GitHub
  - 持续集成
  - CI/CD
categories: Git相关
keywords: 'github,action,ci,cd,持续集成'
description: GitHub Action 利用 CI/CD 持续集成，自动部署到 github、gitlab、gitee 平台
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/github-action.37jx8hg50fs0.png
abbrlink: 4b365e6c
date: 2021-05-14 21:04:15
---

在 github 一端提交代码，代码自动提交到 github、gitlab、gitee 平台。并自动部署到对应的 git page 上，主要利用 github action 的持续集成。

## 注册账号

首先注册三个平台的账号，最好用户名相同。

## 获取私人令牌

在三个平台分别得到私人令牌，添加到新建仓库的 Actions secrets 中。

- github 私人令牌获取方法，点开右上角头像。setting => Developer settings => Personal access tokens
- gitee 私人令牌获取方法，点开右上角头像。设置 => 私人令牌
- gitlab 私人令牌获取方法，点开右上角头像。Preferences => 访问令牌

![获取私人令牌](https://cdn.jsdelivr.net/gh/realwds/cdn@master/realwds-blog/3d9e5d49d1ef49fdbf3e482fb5c50c9c.76le68kg3hs0.png)

## 新建 github 仓库

在代码根目录新建 .github 文件夹，在 .github 目录中新建 workflows 文件夹。在 workflows 目录中新建以下文件，可以任意命名。

### GitHub Action 自动部署到 GitHub Page

``` yml
name: DEPLOY CI
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: docs/.vuepress/dist
        BUILD_SCRIPT: npm install && npm run build
```

### GitHub Action 自动部署到 Gitee & GitLab

``` yml
name: MIRROR CI
on:
  push:
    branches:
      - master
jobs:
  mirror_to_gitee:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitee'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitee.com:tsund/test.git
          ssh_private_key:
            ${{ secrets.GITEE_KEY }}

  mirror_to_gitlab:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitlab'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitlab.com:tsund/test.git
          ssh_private_key:
            ${{ secrets.GITLAB_KEY }}
```

### 在代码根目录新建 .gitlab-ci.yml 文件

此文件是 gitlab CI/CD 操作文件

``` yml
image: node:12.6.0

pages:
 cache:
   paths:
   - node_modules/

 script:
 - npm install
 - npm run build
 artifacts:
   paths:
   - public
 only:
 - master
```

## 大功告成

github 提交代码，到仓库的 Actions 即可查看正在持续集成。

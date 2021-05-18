---
title: GitHub Action 自动构建并发布项目
tags:
  - GitHub
  - 持续集成
  - CI/CD
categories: Git相关
keywords: 'github,action,ci,cd,持续集成'
description: GitHub Action 利用 CI/CD 持续集成，自动构建并发布项目。
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/github.70n1coru7sk0.png
abbrlink: 3b154c4f
date: 2021-05-14 20:32:31
---

GitHub Action 利用 CI/CD 持续集成，自动构建并发布项目

## 编写代码

``` yml
name: DEPLOY CI
on:
  push:
    branches:
      - master
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install dependencies
        run: sudo npm install hexo-cli -g && npm install && hexo clean && hexo s
        
      - name: Build and Deploy
        uses: JamesIves/github-pages-deploy-action@4.0.0
        with:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: public # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```

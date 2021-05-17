---
title: GitHub Action 将构建产物自动推送到令一个仓库
tags:
  - GitHub
  - 持续集成
  - CI/CD
categories: Git相关
keywords: 'github,action,ci,cd,持续集成'
description: GitHub Action 利用 CI/CD 持续集成，将产物自动推动到令一个仓库。
cover: 'https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/material-7.png'
abbrlink: a3cc0a75
date: 2021-05-14 21:32:31
---

GitHub Action 利用 CI/CD 持续集成，将产物自动推动到令一个仓库。

## 编写代码

``` yml
name: Deploy to GitHub Pages
on:
  push: 
    branches: 
      - master

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest    
    steps:
    - uses: actions/checkout@master
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: 10.x
    - name: npm install and build
      run: |
        npm install
        npm run build

    - name: Deploy
      uses: s0/git-publish-subdir-action@develop
      env:
        REPO: git@github.com:owner/repo.git
        BRANCH: gh-pages
        FOLDER: build
        SSH_PRIVATE_KEY: ${{ secrets.DEPLOY_PRIVATE_KEY }}
```

- [GitHub 地址](https://github.com/s0/git-publish-subdir-action)

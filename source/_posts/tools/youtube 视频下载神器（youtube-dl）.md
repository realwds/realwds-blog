---
title: youtube 视频下载神器（youtube-dl）
tags:
  - 油管
  - youtube
  - 下载
categories: 工具相关
keywords: 油管,youtube,下载视频
description: youtube 油管下载高清视频，可带字幕。
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/youtube-dl.2e680upet6ck.png
abbrlink: cc427180
date: 2021-05-15 23:03:18
---

youtube-dl 是一个命令行程序，可以从 YouTube.com 和其他一些网站一样下载视频。它需要 2.6、2.7 或 3.2+ 版本的 Python 解释器，并且它不是特定于平台的。它应该可以在您的 Unix 机器，Windows 或 macOS 上运行。它已发布到公共领域，这意味着您可以随意修改，重新分发或使用它。

## 安装

``` sh
# macOS 系统：
brew install youtube-dl

# windows 系统：
scoop install youtube-dl
```

## 使用

``` sh
# 使用
youtube-dl [OPTIONS] URL [URL...]

# 无选项，直接下载视频，默认是最高清晰度，如：
youtube-dl https://www.youtube.com/watch?v=-wNyEUrxzFU

#-i 选项，仅显示信息但不下载，如：
youtube-dl -i https://www.youtube.com/watch?v=-wNyEUrxzFU

# 更多选项，，可以运行以下命令查看
youtube-dl -help

# 下载中文字幕带视频（前提视频包含中文字幕）
youtube-dl --sub-lang zh-Hans --write-auto-sub https://www.youtube.com/watch?v=DpETCg3YquA
```

## 参考文献

[《 youtube-dl 》 - GitHub](https://github.com/ytdl-org/youtube-dl)

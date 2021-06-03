---
title: 免费 CDN 优化网站（CloudFlare）
tags:
  - cloudflare
  - 网站加速
  - ssl
categories: 工具相关
keywords: cloudflare,网站加速,ssl
description: CloudFlare，一个可以让国内网站在国外加速的服务
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/cloudflare.25sw2q0mkdk.png
abbrlink: c3e13e67
date: 2021-05-18 14:50:30
---

{% note red no-icon %}
单纯供国内用户用，不建议使用。
{% endnote %}

CloudFlare 是一家美国的跨国科技企业，总部位于旧金山，在英国伦敦也设有办事处。CloudFlare 以向客户提供网站安全管理、性能优化及相关的技术支持为主要业务。通过基于反向代理的内容传递网络及分布式域名解析服务，CloudFlare 可以帮助受保护站点抵御包括拒绝服务攻击在内的大多数网络攻击，确保该网站长期在线，同时提升网站的性能、访问速度以改善访客体验。


## 注册账号

[官网地址](https://www.cloudflare.com)

## 添加网站

注册网站后，添加域名，注意添加域名不带 www 的域名。

## 添加 DNS 记录

添加域名完成后会自动扫描，解析的所有域名 DNS 记录，等待扫描完成即可。

## 选择加速站点

扫描完成后可以选择要加速的站点，点击后面的黄色云朵进行切换。也可以自定义添加要加速的域名。

## 更换 DNS 服务器

前往域名服务商更改 DNS 服务器。

![更改DNS服务器](https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog/da9c07a860b0430f96b6bae928cf698a.5igd7v70ang0.png)

修改完成后，点击继续开启一些配置后，出现下图表示配置成功。

![CloudFlare配置](https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog/1bab8ac4d5454c0384ef801219874d95.2qyn265t6ce0.png)

国外用户访问国内网站不会变卡了！

## 参考文献

[《 CloudFlare 》 - 知乎](https://www.zhihu.com/topic/19579622/intro)

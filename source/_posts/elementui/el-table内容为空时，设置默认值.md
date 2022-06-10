---
title: el-table内容为空时，设置默认值
tags: element
categories: Element-UI
keywords: 'element,el-table'
description: el-table内容为空时，设置默认值
cover: >-
  https://fastly.jsdelivr.net/gh/realwds/cdn@master/blog-cover/srchttpresource.560ctr5lvlk0.png
abbrlink: a0938b6b
date: 2022-06-10 14:43:29
---

## 方法一：通过css设置

``` css
/deep/.el-table {
  .cell:empty::before {
    content: "---";
    color: #ccc;
  }
  .is-leaf {
    .cell:empty::before {
      content: "---";
      color: #ccc;
    }
  }
}
```

## 方法二：过滤

在 `el-table-column` 里使用 `:formatter`

``` html
<el-table-column
  prop="caseTypeNames"
  label="类型"
  :formatter="caseTypeNamesFormat"
>
</el-table-column>
```

``` js
// 类型格式化
caseTypeNamesFormat (row) {
  let showProp = null
  row.caseTypeNames ? showProp = row.caseTypeNames : showProp = '---'
  return showProp
},
```

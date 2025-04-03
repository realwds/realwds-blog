/**
 * Butterfly
 * Related Posts
 * According the tag
 */

'use strict'

hexo.extend.helper.register('related_posts', function (currentPost, allPosts) {
  let relatedPosts = []
  currentPost.tags.forEach(function (tag) {
    allPosts.forEach(function (post) {
      if (isTagRelated(tag.name, post.tags)) {
        const relatedPost = {
          title: post.title,
          path: post.path,
          cover: post.cover,
          randomcover: post.randomcover,
          weight: 1,
          updated: post.updated,
          created: post.date,
          cate: post.categories.data[0].name,
          cateurl: post.categories.data[0].path
        }
        const index = findItem(relatedPosts, 'path', post.path)
        if (index !== -1) {
          relatedPosts[index].weight += 1
        } else {
          if (currentPost.path !== post.path) {
            relatedPosts.push(relatedPost)
          }
        }
      }
    })
  })
  if (relatedPosts.length === 0) {
    return ''
  }
  let result = ''
  const hexoConfig = hexo.config
  const config = hexo.theme.config

  const limitNum = config.related_post.limit || 6
  const dateType = config.related_post.date_type || 'created'
  const headlineLang = this._p('post.recommend')
  const lazySrc = config.lazyload.enable ? 'data-lazy-src' : 'src'

  relatedPosts = relatedPosts.sort(compare('weight'))

  if (relatedPosts.length > 0) {
    result += '<div class="relatedPosts">'
    result +=
      '<div class="headline"><i class="fas fa-thumbs-up fa-fw"></i><span>' +
      ' ' +
      headlineLang +
      '</span></div>'
    result += '<div class="relatedPosts-list">'

    for (let i = 0; i < Math.min(relatedPosts.length, limitNum); i++) {
      const cover =
        relatedPosts[i].cover === false
          ? relatedPosts[i].randomcover
          : relatedPosts[i].cover
      result +=
        '<div class="post grid"><div class="grid-img"><a href="' +
        hexoConfig.root +
        relatedPosts[i].path +
        '" title="' +
        relatedPosts[i].title +
        '">'
      result +=
        '<img class="cover" ' +
        lazySrc +
        '="' +
        this.url_for(cover) +
        '" alt="cover"></a></div><a class="grid-cat" href="/'+relatedPosts[i].cateurl+'">'+relatedPosts[i].cate+'</a>'
        
      result +=
        '<div class="grid-title"><a href="' +
        hexoConfig.root +
        relatedPosts[i].path +
        '" title="' +
        relatedPosts[i].title +
        '">' + relatedPosts[i].title + '</a></div><div class="grid-meta">'

      if (dateType === 'created') {
        result +=
          '<span class="times"><i class="far fa-calendar-alt fa-fw"></i>' +
          ' ' +
          this.date(relatedPosts[i].created, hexoConfig.date_format) +
          '</span>'
      } else {
        result +=
          '<span class="times"><i class="fas fa-history fa-fw"></i>' +
          ' ' +
          this.date(relatedPosts[i].updated, hexoConfig.date_format) +
          '</span>'
      }
        
      result += '</div></div>'

    }

    result += '</div></div>'
    return result
  }
})

function isTagRelated (tagName, TBDtags) {
  let result = false
  TBDtags.forEach(function (tag) {
    if (tagName === tag.name) {
      result = true
    }
  })
  return result
}

function findItem (arrayToSearch, attr, val) {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][attr] === val) {
      return i
    }
  }
  return -1
}

function compare (attr) {
  return function (a, b) {
    const val1 = a[attr]
    const val2 = b[attr]
    return val2 - val1
  }
}

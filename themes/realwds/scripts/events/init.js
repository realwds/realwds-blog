hexo.extend.filter.register('before_generate', () => {
  // Get first two digits of the Hexo version number
  var hexoVer = hexo.version.replace(/(^.*\..*)\..*/, '$1')

  if (hexoVer < 5) {
    hexo.log.error('Please update Hexo to V5.0.0 or higher!')
    hexo.log.error('請把 Hexo 升級到 V5.0.0 或更高的版本！')
    process.exit(-1)
  }

  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    if (data && data.butterfly) {
      hexo.log.error(" 'butterfly.yml' is deprecated. Please use '_config.butterfly.yml' ")
      hexo.log.error(" 'butterfly.yml' 已經棄用，請使用 '_config.butterfly.yml' ")
      process.exit(-1)
    }
  }

  // let stylus to get the hexo highlight config
  const themeConfig = hexo.theme.config
  const hexoConfig = hexo.config
  themeConfig.highlight_settings = hexoConfig.highlight
  themeConfig.prismjs_settings = hexoConfig.prismjs
})

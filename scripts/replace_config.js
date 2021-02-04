/**
 * hexo-theme-MengD(萌典)-config
 * author: Lete114
 */
'use strict'

// 主题配置
hexo.on('generateBefore', function () {
  var config = hexo.config;
  var theme = hexo.theme.config;

  /* 默认自动css压缩 */
  config.stylus={compress:theme.minify.css};

  /* 首页显示的文章数 */
  config.index_generator.per_page = theme.page_count;

  /* 本地搜索设置 */
  config.search = theme.search;

  /* 资源压缩 */
  config.minify=theme.minify;
})
/* 清除页面注释 */
hexo.extend.filter.register('after_render:html', function(str, data){
  var result = str.replace(/<!--(.*?)-->/g,"");
  result = result.replace(/("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g,function(word) { 
    return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? "" : word;
  });
  return result;
});
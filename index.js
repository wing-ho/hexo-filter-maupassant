'use strict'
const cheerio = require('cheerio');
function adapter(str){
  let $= cheerio.load(str,{
    ignoreWhitespace: false,
    xmlMode: false,
    lowerCaseTags: false,
    decodeEntities: false
  });
  console.log("hello world")
  let toc = $("#table-of-contents").attr("id","toc").addClass("toc-article");
  let title = $("#toc").children("h2")
  title.replaceWith($('<div class="toc-title">'+title.html()+'</div>'));

  (function(parent,level){
    if(parent.length == 0)return;
    var sub = parent.children("li");
    sub.addClass("toc-item toc-level-"+level).children("a").addClass("toc-link toc-text");
    arguments.callee(sub.children("ul,ol").addClass("toc-child"),level+1);
  })($("#text-table-of-contents",toc).children("ul,ol").addClass("toc"),2);
  toc.insertBefore(".post-content").wrap('<div class="clear"></div>')
  return $.html();
}

hexo.extend.filter.register('after_render:html', function(str,data){
  console.log("hello world");
  return str;
});

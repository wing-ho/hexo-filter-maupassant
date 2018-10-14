const cheerio = require('cheerio');
function adapter(str){
  let $= cheerio.load(str,{
    ignoreWhitespace: false,
    xmlMode: false,
    lowerCaseTags: false,
    decodeEntities: false
  });
  //修改org-mode生成的table-of-contents的dom以适配maupassant主题
  let toc = $("#table-of-contents").attr("id","toc").addClass("toc-article").wrap('<div class="clear"></div>');
  let title = $("#toc").children("h2")
  title.replaceWith($('<div class="toc-title">'+title.html()+'</div>'));

  (function(parent,level){
    if(parent.length == 0)return;
    var sub = parent.children("li");
    sub.addClass("toc-item toc-level-"+level).children("a").addClass("toc-link toc-text");
    arguments.callee(sub.children("ul,ol").addClass("toc-child"),level+1);
  })($("#text-table-of-contents").children("ul,ol").addClass("toc"),2);
  //修改图片或表格的标题的class
  $(".figure").attr("class","caption");
  return $.html();
}

hexo.extend.filter.register('after_render:html', adapter);

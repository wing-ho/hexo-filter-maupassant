# Hexo插件
用于适配[maupassant-hexo主题](https://github.com/tufu9441/maupassant-hexo)

修改org-mode生成的HTML标签以适配主题的样式定义
1. 解决table-of-contents无样式
2. 解决图片或者表格的标题不居中

安装方法：
```shell
sed '/hexo-renderer-org/i\    "hexo-filter-maupassant": "git+https://github.com/wing-ho/hexo-filter-maupassant.git#master",' -i package.json
npm install
```

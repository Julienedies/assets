#前端开发环境说明
================================

##使用grunt（基于nodeJs）做为项目构建工具。

1：请在本机安装nodeJs；
2：然后通过命令行运行 npm install grunt-cli -g 命令，安装grunt命令行接口；之后即可在命令行下使用grunt；
3：运行 npm install 命令安装项目构建依赖的npm包；
4：以后开发时只要在gruntfile.js文件所在目录运行grunt watch命令，grunt会自动进行相关构建任务；


##根据需要修改config.json,此文件主要配置构建任务。

example:
{
    "js/index/index.js": ["src/common/abs.js", "src/index/init.js"]
}

上面的示例表示src/common/abs.js或src/index/init.js发生改变，会在js目录下生成index/index.js和index/index.min.js文件；
js/index/index.js由src/common/abs.js和src/index/init.js合并而成；
js/index/index.min.js由js/index/index.js压缩生成；


##目录结构
js/libs用于放置第三方类库或框架或组件；
js/common用于放置自定义通用js；

src目录为js开发目录，不要手动修改js目录下的文件；
通常为每个页面建立单独的目录。
譬如，index页面建立index目录；话题列表建立topics目录；单个话题建立topic目录；
index目录下放置index页面相关js，相关模板文件，相关测试文件等；
如果页面复杂可能需要按照功能及类型对js进行拆分；
可能的js文件类型通常是工具函数、页面相关模型、UI组件、控制器（衔接UI和模型，实现某个特定功能）、纯Json等等；
公共部分可以提取到common目录，该目录用于放置自定义公共部分；


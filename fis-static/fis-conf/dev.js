/**
 * Created by julien.zhang on 2014/10/10.
 */

//开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');


//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用
//fis.config.set('pack', {
//    'pkg/lib.before.js': [
//        '/js/vender/modernizr-2.6.2.min.js'
//    ],
//    'pkg/lib.after.js': [
//        '/js/vender/underscore-1.6.0.min.js',
//        '/js/vender/jquery-1.10.2.min.js',
//        '/js/vender/plugins.js']
//});

//开启simple对零散资源的自动合并
//fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.config.set('project.include', /^\/(?:templates|js|css|img)\/.*$/i);

//fis.config.set('project.exclude', /^\/(?:bower_components\/.*|fis-conf\.js|node-fis\.cmd|package\.json|readme\.md)$/i);

//静态资源文件域名设置
fis.config.merge({
    roadmap : {
        domain : 'http://127.0.0.1:3000'
    }
});
/*fis.config.merge({
    roadmap : {
        domain : {
            //widget目录下的所有css文件使用 http://css1.example.com 作为域名
            'widget*//**.css' : 'http://css1.example.com',
            //所有的js文件使用 http://js1.example.com 或者  http://js2.example.com 作为域名
            '**.js' : ['http://js1.example.com', 'http://js2.example.com']
        }
    }
});*/


fis.config.set('roadmap.path', [
    {
        reg: /^\/css\/.+\.css/i,
        release: '/assets$&',
        url: '/assets$&',
        useDomain:true,
        useSprite: true,
        useHash: true
    },
    {
        reg: /^\/img\/.+/i,
        release: '/assets$&',
        url: '/assets$&',
        useDomain:false
    },
    {
        reg: /^\/js\/.+\.js/i,
        release: '/assets$&',
        url: '/assets$&',
        useDomain:true,
        isJsLike: true,
        useHash: true
    },
    {
        reg: /^\/templates\/(.+\.html)/i,
        release: '/view/$1',
        useSprite: true,
        isHtmlLike: true
    },
    {
        reg: '**.js',
        release: '/assets/js$&',
        url: '/assets/js$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /.*(?:include|src|demo)\/.+\.css/i,
        release: '/assets/css$&',
        url: '/assets/css$&',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /.*\/(.+\.css)/i,
        release: '/assets/css/$1',
        url: '/assets/css/$1',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: '**.css',
        release: '/assets/css$&',
        url: '/assets/css$&',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /\/templates\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/img/$1',
        url: '/assets/img/$1'
    },
    {
        reg: /.*\.(?:jpg|png|gif)/i,
        release: '/assets/img$&',
        url: '/assets/img$&',
        useHash: true
    }
]);


//fis.config.set('settings.spriter.csssprites.margin', 10);
//fis.config.set('settings.spriter.csssprites.layout', 'matrix');
fis.config.set('settings.spriter.csssprites', {
    //图之间的边距
    margin: 10,
    //使用矩阵排列方式，默认为线性`linear`
    layout: 'matrix',
    //开启模板内联css处理,默认关闭
    htmlUseSprite: true,
    //默认针对html原生<style></style>标签内的内容处理。
    //用户可以通过配置styleTag来扩展要识别的css片段
    //以下是默认<style></style>标签的匹配正则
    styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig

    //**styleReg规则**
    //1. 默认不配置styleReg，仅支持html中默认style标签中的css内容
    //2. 配置styleReg时候，仅支持styleReg匹配到的内容。
    //3. styleReg正则必须捕获三个分组，
    //     $1为：开始标签（start tag），
    //     $2为：内容(content) ,
    //     $3为：结束标签(end tag)
});



//使用fis release --dest local来使用这个配置
fis.config.merge({
    deploy : {
        local : {
            to : './express/static'
        }
    }
});
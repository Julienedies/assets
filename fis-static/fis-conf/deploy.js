/**
 * Created by julien.zhang on 2014/10/10.
 */

var _domains_ = '{#$assets_url#}';

//开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');


//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用
fis.config.merge({
    pack: {
        '/js/pkg/lib.before.js': [
            '/js/vendor/modernizr-2.6.2.min.js'
        ],
        '/js/pkg/lib.after.js': [
            '/js/vendor/underscore-1.6.0.min.js',
            '/js/vendor/jquery/jquery-1.10.2.min.js',
            '/js/vendor/plugins.js'],
        '/js/pkg/brick.js': ['/js/brick/brick.js'],
        '/js/pkg/common.js' : ['/js/common/lang.js', '/js/common/common.js'],
        '/css/pkg/lib.css': [
            '/css/vendor/normalize.css',
            '/css/vendor/main.css',
            '/css/vendor/animations.css'
        ]
    }
});


fis.config.set('project.include', /^\/(?:templates|js|css|img)\/.*$/i);

//静态资源文件域名设置
fis.config.merge({
    roadmap : {
        domain : '{#$assets_url#}'
    }
});

fis.config.set('roadmap.path', [
    //css目录下css文件
    {
        reg: /^\/css\/.+\.css/i,
        release: '/assets/vcn$&',
        url: '$&',
        useDomain:true,
        useSprite: true,
        useHash: true
    },
    {
        reg: /^\/img\/.+\.ico/i,
        release: '/assets/vcn$&',
        url: '$&',
        useDomain:true
    },
    //pic目录下图片,pic目录用于放置img标签图片
    {
        reg: /^\/(?:img|templates)\/((?:[\w_-]+\/)*pic\/.+)$/i,
        release: '/assets/vcn/img/$1',
        url: '/img/$1',
        useDomain:true,
        useHash: true
    },
    //img目录下背景图片
    {
        reg: /^\/img\/.+/i,
        release: '/assets/vcn$&',
        url: '/vcn$&',
        useDomain:false,
        useHash: true
    },
    //js目录下js文件
    {
        reg: /^\/js\/.+\.js/i,
        release: '/assets/vcn$&',
        url: '$&',
        useDomain:true,
        isJsLike: true,
        useHash: true
    },
    //登录注册页面
    {
        reg: /^\/templates\/(user\/(?:login|sign_up|reset_password).+\.html)/i,
        release: '/newaccount/application/templates/vcn/$1',
        useSprite: true,
        isHtmlLike: true
    },
    {
        reg: /^\/templates\/(.+\.html)/i,
        release: '/newwww/application/templates/vcn/newwebsite/$1',
        useSprite: true,
        isHtmlLike: true
    },
    {
        reg: '**.js',
        release: '/assets/vcn/js$&',
        url: '/js$&',
        useDomain:true,
        isJsLike: true,
        useHash: true
    },
    {
        reg: /.*(?:include|src|demo)\/.+\.css/i,
        release: '/assets/vcn/css$&',
        url: '/css$&',
        useDomain:true,
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /.*\/(.+\.css)/i,
        release: '/assets/vcn/css/$1',
        url: '/css/$1',
        useDomain:true,
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    //任何_开头的img文件
    {
        reg: /^\/.*\/(_[-_\w]+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/img/$1',
        url: '/vcn/img/$1',
        useDomain:false
    },
    //css目录里的sprite图片
    {
        reg: /^\/css\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/img/$1',
        url:'/vcn/img/$1',
        useDomain:false,
        useHash: true
    },
    //template目录下图片
    {
        reg: /\/templates\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/img/$1',
        url: '/img/$1',
        useDomain:true,
        useHash: true
    },
    {
        reg: /.*\.(?:jpg|png|gif)/i,
        release: '/assets/vcn/img$&',
        url: '/img$&',
        useDomain:true,
        useHash: true
    }
]);

//背景图片sprite设置
fis.config.set('settings.spriter.csssprites.margin', 10);
fis.config.set('settings.spriter.csssprites.layout', 'matrix');
fis.config.set('settings.spriter.csssprites.htmlUseSprite', true);
fis.config.set('settings.spriter.csssprites.styleReg', /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig);


//使用fis release --dest remote来使用这个配置
fis.config.merge({
    deploy : {
        remote : {
            to : '../',
            exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)|(?:\/.+\.md)/i
        }
    }
});
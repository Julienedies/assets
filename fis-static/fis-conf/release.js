/**
 * Created by julien.zhang on 2014/10/10.
 */

var _domains_ = '{#$assets_url#}';

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


fis.config.set('roadmap.path', [
    {
        reg: /^\/css\/.+\.css/i,
        release: '/assets/vcn/csf$&',
        url: _domains_ + '/csf$&',
        useSprite: true,
        useHash: true
    },
    {
        reg: /^\/img\/.+/i,
        release: '/assets/vcn/csf$&',
        url: '/vcn/csf$&',
        useHash: true
    },
    {
        reg: /^\/js\/.+\.js/i,
        release: '/assets/vcn/csf$&',
        url: _domains_ + '/csf$&',
        isJsLike: true,
        useHash: true
    },
    /* 临时使用,手机注册页面 */
    {
        reg: /^\/templates\/old\/(.+\.html)/i,
        release: '/account/application/templates/vcn/user/$1',
        isHtmlLike: true
    },
    {
        reg: /^\/templates\/newwebsite\/(user\/.+\.html)/i,
        release: '/newaccount/application/templates/vcn/$1',
        isHtmlLike: true
    },
    {
        reg: /^\/templates\/(.+\.html)/i,
        release: '/newwww/application/templates/vcn/$1',
        isHtmlLike: true
    },
    {
        reg: '**.js',
        release: '/assets/vcn/csf/js$&',
        url: _domains_ + '/csf/js$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /.*(?:include|src|demo)\/.+\.css/i,
        release: '/assets/vcn/csf/css$&',
        url: _domains_ + '/csf/css$&',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /.*\/(.+\.css)/i,
        release: '/assets/vcn/csf/css/$1',
        url: _domains_ + '/csf/css/$1',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /^\/.*\/(_[-_\w]+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/csf/img/$1',
        url: '/vcn/csf/img/$1'
    },
    //处理css目录里的sprite图片
    {
        reg: /^\/css\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/csf/img/$1',
        url:'/vcn/csf/img/$1',
        useHash: true
    },
    {
        reg: /\/templates\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/vcn/csf/img/$1',
        url: _domains_ + '/csf/img/$1',
        useHash: true
    },
    {
        reg: /.*\.(?:jpg|png|gif)/i,
        release: '/assets/vcn/csf/img$&',
        url: _domains_ + '/csf/img$&',
        useHash: true
    }
]);


fis.config.set('settings.spriter.csssprites.margin', 10);
fis.config.set('settings.spriter.csssprites.layout', 'matrix');


//使用fis release --dest remote来使用这个配置
fis.config.merge({
    deploy : {
        remote : {
            to : '../',
            exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)/i
        },

        newaccount : {
            to : '../newaccount/',
            exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)/i
        }
    }
});
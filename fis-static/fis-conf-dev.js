//开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');


//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用

//开启pack人工干预
fis.config.set('pack', {
    'pkg/lib.js': [
        '/lib/mod.js',
        '/modules/underscore/**.js',
        '/modules/backbone/**.js',
        '/modules/jquery/**.js',
        '/modules/vendor/**.js',
        '/modules/common/**.js'
    ]
});

//开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.config.set('project.include', /^\/(?:templates|js|css|img)\/.*$/i);
//fis.config.set('project.exclude', /^\/(?:bower_components\/.*|fis-conf\.js|node-fis\.cmd|package\.json|readme\.md)$/i);

fis.config.set('roadmap.domain', {

//    '**.jpg': 'http://my.assets.chinascope.net',
//    '**.png': 'http://my.assets.chinascope.net',
//    '**.gif': 'http://my.assets.chinascope.net'
//    'image': 'http://my.assets.chinascope.net'
    '**.css': 'http://my.assets.chinascope.net',
    '**.js': 'http://my.assets.chinascope.net'
});

fis.config.set('roadmap.path', [
    {
        reg: /^\/css\/(.*)\.css$/i,
        useSprite: true,
        release: '/assets/csf$&',
        url: '/csf$&',
        useHash: true
    },
    {
        reg: /^\/css.*\/(.+\.(?:jpg|png|gif))$/i,
        release: '/assets/csf/img/sprite/$1',
        url: '/csf/img/sprite/$1'
    },
    {
        reg: /^\/img\/.*/i,
        release: '/assets/csf$&',
        url: '/csf$&'
    },
    {
        reg: /^\/js\/(.*)\.js$/i,
        release: '/assets/csf$&',
        url: '/csf$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /^\/templates\/(.*\.html)$/i,
        isHtmlLike: true,
        release: '/newwww/application/templates/vcn/$1'
    },
    {
        reg: '**.js',
        release: '/assets/csf/js$&',
        url: '/csf/js$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: '**.css',
        release: '/assets/csf/css$&',
        url: '/csf/css$&',
        isCssLike: true,
        useHash: true
    },
    {
        reg: /.*\.(?:jpg|png|gif)$/i,
        release: '/assets/csf/img$&',
        url: '/csf/img$&',
        isCssLike: true,
        useHash: true
    }
]);

fis.config.set('settings.spriter.csssprites.margin', 10);
fis.config.set('settings.spriter.csssprites.layout', 'matrix');

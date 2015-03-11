/**
 * Created by julien.zhang on 2014/7/4.
 */

function etApp($, angular, etConfig, _etapp){

    $(function(){

        setTimeout(function() {
            var h = $('#top').height() + $('footer').height();
                h = $(document).height() - h + 20;
            $('#main').css({'min-height':h+'px'});
            $('footer').css('visibility', 'visible');
        }, 1000);

    });

    var etApp = _etapp || angular.module('etApp', ['ngRoute', 'ngSanitize', 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);

    ////////////////////////////////////////////////////////////////////
    //services
    ////////////////////////////////////////////////////////////////////

    var etServices = angular.module('etServices', []);

    // 全局配置对象
    etServices.factory('etConfig',['$rootScope', _etConfig]);

    // 消息提示UI
    etServices.factory('prompt',['$rootScope', prompt]);

    // 用户管理器
    etServices.factory('userManager',['$rootScope', '$q', '$http', userManager]);

    // 微话题管理器
    etServices.factory('topicManager',['$rootScope', '$q', '$http', topicManager]);

    // follow管理器
    etServices.factory('followManager',['$http','etConfig', followManager]);

    ////////////////////////////////////////////////////////////////////
    //controllers
    ////////////////////////////////////////////////////////////////////

    var etControllers = angular.module('etControllers', []);

    // 全局控制器
    etControllers.controller('mainCtrl',['$scope','$http', '$location','userManager', 'topicManager', mainCtrl]);

    // 登录控制器
    etControllers.controller('loginCtrl', ['$scope','$http', loginCtrl]);

    // 注册控制器
    etControllers.controller('regCtrl', ['$scope', '$location', '$http', regCtrl]);

    // 发表微话题控制器
    etControllers.controller('newTopicCtrl', ['$scope', '$http', 'prompt', newTopicCtrl]);

    //回享收益show控制器
    etControllers.controller('enjoyerShowCtrl', ['$scope', '$http','$interval','$timeout', enjoyerShowCtrl]);

    // 企业阶段标签控制器
    etControllers.controller('phasesTagCtrl', ['$scope', 'topicManager', phasesTagCtrl]);

    // 消息通知控制器
    etControllers.controller('notifyCtrl', ['$scope','$http','etConfig', notifyCtrl]);

    // 微话题排行榜控制器
    etControllers.controller('topTopicCtrl', ['$scope', '$http', topTopicCtrl]);

    ////////////////////////////////////////////////////////////////////
    //directives
    ////////////////////////////////////////////////////////////////////

    var etDirectives = angular.module('etDirectives', []);

    // 上传头像
    etDirectives.directive('etUpload', ['$http', upload]);

    // 监听回车键按下
    etDirectives.directive('etEnterPress', enterPress);

    // 返回页面顶部
    etDirectives.directive('returnTop', ['$compile', returnTop]);

    // 标签球
    //etDirectives.directive('etTagBall',[tagBall]);

    // fixed定位
    //etDirectives.directive('etFixed',[fixed]);

    // 滚动fixed定位
    //etDirectives.directive('scrollFixed',[scrollFixed]);

    // 封装富文本编辑器
    etDirectives.directive('reditor',[reditor]);

    // 信息滚动
    etDirectives.directive('roll',[roll]);

    // 刮刮卡
    etDirectives.directive('scratchCard', ['$http', scratchCard]);

    //////////////////////////////////////////////////////////////////////
    // filters
    //////////////////////////////////////////////////////////////////////

    var etFilters = angular.module('etFilters', []);

    // 对日期进行格式化
    etFilters.filter('dateFormat', dateFormat);


    // 为输入添加前缀
    etFilters.filter('prefix', prefix);

    // 生成摘要
    etFilters.filter('userIcon', userIcon);

    // 生成摘要
    //etFilters.filter('summary', summary);

    // 避免angular对html过滤
    etFilters.filter('unsafe', ['$sce', function($sce)
    {
        return function(val)
        {
            return $sce.trustAsHtml(val);
        };
    }]);




    ////////////////////////////////////////////////////////////////////
    // animations
    //////////////////////////////////////////////////////////////////////

    var etAnimations = angular.module('etAnimations', ['ngAnimate']);







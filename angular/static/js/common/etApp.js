/** 
 * et - v0.1.1 
 * modified: 2014-08-11 16:00:09
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







function enjoyerShowCtrl($scope, $http, $interval, $timeout){

    $scope.profits = [];

    function fn(){

        $http({method: 'GET', url:etConfig.ajaxApi.enjoyerShow})
            .then(function(response){

                angular.forEach(response.data, function(val, key){
                    this.push(val);
                }, $scope.profits);

               $timeout(function(){$scope.bg = 'yellow';},200);

            }, function(res){
                //console.log(res.data.msg);
            });
    }

    fn();
    //$interval(fn, 9600);

}
function loginCtrl($scope, $http){

    $scope.user = {};

    $scope.submit = function(){

        $http({method: 'post', url: etConfig.ajaxApi.login, data: $scope.user})
            .success(function(data, status, headers, config) {
                //$scope.msg = 'ok';
                $scope.$emit('loginOk', {});
            })
            .error(function(data, status, headers, config) {
                $scope.msg = data.msg;
            });

    };

}

function mainCtrl($scope, $http, $location, userManager){

    function getNotify(){
        $http.get(etConfig.ajaxApi.notify)
            .then(function(res){

                $scope.msgNum = res.data.num;

            },function(res){

            });

    }

    function getUser(){
        userManager.getUser().then(function(user){
            $scope.user = user;
            if(user.id){
                getNotify();
            }
        });
    }


    $scope.logout = function(){
        userManager.logout().then(function(res){
        },function(err){
        });
        $scope.user = {};
    };

    $scope.toggleLoginBox = function(){
        $scope.showMenu = false;
        $scope.showReg = false;
        $scope.showNewTopic = false;
        $scope.alert = $scope.showLogin = !$scope.showLogin;
    }

    $scope.toggleRegBox = function(){
        $scope.showMenu = false;
        $scope.showLogin = false;
        $scope.showNewTopic = false;
        $scope.alert = $scope.showReg = !$scope.showReg;
    }

    $scope.toggleNewTopicBox = function () {

        userManager.getUser().then(function (user) {
            if(!user.id) return $scope.toggleLoginBox();
            $scope.showMenu = false;
            $scope.showLogin = false;
            $scope.showReg = false;

            if($scope.alert = $scope.showNewTopic = !$scope.showNewTopic){

            }else{
                $scope.$broadcast('closeNewTopic',{});
            }
        }, function (data) {
            $scope.toggleLoginBox();
        });

    };

    $scope.toggleMenuBox = function(){
        $scope.showLogin = false;
        $scope.showReg = false;
        $scope.showNewTopic = false;
        $scope.showMenu = !$scope.showMenu;
    }

    /////////////////////////////////////

    $scope.$on('topic:edit:end', function(e, msg){
        $scope.$broadcast('topic:edit:end:broadcast', msg);
    });

    $scope.$on('loginOk', function(e, msg){
        $scope.alert = $scope.showLogin = false;
        getUser();
        $scope.$broadcast('logined', {});
    });

    $scope.$on('regOk', function(e, msg){
        $scope.alert = $scope.showReg = false;
        getUser();
    });


    ////////////////////////////////

    getUser();



}
function newTopicCtrl($scope, $http, prompt){

    $scope.topic = {};
    $scope.msg = '';


    $http.get(etConfig.ajaxApi.cats).success(function(data, status, headers, config){
        $scope.cats = data;
    });

    $scope.selectTopicType = function(type){
        $scope.topic.type = type;
    };

    $scope.submit = function () {

            $http({method: 'post', url: etConfig.ajaxApi.topic, data: $scope.topic})
                .success(function (data, status, headers, config) {
                    $scope.msg = 'ok';
                    $scope.topic = {};
                    $scope.toggleNewTopicBox();
                    prompt.alert('微话题发表成功!');
                })
                .error(function (data, status, headers, config) {
                    alert(data.msg);
                });

    };

    ///////////////////////////////////////////////////////////////////////////

    $scope.$on('closeNewTopic', function(e, msg){
        $scope.topic = {};
    });

}

function notifyCtrl($scope, $http, etConfig){

    $http.get(etConfig.ajaxApi.notify+'?list=true')
        .then(function(res){

            $scope.msgNum = res.data.num;
            $scope.list = res.data.list;

        },function(res){

            alert('error:' + typeof res.data === 'object' ? res.data.msg: res.data);
        });


}
function phasesTagCtrl($scope, topicManager) {

    $scope.init = function (catId) {
        $scope.catId = catId;
    }

    topicManager.getCatList().then(function (data) {

        var _find = function(node, root){

            var id = typeof node === 'object' ? node.id : node;
            var _r;
            var _i;
            var b = (function f(tree){
                _r = tree;
                var node;

                for(var i=0; i<tree.length; i++){
                    _i = i;

                    node = tree[i];

                    if(node.id == id){
                        return 1;
                    }

                }

                for(i = 0; i< tree.length; i++){

                    node = tree[i];
                    if(node.son){
                        if( f(node.son) ) return 1;
                    }

                }

            })(root);

            return b ? {place: _r, index: _i} : {place:[]};
        };


        var z = _find($scope.catId, data);

        var ob = z.place[z.index];
        var pid = ob ? ob.parent_id*1 : null;

        if (pid !== null) {
          $scope.pid = pid || $scope.catId;

          for(var i in data){
              if(data[i].id === $scope.pid*1){
                  $scope.children = data[i].son;
              }
          }

          $scope.phases = data;
        }

    }, function (res) {
        //alert(res.data.msg);
    });


}

function regCtrl($scope,  $location, $http){

    var query = $location.search();

    var _user = $scope.user = {};
    if(query.invite){
        _user.invite = query.invite;
    }

    $scope.uploadConf = {url: etConfig.ajaxApi.uploadPortrait, success: function (data) {
        $scope.$apply(function(){
            $scope.user.portrait_id = data.portrait_id;
            $scope.previewSrc = data.portrait;
        });
    }, error: function (msg) {
        alert(msg);
    }};



    $scope.submit = function(){

        $http({method: 'post', url: etConfig.ajaxApi.register, data: $scope.user})
            .success(function(data, status, headers, config) {
                $scope.stat = 'ok';
                $scope.$emit('regOk', {});
            })
            .error(function(data, status, headers, config) {
                $scope.stat = 'error';
                $scope.msg = data.msg;
            });

    };

}
function topTopicCtrl($scope, $http){

    $scope.top = [];

    $http({method: 'GET', url:etConfig.ajaxApi.topTopic})
        .success(function(data){

            $scope.top = data;

        })
        .error(function(data){
        });

}

function _etConfig($rootScope){

    return {

        ajaxApi:{

            user:  '/api/user/me',

            userDetail: '/api/user/info/detail',
            userMeDetail: '/api/user/me/detail',

            //用户收益
            userIncome: '/api/user/income',
            // 用户通知
            notify: '/api/user/notif',
            //

            // 工作经历
            userWorkEx: '/api/user/companies',
            // 教育经历
            userEduEx: '/api/user/schools',

            // 社交
            follow: '/api/user/follow',
            followNum: '/api/user/follow/nums',
            follows: '/api/user/follow/users',


            login:  '/api/user/login',
            logout:  '/api/user/logout',
            register: '/api/user/register',

            suggest:  '/api/user/suggest',

            uploadPortrait:  '/api/user/portrait/upload',

            // 首页
            catsOverview:  '/api/cat/overview',
            catList: '/api/cat/list',

            cats:  '/api/cats',
            topics:  '/api/topics',

            topic:  '/api/topic',
            topicUp:  '/api/topic/up',
            topicDown:  '/api/topic/down',

            topicRel: '/api/topic/related',

            topicReplyUp:  '/api/topic/reply/up',
            topicReplyDown:  '/api/topic/reply/down',

            topicReplyCommentUp:  '/api/topic/reply/comment/up',
            topicReplyCommentDown:  '/api/topic/reply/comment/down',

            topicReplies:  '/api/topic/replies',

            topicReply:  '/api/topic/reply',
            topicReplyEdit: '/api/topic/reply',


            topicReplyComments:  '/api/topic/reply/comments',

            topicReplyComment:  '/api/topic/reply/comment',


            editorUpload: '/editor/php/upload_json.php',

            //收益显示列表
            enjoyerShow: '/api/user/enjoyer/topshow'

            //

        }


    };


}


/*
 //微话题图片上传（目前只支持微话题的图片）
 {
 url: "/editor/php/upload_json.php",
 req: "POST",
 arg: {
 FILE: {
 imgFile: FILE                          //input type=file name=imgFile
 }
 },
 ret: {
 error: 0/1,                                   //0成功, 1失败
 url: "http://www.25qr.com/...jpg",            //图片url
 message: ""                                   //失败原因
 }
 }
 */
function followManager($http, etConfig){

    return {

        follow: function(id){

            return $http({method:'put', url:etConfig.ajaxApi.follow, params:{uid:id}});

        },

        getFollowNum: function(id){

            return $http({method:'get', url:etConfig.ajaxApi.followNum, params:{uid:id}});

        },

        getFollow: function(p){

            return $http({method:'get',url:etConfig.ajaxApi.follows, params:p});

        }


    };

}
function prompt($rootScope){

    var dom;

    return {
        alert: function(str){
            dom = dom || $('<div class="prompt">@@@@@</div>').appendTo($('body'));
            dom.html('<div class="wrap">' + str + '</div>');
            dom.slideDown(500).delay(2000).slideUp(500);
        }
    };

}
function topicManager($rootScope, $q, $http){


    return {

        getCatList: function(){

           return $http.get(etConfig.ajaxApi.catList)
               .then(function(response){
                   return response.data;
               }, function(response){
                   return response;
               });
        },

        getTopic: function(id){

            $http({method: 'GET', url: etConfig.ajaxApi.topic, params:{tid:tid}}).
                success(function (data, status, headers, config) {

                    $scope.topic = data;

                })
                .error(function (data, status, headers, config) {

                });

        },

        create: function(topic){

        },

        edit: function(topic){

           return $http.put(etConfig.ajaxApi.topic, {cat:topic.cat,type:topic.type,tid:topic.id,tit:topic.tit,txt:topic.txt})
               .then(function(response){
                   return response;
               }, function(err){
                   return response;
               })

        },

        getTopicRel: function(id){

            return $http({method: 'GET', url:etConfig.ajaxApi.topicRel,params:{tid:id}})
                .then(function(response){
                    return response.data;
                }, function(response){
                    return response;
                });

        }

    };

}
function userManager($rootScope, $q, $http){

    var user = {};

    return {
        getUser: function(){

            if(user.id) {
                var deferred = $q.defer();
                deferred.resolve(user);
                return deferred.promise;
            }

            return $http.get(etConfig.ajaxApi.user).then(function(res) {

                user = res.data;
                return user;

            }, function(res) {

                return res;
            });
        },

        getUserDetail: function(id, isMe){

            var k = isMe ? 'userMeDetail':'userDetail';

            var p = !id ? {} : {uid:id};
            k = !id ? 'userMeDetail' : 'userDetail';

            return $http({method:'get',url:etConfig.ajaxApi[k],params:p}).then(function(res) {

                return res.data;

            }, function(res) {

                return res;
            });


        },


        logout: function(){
            if(!user.id) return;
            return $http.put(etConfig.ajaxApi.logout).then(function(res){
                user = {};
                return res;
            }, function(error){
                return error;
            });
        },

        // 添加教育经历
        addWorkEx: function(data){

            return $http.post(etConfig.ajaxApi.userWorkEx, data).then(function(res){

                return res;

            }, function(res){

                return res;

            });

        },

        // 添加教育经历
        addEduEx: function(data){

            return $http.post(etConfig.ajaxApi.userEduEx, data).then(function(res){

                return res;

            }, function(res){

                return res;

            });

        },

        //用户编辑个人资料
        edit: function(data){

            return $http.put(etConfig.ajaxApi.user, data).then(function(res){

                return res.data;

            }, function(res){

                return res.data;

            });

        },

        //获取用户回享收益
        getIncome: function(){

            return $http.get(etConfig.ajaxApi.userIncome).then(function(res) {

                return res.data;

            }, function(res) {
                alert(res.data.msg);
            });

        },

        //获取用户的微话题
        getTopics: function(page){

            return $http.get(etConfig.ajaxApi.userTopics+'?page='+(page||1)).then(function(res) {

                return res.data;

            }, function(res) {
                alert(res.data.msg);
            });

        },

        //获取用户的回复
        getReplies: function(page){

            return $http.get(etConfig.ajaxApi.userReplies+'?page='+(page||1)).then(function(res) {

                return res.data;

            }, function(res) {
                alert(res.data.msg);
            });

        }

    };

}

function dateFormat(){

    return function(input, format){

        var time = new Date();

        var b = input + '';
        b = b.length === 13;

        time.setTime(b ? input : input*1000);

        var date = {
            "M+": time.getMonth() + 1,
            "d+": time.getDate(),
            "h+": time.getHours(),
            "m+": time.getMinutes(),
            "s+": time.getSeconds(),
            "q+": Math.floor((time.getMonth() + 3) / 3),
            "S+": time.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };

}
function prefix(){

    return function(input, prefix){
        prefix = prefix || '';
        if(input){
            return prefix + input;
        }
    };

}
function summary(){

    return function(input, length){
        length = length || 96;

        if(input && input.length <= length){
            return input;
        }

        if(input){
            return input.substr(0, length) + '...';
        }
    };

}
function userIcon(){

    return function(input){

            return '/assets/vcn/img/user/type-' + input + '.png';

    };

}
function enterPress() {
    return {
        restrict : 'A',
        scope : {
            enterPress : '=etEnterPress'
        },
        link : function(scope, elm, attrs) {

            var fn = function(e){
                if(e.which == 13){
                    scope.enterPress();
                }
            };

            elm.focus(function(){
                elm.keypress(fn);
            });
            elm.blur(function(){
                elm.unbind('keypress',fn);
            });

        }
    };

}
function fixed() {
    return {
        restrict : 'A',
        scope : {
            etFixed : '@'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var win = $(window);
            var doc = $(document);
            var h = win.height();
            var p = JSON.parse(scope.etFixed);


            win.scroll(function(){
                var sh = doc.scrollTop();
                var css = {};
                for(var i in p){
                    css[i] = p[i]+sh;
                }
                elm.css(css);
            });

        }
    };
}
function reditor() {
    return {
        restrict : 'A',
        scope : {
            reditor : '=reditor'
        },
        link : function(scope, elm, attrs) {
            var _conf = {
                language: 'zh_cn',
                contentChangedCallback:function(){

                    var content = _elm.editable("getHTML")[0];

                    if(content === '<p><br></p>'){
                        content = '';
                    };
                    _elm.val(content);
                    _elm.trigger('change');
                    scope.$apply(function(){

                    });
                },
                autosave: true, // Enable autosave option. Enabling autosave helps preventing data loss.
                autosaveInterval: 100, // Time in milliseconds to define when the autosave should be triggered.
                saveURL: null, // Defines where to post the data when save is triggered. The editor will initialize a POST request to the specified URL passing the editor content in the body parameter of the HTTP request.
                blockTags: ["n", "p", "blockquote", "pre", "h4", "h5", "h6"], // Defines what tags list to format a paragraph and their order.
                borderColor: "", // Customize the appearance of the editor by changing the border color.
                buttons: ["bold", "italic", "underline", "strikeThrough", "fontSize", "color", "sep", "formatBlock", "align", "insertOrderedList", "insertUnorderedList", "outdent", "indent", "sep", "selectAll", "createLink", "insertImage", "undo", "redo"], // Defines the list of buttons that are available in the editor.
                crossDomain: false, // Make AJAX requests using CORS.
                direction: "ltr", // Sets the direction of the text.
                editorClass: "", // Set a custom class for the editor element.
                height: "auto", // Set a custom height for the editor element.
                imageMargin: 20, // Define a custom margin for image. It will be visible on the margin of the image when float left or right is active.
                imageErrorCallback: function(){console.log(JSON.stringify(arguments))},
                imageUploadParam: "imgFile", // Customize the name of the param that has the image file in the upload request.
                imageUploadURL: "/editor/php/upload_json.php",//etConfig.ajaxApi.editorUpload, // A custom URL where to save the uploaded image.
                inlineMode: false, // Enable or disable inline mode.
                placeholder: " ", // Set a custom placeholder to be used when the editor body is empty.
                shortcuts: true, // Enable shortcuts. The shortcuts are visible when you hover a button in the editor.
                spellcheck: false, // Enables spellcheck.
                typingTimer: 12250, // Time in milliseconds to define how long the typing pause may be without the change to be saved in the undo stack.
                minHeight: 120,
                width: "auto" // Set a custom width for the editor element.
            };


            var _elm = jQuery(elm[0]);

            var _reditor =  {};
            var conf = $.extend( {}, _conf, _reditor.conf || {});

            //console.log('#######', scope.reditor);

            _elm.editable(conf);

            _elm.editable("setHTML", _elm.val() || scope.reditor||'<p><br></p>', false);

        }
    };

}

function returnTop($compile) {
    return {
        restrict : 'A',
        link: function(scope, elm, attrs) {

            var $ = jQuery;
            var win = $(window);
            var vh = win.height()/2;
            var doc = $(document.body);
            var html = '<div class="pure-button pure-button-primary returnTop">top</div>';
            var topBth = $(html).appendTo($("body"))
                .click(function () {
                    doc.animate({
                        scrollTop: 0
                    }, 240);
                });

            //$compile(topBth[0])(scope);

            var fn = function () {
                var s = doc.scrollTop();

                (s > vh) ? topBth.fadeIn() : topBth.fadeOut();
            };

            var throttled = _.throttle(fn, 200);

            win.on("scroll", throttled);

        }
    };
}
function roll() {

    return {
        restrict : 'A',
        scope : {
            roll : '=roll'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var vh = elm.parent().height()+'px';

            function f(){

                var one = elm.children(':first');
                var sec = one.next();

                if(sec.length){

                    one.css('height',vh);
                    sec.css('height',vh);

                    $(elm).animate({
                        top:'-'+vh
                    },500,function(){
                       // one.remove();
                       // scope.roll.shift();
                        one.appendTo(elm);
                        elm.css({top:0});
                    })

                }
            }

            setInterval(f, 2800);

        }
    };
}
function scratchCard($http) {

    return {
        restrict : 'A',
        scope : {
        },
        link : function(scope, elm, attrs) {
            elm.html('<canvas id="scratch-card"></canvas>');
            var img = new Image();
            var w = 200;
            var h = 50;
            var offset;
            var done = false;
            var canvas = document.getElementById('scratch-card');
            var eventDown, eventUp, eventMove;
            canvas.parentNode.parentNode.style.mozUserSelect = 'none';
            canvas.parentNode.parentNode.style.webkitUserSelect = 'none';
            canvas.style.backgroundColor='transparent';
            canvas.style.position = 'absolute';
            img.addEventListener('load', function(e) {
                var ctx;
                var mousedown = false;
                function layer(ctx) {
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(0, 0, w, h);
                }
                eventDown = function (e) {
                    e.preventDefault();
                    mousedown=true;
                    offset = elm.offset();
                }
                eventUp = function (e) {
                    e.preventDefault();
                    mousedown=false;
                    var data=ctx.getImageData(20,0,w-40,h).data;
                    for(var i=0,j=0;i<data.length;i+=4) {
                      if(data[i] && data[i+1] && data[i+2] && data[i+3]) {
                        ++j;
                      }
                    }
                    if(!done && j<=(w-40)*h*0.6) { //alert('刮刮卡得声誉功能即将上线，敬请期待');
                      $http({method: 'post', url: etConfig.ajaxApi.scratchCardPrize})
                          .success(function(data, status, headers, config) {
                              if (data.stat == 1) {
                                canvas.removeEventListener('touchstart', eventDown, false);
                                canvas.removeEventListener('touchend', eventUp, false);
                                canvas.removeEventListener('touchmove', eventMove, false);
                                canvas.removeEventListener('mousedown', eventDown, false);
                                canvas.removeEventListener('mouseup', eventUp, false);
                                canvas.removeEventListener('mousemove', eventMove, false);
                                img.src = etConfig.ajaxApi.scratchCardImage + '?t='+Math.random();
                                alert(data.msg);
                              } else {
                                done = true;
                                alert(data.msg);
                              }
                          })
                          .error(function(data, status, headers, config) {
                              if (status == 401) {
                                done = true;
                              }
                          });
                    }
                }
                eventMove = function (e) {
                    e.preventDefault();
                    if(mousedown) {
                        if (e.layerX) {
                          e.offsetX = e.layerX;
                          e.offsetY = e.layerY;
                        }
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length-1];
                            e.offsetX = e.pageX - offset.left;
                            e.offsetY = e.layerY ? e.layerY : e.pageY - offset.top;
                        }
                        with(ctx) {
                          //fillRect(e.offsetX-10, e.offsetY-10, 20, 20);
                            beginPath();
                            arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2);
                            fill();
                        }
                    }
                }
                canvas.width=w;
                canvas.height=h;
                canvas.style.backgroundImage='url('+img.src+')';
                ctx=canvas.getContext('2d');
                ctx.fillStyle='transparent';
                ctx.fillRect(0, 0, w, h);
                layer(ctx);
                ctx.globalCompositeOperation = 'destination-out';
                canvas.addEventListener('touchstart', eventDown, false);
                canvas.addEventListener('touchend', eventUp, false);
                canvas.addEventListener('touchmove', eventMove, false);
                canvas.addEventListener('mousedown', eventDown, false);
                canvas.addEventListener('mouseup', eventUp, false);
                canvas.addEventListener('mousemove', eventMove, false);
            });
            img.src = etConfig.ajaxApi.scratchCardImage + '?t='+Math.random();
        }
    };

}



function scrollFixed() {
    return {
        restrict : 'A',
        scope : {
            etFixed : '@'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var win = $(window);
            var doc = $(document);
            var h = win.height();

            var throttled = _.throttle(function(){
                var sh = doc.scrollTop();
                console.log(sh);
                elm.css({'top':sh+40});
            }, 200);

            win.scroll(throttled);

        }
    };
}
function tagBall() {

    return {
        restrict : 'A',
        scope : {
            etTagCloud : '=etTagCloud'
        },
        link: function(scope, elm, attrs) {
            var $ = jQuery;
            var _ = window._;
            var data = scope.etTagCloud;
            var ew = elm.width();
            var eh = elm.height();

            scope.$watch('etTagCloud', function (data, oldVal){

                var elms =  [];

                console.log(JSON.stringify(data));

                var x = 0;
                var y = 0;

                _.each(data, function(v, i, list){

                    var b = '<b></b>';
                    var padding = Math.round(Math.random() * 24)+4;
                    i = i+1;
                    b  = $(b).appendTo(elm).text(v.name).addClass('tag-'+i);
                    b.css({'padding':padding+'px'});
                    var w = b.width();

                    var top = 0;
                    var left = 0;


                    left = Math.round(Math.random() * 10 + y);

                    if(left > (ew - w)){
                        top = Math.round(Math.random() * 10 + x);
                    }

                    b.css({'height':w+'px',
                        'line-height':w+'px',
                        'border-radius':w/2+padding+'px',
                        'top':top+'px',
                        'left':left+'px'});

                    x += left;
                    y += top;


                });


            });

        }
    };
}
function upload($http) {

    return {
        restrict : 'A',
        scope : {
            upload : '=etUpload'
        },
        link : function(scope, elm, attrs) {

            elm.change(function(){

                //创建FormData对象
                var data = new FormData();

                //为FormData对象添加数据
                $.each(elm[0].files, function (i, file) {
                    data.append('headphoto', file);
                });

                console.log(data);

                $.ajax({
                    url: scope.upload.url,
                    type: 'POST',
                    data: data,
                    cache: false,
                    contentType: false,    //不可缺
                    processData: false,    //不可缺
                    success: function (data) {
                        var call = scope.upload.success;
                        call && call(data);
                    },
                    error: function(err){
                        alert(err.msg);
                    }
                });


            });

        }
    };

}
return etApp;
}
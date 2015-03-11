/**
 * Created by julien.zhang on 2014/7/7.
 */

function topicCtrl($scope, $http, $location, userManager, topicManager) {

    //var etUserManager = $scope.etUserManager;

    var tid = $scope.tid = $location.absUrl().split('topic/')[1];
    tid = (tid||'').split(/\W/).shift();
    $scope.tid = tid;

    $scope.init= function(manual){
        if(!manual){
            $scope.getTopic(tid);
        }
    }


    //话题内容
    $scope.getTopic = function (tid) {

        $http({method: 'GET', url: etConfig.ajaxApi.topic, params:{tid:tid}}).
            success(function (data, status, headers, config) {

                $scope.topic = data;

            })
            .error(function (data, status, headers, config) {

            });

    }

    var fns = {
        up: function (topic) {
            $http({method: 'put', url: etConfig.ajaxApi.topicUp, data: {tid: topic.id}})
                .success(function (data, status, headers, config) {
                    topic.like += 1;
                });
        },
        down: function (topic) {
            $http({method: 'put', url: etConfig.ajaxApi.topicDown, data: {tid: topic.id}})
                .success(function (data, status, headers, config) {
                    topic.dislike += 1;
                });
        },
        replyf: function (topic) {

            $http({method: 'post', url: etConfig.ajaxApi.topicReply, data: {tid: topic.id, txt: topic.replyText}}).
                success(function (data, status, headers, config) {

                    topic.comment_num = topic.reply_num * 1 + 1;

                    var obj = {pub: +new Date, txt: topic.replyText, user: user};
                    $scope.$broadcast('newReply', obj);

                })
                .error(function (data, status, headers, config) {
                    if ((status + '').indexOf('40') === 0) {
                        $scope.toggleLoginBox();
                    }

                });
        }

    };


    /*
    for (var i in fns) {
        var _fn = fns[i];

        $scope[i] = (function (_fn) {
            return function () {
                var args = Array.prototype.slice.call(arguments, 0);

                userManager.getUser().success(function (user) {
                    console.log(user);

                    _fn.apply(null, args);

                }).error(function (data) {
                    alert('登录先');
                });
            }
        })(_fn);


    }

    */

    //支持
    $scope.up = function (topic) {

        if(topic.isDeclare){
            return alert('同学，表白一次就够了.');
        }

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }

            $http({method: 'put', url: etConfig.ajaxApi.topicUp, data: {tid: topic.id}})
                .success(function (data, status, headers, config) {
                    topic.like += 1;
                    topic.isDeclare = true;
                });

        });
    }

    //反对
    $scope.down = function (topic) {

        if(topic.isDeclare){
            return alert('同学，表白一次就够了.');
        }

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }

            $http({method: 'put', url: etConfig.ajaxApi.topicDown, data: {tid: topic.id}})
                .success(function (data, status, headers, config) {
                    topic.dislike += 1;
                    topic.isDeclare = true;
                });

        });
    }

    //分享
    $scope.share = function (topic) {

    }

    //回复
    $scope.replyf = function (topic) {

        userManager.getUser().then(function (user) {

            if (!user.id) {
                alert('登录先');
                return $scope.toggleLoginBox();
            }

            $http({method: 'post', url: etConfig.ajaxApi.topicReply, data: {tid: topic.id, txt: topic.replyText}}).
                success(function (data, status, headers, config) {

                    topic.replying = false;
                    topic.reply_num = topic.reply_num * 1 + 1;

                    var obj = {pub: data.pub, id: data.id, txt: topic.replyText, user: user};
                    $scope.$broadcast('newReply', obj);

                })
                .error(function (data, status, headers, config) {
                    if ((status + '').indexOf('403') === 0) {
                       return $scope.toggleLoginBox();
                    }
                    alert(data.msg);
                });

        });

    }


    // 取消回复
    $scope.cancel = function(topic){
        topic.replying = !topic.replying;
    }


    // 取得微话题的回复
    $scope.getReplies = function(topic){
        topic.toggle = !topic.toggle;
        if(topic.reply_num*1 > 0){
            topic.lookTip = topic.lookTip ? undefined : '收起回复';
            topic.tmplName = 'replies.html';
        }
    };


    // 修改微话题
     $scope.editTopic = function(topic){
         $scope.copyTopic = angular.copy(topic);
         topic.editing = !topic.editing;
         topic.editTmpl = 'topicEdit.html'
     };

    $scope.editCancel = function(){
        $scope.topic.editing = !$scope.topic.editing;
        $scope.topic.editTmpl = '';
        delete $scope.copyTopic;
    };

    //////////////////////////////////////////////////

    $scope.$on('edit.topic.success', function(e, msg){
        $scope.topic = $scope.copyTopic;
        //$scope.cancel();
        //delete $scope.copyTopic;
    });

    //////////////////////////////////////////////////

    //$scope.getTopic(tid);
    //$scope.getCommComments();


}

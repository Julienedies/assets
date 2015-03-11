/** 
 * et - v0.1.1 
 * modified: 2014-08-08 18:59:53
 */
function topic($, angular, etConfig, _etApp){

    var etApp = _etApp || angular.module('etApp', [ 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);
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

function repliesCtrl($scope, $http, $location, userManager) {

    var tid = $scope.tid;

    $scope.init = function(topic, manual){
        $scope.tid = topic && topic.id || tid;
        if(!manual) {
            $scope.getReplies(1)
        }
    };

    //回复列表
    $scope.getReplies = function(page){

        page = page || 1;
        $http({method: 'GET', url: etConfig.ajaxApi.topicReplies, params:{tid: $scope.tid, page: page}}).
            success(function (data, status, headers, config) {

                $scope.replies = data.data;

            })
            .error(function (data, status, headers, config) {

            });
    };

    //////////////////////////////////////////////////

    $scope.$on('newReply', function(e, newReply) {
        $scope.replies.unshift(newReply);
    });




}
function replyCtrl($scope, $http, $location, userManager, prompt) {

    $scope.init = function(reply){
        $scope.reply = reply;

    };

    //支持
    $scope.up = function (reply) {

        if(reply.isDeclare){
            return alert('同学，表白一次就够了.');
        }

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }
            $http({method: 'put', url: etConfig.ajaxApi.topicReplyUp, data: {rid: reply.id}})
                .success(function (data, status, headers, config) {
                    reply.like = (reply.like||0) + 1;
                    reply.isDeclare = true;
                }).error(function(data, status, headers, config){
                    alert(data.msg);
                });
        });
    };

    //反对
    $scope.down = function (reply) {

        if(reply.isDeclare){
            return alert('同学，表白一次就够了.');
        }

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }
            $http({method: 'put', url: etConfig.ajaxApi.topicReplyDown, data: {rid: reply.id}})
                .success(function (data, status, headers, config) {
                    reply.dislike = (reply.dislike||0) + 1;
                    reply.isDeclare = true;
                }).error(function(data, status, headers, config){
                    alert(data.msg);
                });
        });
    };

    //分享
    $scope.share = function (reply) {

    };

    //回复
    $scope.replyf = function (reply) {

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }
            $scope.cancel(reply);

            $http({method: 'post', url: etConfig.ajaxApi.topicReplyComment, data: {rid: reply.id, txt: reply.replyText}}).
                success(function (data, status, headers, config) {

                    reply.comment_num = reply.comment_num * 1 + 1;
                    $scope.getRcomments(reply);
                    $scope.$broadcast('newComment', {pub: data.pub, id:data.id, user:user, txt: reply.replyText});

                })
                .error(function (data, status, headers, config) {
                    alert(data.msg);
                });
        });

    };


    //取消回复
    $scope.cancel = function(reply){
        reply.repling = !reply.repling;
    };


    // 取得回复的回复
    $scope.getRcomments = function(reply){
        reply.toggle = !reply.toggle;
        if(reply.comment_num*1 > 0){
            reply.lookTip = reply.lookTip ? undefined : '收起评论';
            reply.tmplName = 'comments.html';
        }
    };


    //////////////////////////////////////////////////////

    // 重新编辑
    $scope.editReply = function(){
        $scope.copyReply = angular.copy($scope.reply);
        $scope.reply.editing = !$scope.reply.editing;
        $scope.reply.editTmpl='replyEdit.html';

    }

    $scope.editCancel = function(){
        $scope.reply.editing = !$scope.reply.editing;
        $scope.reply.editTmpl='';
        delete $scope.copyReply;
    }



    ///////////////////////////////////////////////////

    $scope.$on('edit.reply.success', function(e, msg){
        $scope.reply = $scope.copyReply;
    });



    //////////////////////////////////////////////////

    //(!$scope.manual) && $scope.getReplies();




}
function commentsCtrl($scope, $http, userManager, prompt) {

    $scope.init = function(reply){
        $scope.rid = reply.id;
        $scope.getComments();
    }


    //回复列表
    $scope.getComments = function(page){
        page = page || 1;
        $http({method: 'GET', url: etConfig.ajaxApi.topicReplyComments, params:{rid: $scope.rid, page: page}}).
            success(function (data, status, headers, config) {
                $scope.comments = data.data;

            })
            .error(function (data, status, headers, config) {

            });
    }


    $scope.remove = function(comment, index){

        $http({method: 'DELETE', url: etConfig.ajaxApi.topicReplyComment, data: {cid: comment.id}}).
            success(function (data, status, headers, config) {

                $scope.comments.splice(index, 1);
                prompt.alert('删除成功!');
            })
            .error(function (data, status, headers, config) {
                alert(data.msg);
            });
    }


    ///////////////////////////////////////////////////

    $scope.$on('newComment', function(e, newComment) {
        $scope.comments.unshift(newComment);
    });


    //////////////////////////////////////////////////





}
function commentCtrl($scope, $http, userManager) {

    $scope.init = function(comment){
        $scope.comment = comment;
    }

    //支持
    $scope.up = function (comment) {

        if(comment.isDeclare){
            return alert('同学，表白一次就够了.');
        }

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }
            $http({method: 'put', url: etConfig.ajaxApi.topicReplyCommentUp, data: {cid: comment.id}})
                .success(function (data, status, headers, config) {
                    comment.like = (comment.like||0) + 1;
                    comment.isDeclare = true;
                }).error(function(data, status, headers, config){
                    alert(data.msg);
                });
        });
    }

    //反对
    $scope.down = function (comment) {

        if(comment.isDeclare){
            return alert('同学，表白一次就够了.');
        }

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }

            $http({method: 'put', url: etConfig.ajaxApi.topicReplyCommentDown, data: {cid: comment.id}})
                .success(function (data, status, headers, config) {
                    comment.dislike = (comment.dislike||0) + 1;
                    comment.isDeclare = true;
                }).error(function(data, status, headers, config){
                    alert(data.msg);
                });
        });
    }

    //分享
    $scope.share = function (comment) {

    }

    //回复
    $scope.replyf = function (comment) {

        userManager.getUser().then(function (user) {
            if (!user.id) {
                return $scope.toggleLoginBox();
            }
            $scope.cancel(comment);

            $http({method: 'post', url: etConfig.ajaxApi.topicReplyComment, data: {cid: comment.id, txt: comment.replyText}}).
                success(function (data, status, headers, config) {

                    var obj = {pub: data.pub, id:data.id, txt: comment.replyText, user:user, puser:{nicknm:comment.user.nicknm}};

                    $scope.comments.push(obj);
                })
                .error(function (data, status, headers, config) {
                    alert(JSON.stringify(data));
                });
        });

    }

    //取消回复
    $scope.cancel = function(comment){
        comment.replying = !comment.replying;
    }


    // 重新编辑
    $scope.editReply = function(comment){
        comment.editing = !comment.editing;
        comment.editTmpl='commentEdit.html';

    }

    $scope.editcancel = function(comment){
        comment.editing = !comment.editing;
        comment.editTmpl='';
    }

    $scope.editSubmit = function(comment){

        $http({method: 'put', url: etConfig.ajaxApi.topicReplyComment, data: {rid: reply.id, txt: reply.txt}}).
            success(function (data, status, headers, config) {
                $scope.editCancel(comment);
            })
            .error(function (data, status, headers, config) {
                alert(data.msg);
            });
    }


    ///////////////////////////////////////////////////




}
function editTopicCtrl($scope, $http, $location, userManager, topicManager) {

    $scope.init= function(copyTopic){

        $scope.topic = copyTopic;

    }


    $scope.submit = function(){

        topicManager.edit($scope.topic).then(function(response){

            //$scope.$parent.topic = $scope.topic;
            $scope.$emit('edit.topic.success', {});

        },function(response){

            alert(response.data.msg);

        });
    };



}
function editReplyCtrl($scope, $http, $location, userManager, prompt) {

    $scope.init = function(copyReply){
        $scope.reply = copyReply;
    };

    //////////////////////////////////////////////////////

    $scope.submit = function(){

        var reply = $scope.reply;

        $http({method: 'put', url: etConfig.ajaxApi.topicReplyEdit, data: {rid: reply.id, txt: reply.txt}}).
            success(function (data, status, headers, config) {

                prompt.alert('修改成功');
                //$scope.$parent.reply = $scope.reply;
                $scope.$emit('edit.reply.success', {});

            })
            .error(function (data, status, headers, config) {
                alert(data.msg);
            });
    }




}
function editCommentCtrl($scope, $http, userManager) {

    $scope.init = function(copyComment){
        $scope.comment = copyComment;
    }


    $scope.submit = function(){

        var comment = $scope.comment;

        $http({method: 'put', url: etConfig.ajaxApi.topicReplyComment, data: {rid: reply.id, txt: reply.txt}}).
            success(function (data, status, headers, config) {

                $scope.$emit('edit.comment.success',{});

            })
            .error(function (data, status, headers, config) {
                alert(data.msg);
            });
    }



}
etApp.controller('topicCtrl',['$scope','$http', '$location','userManager', 'topicManager', 'prompt', topicCtrl]);

    etApp.controller('replyCtrl',['$scope','$http', '$location','userManager','prompt', replyCtrl]);

    etApp.controller('repliesCtrl',['$scope','$http', '$location','userManager', repliesCtrl]);

    etApp.controller('commentsCtrl',['$scope','$http', 'userManager','prompt', commentsCtrl]);

    etApp.controller('commentCtrl',['$scope','$http', 'userManager', commentCtrl]);


    etApp.controller('editTopicCtrl',['$scope','$http', '$location','userManager', 'topicManager', 'prompt', editTopicCtrl]);

    etApp.controller('editReplyCtrl',['$scope','$http', '$location','userManager','prompt', editReplyCtrl]);

    etApp.controller('editCommentCtrl',['$scope','$http', 'userManager','prompt', editCommentCtrl]);



    etApp.controller('topicRelCtrl',['$scope','$location', 'topicManager', function($scope, $location, topicManager){

        var tid = $scope.tid = $location.absUrl().split('topic/')[1];
        tid = (tid||'').split(/\W/).shift();


        topicManager.getTopicRel(tid).then(function(data){
            $scope.topicRel = data;
        });

    }]);

return etApp;
}
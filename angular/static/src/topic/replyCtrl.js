/**
 * Created by julien.zhang on 2014/7/8.
 */

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
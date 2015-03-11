/**
 * Created by julien.zhang on 2014/7/8.
 */
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
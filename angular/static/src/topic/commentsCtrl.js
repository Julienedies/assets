/**
 * Created by julien.zhang on 2014/7/8.
 */
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
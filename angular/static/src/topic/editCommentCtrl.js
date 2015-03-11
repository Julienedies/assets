/**
 * Created by julien.zhang on 2014/7/8.
 */
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
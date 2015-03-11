/**
 * Created by julien.zhang on 2014/7/8.
 */

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
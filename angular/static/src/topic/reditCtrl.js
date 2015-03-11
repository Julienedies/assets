/**
 * Created by julien.zhang on 2014/7/18.
 */

function reditCtrl($scope, $http, prompt) {

    // 重新编辑
    $scope.redit = function(reply){
        reply.rediting = !reply.rediting;
        reply.reditorTmpl='reditor.html';
    }

    $scope.cancel = function(reply){
        reply.rediting = !reply.rediting;
    }

    $scope.submit = function(reply){

        $http({method: 'put', url: etConfig.ajaxApi.topicReplyEdit, data: {rid: reply.id, txt: reply.txt}}).
            success(function (data, status, headers, config) {
                prompt.alert('修改成功');
                $scope.cancel(reply);
            })
            .error(function (data, status, headers, config) {
                alert(data.msg);
            });
    }


}
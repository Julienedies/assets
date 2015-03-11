/**
 * Created by julien.zhang on 2014/8/4.
 */


function notifyCtrl($scope, $http, etConfig){

    $http.get(etConfig.ajaxApi.notify+'?list=true')
        .then(function(res){

            $scope.msgNum = res.data.num;
            $scope.list = res.data.list;

        },function(res){

            alert('error:' + typeof res.data === 'object' ? res.data.msg: res.data);
        });


}
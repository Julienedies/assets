/**
 * Created by julien.zhang on 2014/7/11.
 */

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

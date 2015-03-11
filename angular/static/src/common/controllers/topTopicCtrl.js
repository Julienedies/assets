/**
 * Created by david.yang on 2014/8/11.
 */

function topTopicCtrl($scope, $http){

    $scope.top = [];

    $http({method: 'GET', url:etConfig.ajaxApi.topTopic})
        .success(function(data){

            $scope.top = data;

        })
        .error(function(data){
        });

}

/**
 * Created by julien.zhang on 2014/7/23.
 */

function enjoyerShowCtrl($scope, $http, $interval, $timeout){

    $scope.profits = [];

    function fn(){

        $http({method: 'GET', url:etConfig.ajaxApi.enjoyerShow})
            .then(function(response){

                angular.forEach(response.data, function(val, key){
                    this.push(val);
                }, $scope.profits);

               $timeout(function(){$scope.bg = 'yellow';},200);

            }, function(res){
                //console.log(res.data.msg);
            });
    }

    fn();
    //$interval(fn, 9600);

}
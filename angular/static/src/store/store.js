/**
 * Created by david.yang on 2014/8/8.
 */

function store($, angular, etConfig, _etApp){

    var etApp = _etApp || angular.module('etApp', [ 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);



    function storeCtrl($scope, $http, userManager){

        function getList(){

            $http({method: 'GET', url: etConfig.ajaxApi.repStoreList}).
                success(function (data, status, headers, config) {

                    $scope.items = data;

                })
                .error(function (data, status, headers, config) {

                });

        }

        getList();

        $scope.buy = function(item) {
            
            $http({method: 'POST', url: etConfig.ajaxApi.repStoreBuy, data: {item:item.id}}).
                success(function (data, status, headers, config) {
                    $scope.user.reputation = data.reputation;
                    item.num = item.num-1;
                    alert(data.msg);
                })
                .error(function (data, status, headers, config) {
                    alert(data.msg);
                });
        }

    }


    etApp.controller('storeCtrl', ['$scope', '$http','userManager', storeCtrl]);

}

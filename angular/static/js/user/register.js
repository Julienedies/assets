/** 
 * et - v0.1.1 
 * modified: 2014-07-08 10:31:27
 */
function register($, angular, etConfig){


    var etApp =  angular.module('etApp', []);

    function regCtrl($scope, $http){

        $scope.user = {};
        $scope.msg = '-------';

        $scope.reg = function(){

            $http({method: 'post', url: etConfig.ajaxApi.register, data: $scope.user})
                .success(function(data, status, headers, config) {
                    $scope.stat = 'ok';
                })
                .error(function(data, status, headers, config) {
                    $scope.stat = 'error';
                    $scope.msg = data.msg;
                });

        }

    }



    etApp.controller('regCtrl',['$scope','$http', regCtrl]);




}
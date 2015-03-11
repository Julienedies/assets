/** 
 * et - v0.1.1 
 * modified: 2014-07-07 18:39:34
 */
function login($, angular, etConfig){


    var etApp =  angular.module('etApp', [ ]);

    function loginCtrl($scope, $http){

        $scope.user = {};

        $scope.submit = function(){
            console.log(111);
            $http({method: 'post', url: etConfig.ajaxApi.register, data: $scope.user})
                .success(function(data, status, headers, config) {
                    $scope.msg = 'ok';
                })
                .error(function(data, status, headers, config) {
                    $scope.msg = 'error';
            });

        }

    }



    etApp.controller('loginCtrl',['$scope','$http', loginCtrl]);




}
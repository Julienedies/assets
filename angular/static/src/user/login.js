/**
 * Created by julien.zhang on 2014/7/7.
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
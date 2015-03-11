/**
 * Created by julien.zhang on 2014/7/11.
 */

function mainCtrl($scope, $http, $location, userManager){

    function getNotify(){
        $http.get(etConfig.ajaxApi.notify)
            .then(function(res){

                $scope.msgNum = res.data.num;

            },function(res){

            });

    }

    function getUser(){
        userManager.getUser().then(function(user){
            $scope.user = user;
            if(user.id){
                getNotify();
            }
        });
    }


    $scope.logout = function(){
        userManager.logout().then(function(res){
        },function(err){
        });
        $scope.user = {};
    };

    $scope.toggleLoginBox = function(){
        $scope.showMenu = false;
        $scope.showReg = false;
        $scope.showNewTopic = false;
        $scope.alert = $scope.showLogin = !$scope.showLogin;
    }

    $scope.toggleRegBox = function(){
        $scope.showMenu = false;
        $scope.showLogin = false;
        $scope.showNewTopic = false;
        $scope.alert = $scope.showReg = !$scope.showReg;
    }

    $scope.toggleNewTopicBox = function () {

        userManager.getUser().then(function (user) {
            if(!user.id) return $scope.toggleLoginBox();
            $scope.showMenu = false;
            $scope.showLogin = false;
            $scope.showReg = false;

            if($scope.alert = $scope.showNewTopic = !$scope.showNewTopic){

            }else{
                $scope.$broadcast('closeNewTopic',{});
            }
        }, function (data) {
            $scope.toggleLoginBox();
        });

    };

    $scope.toggleMenuBox = function(){
        $scope.showLogin = false;
        $scope.showReg = false;
        $scope.showNewTopic = false;
        $scope.showMenu = !$scope.showMenu;
    }

    /////////////////////////////////////

    $scope.$on('topic:edit:end', function(e, msg){
        $scope.$broadcast('topic:edit:end:broadcast', msg);
    });

    $scope.$on('loginOk', function(e, msg){
        $scope.alert = $scope.showLogin = false;
        getUser();
        $scope.$broadcast('logined', {});
    });

    $scope.$on('regOk', function(e, msg){
        $scope.alert = $scope.showReg = false;
        getUser();
    });


    ////////////////////////////////

    getUser();



}
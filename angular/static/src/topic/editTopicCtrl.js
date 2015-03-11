/**
 * Created by julien.zhang on 2014/7/7.
 */

function editTopicCtrl($scope, $http, $location, userManager, topicManager) {

    $scope.init= function(copyTopic){

        $scope.topic = copyTopic;

    }


    $scope.submit = function(){

        topicManager.edit($scope.topic).then(function(response){

            //$scope.$parent.topic = $scope.topic;
            $scope.$emit('edit.topic.success', {});

        },function(response){

            alert(response.data.msg);

        });
    };



}
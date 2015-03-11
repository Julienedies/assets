/**
 * Created by julien.zhang on 2014/7/11.
 */

function newTopicCtrl($scope, $http, prompt){

    $scope.topic = {};
    $scope.msg = '';


    $http.get(etConfig.ajaxApi.cats).success(function(data, status, headers, config){
        $scope.cats = data;
    });

    $scope.selectTopicType = function(type){
        $scope.topic.type = type;
    };

    $scope.submit = function () {

            $http({method: 'post', url: etConfig.ajaxApi.topic, data: $scope.topic})
                .success(function (data, status, headers, config) {
                    $scope.msg = 'ok';
                    $scope.topic = {};
                    $scope.toggleNewTopicBox();
                    prompt.alert('微话题发表成功!');
                })
                .error(function (data, status, headers, config) {
                    alert(data.msg);
                });

    };

    ///////////////////////////////////////////////////////////////////////////

    $scope.$on('closeNewTopic', function(e, msg){
        $scope.topic = {};
    });

}

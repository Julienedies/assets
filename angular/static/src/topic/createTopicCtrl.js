/**
 * Created by julien.zhang on 2014/7/9.
 */

function createTopicCtrl($scope, $http, $location, userManager) {


    $scope.topic = {};


    //创建话题
    $scope.create = function(){



        $http({method: 'post', url: etConfig.ajaxApi.topic, data: {cat:topic.cat, tit: topic.tit, txt: topic.txt}}).
            success(function (data, status, headers, config) {


            })
            .error(function (data, status, headers, config) {

            });

    };


}
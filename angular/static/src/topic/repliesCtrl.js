/**
 * Created by julien.zhang on 2014/7/8.
 */

function repliesCtrl($scope, $http, $location, userManager) {

    var tid = $scope.tid;

    $scope.init = function(topic, manual){
        $scope.tid = topic && topic.id || tid;
        if(!manual) {
            $scope.getReplies(1)
        }
    };

    //回复列表
    $scope.getReplies = function(page){

        page = page || 1;
        $http({method: 'GET', url: etConfig.ajaxApi.topicReplies, params:{tid: $scope.tid, page: page}}).
            success(function (data, status, headers, config) {

                $scope.replies = data.data;

            })
            .error(function (data, status, headers, config) {

            });
    };

    //////////////////////////////////////////////////

    $scope.$on('newReply', function(e, newReply) {
        $scope.replies.unshift(newReply);
    });




}
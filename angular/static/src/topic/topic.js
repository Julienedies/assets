/**
 * Created by julien.zhang on 2014/6/30.
 */


    etApp.controller('topicCtrl',['$scope','$http', '$location','userManager', 'topicManager', 'prompt', topicCtrl]);

    etApp.controller('replyCtrl',['$scope','$http', '$location','userManager','prompt', replyCtrl]);

    etApp.controller('repliesCtrl',['$scope','$http', '$location','userManager', repliesCtrl]);

    etApp.controller('commentsCtrl',['$scope','$http', 'userManager','prompt', commentsCtrl]);

    etApp.controller('commentCtrl',['$scope','$http', 'userManager', commentCtrl]);


    etApp.controller('editTopicCtrl',['$scope','$http', '$location','userManager', 'topicManager', 'prompt', editTopicCtrl]);

    etApp.controller('editReplyCtrl',['$scope','$http', '$location','userManager','prompt', editReplyCtrl]);

    etApp.controller('editCommentCtrl',['$scope','$http', 'userManager','prompt', editCommentCtrl]);



    etApp.controller('topicRelCtrl',['$scope','$location', 'topicManager', function($scope, $location, topicManager){

        var tid = $scope.tid = $location.absUrl().split('topic/')[1];
        tid = (tid||'').split(/\W/).shift();


        topicManager.getTopicRel(tid).then(function(data){
            $scope.topicRel = data;
        });

    }]);

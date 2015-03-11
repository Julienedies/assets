/**
 * Created by julien.zhang on 2014/7/11.
 */

function regCtrl($scope,  $location, $http){

    var query = $location.search();

    var _user = $scope.user = {};
    if(query.invite){
        _user.invite = query.invite;
    }

    $scope.uploadConf = {url: etConfig.ajaxApi.uploadPortrait, success: function (data) {
        $scope.$apply(function(){
            $scope.user.portrait_id = data.portrait_id;
            $scope.previewSrc = data.portrait;
        });
    }, error: function (msg) {
        alert(msg);
    }};



    $scope.submit = function(){

        $http({method: 'post', url: etConfig.ajaxApi.register, data: $scope.user})
            .success(function(data, status, headers, config) {
                $scope.stat = 'ok';
                $scope.$emit('regOk', {});
            })
            .error(function(data, status, headers, config) {
                $scope.stat = 'error';
                $scope.msg = data.msg;
            });

    };

}
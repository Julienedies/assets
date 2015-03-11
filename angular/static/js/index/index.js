/** 
 * et - v0.1.1 
 * modified: 2014-08-01 14:25:15
 */
function index($, angular, etConfig, _etApp){

    var etApp = _etApp || angular.module('etApp', [ 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);



    function indexCtrl($scope, $http, userManager, topicManager){

        function overview(){

            $http({method: 'GET', url: etConfig.ajaxApi.catsOverview}).
                success(function (data, status, headers, config) {

                    $scope.cats = data;

                })
                .error(function (data, status, headers, config) {

                });


            topicManager.getCatList().then(function(data){

                $scope.phases = data;

            }, function(res){
                alert(res.data.msg);
            });

        }

        overview();

    }


    etApp.controller('indexCtrl', ['$scope', '$http','userManager','topicManager', indexCtrl]);


    etApp.directive('sh', function(){

        return {
            restrict : 'A',
            scope : {
                sh : '='
            },
            link: function(scope, elm, attrs) {

                (function(){
                    var x = arguments.callee;
                    setTimeout(function(){
                        var h = elm.height;
                        var vh = elm.parent().height();
                        if(!vh || h>=vh) return x();
                        elm.css('height',vh);
                    },100);

                })();


            }
        };

    });



}
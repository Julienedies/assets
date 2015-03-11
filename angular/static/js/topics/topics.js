/** 
 * et - v0.1.1 
 * modified: 2014-08-11 16:29:20
 */
function topics($, angular, etConfig, etApp){


    var _etApp =  etApp || angular.module('etApp', [ 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);

    function topicsCtrl($scope, $location,  $http){


        var query = $location.absUrl().split('/');
        var cat = $scope.catId = query[query.length-2];

        function getTopics(page){
            $http({method: 'GET', url: etConfig.ajaxApi.topics, params:{cat:cat, page:page||1}}).
                success(function(data, status, headers, config) {

                    $scope.total = data.total;
                    $scope.perPage = data.per_page;
                    $scope.pages = Math.ceil(data.total/data.per_page);
                    $scope.currentPage = data.current_page;
                    $scope.lastPage = data.last_page;
                    $scope.title = data.title;
                    $scope.topics = data.data;
                    $(document.body).scrollTop(0);
                });
        }

        getTopics();

        $scope.prev = function(){
            var n = $scope.currentPage-1;
            if( n < 1) return;
            getTopics(n);
        };

        $scope.next = function(){
            var n = $scope.currentPage+1;
            if(n > $scope.pages) return;
            getTopics(n);
        }


        /* -------------------------------------------------- */
        $scope.pageChanged = function(page){
            getTopics(page);
        }

        /* --------------------------------------------------- */

    }

    function catsCtrl($scope,  $http){

        $http({method: 'GET', url: etConfig.ajaxApi.cats}).
            success(function(data, status, headers, config) {
                $scope.cats = data;
            });

    }



    _etApp.controller('topicsCtrl',['$scope', '$location', '$http', topicsCtrl]);

    _etApp.controller('catsCtrl',['$scope','$http', catsCtrl]);

    return _etApp;
}

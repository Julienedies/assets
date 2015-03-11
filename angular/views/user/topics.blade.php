<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<style>
.topic-num span{
        color:#b2b2b2;
        margin:0 .5em;
}
</style>
<script src="[[$assets_url]]/js/libs/angular/ui-bootstrap-custom-tpls-0.10.0.js"></script>
<script src="[[$assets_url]]/js/topic/topic.min.js"></script>
<script>
var _etApp = angular.module('etApp', ['ngRoute', 'ngSanitize', 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers', 'ui.bootstrap']);
var _etApp = etApp($, angular, etConfig, _etApp);
_etApp.controller('topicCtrl', ['$scope', '$http', 'userManager', function($scope, $http, userManager){

	function getTopics(n){
                n = n || 1;
		userManager.getTopics(n).then(function(data){
			
                            $scope.total = data.total;
                            $scope.perPage = data.per_page;
                            $scope.pages = Math.ceil(data.total/data.per_page);
                            $scope.currentPage = data.current_page;
                            $scope.lastPage = data.last_page;
                            $scope.title = data.title;
                            $scope.topics = data.data;
                            $(document.body).scrollTop(0);

			},function(res){
				alert(res.data.msg);
			});
	}

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

        getTopics();

        $scope.pageChanged = function(page){
            getTopics(page);
        }
	//////////////////////////////////////

	$scope.$on('logined', function(e, msg){
		getTopics();
	});

}]);
</script>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
	@include('includes.top')
	
	<section id="main" class="pure-g">
		
		<article id="content" class="pure-u-1 pure-u-md-3-4">
		
			<div ng-controller="topicCtrl" ng-cloak ng-show="user.id">

                                <h2 class="pure-button" style="font-size:1.1em;background:none;font-weight:bold;"><i class="fa fa-list"></i> 我的微话题</h2>
                                <a href="/user/replies"><h2 class="pure-button"><i class="fa fa-comments"></i> 我的回复</h2></a>
                                <ul ng-cloak ng-show="topics">
                                        <li ng-repeat="topic in topics" style="padding-bottom:10px;border-bottom:1px solid #EEE;">
                                                <h3 class="title"><i class="type" ng-bind="topic.type*1==0?'提问':'分享'"></i> &nbsp;<a target="_blank" ng-href="/topic/{{topic.id}}" ng-bind="topic.tit"></a></h3>
                                                <div class="topic-num">
                                                        <div class="unhighlight">
                                                                <span href="javascript:void(0);" ng-bind="topic.pub | dateFormat:'MM-dd'"></span>
                                                                <span>
                                                                <i class="fa fa-eye"></i> 围观 <b ng-bind="topic.views"></b>
                                                                </span>

                                                                <span>
                                                                <i class="fa fa-thumbs-up"></i>
                                                                支持
                                                                <b ng-bind="topic.like"></b>
                                                                </span>
                                                        
                                                                <span>
                                                                <i class="fa fa-thumbs-down"></i>
                                                                反对 
                                                                <b ng-bind="topic.dislike"></b>
                                                                </span>
                                                        
                                                                <span>
                                                                <i class="fa fa-comments"> </i>
                                                                回复
                                                                <b ng-bind="topic.reply_num"></b>
                                                                </span>
                                                        </div>
                                                </div>
                                        </li>
                                </ul>
				
				<div ng-cloak ng-if="pages" ng-hide="pages<2" class="paging" style="display:none;">
					<a href="javascript:void(0);" ng-click="prev()">上页</a>
					<span><i ng-bind="currentPage"></i> / <i ng-bind="pages"></i></span>
					<a href="javascript:void(0);" ng-click="next()">下页</a>	
				</div>
				
				<div ng-cloak ng-show="pages>1">
					<pagination total-items="total" items-per-page="perPage" page="currentPage" on-select-page="pageChanged(page)"  boundary-links="true"></pagination>
				</div>
			
			</div>
			
			
			
		</article>
	
		<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
			
		</aside>
			
	</section>
	
	@include('includes.footer')
	
	</div>

</body>
</html>










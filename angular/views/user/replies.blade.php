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
_etApp.controller('replyCtrl', ['$scope', '$http', 'userManager', function($scope, $http, userManager){

	function getReplies(n){
                n = n || 1;
		userManager.getReplies(n).then(function(data){
			
                            $scope.total = data.total;
                            $scope.perPage = data.per_page;
                            $scope.pages = Math.ceil(data.total/data.per_page);
                            $scope.currentPage = data.current_page;
                            $scope.lastPage = data.last_page;
                            $scope.title = data.title;
                            $scope.replies = data.data;
                            $(document.body).scrollTop(0);

			},function(res){
				alert(res.data.msg);
			});
	}

        getReplies();

        $scope.pageChanged = function(page){
            getReplies(page);
        }
	//////////////////////////////////////

	$scope.$on('logined', function(e, msg){
		getReplies();
	});

}]);
</script>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
	@include('includes.top')
	
	<section id="main" class="pure-g">
		
		<article id="content" class="pure-u-1 pure-u-md-3-4">
		
			<div ng-controller="replyCtrl" ng-cloak ng-show="user.id">

                                <a href="/user/topics"><h2 class="pure-button"><i class="fa fa-list"></i> 我的微话题</h2></a>
                                <h2 class="pure-button" style="font-size:1.1em;background:none;font-weight:bold;"><i class="fa fa-comments"></i> 我的回复</h2>
                                <ul ng-cloak ng-show="replies">
                                        <li ng-repeat="reply in replies" style="padding-bottom:10px;border-bottom:1px solid #EEE;">
                                                <h3 class="title"><i class="type" ng-bind="reply.topic.type*1==0?'提问':'分享'"></i> &nbsp;<a target="_blank" ng-href="/topic/{{reply.topic.id}}" ng-bind="reply.topic.tit"></a></h3>
                                                    <div class="summary" ng-bind="reply.desc" ng-hide="reply.showAll"></div>
                                                    <div ng-bind-html="reply.txt" ng-if="reply.showAll"></div>
                                                    <a href="javascript:void(0);"  class="small" ng-bind="reply.showAll?'收起':'显示全部'" ng-show="reply.desc.length>96"  ng-click="reply.showAll=!reply.showAll"></a>
                                                <div class="topic-num">
                                                        <div class="unhighlight">
                                                                <span href="javascript:void(0);" ng-bind="reply.pub | dateFormat:'MM-dd'"></span>
                                                                <span>
                                                                <i class="fa fa-thumbs-up"></i>
                                                                支持
                                                                <b ng-bind="reply.like"></b>
                                                                </span>
                                                        
                                                                <span>
                                                                <i class="fa fa-thumbs-down"></i>
                                                                反对 
                                                                <b ng-bind="reply.dislike"></b>
                                                                </span>
                                                        
                                                                <span>
                                                                <i class="fa fa-comments"> </i>
                                                                评论
                                                                <b ng-bind="reply.comment_num"></b>
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










<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script>
var _etApp = etApp($, angular, etConfig);

_etApp.controller('suggestCtrl', ['$scope', '$http', function($scope, $http){

	$scope.suggest = {};
	
    $scope.submit = function(){

        $http({method: 'post', url: etConfig.ajaxApi.suggest, data: $scope.suggest})
            .success(function(data, status, headers, config) {
                $scope.stat = 'ok';
                alert('提交成功,感谢您的反馈!');
                location.href = window.appUrl;
            })
            .error(function(data, status, headers, config) {
                $scope.stat = 'error';
            });

    };
	
}]);
</script>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
	@include('includes.top')
	
	<section id="main" class="pure-g" ng-controller="suggestCtrl">
	
		<article id="content">
	
    		<div class="pure-form pure-form-stacked pure-g">
	
	            <div class="pure-u-1 pure-u-md-2-3">
	            	<label>描述</label>
	                <textarea style="min-height:8em;" class="pure-input-1" placeholder="输入" ng-model="suggest.content">
	                
	                </textarea>
	            </div>
	            
				<div class="pure-u-1 pure-u-md-2-3" style="margin-top:1.2em;">
	            	<button class="pure-button pure-button-primary pure-input-1" ng-click="submit()">提交</button>
	            </div>
	        </div>	
	        
	     </article>	
			
	</section>
	
	@include('includes.footer')
	
	</div>

</body>
</html>










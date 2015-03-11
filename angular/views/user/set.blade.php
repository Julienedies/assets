<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script>
var _etApp = etApp($, angular, etConfig);
</script>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
	@include('includes.top')
	
	<section id="main" class="pure-g">
		
		<p ng-show="!user.id">只有登录用户才能访问!</p>
	
		<article id="content" class="pure-u-1 pure-u-md-3-4" ng-show="user.id">
		
			<div @ng-controller="userSetCtrl">
			
				<a href="javascript:void(0);">修改密码</a>

			</div>
			
		</article>
	
		<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
			
		</aside>
			
	</section>
	
	@include('includes.footer')
	
	</div>

</body>
</html>










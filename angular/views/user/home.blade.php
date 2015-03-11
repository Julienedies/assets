<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script src="[[$assets_url]]/js/user/profile.min.js"></script>
<script>
var _etApp = etApp($, angular, etConfig);
profile($, angular, etConfig);
</script>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
	@include('includes.top')
	
	<section id="main" class="pure-g">
		
		<article id="content" class="pure-u-1 pure-u-md-3-4">
		
			<p ng-cloak ng-if="user" ng-show="!user.id">只有登录用户才能访问!</p>
		
			<div ng-controller="profileCtrl" ng-show="user.id">
			
				@include('includes.user.profile')	
				
				<!-- 用户个人资料编辑视图  -->
				<div ng-show="profileEditing" ng-include="editProfileTmpl"></div>
				<!-- 用户个人资料编辑视图   -->
				
			</div>
			
			
			
		</article>
	
		<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
			
		</aside>
			
	</section>
	
	@include('includes.footer')
	
	</div>

<script type="text/ng-template" id="editProfile.html">
@include('includes.user.editProfile')
</script>
<script type="text/ng-template" id="editWorkEx.html">
@include('includes.user.editWorkEx')
</script>
<script type="text/ng-template" id="editEduEx.html">
@include('includes.user.editEduEx')
</script>
</body>
</html>










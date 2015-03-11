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
		
			<div ng-controller="profileCtrl">
					
				@include('includes.user.profile')	
			
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
<script type="text/ng-template" id="followers.html">
@include('includes.user.followers')
</script>
</body>
</html>










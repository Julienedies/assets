<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
<!-- 
<link rel="stylesheet" href="[[$assets_url]]/css/libs/main.css" />
<link rel="stylesheet" href="[[$assets_url]]/css/libs/normalize.css" />
 -->
 <link rel="stylesheet" href="[[$assets_url]]/css/libs/animations.css" />
 <link rel="stylesheet" href="[[$assets_url]]/css/common/base.css" />
<!--[if lte IE 8]>
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-old-ie-min.css">
<![endif]-->
<!--[if gt IE 8]><!-->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-min.css">
<!--<![endif]-->
<link rel="stylesheet" href="[[$assets_url]]/css/topic.css" />

<!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
<![endif]-->
<style>
#regBox{
	display:block!important;
	position:relative;
}
</style>
<script>
var assetsUrl = '[[$assets_url]]';
var appUrl = '[[$app_url]]';
</script>
<script src="[[$assets_url]]/js/libs/underscore-1.6.0.min.js"></script>
<script src="[[$assets_url]]/js/libs/jquery.min.js"></script>
<script src="[[$assets_url]]/js/libs/angular.min.js"></script>

<script src="[[$assets_url]]/js/common/config.min.js"></script>
<script src="[[$assets_url]]/js/common/etApp.js"></script>
<script>
etApp($, angular, etConfig);
//angular.module('etApp', [ 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers']);
</script>
</head>

<body>

<div class="wrapper" ng-controller="mainCtrl">

<header></header>

@include('includes.ng-template.register')

<form method="post" enctype="multipart/form-data" action="/api/user/portrait/upload" >
<input type=file name=headphoto />
<input type=submit />
</form>

@include('includes.footer')

</div>
</body>
</html>










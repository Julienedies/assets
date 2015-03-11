<!doctype html>
<html id="ng-app" ng-app="etApp">
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
<link rel="stylesheet" href="[[$assets_url]]/css/topics.css" />

<!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
    <script src="[[$assets_url]]/js/libs/json2.js"></script>
<![endif]-->
<script>
var assetsUrl = '[[$assets_url]]';
var appUrl = '[[$app_url]]';
</script>

<script src="[[$assets_url]]/js/libs/underscore-1.6.0.min.js"></script>
<script src="[[$assets_url]]/js/libs/jquery.min.js"></script>
<script src="[[$assets_url]]/js/libs/angular.min.js"></script>

<script src="[[$assets_url]]/js/common/config.min.js"></script>
<script src="[[$assets_url]]/js/common/etApp.min.js"></script>
<script src="[[$assets_url]]/js/topics/topics.js"></script>
<script src="[[$assets_url]]/js/topic/topic.js"></script>
<script>
etApp($, angular, etConfig);
var _etApp = topics($, angular, etConfig);
topic($, angular, etConfig, _etApp);
</script>
</head>

<body>

<div class="wrapper" ng-controller="mainCtrl">

@include('includes.top')
@include('includes.ng-template.login')
@include('includes.ng-template.register')
@include('includes.ng-template.newTopic')

<header></header>

<section class="pure-g">

	<div class="sidebar pure-u-1 pure-u-md-1-4">
	
		<aside ng-controller="catsCtrl">
			<div id="cats">
				<h1>分类</h1>
				<ul et-tag-cloud="cats">
					<li class="tag-ball">
						<!-- <span class="tag tag-{{$index}}" ng-repeat="cat in cats" ng-bind="cat.name"></span>  -->
					</li>
				</ul>
			</div>
		</aside>
	
	</div>



	<div class="content pure-u-1 pure-u-md-3-4">
	
	
		<div id="topics" ng-controller="topicsCtrl">
		
			<div ng-show="!topics">loading...</div>
			
			<ul>
				<li ng-repeat="topic in topics">
				
					<section class="topic" class="pure-g" ng-init="init(1)" ng-controller="topicCtrl">
						<aside>
						</aside>
						
						<article>
							<div>
								<h2 class="title"><a target="_blank" ng-bind="topic.tit" ng-href="[[$app_url]]/topic/{{topic.id}}"></a></h2>
								<div class="dtails">
								
								    <div class="pure-g">
								
								        <div class="pure-u-1 pure-u-md-1-6">
								            <div ng-bind="topic.pub | dateFormat:'MM-dd'"></div>
								        </div>
								
								        <div class="pure-u-1 pure-u-md-3-5">
								            <div ng-bind="topic.txt"></div>
								            <div>
								                <span class="button-small pure-button"  ng-click="up(topic);">支持 <b ng-bind="topic.like"></b></span>
								                <span class="button-small pure-button"  ng-click="down(topic);">反对 <b ng-bind="topic.dislike"></b></span>
								                <span class="button-small pure-button"  ng-click="share(topic);">分享 </span>
								                <span class="button-small pure-button"  ng-click="getReplies(topic)">回复数<b ng-bind="topic.reply_num"></b></span>
								                <span class="button-small pure-button"  ng-click="topic.replying = !topic.replying">回复</span>
								                <div class="reply-box" ng-show="topic.replying">
								                    <textarea ng-model="topic.replyText"></textarea>
								                    <button ng-click="cancal(topic);">取消</button>
								                     &nbsp;&nbsp; 
								                    <button ng-click="replyf(topic);">提交</button>
								                </div>
								            </div>
								            
								            
								            
								        </div>
								
								        <div id="user-info" class="pure-u-1 pure-u-md-1-5">
								            <p class="portrait">
								                <img ng-src="{{topic.user.portrait}}" class="flow-img" />
								            </p>
								            <strong ng-bind="topic.user.nicknm" class="nicknm"></strong>
								            <p ng-bind="topic.user.job_label"></p>
								        </div>
								
								    </div>
								
								</div>		
							</div>
							
							<div class="repliesBox" ng-show="topic.toggle" ng-include="topic.tmplName"></div>							
							
						</article>
					
					</section>
				</li>
			</ul>
			
			<div ng-hide="!pages" class="paging">
				<span>上页</span>
				<span><i ng-bind="currentPage"></i> / <i ng-bind="pages"></i></span>
				<span>下页</span>	
			</div>
		
		</div>
	
	</div>

</section>

@include('includes.footer')

</div>
@include('includes.ng-template.replies')
@include('includes.ng-template.comments')
</body>
</html>










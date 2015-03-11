<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script src="[[$assets_url]]/js/index/index.min.js"></script>
<script>
etApp($, angular, etConfig);
index($, angular, etConfig);
</script>
<style>
hgroup p{
	margin:0 0 0 0;
}
.item{
	margin:0.5em 0;
	padding:0.3em;
	border-top:solid 1px #d2d2d2;
}
.item ul{
	margin:0 0 0 1em;
}
.item ul li{
	margin:0.6em 0;
	list-style:none;
}
.phases{
	position:relative;
	margin:0.2em 0 1em 0.8em;
	padding:0 0 1em 0;
	border-left:dotted 1px #afdbde;
}
.phases section{
	padding-left:1.5em;
	clear:both;
	min-height: 1.5em;
}
.phases section h3{
	float:left;
	margin:0 1em 0 0;
}
.phases section h3 a{
	padding:0.2em 0.8em;
	border:solid 1px #daedf4;
	border-radius:0.8em;
}
.phases section h3 a:hover{
	color:#fff;
	background:#2d5ca4;
	border:solid 1px #fff;
}
.phases section h3 i{
	vertical-align:15%;
	margin:0 1em 0 -2.2em;
	color:#85cdca;
	font-size:0.7em;
}
.phases section ul{
}
.phases section ul li{
	display:inline-block;
	padding:0 1em 0 0;
	margin-bottom:1em;
}
.phases section ul li i{
	color:#2d5ca4;
}
.phases .start, .phases .end{
	position: absolute;
	bottom: -0.3em;
	left: -0.3em;
	font-size: 1.6em;
	color: #85cdca;
}
.phases .start{
	top:-0.4em;
	font-size:0.5em;
	color:#fff;
}
@media (min-width: 48em) {
	.phases section ul li{
		margin-bottom:0.1em;
	}
	
}
</style>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
		@include('includes.top')

		<section id="main" class="pure-g" ng-controller="indexCtrl" ng-hide="alert">
		
			<div ng-hide="cats">
				@include('includes.ng-template.loading')
			</div>
		
			<article id="content" ng-cloak class="pure-u-1 pure-u-md-3-4" ng-show="cats">
                                <a target="_blank" href="http://www.25qr.com/topic/53ec9a997560779ca28b4568?25qr_ad"><img src="http://www.25qr.com/ads//20140814/1b09b4561473b387433701db2005c32c.jpg" style="max-width:100%;margin-bottom:10px;"></a>
			
				@include('includes.ng-template.showProfits')
				
				
				<!-- 阶段列表  -->
				<h2 class="c2">企业阶段</h2>
				<div class="phases">
					<section ng-repeat="phase in phases">
						<h3 sh ><i class="fa fa-circle"></i><a target="_blank" ng-href="/cat/{{phase.id}}/topics" ng-bind="phase.name"></a></h3>
						
						<ul>
							<li ng-repeat="sub in phase.son">
								<a target="_blank" ng-href="/cat/{{sub.id}}/topics" ng-bind="sub.name"></a>
								<i ng-bind="'('+ sub.topic_num+')'"></i>
							</li>
						</ul>	
					</section>
					<i class="fa fa-caret-down end"></i>
					<i class="fa fa-square start"></i>
				</div>				
				
				<!-- 话题列表 -->
				<div class="cats">
					<div class="item" ng-if="cat.topics" ng-repeat="cat in cats">
						<hgroup>
							<h2><a target="_blank" ng-href="/cat/{{cat.id}}/topics" ng-bind="cat.name"></a></h2>
							<h4>包含 <b ng-bind="cat.topic_num"></b> 个微话题</h4>
						</hgroup>
						
						<ul>
							<li ng-repeat="topic in cat.topics">
								<i ng-bind="topic.type*1==0?'提问':'分享'"></i>&nbsp;&nbsp;
								<a target="_blank" ng-href="[[$app_url]]/topic/{{topic.id}}" ng-bind="topic.tit"></a>&nbsp;&nbsp;
								<i class="fa fa-comments-o gray" ng-bind="' '+ topic.reply_num"></i>
							</li>
						</ul>
					</div>
				</div>

				
				
			</article>
			
			<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
				@include('includes.aside')
			</aside>	
			
		</section>
	
		@include('includes.footer')
	
	</div>

</body>
</html>










<!doctype html>
<html id="ng-app" ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script src="[[$assets_url]]/js/libs/angular/ui-bootstrap-custom-tpls-0.10.0.js"></script>
<script src="[[$assets_url]]/js/topics/topics.min.js"></script>
<script src="[[$assets_url]]/js/topic/topic.min.js"></script>
<script>
var _etApp = angular.module('etApp', ['ngRoute', 'ngSanitize', 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers', 'ui.bootstrap']);
var _etApp = etApp($, angular, etConfig, _etApp);
_etApp = topics($, angular, etConfig, _etApp);
topic($, angular, etConfig, _etApp);

$(function(){
	var $doc = $(document);
	var active = [];
	var _top;
	$doc.on('scroll', function(e){
		var $wrap = $('.wrap.abs ');
		var $off = $wrap.find('.off');
		if(!$off.length) return;
		var top = _top = $('.wrap.abs ')[0] === active[0] && _top ? _top : $off.offset().top;
		active = $wrap;
		var left = $off.offset().left;
		var s = $doc.scrollTop();

		s-top > 0 ? $off.addClass('sticky').css('left',left+'px') : $off.removeClass('sticky').css('left','auto')
			
	});
});
</script>
<style>
#topics ul.topics{
	margin:0;
	padding:0;
}
#topics .topics li{
	margin-top:1.5em;
	padding-bottom:1em;
	border-bottom:solid 1px #e8e8e8;
	list-style:none;
}
#topics .topics h3{
	margin:0.4em 0;
	font-weight:700;
	font-size:1.1em;
	@font-family: '宋体',FreeSans,Arimo,"Droid Sans",Helvetica,Arial,sans-serif;
	font-family: 'Helvetica Neue',Helvetica,Arial,Sans-serif;
}
#topics .topics h3 i{
	font-family:'Segoe UI', Arial, 'Microsoft Yahei', Simsun, sans-serif;;
}
#topics .topics .summary{
	display:inline;
}
#phasesTagBox{
	padding:1em 0;
	margin:0 0 1em 0;
	border-bottom:solid 1px #d2d2d2;
}
#phasesTagBox h3 a{
	display:inline-block;
	margin:0.2em 0.8em 0.5em 0;
	padding: 0.2em 0.8em;
	border: solid 1px #daedf4;
	border-radius: 0.8em;
}
#phasesTagBox h3 a:hover, #phasesTagBox h3 a.active{
	color:#fff;
	background:#2d5ca4;
	border:solid 1px #fff;	
}
#phasesTagBox ul{
	margin:0.5em 0 0 0;
	padding:0.8em 0 0 0;
	border-top:solid 1px #e8e8e8;
}
#phasesTagBox ul li{
	margin-right:1em;
	margin-bottom:1em;
	display:inline-block;
}
#phasesTagBox ul li.active{
	font-size:1.1em;
	font-weight: bold;
}
.abs{
	position:absolute;
	z-index:1000;
	border-bottom: solid 3px #53A153;
}
ul.topics li{
	position:relative;
	min-height:8em;
}
ul.topics li .wrap{
    background:#fff;
	padding-bottom:0.3em;
}
.allContent{
}
.off{
    position:absolute;
    right:2.2em;
    top:0;
    z-index:100;
}
.sticky {
  position: -webkit-sticky;
  position:sticky;
  position: fixed;
  top: 4em;
}
@media (min-width: 48em) {
	#topics li .wrap{
		margin-right:5em;
	}
	#phasesTagBox ul li{
		margin-bottom:0.2em;
	}
}

</style>
</head>

<body>

<div class="wrapper" ng-controller="mainCtrl">

	<header>
		@include('includes.top')
	</header>

	<section id="main" class="pure-g"  ng-hide="alert">
	
		<article id="content" class="pure-u-1 pure-u-md-3-4">
		
			<div id="topics" ng-controller="topicsCtrl">
			
			
				<div ng-hide="topics&&1">
					@include('includes.ng-template.loading')
				</div>
				
				<div id="phasesTagBox" ng-init="init(catId)" ng-cloak ng-show="phases" ng-controller="phasesTagCtrl">
					<h3>
						<span>
							<a ng-repeat="phase in phases" ng-href="/cat/{{phase.id}}/topics" ng-class="phase.id*1===pid*1?'active':''"  ng-bind="phase.name"></a>
						</span>
					</h3>
					<ul>
						<li ng-repeat="sub in children" ng-class="sub.id*1===catId*1?'active':''">
							<a ng-href="/cat/{{sub.id}}/topics" ng-bind="sub.name"></a>
							<i ng-bind="'('+ sub.topic_num+')'"></i>
						</li>
					</ul>	
				</div>					
				
				<hgroup ng-cloak ng-show="topics">
					<h2 class="c2" ng-bind="title"></h2>
					<h4>包含 <b ng-bind="total"></b> 个微话题</h4>
				</hgroup>
				
				<div ng-cloak ng-show="catId>0&&topics&&topics.length===0">
					<br>
					<br>
					该话题下暂时还没有相关内容，你可以创建第一个相关微话题哦。
					<br>
					<br>
				</div>				
				
				<ul ng-cloak ng-show="topics" class="topics">
					<li ng-repeat="topic in topics">
						<div class="topic" ng-init="init(1)" ng-controller="topicCtrl">
							
									        	<div class="userBox right">
										            <div class="portrait">
										                <a target="_blank" ng-href="/user/profile/{{topic.user.id}}"><img ng-src="{{topic.user.portrait}}" /></a>
										            </div>		
									            </div>
									            
									         <div class="wrap" ng-class="{'abs':topic.showAll}">    
									            									    
												<h3 class="title"><i class="type" ng-bind="topic.type*1==0?'提问':'分享'"></i> &nbsp;<a target="_blank" ng-bind="topic.tit" ng-href="/topic/{{topic.id}}"></a></h3>
									            <div class="userBox">
						            				<a target="_blank" ng-href="/user/profile/{{topic.user.id}}" ng-bind="topic.user.nicknm" class="nicknm"></a>
										            <strong ng-bind="topic.user.job_label"></strong>									            
									            </div>
									            <div class="summary" ng-bind="topic.desc" ng-hide="topic.showAll"></div>
									            <div class="allContent" ng-bind-html="topic.txt" ng-if="topic.showAll"></div>
									            <a href="javascript:void(0);" class="off" ng-if="topic.showAll"  ng-click="topic.showAll=!topic.showAll"><i class="fa fa-times fa-2x"></i></a>
									            <a href="javascript:void(0);" class="small" ng-show="topic.desc.length>96" ng-bind="topic.showAll?'收起':'显示全部'" ng-click="topic.showAll=!topic.showAll"></a>
									            
									            <div class="replyRelBox">
									               <div class="unhighlight">
										            	<span ng-bind="topic.pub | dateFormat:'MM-dd'"></span>
                                                                                               	&nbsp;&nbsp;<i class="fa fa-eye"></i> 围观 <span ng-bind="topic.views"></span>&nbsp;&nbsp;
										                <a href="javascript:void(0);" ng-hide="topic.type*1==0" ng-click="up(topic)">
										                	<i class="fa fa-thumbs-up"></i>
										                	 支持
										                	 <b ng-bind="topic.like"></b>
										                </a>
										                
										                <a href="javascript:void(0);" ng-hide="topic.type*1==0" ng-click="down(topic);">
										                		<i class="fa fa-thumbs-down"></i>
										                		反对 
										                		<b ng-bind="topic.dislike"></b>
										                </a>
										                
										                <a href="javascript:void(0);" ng-click="getReplies(topic)">
										                	<i class="fa fa-comments"> </i>
										                	<span ng-bind="topic.reply_num>0?topic.lookTip||'查看回复':'回复'"></span>
										                 	<b ng-bind="topic.reply_num"></b>
										                </a>
										                <a target="_blank" ng-href="[[$app_url]]/topic/{{topic.id}}" @ng-click="topic.replying = !topic.replying">
										                	<i class="fa fa-reply"></i> 回复
										                </a>
									                </div>
									                
									                <div class="replyInputBox" ng-show="topic.replying">
									                    <textarea ng-model="topic.replyText"></textarea>
									                    <div class="btnBox">
										                    <button class="button-small pure-button" ng-click="cancel(topic);">取消</button>
										                    <button class="pure-button pure-button-primary" ng-click="replyf(topic);">提交</button>
									                    </div>
									                </div>
									            </div>
									        
									    	</div>
									
								<div ng-show="topic.toggle" ng-include="topic.tmplName"></div>							
							</div>
                                                <!-- 列表中间插入广告位 -->
                                                <div ng-if="$index == 5">
                                                <script id="adloc_2" ng-src="/ad/show?location=2"></script>
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
		
				@include('includes.aside')
				
				<div id="cats" style="display:none;">
					<h1>分类</h1>
					<ul qet-tag-cloud="cats">
						<li class="tag-ball">
							<span class="tag tag-{{$index}}" ng-repeat="cat in cats" ng-bind="cat.name"></span>
						</li>
					</ul>
				</div>
		</aside>		
		
	
	</section>

	@include('includes.footer')

</div>
@include('includes.ng-template.replies')
@include('includes.ng-template.comments')
<!-- 底部固定广告位 -->
<script id="adloc_1" src="/ad/show?location=1"></script>
</body>
</html>









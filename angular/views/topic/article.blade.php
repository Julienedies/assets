<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script src="[[$assets_url]]/js/topic/topic.min.js"></script>
<script>
var _etApp = etApp($, angular, etConfig);
topic($, angular, etConfig, _etApp);
</script>
<style>
.repliesBox{
	width:96%;
	margin:1em 0 0 0;
	border:none;
	padding:0 2%;
	background: #E4E4E4;
}
.repliesBox .item{
	margin-bottm：1.4em;
}
.topicRel li{
	*margin-left:1.3em;
	*list-style:square outside none;
	margin:0.5em 0;
}
</style>
</head>

<body>

<div class="wrapper" ng-controller="mainCtrl">

@include('includes.top')

<section id="main" class="pure-g" ng-init="init()" ng-controller="topicCtrl">

	<article id="content" class="pure-u-1 pure-u-md-3-4"  ng-hide="alert">
	
				<div ng-hide="topic">
					@include('includes.ng-template.loading')
				</div>	
			
			    <div ng-cloak ng-show="topic">
			    
			        <div class="userBox right" >
				            <div class="portrait">
				                <a target="_blank" ng-href="/user/profile/{{topic.user.id}}"><img ng-src="{{topic.user.portrait}}" /></a>
				            </div>
			        </div>	
			        
			        <div>		        
			        	<h2 class="title">
			        		<i class="type" ng-bind="topic.type*1==0?'提问':'分享'"></i> &nbsp;
			        		<span ng-hide="topic.editing" ng-bind="topic.tit"></span>
			        	</h2>
			        	
			        	<div class="userBox">
				            <a target="_blank" ng-href="/user/profile/{{topic.user.id}}" ng-bind="topic.user.nicknm" class="nicknm"></a>
				            <strong ng-bind="topic.user.job_label"></strong>			        	
			        	</div>
			        	
			            <div class="topicTxt" ng-hide="topic.editing" ng-bind-html="topic.txt|unsafe"></div>
			            
			            <div ng-show="topic.editing" ng-include="topic.editTmpl"></div>
			            
			            
			            <div class="replyRelBox">
			            
			               <div class="unhighlight">
				            	<span ng-bind="topic.pub | dateFormat:'MM-dd'"></span>
                                                &nbsp;&nbsp;<i class="fa fa-eye"></i> 围观 <span ng-bind="topic.views"></span>&nbsp;&nbsp;
				            	<span ng-hide="topic.type*1==0">
				                	<a href="javascript:void(0);" ng-click="up(topic)">
				                		<i class="fa fa-thumbs-up"></i>
				                		支持 <b ng-bind="topic.like"></b>
				                	</a>
				                	
				                	<a href="javascript:void(0);" ng-click="down(topic);">
				                		<i class="fa fa-thumbs-down"></i>
				                		反对 <b ng-bind="topic.dislike"></b>
				                	</a>
				                </span>
				                <a href="javascript:void(0);" ng-click="topic.replying = !topic.replying">
				                	<i class="fa fa-reply"></i> 回复
				                </a>
				                <a href="javascript:void(0);" ng-show="user.id===topic.user.id" ng-click="editTopic(topic)">
				                	<i class="fa fa-pencil"></i> 修改
				                </a>
			               </div>
			                
			                <div class="replyInputBox" ng-show="topic.replying">
			                
			                    <textarea id="redit" placeholder="至少要填20个字符哦." ng-model="topic.replyText" reditor></textarea>
			                    
			                    <div class="btnBox">
				                    <button class="button-small pure-button" ng-click="cancel(topic);">取消</button>
				                    <button class="pure-button pure-button-primary" ng-click="replyf(topic);">提交</button>
			                    </div>
			                    
			                </div>
			                
			            </div>
			            
			            <h3><b ng-bind="topic.reply_num"></b> <strong>个回复</strong></h3>
			            
			            <!-- 广告位3 -->
                        <script id="adloc_3" src="/ad/show?location=3"></script>

			            <!-- 话题回复列表 start -->
			            @include('includes.ng-template._replies')
			            <!-- 话题回复列表 end -->

			        </div>
			    </div>
			
	</article>
	
	<!-- 边栏 -->
	<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
		
		<div class="topicRel" ng-controller="topicRelCtrl">
			<h3>相关微话题</h3>
			<ul>
				<li ng-repeat="topic in topicRel">
					<a ng-bind="topic.tit" ng-href="/topic/{{topic.id}}"></a>
				</li>
			</ul>
		</div>
		@include('includes.aside')
	</aside>	
	
</section>

@include('includes.footer')
@include('includes.ng-template.comments')
</div>
</body>
</html>










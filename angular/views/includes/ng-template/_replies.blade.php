
			            <div class="repliesBox" ng-cloak ng-init="init(topic)" ng-controller="repliesCtrl">

			            	<div class="item" ng-repeat="reply in replies" ng-init="init(reply)" ng-controller="replyCtrl">

						        	<div class="userBox left">
							            <div class="portrait">
							                <a target="_blank" ng-href="/user/profile/{{reply.user.id}}" ><img ng-src="{{reply.user.portrait}}" /></a>
							            </div>
						            </div>

						        <div class="wrap">

			            			<div class="userBox">
			            				<a target="_blank" ng-href="/user/profile/{{reply.user.id}}" ng-bind="reply.user.nicknm" class="nicknm"></a>
							            <strong ng-bind="reply.user.job_label"></strong>
			            			</div>
			            			
			            			<div class="replyBox">
			            			
							            <div class="replyText" ng-hide="reply.editing" ng-bind-html="reply.txt|unsafe"></div>
							            
								           <div class="replyRelBox">
								              <div class="unhighlight">
								            	<span ng-bind="reply.pub | dateFormat:'MM-dd'"></span>
								            	
								                <a href="javascript:void(0);" ng-click="up(reply);">
								                	<i class="fa fa-thumbs-up"></i>
								                	支持 <b ng-bind="reply.like"></b>
								                </a>
								                
								                <a href="javascript:void(0);" ng-click="down(reply);">
								                	<i class="fa fa-thumbs-down"></i>
								                	反对 <b ng-bind="reply.dislike"></b>
								                </a>
								                
								                <a href="javascript:void(0);" ng-click="getRcomments(reply);">
								                	<i class="fa fa-comments-o"></i>
								                	<span ng-bind="reply.comment_num>0?reply.lookTip||'查看评论':'评论'"></span>
								                	<b ng-bind="reply.comment_num"></b>
								                </a>
								                
								                <a href="javascript:void(0);" ng-hide="reply.user.id === user.id" ng-click="reply.repling=!reply.repling;">
								                	<i class="fa fa-reply"></i> 回复
								                </a>
								                <a href="javascript:void(0);" ng-show="reply.user.id === user.id" ng-click="editReply(reply)">
								                	<i class="fa fa-pencil"></i> 修改
								                </a>
								            </div> 
								            
							                <div ng-show="reply.editing" ng-include="reply.editTmpl"></div>
							                
							                <div class="replyInputBox" ng-show="reply.repling">
							                    <textarea ng-model="reply.replyText"></textarea>
							                    <div class="btnBox">
							                 		<button class="button-small pure-button" ng-click="cancel(reply);">取消</button>
							                    	<button class="pure-button pure-button-primary" ng-click="replyf(reply);">提交</button>
							                    </div>
							                </div>
							                
							            </div>

						            </div>

			            		</div>

								<div class="rcommentsBox" ng-show="reply.toggle" ng-include="reply.tmplName"></div>

			            	</div>
			            </div>

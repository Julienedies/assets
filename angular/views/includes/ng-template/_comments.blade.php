
			            <div class="rcomments" ng-init="init(reply)" ng-controller="commentsCtrl">
							
			            	<div ng-repeat="comment in comments" ng-init="init(comment)" ng-controller="commentCtrl">
			            	
									<div class="userBox left">
						           		 <div class="portrait">
						               		 <a target="_blank" ng-href="/user/profile/{{comment.user.id}}" ><img ng-src="{{comment.user.portrait}}" class="flow-img" /></a>
						           		 </div>
									</div>
						        
						        <div class="wrap">

									<div class="userBox">
						           		 <p class="nicknm">
						           		     <a target="_blank" ng-href="/user/profile/{{comment.user.id}}" ng-bind="comment.user.nicknm"></a>
						           		     <i ng-show="comment.puser.nicknm" ng-bind="' @ '"></i>
						           		     <a target="_blank" ng-href="/user/profile/{{comment.puser.id}}" ng-bind="comment.puser.nicknm"></a>
						           		 </p>
									</div>

		            				<div class="replyBox">

						            	<div class="replyText" ng-bind="comment.txt"></div>
						            	
						            	<div class="replyRelBox">
						            	
						            		<div>
							            		<span ng-bind="comment.pub | dateFormat:'MM-dd'"></span>
							               	 	<a href="javascript:void(0);" ng-click="up(comment);">支持 <b ng-bind="comment.like"></b></a>
							                	<a href="javascript:void(0);" ng-click="down(comment);">反对 <b ng-bind="comment.dislike"></b></a>
							                	<a href="javascript:void(0);" ng-hide="comment.user.id === user.id" ng-click="comment.replying=!comment.replying">回复</a>
							                	<!-- <a href="javascript:void(0);" ng-show="comment.user.id === user.id" ng-click="editComment(comment)"></a>  -->
							                	<a href="javascript:void(0);" ng-show="comment.user.id === user.id" ng-click="remove(comment, $index)">删除</a>
						                	</div>
						                	
						                	<div ng-show="comment.editing" ng-include="comment.editTmpl"></div>
						                	
						                	<div class="replyInputBox" ng-show="comment.replying">
						                	
						                    	<textarea ng-model="comment.replyText" placeholder=""></textarea>
												<div class="btnBox">
						                    		<button class="button-small pure-button" ng-click="cancel(comment);">取消</button>
						                   			<button class="pure-button pure-button-primary" ng-click="replyf(comment);">提交</button>
												</div>
												
						                	</div>
						                	
						            	</div>
						            	
									</div>	
		            			
			            		</div>
			            		
			            	</div>
			            </div>


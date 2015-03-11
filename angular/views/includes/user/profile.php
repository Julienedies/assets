<style>
.profile{
	font-family:'Microsoft Yahei';
	color:#000;
}
.userType {
	padding:0.5em 0;
}
.userType img{
	margin:0.5em 0.1em;
}
.work li, .edu li{
	margin-bottom:0.5em;
}
.work, .edu, .know{
	padding:0.5em 0.5em 0.5em 1em;
}
label{
	font-weight:bold;
}
.base li, .kuow li{
	padding:0 0 0.5em 0;
}
.pure-u-1-3{
        width:33%;
}

</style>

		<div class="profile" ng-cloak ng-hide="profileEditing">
		
			<!-- 
				   		<div class="pure-g" ng-show="!uid&&user.id">
							<a class="pure-button pure-u-1-3" @href="/user/edit" ng-click="editProfile()"><i class="fa fa-edit"></i> 编辑资料</a>
							<a class="pure-button pure-u-1-3" href="/user/income" class="pure-button button-blue"><i class="fa fa-money"></i> 回享收益</a>
							<a class="pure-button pure-u-1-3" href="/user/settings"><i class="fa fa-cog"></i> 账户设置</a>
				   		</div>						
			 -->
				    <div>
				    
				    	<div class="base">
							<div class="left ma-1"><img ng-src="{{user.portrait}}" style="width:100px;" /></div>
							
							<ul>
								<li><span class="f1" ng-bind="user.nicknm"></span></li>
								<!--<li><span ng-bind="user.p_desc"></span></li>-->
								<li>声誉值：<span ng-bind="user.reputation"></span></li>
								<li>职业标签：<span class="c2" ng-bind="user.job_label"></span></li>				
								<li ng-cloak ng-if="user.invite_code">邀请码：<span ng-bind="user.invite_code"></span></li>				
							</ul>
							<!-- <div class="clear">个性签名：<span ng-bind="user.p_desc||'还没签名.'"></span></div> -->
						</div>	
							
						<div class="userType clear pure-g">
							<div class="pure-u-1-3"><img ng-src="/assets/vcn/img/user/icon/icon_verify{{user.is_certified?'':'_not'}}.png" />
								  <br>普通认证用户<span ng-bind="user.is_certified?'激活':'未激活'"></span>
							</div>
							<div class="pure-u-1-3"><img ng-src="/assets/vcn/img/user/icon/icon_pay{{user.is_paid?'':'_not'}}.png" />
								  <br>付费用户<span ng-bind="user.is_paid?'激活':'未激活'"></span>
                                                                <div ng-if="user.paid_time" ng-cloak>到期时间：<span ng-bind="user.paid_time"></span></div>
						   </div>
							<div class="pure-u-1-3"><img ng-src="/assets/vcn/img/user/icon/icon_person{{user.is_qr?'':'_not'}}.png" />
								  <br>刻特权用户<span ng-bind="user.is_qr?'激活':'未激活'"></span>
							</div>
                                                        <p class="clear" style="text-align:right;"><a target="_blank" href="/topic/53e4947b379d7163698b456e">什么是用户身份？戳我&gt;&gt;</a></p>
						</div>
							
				   		<div class="pd-08-0" ng-show="!uid&&user.id">
							<a style="margin-bottom:10px;" class="pure-button button-green" @href="/user/edit" ng-click="editProfile()"><i class="fa fa-cog"></i> 编辑资料</a>
							&nbsp;&nbsp;
							<a href="/user/income" class="pure-button button-blue"><i class="fa fa-database"></i> 回享收益</a>
							&nbsp;&nbsp;
							<a href="/user/topics" class="pure-button"><i class="fa fa-list"></i> 我的微话题</a>
							&nbsp;&nbsp;
							<a href="/user/replies" class="pure-button"><i class="fa fa-comments"></i> 我的回复</a>
				   		</div>
				   		
				   		<div class="pd-08-0" ng-hide="!uid&&user.id">
							<div>
								<a href="javascript:void(0)" ng-click="lookFollowee()">
									关注了<i ng-bind="followee"></i>人
								</a>
								&nbsp;&nbsp;&nbsp;
								<a href="javascript:void(0)" ng-click="lookFollower()"> 
									被<i ng-bind="follower"></i>人关注
								</a> 
							</div>
							<div ng-include="followTmpl"></div>
							
							<div class="pd-08-0">
								<a ng-if="!followed" class="pure-button button-green" ng-click="follow(uid)">关注</a>
								<a ng-if="followed" class="pure-button button-green" ng-click="unfollow(uid)">取消关注</a>
							</div>
				   		</div>					   										
						
				    </div>
				    

					<h3><span class="f1 t1">个人背景<span></h3>
				
					<div class="work">
						<h3 class="f2">职业背景</h3>
						<ul>
							<li ng-repeat="work in user.work_exp||[]">
									<div class="f1" ng-bind="work.position"></div>
									<div ng-bind="work.name"></div>
									<div class="f6">
										<span ng-bind="work.start_year"></span>&nbsp;-&nbsp;<span ng-bind="work.end_year"></span>
									</div>										
							</li>
						</ul>	
					</div>
													
				
					<div class="edu">
						<h3 class="f2">教育背景</h3>
						<ul>
							<li ng-repeat="edu in user.edu_exp||[]">
									<div class="f1" ng-bind="edu.name"></div>
									<div ng-bind="edu.major"></div>
									<div class="f6">
										<span ng-bind="edu.start_year"></span>&nbsp;-&nbsp;<span ng-bind="edu.end_year"></span>
									</div>
							</li>
						</ul>
					</div>
					
					<div class="kuow">
						<h3><span class="f1 t1">职业知识统计</span></h3>
						<ul>
							<li ng-repeat="item in cat_score">
								<div ng-bind="item.cat_name"></div>
								<div style="width;100%;background:#E0E0E0;">
									<span style="display:inline-block;background:#9ad03c;width:{{item.size+'%'}}">
									&nbsp;
									</span>
									<i ng-bind="'&nbsp;'+item.score"></i>
								</div>
							</li>
						</ul>						
					</div>						
					
					
		</div>	

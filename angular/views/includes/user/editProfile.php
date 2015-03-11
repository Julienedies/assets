
<section class="profile" ng-init="init(user)" ng-controller="editProfileCtrl">

	<div>
	
			<p class="warning" ng-bind="msg"></p>
			
			<!-- 基本资料start  --> 
			
				    	<div class="base">
							<div class="left ma-1" style="margin-top:0;">
								<img ng-src="{{user.portrait}}" style="width:6em;" /><br/>
					        	<div style="padding:0.5em 0;"><b class="pure-button button-blue" onclick="$('#headphoto').click();"><i class="fa fa-edit"></i>修改头像</b></div>
					        	<form style="display:none;" method="post" enctype="multipart/form-data" action="/api/user/portrait/upload">
					        		<input type="file" name="headphoto" id="headphoto" et-upload="uploadConf" />
					        		<input type="hidden" name="portrait" ng-model="user.portrait_id" />
					        	</form>								
							</div>
							
							<ul class="pure-form">
								<li>用户名：<input type="text" placeholder="用户名"  ng-model="user.nicknm"></li>
								<li><span ng-bind="user.p_desc"></span></li>
								<li>职业标签：<input type="text" placeholder="签名" ng-model="user.job_label"></li>				
							</ul>
							<!-- <div class="clear">个性签名：<input class="pure-input-1" type="text" placeholder="个人简介" ng-model="user.p_desc"></div> -->
						</div>		
						
						<div class="userType clear pure-g">
							<div class="pure-u-1-3"><img ng-src="/assets/vcn/img/user/icon/icon_verify{{user.is_certified?'':'_not'}}.png" />
								  <br>普通认证用户<span ng-bind="user.is_certified?'激活':'未激活'"></span>
							</div>
							<div class="pure-u-1-3"><img ng-src="/assets/vcn/img/user/icon/icon_pay{{user.is_paid?'':'_not'}}.png" />
								  <br>付费用户<span ng-bind="user.is_paid?'激活':'未激活'"></span>
						   </div>
							<div class="pure-u-1-3"><img ng-src="/assets/vcn/img/user/icon/icon_person{{user.is_qr?'':'_not'}}.png" />
								  <br>刻特权用户<span ng-bind="user.is_qr?'激活':'未激活'"></span>
							</div>
						</div>			
								
        	
	        <!-- 基本资料end  --> 
	        
	        
	        
	        <h3><span class="f1 t1">个人背景<span></h3>
	        
	        <!-- 工作经历start  -->    
	        
			<div class="work" ng-controller="worksExCtrl">
						<h3 class="f2">职业背景</h3>
						
						<div class="c2 button-add" ng-click="add()"><i class="fa fa-plus"> 添加工作经历</i></div>
						
						<div ng-show="addIng" ng-include="addTmpl"></div>
						
						<ul>
							<li ng-repeat="work in user.work_exp||[]" ng-init="init($index)" ng-controller="workExCtrl">
								<div ng-hide="editing">
									<div class="f1">
										<span ng-bind="work.position"></span>&nbsp;&nbsp;
										<a href="javascript:void(0);" ng-click="edit(work)" ><i class="c2 fa fa-pencil"></i></a>
									</div>
									<div ng-bind="work.name"></div>
									<div class="f6">
										<span ng-bind="work.start_year"></span>&nbsp;-&nbsp;<span ng-bind="work.end_year"></span>
									</div>	
									
									<!--	
									<div>
										 <button class="pure-button button-blue" ng-click="remove(user.work_exp, $index)" ><i class="fa fa-trash-o"></i></button>
									</div>
									-->
								</div>
								
								<div ng-show="editing" ng-include="editTmpl"></div>
							</li>
						</ul>	
						
					</div>	   	        
	        
	        <!-- 工作经历end   --> 
	        
					     	
	        
	        <!-- 教育经历start   -->    
			
				<div class="edu" ng-controller="edusExCtrl">	
				
						<h3 class="f2">教育背景</h3>
						
						<div class="c2 button-add" ng-click="add()"><i class="fa fa-plus"> 添加教育经历</i></div>
						
						<div ng-show="addIng" ng-include="addTmpl"></div>
						
						<ul>
							<li ng-repeat="edu in user.edu_exp||[]" ng-init="init($index)" ng-controller="eduExCtrl">
								<div ng-hide="editing">
									<div>
										<span class="f1" ng-bind="edu.name"></span>&nbsp;&nbsp;
										<a href="javascript:void(0);" ng-click="edit(edu)" ><i class="c2 fa fa-pencil"></i></a>	
									</div>
									<div ng-bind="edu.major"></div>
									<div class="f6">
										<span ng-bind="edu.start_year"></span>&nbsp;-&nbsp;<span ng-bind="edu.end_year"></span>
									</div>
									
									<!--
									 <div>
										<button class="pure-button button-blue" ng-click="remove(user.edu_exp, $index)" ><i class="fa fa-trash-o"></i></button>
									</div>
									 -->
								</div>
								
								<div ng-show="editing" ng-include="editTmpl"></div>
							</li>
						</ul>
											
				</div>		
						
			<!-- 教育经历end  -->  	
			
				<br />			
				<br />
			<div class="pure-u-1 pure-u-md-3-4"> 
				<button class="pure-button button-blue" ng-click="uneditProfile()">取消编辑</button>
	        	<button class="pure-button button-green" ng-click="submit()"><i class="fa fa-cog"></i> 编辑完成</button>
	        </div>
	        
	</div>	

</section>

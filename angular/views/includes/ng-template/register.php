
<section id="regBox" ng-controller="regCtrl" ng-cloak ng-show="showReg">

	<div class="pure-form pure-form-stacked">
	
			<p class="warning" ng-bind="stat"></p>
			
			<a href="javascript:void(0);" class="pure-button close" ng-click="toggleRegBox()">X</a>
			
			<legend>注册 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="javascript:void(0);" ng-click="toggleLoginBox()">登录</a></legend>
			
			<div class="pure-u-1 pure-u-md-3-4">
		        <label for="email">邮箱</label>
		        <input class="pure-input-1" id="email" type="email" placeholder="邮箱" ng-model="user.email">
		        <p class="warning" ng-bind="msg.email"></p>
	        </div>	
			
			<div class="pure-u-1 pure-u-md-3-4">        
		         <label>用户名</label>
		         <input class="pure-input-1" id="nicknm" type="text" placeholder="用户名"  ng-model="user.nicknm" et-enter-press="submit">
		         <p class="tip">中文用户名至少2个,英文字符至少5个</p>
		         <p class="warning" ng-bind="msg.nicknm"></p>     
	        </div>	
			
			<div class="pure-u-1 pure-u-md-3-4">
		        <label for="password">密码</label>
		        <input class="pure-input-1" id="password" type="password" placeholder="密码"  ng-model="user.password">
		        <p class="tip">密码至少6个字符</p>
		        <p class="warning" ng-bind="msg.password"></p>
	        </div>	
			
			<div class="pure-u-1 pure-u-md-3-4">
		        <label for="invite">推荐码(可选)</label>
		        <input class="pure-input-1" id="invite" type="text" placeholder="推荐码" ng-model="user.invite">
		        <p class="warning" ng-bind="msg.invite"></p>	
	        </div>	
			
			<div class="pure-u-1 pure-u-md-3-4">        
	        	<div id="preview" class="right" ng-show="previewSrc"><img ng-src="{{previewSrc}}" /></div>
	        	<label>用户头像(可选)</label>
	        	<form method="post" enctype="multipart/form-data" action="/api/user/portrait/upload" >
	        		<input type="file" name="headphoto" et-upload="uploadConf" />
	        		<input type="hidden" name="portrait_id" ng-model="user.portrait_id" />
	        	</form>
	        	<br/>
	        </div> 
	
			<div class="pure-u-1 pure-u-md-3-4"> 
	        	<button class="pure-button pure-button-primary pure-input-1" ng-click="submit()">注册</button>
	        </div>
	        
	</div>	

</section>

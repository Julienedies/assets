
<section id="loginBox" ng-cloak ng-controller="loginCtrl" ng-show="showLogin">

    <div class="pure-form pure-g">
    
    	<a href="javascript:void(0);" class="pure-button close" ng-click="toggleLoginBox()">X</a>
    	
        <p class="warning" ng-bind="msg"></p>
        
        <legend>登录 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="javascript:void(0);" ng-click="toggleRegBox()">注册</a></legend>
        
        <div class="pure-group pure-u-1 pure-u-md-3-4">

                <input class="pure-input-1" type="text" name="email" required  placeholder="请输入邮箱" ng-model="user.email">

                <input class="pure-input-1" type="password" name="password" required  placeholder="请输入密码" ng-model="user.password"  et-enter-press="submit">

            
           	    <button class="pure-button pure-button-primary pure-input-1" ng-click="submit()">登录</button>
           	    
 				<p>
	                <label>
	                    <input class="inline" name="remember" type="checkbox" value="1" checked > 记住登录
	                </label>  
                </p>        	    
            
        </div>
        
    </div>
    
</section>

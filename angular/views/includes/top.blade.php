<header id="top">

	<div class="wrap">
		<a class="logo" href="[[$app_url]]">企业时间</a>
		
		<div class="btnBox">
			<a href="javascript:void(0);" id="topAddBtn" ng-click="toggleNewTopicBox()"><i class="fa fa-plus"></i></a>
			<a href="/store">商城</a>
			<a href="/user/me" ng-bind="user.nicknm"></a>	
			<a href="javascript:void(0);" id="showMenuBtn" ng-click="toggleMenuBox()"><b>&nbsp;&nbsp;=&nbsp;&nbsp;</b><sup class="" ng-bind="msgNum" ng-show="msgNum>0"></sup></a>	
				
			<span id="menuBox" class="{{'show-'+showMenu}}" ng-if="user">
				<a href="javascript:void(0);" id="loginBtn" ng-cloak ng-click="toggleLoginBox()" ng-show="!user.id">登录</a>
				<a href="javascript:void(0);" ng-cloak ng-click="logout()" ng-show="user.id">退出</a>
				<a href="javascript:void(0);" ng-cloak ng-click="toggleRegBox()" ng-show="!user.id">注册</a>
<!--
				<a href="/user/notify" ng-show="user.id">消息 <sup class="" ng-bind="msgNum" ng-show="msgNum>0"></sup></a>
-->
		    </span>
		</div>
	</div>
	
</header>

<!--[if lt IE 9]>
      <div style="position:fixed;background:#fff;top:2.4em;bottom:0;left:0;right:0;z-index:10001;text-align:center;line-height:2;">您的浏览器太老土啦，请升级<a href="http://browsehappy.com/" target="_blank">新版浏览器</a>，或者安装<a href="http://www.google.com/chromeframe/?redirect=true"  target="_blank">Google Chrome浏览器内嵌框架</a>！</div>
<![endif]-->

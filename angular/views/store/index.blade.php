<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script src="[[$assets_url]]/js/libs/angular/ui-bootstrap-custom-tpls-0.10.0.js"></script>
<script src="[[$assets_url]]/js/store/store.min.js"></script>
<script>
var _etApp = angular.module('etApp', ['ngRoute', 'ngSanitize', 'etServices', 'etDirectives', 'etFilters', 'etAnimations', 'etControllers', 'ui.bootstrap']);
var _etApp = etApp($, angular, etConfig, _etApp);
store($, angular, etConfig, _etApp);
</script>
<style>
.line-through{text-decoration:line-through;}
</style>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
		@include('includes.top')

		<section id="main" class="pure-g" ng-controller="storeCtrl" ng-hide="alert">
		
			<div ng-hide="items">
				@include('includes.ng-template.loading')
			</div>
		
			<article id="content" ng-cloak class="pure-u-1 pure-u-md-3-4" ng-show="items">
			
				<!-- 我的积分  -->
				<h2 ng-cloak ng-if="user" ng-show="user.id" style="margin-bottom:0;padding-bottom:20px;border-bottom:1px solid #CCC">我的积分余额：<b>{{user.reputation}}</b> 声誉</h2>
                                <!-- 折扣 -->
                                <div style="background:#F6F6F6;padding:10px;margin-bottom:10px;">
                                        <h3 class="c2">用户身份有折扣惊喜</h3>
                                        <div class="left" style="width:200px"><img src="[[$assets_url]]/img/user/icon/icon_verify.png" ><span style="font-size:2em;color:#2DBCF1;"> 95%</span><br>普通认证用户</div>
                                        <div class="left" style="width:200px"><img src="[[$assets_url]]/img/user/icon/icon_pay.png" ><span style="font-size:2em;color:#6BBD42;"> 85%</span><br>付费用户</div>
                                        <div class="left"><img src="[[$assets_url]]/img/user/icon/icon_person.png" ><span style="font-size:2em;color:#2558B7;"> 75%</span><br>刻特权用户</div>
                                        <div class="clear"></div>
                                        <p style="text-align:right;"><a target="_blank" href="/topic/53e4947b379d7163698b456e">什么是用户身份？戳我&gt;&gt;</a></p>
                                </div>
				
				<!-- 商品列表 -->
				<div class="items">
					<div class="item" ng-repeat="item in items" style="border:1px solid #CCC;width:300px;float:left;margin:4px;padding:10px;">
                                                <div style="width:280px;overflow:hidden;"><img style="height:280px;" ng-src="{{item.img}}"></div>
                                                <div style="background:#FFF;padding:10px;">
                                                <h2 style="height:44px;overflow:hidden;" class="f1" ng-bind="item.name"></h2>
                                                <p style="height:72px;overflow:hidden;" ng-bind="item.desc"></p>
                                                <p class="c2" ng-class="{'line-through':(user.is_qr||user.is_paid||user.is_certified)}">兑换所需：<span ng-bind="item.cost"></span> 声誉</p>
                                                <p ng-if="user.is_qr||user.is_paid||user.is_certified" class="c2">折后价：<span ng-bind="{{(user.is_qr?0.75:user.is_paid?0.85:0.95)*item.cost}}"></span> 声誉</p>
                                                <p class="c2">剩余数量：<span ng-bind="item.num"></span></p>
                                                <p ng-hide="!user.id" style="text-align:right;">
                                                        <button ng-click="buy(item)" class="pure-button pure-button-primary" ng-class="{'pure-button-disabled':!item.num}">立即兑换</button></p>
                                                </div>
					</div>
                                        <div class="clear"></div>
				</div>

                                <!-- 注解 -->
                                <div><h2>说明：</h2><ul>
                                        <li>1. 除“付费特权”和“刻特权”之外，其他商品数量有限，先到先得，兑完即止；</li>
                                        <li>2. 当积分余额达到物品兑换所需条件时方可进行兑换；</li>
                                        <li>3. 我们会定期更新商品种类和数量，请时刻关注我们；</li>
                                        <li>4. 本活动最终解释权归述酷所有。</li>
                                </ul></div>

				
				
			</article>
			
			<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
				@include('includes.aside')
			</aside>	
			
		</section>
	
		@include('includes.footer')
	
	</div>

</body>
</html>










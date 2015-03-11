<section ng-controller="notifyCtrl">

		<div class="pure-g" ng-show="!uid&&user.id">
				<a href="javascript:void(0);" class="pure-button pure-u-1-3" ng-click=""><i class="fa fa-bars"></i></a>
				<a href="javascript:void(0);" class="pure-button pure-u-1-3" ng-click=""><i class="fa fa-user"></i><i class="fa fa-user"></i></a>
				<a href="javascript:void(0);" class="pure-button pure-u-1-3" ng-click=""><i class="fa fa-heart"></i></a>
		</div>	
			
		<br>
		
	<div ng-show="msgNum===0">没有消息.</div>
	<div ng-show="msgNum>0">
	
		<div ng-repeat="(k, v) in list">
		
			<ul>
				<li ng-repeat="item in v">
					<div ng-bind-html="item"></div>
				</li>
			</ul>
			
		</div>
	
	</div>
	
</section>

    <div ng-controller="enjoyerShowCtrl">
		<div class="showProfits" ng-class="bg" ng-show="profits.length">
			<ul roll="profits">
				<li ng-repeat="item in profits">
					<a ng-bind="item.nicknm"></a>&nbsp;
					<span ng-bind="item.time"></span>&nbsp;收益 
					<span style="color:#fff45c" ng-bind="' ￥'+item.money"></span>
				</li>
			</ul>
		</div>
    </div>
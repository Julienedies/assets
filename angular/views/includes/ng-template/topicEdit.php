
<div class="pure-form pure-form-stacked pure-g reditBox" ng-init="init(copyTopic)" ng-controller="editTopicCtrl">

	<input class="pure-input-1" type="text" required ng-model="topic.tit">
	
	<textarea class="modify" ng-model="topic.txt" reditor="topic.txt"></textarea>
	
	<div class="btnBox">
		<button class="button-small pure-button" ng-click="editCancel();">取消</button>
		<button class="pure-button pure-button-primary" ng-click="submit();">提交</button>
	</div>
	
</div>


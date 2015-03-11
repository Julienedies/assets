
<div class="reditBox" ng-init="init(copyReply)" ng-controller="editReplyCtrl">

	<textarea class="modify" ng-model="reply.txt" reditor="reply.txt"></textarea>
	
	<div class="btnBox">
		<button class="button-small pure-button" ng-click="editCancel();">取消</button>
		<button class="pure-button pure-button-primary" ng-click="submit();">提交</button>
	</div>
	
</div>


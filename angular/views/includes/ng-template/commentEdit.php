
<div class="reditBox" ng-init="init(copyComment)" ng-controller="editCommentCtrl">

	<textarea class="modify" ng-model="comment.txt"></textarea>
	
	<div class="btnBox">
		<button class="button-small pure-button" ng-click="editCancel();">取消</button>
		<button class="pure-button pure-button-primary" ng-click="submit();">提交</button>
	</div>
	
</div>


<section>

	<ul>
		<li ng-repeat="people in followers">
			<a ng-href="/user/profile/{{people.id}}" ng-bind="people.nicknm"></a>
			<span ng-bind="people.job_label"></span>
		</li>
	</ul>
	
</section>
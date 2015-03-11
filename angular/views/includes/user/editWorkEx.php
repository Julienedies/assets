						
					
						
						<div class="pure-form pure-form-stacked" ng-init="init(editingWorkEx)" ng-controller="editWorkExCtrl">
								
								<div class="pure-u-1 pure-u-md-1-2">        
							         <label>公司名称</label>
							         <input class="pure-input-1" type="text" placeholder="公司名称" ng-model="newWorkEx.name">
						        </div>	
						        							
								<div class="pure-u-1 pure-u-md-1-2">
							        <label>职位</label>
							        <input class="pure-input-1" type="text" placeholder="职位" ng-model="newWorkEx.position">
						        </div>	
						        
								<div class="pure-u-1 pure-u-md-3-4">
							        <label>时间</label>
							        <select class="pure-input-1-3 inline" ng-model="newWorkEx.start_year" >
							        	<option ng-repeat="item in years" ng-selected="item.val==newWorkEx.start_year" value="{{item.val}}" ng-bind="item.text"></option>
							        </select>
							        <select class="pure-input-1-3 inline" ng-model="newWorkEx.end_year" >
							        	<option ng-repeat="item in years" ng-selected="item.val==newWorkEx.end_year" value="{{item.val}}" ng-bind="item.text"></option>
							        </select>							        
						        </div>		
						        
								<div class="pure-u-1 pure-u-md-3-4" style="display:none">
							        <label>在职</label>
							        <input class="pure-input-1" type="text" placeholder="在职" ng-model="newWorkEx.on_job">
						        </div>						        				        					        
	
								<div class="pure-u-1 pure-u-md-3-4"> 
									<button class="pure-button button-gray" ng-click="cancel()">取消</button>
						        	<button class="pure-button button-blue2 " ng-click="submit()">确认</button>
						        </div>
						        
						</div>		
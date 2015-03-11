					
					
					
					<div class="pure-form pure-form-stacked" ng-init="init(editingEduEx)" ng-controller="editEduExCtrl">
								
								<div class="pure-u-1 pure-u-md-1-2">        
							         <label>学校名称</label>
							         <input class="pure-input-1" type="text" placeholder="学校名称" ng-model="newEduEx.name">
						        </div>	
						        							
								<div class="pure-u-1 pure-u-md-1-2">
							        <label>专业</label>
							        <input class="pure-input-1" type="text" placeholder="专业" ng-model="newEduEx.major">
						        </div>	
						        
								<div class="pure-u-1 pure-u-md-3-4">
							        <label>时间</label>
							        <select class="pure-input-1-3 inline" ng-model="newEduEx.start_year" >
							        	<option ng-repeat="item in years" ng-selected="item.val==newEduEx.start_year" value="{{item.val}}" ng-bind="item.text"></option>
							        </select>								        
							        <select class="pure-input-1-3 inline" ng-model="newEduEx.end_year" >
							        	<option ng-repeat="item in years" ng-selected="item.val==newEduEx.end_year" value="{{item.val}}" ng-bind="item.text"></option>
							        </select>								        
						        </div>		
						        
								<div class="pure-u-1 pure-u-md-3-4" style="display:none">
							        <label>学位</label>
							        <input class="pure-input-1" type="text" placeholder="学位" ng-model="newEduEx.degree">
						        </div>						        				        					        
	
								<div class="pure-u-1 pure-u-md-3-4"> 
									<button class="pure-button button-gray" ng-click="cancel()">取消</button>
						        	<button class="pure-button button-blue2 " ng-click="submit()">确认</button>
						        </div>
						        
						</div>
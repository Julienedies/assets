
<section id="newTopicBox" ng-cloak ng-controller="newTopicCtrl" ng-show="showNewTopic">

    	<a href="#" class="pure-button close" ng-click="toggleNewTopicBox()">X</a>

        <p ng-bind="msg"></p>
        
        <h3>新微话题</h3>
    	
    	<p class="pure-g" ng-show="topic.type===undefined">
    		<a href="#" class="pure-button pure-u-1-2" ng-click="selectTopicType(0)">我要提问</a><a href="#" class="pure-button pure-u-1-2" ng-click="selectTopicType(1)">我要分享</a>
    	</p>
    	
    	<div ng-show="topic.type!==undefined">
    	
    		<div class="pure-form pure-form-stacked pure-g">
	            <div class="pure-u-1">
	            	<label>标题</label>
	                <input class="pure-input-1" type="text" required  placeholder="" ng-model="topic.tit">
	            </div>
	
	            <div class="pure-u-1">
	            	<label>内容</label>
	                <textarea id="nedit" class="pure-input-1" placeholder="" ng-model="topic.txt" reditor="topic.txt"></textarea>
	            </div>
	
				<div class="pure-u-1">
					<label>所属话题</label>
					<select class="pure-input-1" ng-model="topic.cat" ng-options="cat.name group by cat.parent for cat in cats">
						<option value="">请选择话题</option>
					</select>
				</div>
				
				<div class="pure-u-1">
	            	<button class="pure-button pure-button-primary pure-input-1" ng-click="submit()">提交</button>
	            </div>
	        </div>
	        
    	</div>
    	
</section>

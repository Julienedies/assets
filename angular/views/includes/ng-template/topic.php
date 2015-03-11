<h2 class="title"><a target="_blank" ng-bind="topic.tit" ng-href="[[$app_url]]/topic/{{topic.id}}"></a></h2>
<div class="dtails">

    <div class="pure-g">

        <div class="pure-u-1 pure-u-md-1-6">
            <div ng-bind="topic.pub | dateFormat:'yyyy-MM-dd'"></div>
        </div>

        <div class="pure-u-1 pure-u-md-3-5">
            <p ng-bind="topic.txt"></p>
            <div>
                <span>支持 <b ng-bind="topic.like"></b></span>
                <span>反对 <b ng-bind="topic.dislike"></b></span>
                <span>分享 </span>
                <span ng-click="topic.replying=true">回复</span>
                <div ng-show="topic.replying" class="reply-box">
                    <textarea></textarea>
                    <button>取消</button> &nbsp;&nbsp; <button>提交</button>
                </div>
            </div>
        </div>

        <div id="user-info" class="pure-u-1 pure-u-md-1-5">
            <p class="avatar">
                <img ng-src="{{topic.user.portrait}}" class="flow-img" />
            </p>
            <strong ng-bind="topic.user.nicknm" class="nicknm"></strong>
            <p ng-bind="topic.user.job_label"></p>
        </div>

    </div>

</div>
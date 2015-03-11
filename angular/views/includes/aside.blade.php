
<div style="min-height:100px;">
        <h2>每日刮刮卡，赚声誉、换大奖</h2>
        <div scratch-card></div>
</div>

<div class="top-list" ng-cloak ng-show="top" ng-controller="topTopicCtrl">
        <h3>微话题点赞排行榜</h3>
        <ul>
                <li ng-repeat="topic in top.like">
                        <a target="_blank" ng-href="/topic/{{topic.id}}" ng-bind="topic.tit"></a>
                        <i class="fa fa-thumbs-up gray" ng-bind="' '+topic.like"></i>
                </li>
        </ul>

        <h3>微话题围观排行榜</h3>
        <ul>
                <li ng-repeat="topic in top.view">
                        <a target="_blank" ng-href="/topic/{{topic.id}}" ng-bind="topic.tit"></a>
                        <i class="fa fa-eye gray" ng-bind="' '+topic.views"></i>
                </li>
        </ul>
</div>

<div style="text-align:center;padding:1em;"><img style="max-width:12em;" src="/assets/vcn/img/qr.png" /></div>

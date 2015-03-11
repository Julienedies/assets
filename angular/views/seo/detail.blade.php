<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>[[$title]]</title>
<style>
.replies li{margin-bottom:30px;padding-top:20px;border-top:5px solid #CCC;}
</style>
</head>
<body>
<div class="header">
        <div class="logo"><a href="/">企业时间</a></div>
</div>
<div class="container">
        <div class="question">
                <div class="title"><h1>[[$topic->tit]]@if($superUser) <a target=_blank href="/super/del/topic/[[$topic->id]]">super del</a> @endif</h1></div>
                <div class="text">
                        [[$topic->txt]]
                </div>
        </div>
        <h2>[[count($replies)]]个回复</h2>
        <ul class="replies">
        @foreach($replies as $reply)
                <li>@if($superUser) <a target=_blank href="/super/del/reply/[[$reply->id]]">super del</a> @endif
                        [[$reply->txt]]
                </li>
        @endforeach
        </ul>
</div>
<div class="footer">
</div>
</body>
</html>










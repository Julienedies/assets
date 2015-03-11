<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>[[$title]]</title>
<meta name="description" content="[[$description]]" />
</head>
<body>
<div class="header">
        <div class="logo"><a href="/">企业时间</a></div>
</div>
<div class="container">
        <dl>
                <dt><h1>[[$cat->name]]</h1></dt>
        @foreach($topics as $topic)
                <dd><a href="/topic/[[ $topic->id ]]">[[ $topic->tit ]]</a></dd>
        @endforeach
        </dl>
        <div class="pager">[[$topics->links()]]</div>
</div>
<div class="footer">
</div>
</body>
</html>










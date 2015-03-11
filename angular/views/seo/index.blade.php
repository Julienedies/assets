<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>[[$title]]</title>
<meta name="description" content="[[$description]]" />
</head>
<body>
<div class="header">
        <h1><a href="/">企业时间</a></h1>
</div>
<div class="container">
@foreach($cats as $cat)
        <dl>
                <dt><h2><a href="/cat/[[ $cat->id ]]/topics">[[$cat->name]]</a></h2></dt>
        @foreach($cat->topics as $topic)
                <dd><a href="/topic/[[ $topic['id'] ]]">[[ $topic['tit'] ]]</a></dd>
        @endforeach
        </dl>
@endforeach
</div>
<div class="footer">
友情链接：
<a target="_blank" href="http://www.zhihu.com">知乎</a>
<a target="_blank" href="http://www.guokr.com">果壳</a>
</div>
</body>
</html>










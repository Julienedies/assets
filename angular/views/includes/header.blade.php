<meta charset="utf-8">
<meta content="[[@$description?:'']]" name="description"/>
<meta content="[[@$keywords?:'']]" name="keywords"/>
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
@if(isset($title))
<title>[[$title.(Request::is('/')?'':'_企业时间')]]</title>
@else
<title>企业时间</title>
@endif
@yield('css')

<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta content="" name="description"/>
<meta name="viewport" content="width='device-width'; initial-scale=1.0">
<link href="{{$assets_url}}/css/main/photo.css" rel="stylesheet" type="text/css" />
<title>企业时间</title>
</head>
<body>
<div class="photo_logo">
<img src="{{$assets_url}}/images/inlogo.png" class="inlogo" />
</div>
<div id="container"></div>
<div id="menu"> <a href="{{$app_url}}" class="bt_back">照片墙</a> &nbsp;&nbsp;&nbsp;&nbsp;
  <!-- 登入后显示 -->
  <!--<a href="javascript:void(0)" class="logined">Robert, 欢迎回来！</a>-->
  <!-- 登入后显示 -->
  <a href="{{$app_url}}/user/reg" class="bt_ok">立即注册</a> &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="{{$app_url}}/topic" class="bt_back wico"><img src="{{$assets_url}}/images/weit.jpg" class="wpic" />微话题<img src="{{$assets_url}}/images/wico.png" class="wii" /></a>
  <!--&nbsp;&nbsp;&nbsp;<a href="{{$app_url}}/user/login" class="bt_back">登录</a>-->
  <button id="sphere" style="display:none;">照片地球</button>
  <button id="helix" style="display:none;"></button>
  <button id="grid" style="display:none;"></button>
  <div id="time"> <span style="color:#fff778">25</span> 小时&nbsp;&nbsp;&nbsp;<span id="new_time"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前时间&nbsp;&nbsp;&nbsp;<span id="l_time"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已为您增加&nbsp;&nbsp;&nbsp;<span id="add_time"></span>&nbsp;&nbsp;分钟
    <div class="foot">&copy; 2014 ChinaScope Financial All Rights Reserved 浙ICP备14022106号</div>
  </div>
</div>
</body>
</html>
<script>
var assets_url = '{{$assets_url}}';
var app_url = '{{$app_url}}';

if(navigator.userAgent.indexOf("MSIE")>0) {  
		document.getElementById( 'time' ).innerHTML = "浏览器版本过低，请升级或尝试使用其他浏览器访问！" 
}    

@if (empty($users_arr))
		var table = [];
@else
		var table = [
				@foreach ($users_arr as $user)
						"<img src='{{$user['file_path']}}' width='100' height='100' class='dimg' />", "{{$user['job_label']}}", "{{$user['nicknm']}}", 0,0,
				@endforeach
		];
@endif
</script>
<script src="{{$assets_url}}/js/public/jquery-1.8.1.min.js"></script>
<script src="{{$assets_url}}/js/main/three.min.js"></script>
<script src="{{$assets_url}}/js/main/tween.min.js"></script>
<script src="{{$assets_url}}/js/main/TrackballControls.js"></script>
<script src="{{$assets_url}}/js/main/CSS3DRenderer.js"></script>
<script src="{{$assets_url}}/js/main/photo.js"></script>


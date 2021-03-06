{{-- 通用HTML框架 --}}
@extends('layouts.default')

{{-- 页面css定义 --}}
@section('css')
<link href="{{$assets_url}}/css/main/index.css" rel="stylesheet" type="text/css" />
@stop

{{-- body内容 --}}
@section('content')
@if(Session::get('message'))
<div class="alert alert-warning" role="alert">{{Session::get('message')}}</div>
@endif
<div id="login-box" ng-controller="loginCtrl">
        <div>
        <p ng-bind="msg"></p>
        <h1>登录</h1>
        <div role="form" action="[[$app_url]]/api/user/login" method="POST">
        
            <div class="form-group">
              <input type="text" name="email" required  placeholder="请输入邮箱" ng-model="user.email">
            </div>
            
            <div class="form-group">
              <input type="password" name="password" required  placeholder="请输入密码" ng-model="user.password">
            </div>
            
            <div class="checkbox">
              <label>
                <input name="remember" type="checkbox" value="1" checked> 记住登录
              </label>
            </div>
            <button ng-click="submit()">登录</button>
        </div>
        </div>
</div>
@stop

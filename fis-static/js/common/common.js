/**
 * Created by julien.zhang on 2014/10/11.
 */


function toLogin(){
    $('[ic-dialog="login"]').icDialog();
}



//登录控制器
brick.controllers.add('loginCtrl', function(scope){

    //登录请求发起前
    scope.before = function(f){

        console.log('发起登录请求前', f);

    };

    //登录完成
    scope.done = function (data) {
        if(data.code == 0){
            return $('[role=status]').text('用户名或密码错误')
        }
        console.log('登录成功' , data);
        location.reload()

    };

    //登录请求失败
    scope.failed = function(msg){

        console.log('登录失败', msg);

    }


});


//选股控制器
brick.controllers.add('screenCtrl', function(scope){

    //添加自选股请求发起前
    scope.before = function(f){

        //检测用户是否登录;

        console.log('发起登录请求前', f);

    };

    //添加自选股完成
    scope.done = function (data) {

        $.tips('添加成功');
    };

    //添加自选股请求失败
    scope.failed = function(msg){

        console.log('添加失败', msg);

    }

})
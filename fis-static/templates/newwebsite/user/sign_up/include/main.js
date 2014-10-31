/**
 * Created by julien.zhang on 2014/10/16.
 */

//主控制器
brick.controllers.add('mainCtrl', function(scope){

    //$('[ic-dialog]').icDialog();


    //选择注册方式
    $('[role=normal], [role=student]').on('click', function(e){
        var role = $(this).attr('role');

        if(role === 'normal'){

        }else{
            $('[role=student-reg-item]').show();
        }

    });


    //更新验证码
    var $captchaImg = $('[role=captchaImg]');
    var $changeCaptcha = $('[role=changeCaptcha]');
    $changeCaptcha.on('click', function(e){
        var src = $captchaImg.attr('src').replace(/\?time=\d+$/, '');
        $captchaImg.attr('src', src + '?time=' + (+new Date) );
    });


});

//手机验证码控制器
brick.controllers.add('mobileCaptchaCtrl', function(scope){

    var $getPhoneCaptcha = $('[role=getMobileCaptcha]');

    //如果输入正确的手机号码，则获取手机验证码按钮可用;
    $('[ic-role-field="mobile-phone"]')
        .on('keyup', function(e){
            $(this).change();
        })
        .on('ic-form.mobile-phone-sign-up.mobile-phone.verify', function(e, isOk){
            isOk ? $getPhoneCaptcha.removeClass('disabled') :
                $getPhoneCaptcha.addClass('disabled');
        });


    scope.before = function(){

        if($getPhoneCaptcha.hasClass('disabled')) return false;

        var data = {};
        var field = $('[ic-role-field="mobile-phone"]');
        var name = field.attr('name') || 'mobile';

        data[name] = field.val();
        $getPhoneCaptcha.data('ic-submit-data', data);

    };

    scope.done = function(data) {

        /*
         1:  发送成功， 一切OK
         2:  未知错误的发送失败，可能是手机商的问题
         3:  安全问题，过于频繁，要求输入验证码
         4： 这个手机号已被注册，不能使用。
         */

        switch(data)
        {
            case "1":
                alert('发送成功');
                reGetphc();
                break;
            case "2":
                alert('未知错误的发送失败，可能是手机商的问题');
                break;
            case "3":
                break;
            case "4":
                alert('这个手机号已被注册，不能使用');
                break;
            case "7":
                alert('验证码错误');
                break;
        }
    };


    function reGetphc(){
        var tip = $('<span style="font-size:0.8em;">如果没有收到， <b>90</b>秒后重新获取.</span>');
        var b = tip.find('b');
        var c = $getPhoneCaptcha.hide().after(tip);
        var n = 90;

        var timer = setInterval(function(){
            if(n--){
                b.text(n);
            }else{
                clearInterval(timer);
                tip.remove();
                c.show();
            }
        }, 1000);
    }

});

//手机注册控制器
brick.controllers.add('mobileSignUpCtrl', function(scope){

    scope.before = function(fields){

    };

    scope.done = function(data){
        /*
         1:  注册成功， 一切OK
         2:  验证码不匹配
         3:  手机号被改过
         4： 密码错误。
         5:  手机号已经被注册掉。
         6： 系统错误
         */
        var _data = $.parseJSON( data );

        switch(_data.code)
        {
            case "1":
                status.addClass('green').text('注册成功.');

                regist_doing( _data.info );
                break;
            case "2":
                status.text('验证码不匹配');
                break;
            case "3":
                status.text('手机号被改过')
                break;
            case "5":
                status.text('手机号已经被注册掉')
                break;
            case "6":
                status.text('系统错误')
                break;
            case "7":
                status.text('验证码不匹配')
                break;
            case "7":
                status.text('手机号被改过')
                break;
        }
    };


});

//帐号注册控制器
brick.controllers.add('idSignUpCtrl', function(scope){

    var $elm = $('[ic-ctrl="idSignUpCtrl"]');

    var $pass = $elm.find('[ic-role-field="password"]');

    scope.before = function(fields){

    };

    scope.done = function(data){
        alert(data);
    }


    scope.equal = function(val){
        return val === $pass.val();
    }


});


//email注册控制器
brick.controllers.add('emailSignUpCtrl', function(scope){

    scope.before = function(fields){

    };

    scope.done = function(data){
        alert(data);
    }

});









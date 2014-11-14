/**
 * Created by julien.zhang on 2014/10/16.
 */



brick.controllers.reg('verifyIdCtrl', function(scope){

    scope.before = function(){

    }

    scope.done = function(data){
        var code = data.code;
        if(code == 1) {
            $.icNextScene();
            $('[ic-role-tab="phone"]').attr('ic-tab-disabled', 1).addClass('disabled');
        }else{
            $('[ic-dialog=verify]').icDialog();
        }
    }

});

brick.controllers.reg('resetCtrl', function(scope){

    scope.changeCaptcha = function(e){
        var captchaImg = $(this).parent().parent().find('[role=captchaImg]');
        var src = captchaImg.attr('src').replace(/\?t=\d+$/,'');
        captchaImg.attr('src', src+ '?t='+(+new Date));
    }

});

brick.controllers.reg('resetByPhoneCtrl', function(scope){

        //成功之后，根据重设密码连接重定向到重设密码页面
        scope.done = function (data) {


        }

});

brick.controllers.reg('mobileCaptchaCtrl', function(scope){

    var $getPhoneCaptcha = $('[role=getMobileCaptcha]');

    scope.before = function () {

        if ($getPhoneCaptcha.hasClass('disabled')) return false;

        var data = {};
        var field = $('[ic-role-field="mobile-phone"]');
        var name = field.attr('name') || 'mobile';

        data[name] = field.val();
        $getPhoneCaptcha.data('ic-submit-data', data);

    };

    scope.always = function(){
        $getPhoneCaptcha.hide();
    }
    scope.done = function (data) {

        /*
         1:  发送成功， 一切OK
         2:  未知错误的发送失败，可能是手机商的问题
         3:  安全问题，过于频繁，要求输入验证码
         4： 这个手机号已被注册，不能使用。
         */

        var code = data.code+'';
        switch (code) {
            case "1":
                $.tips('发送成功');
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

    function reGetphc() {
        var tip = $('<span style="font-size:0.8em;">如果没有收到， <b>90</b>秒后重新获取.</span>');
        var b = tip.find('b');
        var c = $getPhoneCaptcha.hide().after(tip);
        var n = 90;

        var timer = setInterval(function () {
            if (n--) {
                b.text(n);
            } else {
                clearInterval(timer);
                tip.remove();
                c.show();
            }
        }, 1000);
    }


});

brick.controllers.reg('resetByEmailCtrl', function(scope){

    var $elm = $('[ic-ctrl=resetByEmailCtrl]');

    scope.done = function(){
        $elm.find('table').hide();
        $elm.find('[role="sendEmailOk"]').show();
    };

});


brick.controllers.reg('setPassCtrl', function(scope){

    scope.done = function () {
        $.icNextScene();
        $('[ic-timer="a"]')
            .icTimer()
            .on('ic-timer.end', function () {
                $.tips('跳转.');
            });
    }

    scope.equal = function (val) {
        return val === $('[ic-role-field=password]').val();
    }



});
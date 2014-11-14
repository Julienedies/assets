/**
 * Created by julien.zhang on 2014/11/13.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));
//app.use(express.static(__dirname + '/view'));



app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

app.use('/hello', function (req, res) {
    res.send({x:'Hello world!'});
});

app.post('/post', function(reg, res){
    res.send('ok');
})
//email方式注册
app.post('/email/reg', function(reg, res){
    res.send('ok');
})

//再次发送激活邮件
app.post('/user/resendMail', function(reg, res){
    res.send('ok');
})

//发送手机验证码
app.post('/sendMobileCaptcha', function(reg, res){
    res.send({code:'1'});
});

//重设密码前，账户检测
app.post('/user/verify', function(reg, res){
    var code = Math.round(Math.random());
    res.send({code:1});
})

app.post('/resetByEmail', function(reg, res){
    res.send('ok')
})
app.post('/resetByPhone', function(reg, res){
    res.send('ok')
})
app.post('/setPass', function(reg, res){
    res.send('ok')
})

//登录
app.post('/user/dologin', function(reg, res){
    code = Math.round(Math.random());
    if(code){
        res.redirect("/view/newwebsite/user/my/stocks/")
    }else{
        res.send({code:code});
    }
})

//输入提示
app.post('/typeSelect', function(reg, res){
    var obj = [
        {
            name: Math.round(Math.random()*30 + 70),
            code: Math.round(Math.random()*40 + 40)
        },
        {
            name: Math.round(Math.random()*100 + 60),
            code: Math.round(Math.random()*80 + 40)
        },
        {
            name: Math.round(Math.random()*20 + 50),
            code: Math.round(Math.random()*180 + 40)
        }
    ];

    res.send(obj);
})

app.post('/center/addOS', function(reg, res){
    var i =90000;
    while(i--){console.log(i)}
    res.send({code:1});
})

app.listen(3000);
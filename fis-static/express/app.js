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

//顶部搜索
app.post('/search/company', function(reg, res){
    res.send([{
        name:'信雅达',
        code:'600571_SH_EQ'
    },{
        name:'天泽信息',
        code:'300209_SZ_EQ'
    }])
});

app.post('/post', function(reg, res){
    res.send({code:1});
})
//email方式注册
app.post('/email/reg', function(reg, res){
    res.send({code:1});
})

//再次发送激活邮件
app.post('/user/resendMail', function(reg, res){
    res.send({code:1});
})

//发送手机验证码
app.post('/sendMobileCaptcha', function(reg, res){
    res.send({code:'1'});
});
app.post('/user/sendResetMobileCaptcha',function(reg, res){
    res.send({code:'1'});
});

//重设密码前，账户检测
app.post('/user/verify', function(reg, res){
    var code = Math.round(Math.random());
    res.send({code:1});
})

app.post('/user/resetByEmail', function(reg, res){
    res.send({code:1})
})
app.post('/user/resetByPhone', function(reg, res){
    res.send({code:1})
})
app.post('/setPass', function(reg, res){
    res.send({code:1})
})

//登录
app.post('/user/dologin', function(reg, res){
    code = Math.round(Math.random());
    if(code){
        res.redirect("/view/newwebsite/user/my/stocks/");
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
});

app.get('/center/getOS', function(reg, res){
    var stocks = [
        {"code":"000524_SZ_EQ","abbr":"\u4e1c\u65b9\u5bbe\u9986-H","name":"\u4e1c\u65b9\u5bbe\u9986","report":"2014-12-04","inds":["12.13","12.19","0.06","0.49","2328097","28.22","11.91","12.36","5.59","12.65","11793.86","3.2711425147200003E9","","\u9910\u5385","54.4800","3.69968857","4.78843865","","","","","",""]},
        {"code":"000715_SZ_EQ","abbr":"\u4e2d\u5174\u5546\u4e1a","name":"\u4e2d\u5174\u5546\u4e1a","report":"2014-12-04","inds":["11.26","0.00","-11.26","-100.0","0","0.0","0","0.00","8.3","13.45","3277.99","3.14160756E9","","\u767e\u8d27\u5546\u5e97","18.6472","4.34598664","7.5507732","","","","","",""]},
        {"code":"601398_SH_EQ","abbr":"\u5de5\u5546\u94f6\u884c-A","name":"\u5de5\u5546\u94f6\u884c-A","report":"2014-12-04","inds":["4.10","4.22","0.12","2.93","471493979","1954.83","4.08","4.24","3.23","4.18","3.9100183757E8","1.444668682858398E12","","\u7efc\u5408\u6027\u94f6\u884c","","1.42979661","20.84509724","","","","1.06389075308477","","NA"]}
    ];

    res.send({code:1, stocks:Math.round(Math.random())?stocks:[]});
});

app.post('/center/addOS', function(reg, res){
    var i =90000;
    //while(i--){console.log(i)}
    res.send({code:1});
});

app.post('/center/delMulOS', function(reg, res){
    var i =90000;
    //while(i--){console.log(i)}
    res.send({code:1});
});

//沪港通图表对比
app.post('/shhk/compare', function(reg, res){
    var data = require('./compare.json');
    res.send(data);
});


/**
 * sam
 */
app.post('/indussum/compare/:id', function(reg, res){

    var data = reg.params.id === 'GACAAA' ? require('./mock/ranking.json') : require('./mock/ranking-chart-2.json');
    res.send(data);

});


app.listen(3000);
console.log('server start...')
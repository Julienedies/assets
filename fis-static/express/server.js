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

//重设密码前，账户检测
app.post('/user/verify', function(reg, res){
    var code = Math.round(Math.random());
    res.send({code:1});
})

app.post('/resetByEmail', function(reg, res){
    res.send({code:1})
})
app.post('/resetByPhone', function(reg, res){
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
        {code: '000019_SZ_BZ', name: '长江实业', report:'2014/04/20', inds: [ 'x205555555', 'y30',  'z30',  'a555555530', 'b3555555555550','c30','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40']},
        {code: '000011_HZ_BZ', name:'天涯建设', report:'2012/09/30', inds: [ 'x205555555', 'y30',  'z30',  'a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40', 'd40','a555555530', 'b3555555555550','c30', 'd40','a555555530', 'b3555555555550','c30', 'd40']}
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
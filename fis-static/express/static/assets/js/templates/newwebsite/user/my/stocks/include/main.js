/**
 * Created by julien.zhang on 2014/10/16.
 */

//$('#dealDate').datepicker({
//    showOtherMonths: true,
//    selectOtherMonths: true,
//    dateFormat:'yy-mm-dd',
//    changeMonth:true,
//    changeYear:true,
//    gotoCurrent:true,
//    yearRange: "2012:+1"
//});

//股票指标模型
brick.services.add('indicatorsModel', function _indicatorsModel() {
    //所有指标列表
    var indicators = {
        'x': '股价',
        'y': '涨跌额',
        'z': '变动率',
        'a': '最新价',
        'b': '收盘价',
        'c': '52周最低',
        'd': '52周最高',
        e:'总市值',
        f:'每股收益'
    };
    //用户自定义指标
    var custom = ['x', 'y', 'z', 'a', 'b','c','d'];

    var active = {};

    _.each(custom, function(v,i){
        active[v] = 1;
    });

    return {
        getAllInds: function(){
          return indicators;
        },
        getActive: function () {
            return active;
        },
        update: function (arr) {
            if(custom.join()===arr.join()) return;
            custom = arr;
            active = {};
            _.each(custom, function(v,i){
                active[v] = 1;
            });
            brick.eventManager.fire('indicatorsModel.change', custom);
        }
    };
});

//我的股票列表模型
brick.services.add('stocksModel', function _stocksModel(recordManager){

    //return new recordManager({scope:eventManager,eventPrefix:'stocksModel'});
    var stocks = [
        {code: '000010_SZ', name: '路上经过了', report:'2014/09/30', inds: {x: 'x205555555', y: 'y30', z: 'z30', a: 'a555555530', b: 'b3555555555550', c: 'c30', d: 'd40'}},
        {code: '000010_SZ', name:'老师经历过', report:'2014/09/30', inds: {x: 'x20', y: 'y30xxxx', z: 'z30xxxxxxxxxxx', a: 'a30', b: 'b30', c: 'c30', d: 'd40'}}
    ];

    return {
        get: function(){
            return stocks;
        },
        getIndicatorsTable: function(indArr){
            var arr = [];
            var o;
            for(var i in stocks){
                o = {};
                var inds = stocks[i].inds;

                for(var j in indArr){
                    var ind = indArr[j];
                    o[ind] = inds[ind];
                }

                arr.push(o);

            }

            return arr;
        }
    }
}, ['recordManager']);

//我的股票列表控制器
brick.controllers.reg('myStocksCtrl', function _myStocksCtrl(scope, stocksModel, indicatorsModel){

    var $elm = $('[ic-ctrl=myStocksCtrl]');

    var $analysis =  $('[ic-dialog=analysis]');
    var $custom = $('[ic-dialog=custom]');

    //$custom.icDialog();

    //
    scope.watch('indicatorsModel.change', function(e, inds){
        inds = ['x','y','z','a','b','c','d'];
        var data = stocksModel.get(inds);
        scope.render('index', {indicators:inds, stocks:data});
    });

    scope.watch('stocksModel.change', function(e, stocks){
        //自选股列表
        stocks = stocks || stocksModel.get();
        //所有指标列表
        var inds = indicatorsModel.getAllInds();
        //激活指标
        var active = indicatorsModel.getActive();
        scope.render('stocksTable', {indicators:inds, stocks:stocks, active:active});
    });

    scope.fire('stocksModel.change');


    //查看资讯
    scope.view = function(e){

    };

    //弹出盈亏分析对话框
    scope.showAnalysisDialog = function(e){
        $analysis.icDialog();
    }

    //弹出自定义指标对话框
    scope.showCustomDialog = function(e){
        $custom.icDialog();
    };

    //批量删除股票
    scope.batch = {
        before:function(){
            var arr = [];
            $elm.find('input:checked').each(function(){
                var code = $(this).data('code');
                arr.push(code);
            })
            if(!arr.lenght) return false;
            $(this).data('ic-submit-data', arr);
        },
        done: function(data){
            $.tips('批量删除成功,');
        }
    };


    //删除股票
    scope.delete = {
        before: function(){
            var th = $(this);
            var code = th.data('code');
            th.data('ic-submit-data', {secu:code});
        },
        done : function(data){
            $.tips('删除成功')
        }
    };


    //添加股票
    scope.add = {
        before : function(){
            var data = $(this).data('ic-submit-data');
            if(!(data && data.secu)){
                $.tips('请先输入并选择可用的股票.')
                return false;
            }
        },
        done : function(data){
            $.tips('add stock ok;')
        }
    }

    //////////////////////////////

    var stocksIndexTable = $('[role=stocksIndexTable]');

    /////////////////////
    $('[ic-type-ahead="a"]').on('type.complete', function(e){
        var th = $(this);
        var val = this.value;
        th.next('[ic-ajax]').data('ic-submit-data', {secu:val});

    });


}, {depend: ['stocksModel','indicatorsModel']});

//盈亏分析控制器
brick.controllers.add('analysisCtrl', _analysisCtrl, {depend: 'stocksModel'});

//自定义指标控制器
brick.controllers.add('customIndCtrl', _customIndCtrl, {depend: 'indicatorsModel'});


///////////////////////////////////////////
//定义控制器，模型
///////////////////////////////////////////


function _analysisCtrl(scope, stocksModel) {


}

function _customIndCtrl(scope, indicatorsModel){

    var $custom = $('[ic-dialog=custom]');

    scope.confirm = function(e){

        var inds = [];

        $custom.find(':checked').each(function(){
            inds.push(this.value);
        });

        //if(inds.length < 5) return alert('不得少于5项')
        console.log(inds);

        $custom.icDialog('hide');

        //更新指标模型
        indicatorsModel.update(inds);
    };

}


//////////////////////////////////////////////////////////////////////

//other
(function () {

    //analysts td h6+span
    $('#analysts td h6+span').each(function () {
        var th = $(this);
        var p1 = parseFloat(th.text().replace('%', ''));
        var con = th.parent().empty().css({width: 64, height: 64});
        p1 = (p1*1).toFixed(0);

        var ec = echarts.init(con[0]);

        var labelTop = {
            normal: {
                color: '#609aec',
                label: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#c5cad0',
                        baseline: 'bottom'
                    }
                },
                labelLine: {
                    show: false
                }
            }
        };
        var labelBottom = {
            normal: {
                color: '#e5e9ec',
                label: {
                    show: true,
                    position: 'center',
                    formatter: function (a, b, c) {
                        return 100 - c + '%'
                    },
                    textStyle: {
                        lingHeight: 1.4,
                        color: '#609aec',
                        baseline: 'top'
                    }
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [27, 32];
        option = {
            toolbox: {
                show: false,
                feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: radius,
                    data: [
                        {name: 'other', value: (100 - p1).toFixed(2), itemStyle: labelBottom},
                        {name: '准确率', value: p1, itemStyle: labelTop}
                    ]
                }

            ]
        };

        ec.setOption(option);

    });


})();

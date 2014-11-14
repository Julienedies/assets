/**
 * Created by julien.zhang on 2014/10/16.
 */

/**
 * 涨跌幅列表数据模型
 */
brick.services.add('dataModel', function () {

    var o = window.data;
    var option = {
        type: 'industry',
        s_date: '1',
        market: 'a'
    };

    return {

        get: function (p1, p2) {
            var p = p1 && p2 ? o[p1][p2] : o;
            return $.extend(true, {}, p);
        },
        getOption: function () {
            return $.extend(true, {}, option);
        },
        setOption: function (i, v) {
            option[i] = v;
            //this.getData();
            brick.eventManager.fire('dataModel.change', o);
        },
        getData: function () {
            var that = this;
            $.ajax({
                url: '',
                type: 'post',
                data: option
            }).done(function (data) {
                that.updateData(data);
            })
        },
        getSection: function (start, end) {
            var data = o;
            start = start || 0;
            end = end || 9;
            var arr = [];
            var arr2 = [];
            var asc = data.asc;
            var desc = data.desc;
            for (var i = start; i <= end; i++) {
                arr[i] = asc[i];
                arr2[i] = desc[i];
            }

            return {asc: arr, desc: arr2};
        },
        updateData: function (data) {
            o = data;
            brick.eventManager.fire('dataModel.change', o);
        }

    };

});

/**
 * 涨跌幅列表控制器
 * 相关dom, model 交互部分都在这里
 */
brick.controllers.reg('mainCtrl', function (scope, dataModel, compareListModel) {

    var $doc = $('html, body');
    var $compareBox = $('[ic-ctrl="compareCtrl"]');
    var $operation = $('[role=operation]');

    var $elm = scope.$elm = $('[ic-ctrl=mainCtrl]');

    scope.updateList = function (start, end) {
        scope.render('list', dataModel.getSection(start, end));
    }

    scope.updateList();

/////////////////////////////////////////
    //event
    ///////////////////////////////////////

    scope.watch('dataModel.change', function (e, msg) {
        $('[ic-tabs="section"] li:first').click();
    });

    //分页
    $('[ic-tabs="section"]').on('ic-tabs.change', function (e, msg) {
        var tab = msg.activeTab;
        var param = tab.text().split('-');
        scope.updateList(param[0] - 1, param[1] - 1);
    });

    //时间改变
    $('[ic-tabs=date]').on('ic-tabs.change', function (e, msg) {
        var tab = msg.activeTab;
        var date = tab.data('date');
        dataModel.setOption('date', date);
    });

    //市场改变
    $('[ic-tabs=market]').on('ic-tabs.change', function (e, msg) {
        var tab = msg.activeTab;
        var market = tab.data('market');
        dataModel.setOption('market', market);
    });

    //加入对比
    scope.goCompare = function () {
        /*        var tr = $(this).closest('tr');
         var index = tr.data('index').split('-');
         var item = dataModel.get(index[0], index[1]);
         compareListModel.add(item);*/
    };

    //加入对比前调用，如果比较列表已经符合长度，则返回false，取消ajax请求图表数据
    scope.before = function () {
        if (compareListModel.get().length >= 2) return false;
        var th = $(this);
        var tr = th.closest('tr');
        var index = tr.data('index').split('-');
        var item = dataModel.get(index[0], index[1]);
        compareListModel.add(item);
        var option = dataModel.getOption();
        var data = $.extend(item, option);
        data.rank = index[0];
        th.data('ic-submit-data', data);
    };

    //加入对比，ajax图表数据请求完成,滚动页面到比较图表位置;
    scope.done = function (data) {

        $operation.hide();

        $doc.animate({scrollTop: $compareBox.offset().top - 40}, 400);

        var _dates = [];
        for (i = 0; i < data.dates.length; i++) {
            _dates.push([
                data.dates[i][1],
                data.dates[i][0]
            ]);
        }

        var index = compareListModel.get().length;
        $('#chart').highcharts().series[--index].setData(_dates);

    };

    scope.failed = scope.done;


    //浮动层滑入滑出交互部分
    (function () {
        var w;
        var h;
        var tr;
        var elm;
        var fn = _.debounce(function (e) {

            if (tr && tr === this) return;
            tr = this;
            var th = $(this);
            var $td = th.find('td:first');
            var code = th.data('code');
            var added = compareListModel.isAdded(code);
            var index = th.data('index').split('-');
            var item = dataModel.get(index[0], index[1]);

            w = w || th.width();
            h = h || th.height();

            var limit = compareListModel.get().length >= 2;

            if ((compareListModel.get().length) % 2) {
                scope.render('operation', {url: __uri('../test/a.js'), added: added, limit: limit});
            } else {
                scope.render('operation', {url: __uri('../test/b.js'), added: added});
            }

            elm = elm ? elm.appendTo($td).show().animate({width: w}) :
                $('[role="operation"]').appendTo($td).css({top: 0, left: 0, width: w, height: h, lineHeight: h + 'px'}).show();

        }, 140);


        $doc
            .on('mouseenter', 'tr', fn)
            .on('mouseleave', 'tr', function (e) {
                //elm && elm.hide().css({width: 0});
            })

    })();

}, {depend: ['dataModel', 'compareListModel']});


/**
 * 比较列表数据模型
 */
brick.services.add('compareListModel', function () {
    var compareList = [];
    var codes = {};
    return {
        isAdded: function (code) {
            console.log(codes);
            return codes[code];
        },
        add: function (item, code) {
            if (code && codes[code]) return false;
            if (compareList.length >= 2) return console.log('只能添加两项');
            compareList.push(item);
            codes[item.code] = 1;
            brick.eventManager.fire('compareListModel.add', item);
        },
        remove: function (index) {
            var code = compareList[index].code;
            delete codes[code];
            compareList.splice(index, 1);
            brick.eventManager.fire('compareListModel.remove', index);
        },
        clear: function () {
            compareList = [];
            codes = {};
            brick.eventManager.fire('compareListModel.clear');
        },
        get: function () {
            return compareList;
        }
    }
});


/**
 * 对比
 */
brick.controllers.reg('compareCtrl', function (scope, compareListModel) {

    $chart = $('#chart');

    scope.render('label', compareListModel.get());

    scope.watch('compareListModel.*', function () {
        var list = compareListModel.get();
        scope.render('label', list);
    });

    scope.watch('compareListModel.remove', function (e, msg) {
        console.log(msg)
        $('#chart').highcharts().series[msg].setData(null);
    });

    scope.watch('compareListModel.clear', function (e, msg) {
        $('#chart').highcharts().series[0].setData(null);
        $('#chart').highcharts().series[1].setData(null);
    });

    scope.clearAll = function (e) {
        compareListModel.clear();
    }

    scope.remove = function (e) {
        var th = $(this);
        var index = th.data('index');
        compareListModel.remove(index);
    }

}, {depend: ['compareListModel']});


/**
 * 图表控件设置
 */

//初始对比chart
Highcharts.setOptions({
    lang: {
        weekdays: [www_lang.dayname_ri, www_lang.dayname_yi, www_lang.dayname_er, www_lang.dayname_san, www_lang.dayname_si, www_lang.dayname_wu, www_lang.dayname_liu],
        months: [www_lang.monthname_1, www_lang.monthname_2, www_lang.monthname_3, www_lang.monthname_4, www_lang.monthname_5, www_lang.monthname_6, www_lang.monthname_7, www_lang.monthname_8, www_lang.monthname_9, www_lang.monthname_10, www_lang.monthname_11, www_lang.monthname_12],
        shortMonths: [www_lang.monthname_1, www_lang.monthname_2, www_lang.monthname_3, www_lang.monthname_4, www_lang.monthname_5, www_lang.monthname_6, www_lang.monthname_7, www_lang.monthname_8, www_lang.monthname_9, www_lang.monthname_10, www_lang.monthname_11, www_lang.monthname_12]
    },
    chart: {
        style: {
            fontFamily: 'Microsoft Yahei'
        }
    }
});


$('#chart').highcharts('StockChart', {
    chart: {
        marginTop: 20,
        marginBottom: 30,
        height: 300,
        width: 860
    },
    yAxis: [
        {
            height: 240,
            opposite: true,
            labels: {
                align: 'left',
                x: 6,
                formatter: function () {
                    return this.value + ' %';
                }
            },
            title: {text: ''},
            lineWidth: 0
        }
    ],
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            week: '%Y-%m'

        }
    },
    title: {text: ''},
    legend: {enabled: false},
    plotOptions: {
        series: {
            marker: {
                radius: 1.5
            }
        }
    },
    rangeSelector: {enabled: false},
    scrollbar: {enabled: false},
    navigator: {enabled: false},
    series: [
        {
            name: www_lang.chart_chg,
            data: '',
            color: '#e99a21',
            tooltip: {
                valueDecimals: 2,
                pointFormat: '<span style="color:#e99a21">{series.name}</span>: {point.y} %<br>'
            }
        },
        {
            name: www_lang.chart_chg,
            data: '',
            color: '#4763b2',
            tooltip: {
                valueDecimals: 2,
                pointFormat: '<span style="color:#4763b2">{series.name}</span>: {point.y} %'
            }
        }
    ]
});


/* $.getJSON(__uri('../test/a.json'), function (_data) {

 var _dates = [];
 for (i = 0; i < _data.dates.length; i++) {
 _dates.push([
 _data.dates[i][1],
 _data.dates[i][0]
 ]);
 }


 $('#chart').highcharts().series[0].setData(_dates);
 });


 $.getJSON(__uri('../test/b.json'), function (_data) {

 var _dates = [];
 for (i = 0; i < _data.dates.length; i++) {
 _dates.push([
 _data.dates[i][1],
 _data.dates[i][0]
 ]);
 }


 $('#chart').highcharts().series[1].setData(_dates);
 });*/



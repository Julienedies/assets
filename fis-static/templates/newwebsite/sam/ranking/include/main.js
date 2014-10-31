/**
 * Created by julien.zhang on 2014/10/16.
 */

$(function () {


    (function () {
        var w;
        var h;
        var elm;
        var fn = _.debounce(function (e) {
            var th = $(this);
            var offset = th.offset();
            var left = offset.left;
            var top = offset.top;
            w = w || th.width();
            h = h || th.height();
            elm = elm ? elm.show().css({top: top, left: left}) :
                $('[role="operation"]').appendTo('body').css({top: top, left: left, width: w, height: h, lineHeight: h + 'px'}).show();
        }, 100);


        $('body')
            .on('mouseenter', 'tr', fn)
            .on('mouseleave', 'tr', function (e) {

            })

    })();


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
                color: '#4763b2',
                tooltip: {
                    valueDecimals: 2,
                    pointFormat: '<span style="color:#4763b2">{series.name}</span>: {point.y} %<br>'
                }
            },
            {
                name: www_lang.chart_chg,
                data: '',
                color: '#e99a21',
                tooltip: {
                    valueDecimals: 2,
                    pointFormat: '<span style="color:#e99a21">{series.name}</span>: {point.y} %'
                }
            }
        ]
    });


    $.getJSON(__uri('../test/a.js'), function (_data) {

        var _dates = [];
        for (i = 0; i < _data.dates.length; i++) {
            _dates.push([
                _data.dates[i][1],
                _data.dates[i][0]
            ]);
        }


        $('#chart').highcharts().series[0].setData(_dates);
    });


    $.getJSON(__uri('../test/b.js'), function (_data) {

        var _dates = [];
        for (i = 0; i < _data.dates.length; i++) {
            _dates.push([
                _data.dates[i][1],
                _data.dates[i][0]
            ]);
        }


        $('#chart').highcharts().series[1].setData(_dates);
    });


});
/**
 * Created by julien.zhang on 2014/10/15.
 */

$(function () {

    $('.icon-arrows-4-down').click(function () {
        $(this).toggleClass('icon-arrows-4-up');
    })


    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
        // Create the chart
        $('#container').highcharts('StockChart', {

            rangeSelector: {
                selected: 1,
                inputEnabled: $('#container').width() > 480
            },

            title: {
                text: ''
            },

            series: [
                {
                    name: '',
                    data: data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        });
    });


    //////////////////////////////////////////////////
    (function () {

        //analysts td h6+span
        $('#analysts td h6+span').each(function () {
            var th = $(this);
            var p1 = parseFloat(th.text().replace('%', ''));
            var con = th.parent().empty().css({width: 64, height: 64});

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
                            {name: 'other', value: 100 - p1, itemStyle: labelBottom},
                            {name: '准确率', value: p1, itemStyle: labelTop}
                        ]
                    }

                ]
            };

            ec.setOption(option);

        });


    })();

});
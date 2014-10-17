/**
 * Created by julien.zhang on 2014/10/15.
 */

$(function () {

    $('.icon-arrows-4-down').click(function () {
        $(this).toggleClass('icon-arrows-4-up');
    })


    $.getJSON('/assets/js/data/stockData.js', function (data) {
        var usdeur = [], volume = [], dataLength = data.length;
        for (i = 0; i < dataLength; i++) {
            usdeur.push([
                data[i][0], // the date
                data[i][1] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][2] // the volume
            ])
        }

        Highcharts.setOptions({
            lang: {
                weekdays: [fin_lang.dayname_ri, fin_lang.dayname_yi, fin_lang.dayname_er, fin_lang.dayname_san, fin_lang.dayname_si, fin_lang.dayname_wu, fin_lang.dayname_liu],
                months: [fin_lang.months_1, fin_lang.months_2, fin_lang.months_3, fin_lang.months_4, fin_lang.months_5, fin_lang.months_6, fin_lang.months_7, fin_lang.months_8, fin_lang.months_9, fin_lang.months_10, fin_lang.months_11, fin_lang.months_12],
                shortMonths: [fin_lang.monthname_1, fin_lang.monthname_2, fin_lang.monthname_3, fin_lang.monthname_4, fin_lang.monthname_5, fin_lang.monthname_6, fin_lang.monthname_7, fin_lang.monthname_8, fin_lang.monthname_9, fin_lang.monthname_10, fin_lang.monthname_11, fin_lang.monthname_12],
                rangeSelectorFrom: [fin_lang.rangeSelectorFrom],
                rangeSelectorTo: [fin_lang.rangeSelectorTo],
                rangeSelectorZoom: [fin_lang.rangeSelectorZoom]
            }
        });
        $('#container').highcharts('StockChart', {
            rangeSelector: {
                buttons: [
                    {
                        type: 'day',
                        count: 10,
                        text: '10D'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: '1M'
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: '3M'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: '1Y'
                    },
                    {
                        type: 'ytd',
                        text: 'YTD'
                    },
                    {
                        type: 'all',
                        text: 'MAX'
                    }
                ],
                selected: 2
            },
            yAxis: [
                {
                    height: 160,
                    opposite: true,
                    labels: {
                        align: 'left',
                        x: 3,
                        y: 0
                    },
                    lineWidth: 0
                },
                {
                    top: 220,

                    height: 50,
                    offset: 0,
                    opposite: true,
                    minorTickWidth: 3,
                    labels: {
                        align: 'left',
                        x: 3,
                        y: 0
                    },
                    lineWidth: 0
                }
            ],
            title: {
                align: 'left',
                style: {fontSize: '12px'},
                text: ""
            },
            series: [
                {
                    name: fin_lang.chartClose,
                    data: usdeur,
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    type: 'column',
                    name: fin_lang.chartVolume,
                    yAxis: 1,
                    data: volume,
                    color: '#2f7ed8',
                    tooltip: {
                        valueDecimals: 0
                    }
                }
            ]
        });
    });

});
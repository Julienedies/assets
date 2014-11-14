/**
 * Created by julien.zhang on 2014/10/16.
 */


    //添加对比
     function compare(e){

        console.log('compare', e, this);

    }

    //改变资讯
    function changeInfo(e){
        console.log('changeInfo', e, this);
    }

    //表
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


    var ddd = __inline('../test/compare.js');
    $.getJSON(__uri('../test/data.js'), function (data) {

        $('#chart').highcharts('StockChart', {
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

            title: {
                align: 'left',
                style: {fontSize: '12px'},
                text: ""
            },

            series: [
                {
                    name: '',
                    data: ddd,
                    color: '#e99a21',
                    tooltip: {
                        valueDecimals: 2
                    }
                },
                {
                    name: fin_lang.chartClose,
                    data: data,
                    //color: '#4763b2',
                    tooltip: {
                        valueDecimals: 2
                    }
                }

            ]
        });
    });






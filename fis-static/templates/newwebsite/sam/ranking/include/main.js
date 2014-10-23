/**
 * Created by julien.zhang on 2014/10/16.
 */

$(function(){

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



})
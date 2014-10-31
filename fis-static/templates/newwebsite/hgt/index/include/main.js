/**
 * Created by julien.zhang on 2014/10/16.
 */

$(function(){


    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
        // Create the chart
        $('#chart').highcharts('StockChart', {

            rangeSelector: {
                selected: 1,
                inputEnabled: $('#chart').width() >= 480
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





})
/**
 * Created by julien.zhang on 2014/10/16.
 */

$(function(){

    //场外市场综合指数
    $('#otcMixIndexChart').highcharts({
        chart: {
            type: 'areaspline',
            width: 480,
            height: 230,
            //zoomType: 'x',
            backgroundColor: 'rgba(255, 255, 255, 0)'
        },
        title: {
            //text: otc_city + '市场综合指数'
            text: null
        },
        xAxis: {
            labels: {
                formatter: function() {
                    if(general_dates[this.value] == undefined) return '';
                    return general_dates[this.value].substr( -5 ); // clean, unformatted number for year
                },
                rotation: -30,
                style: {
                    fontSize: '10px',
                    color: 'black'
                }
            },
            tickPixelInterval: 60

        },
        yAxis: {
            title: {
                text: null
            },
            min: general_min_y,
            max: general_max_y,
            gridLineColor: 'rgba(144,147,144,0.5)',
            showFirstLabel: false,
            tickPixelInterval: 60,
            labels:{
                style:{
                    color: 'black'
                }
            }
        },
        tooltip: {
            formatter: function() {
                if(general_dates[this.x] == undefined || general_caps[general_dates[this.x]] == undefined) return '';
                return www_lang.otc_date + ": " + general_dates[this.x] + '<br/>' + www_lang.otc_index + ": " + this.y + '<br/>' +
                    www_lang.otc_market + ": " + number_format( general_caps[general_dates[this.x]], 2 ) + "M";
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                color: 'rgba(66,138,222,1)',
                lineWidth: 0.8,
                fillOpacity: 0.5,
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 1,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1.5},
                    stops: [
                        [0, 'rgba(222,237,243,0.5)'],
                        [1, 'rgba(222,237,243,0.5)']
                    ]
                }
            }
            //pointRange: 50
        },
        series: [{
            //pointInterval: 500,
            data: general_y
        }]
    });


    //规模指数
    $('#scaleIndexChart').highcharts({
        chart: {
            type: 'areaspline',
            width:  480,
            height: 240,
            marginLeft:50,
            marginRight:10,
            backgroundColor: 'rgba(255, 255, 255, 0)'
            //zoomType: 'x',
        },
        title: {
            //text: otc_city + '市场规模指数'
            text: null
        },
        xAxis: {
            labels: {
                formatter: function() {
                    if(scale_dates[this.value] == undefined) return '';
                    return scale_dates[this.value].substr( 0, 7); // clean, unformatted number for year
                },
                rotation: -30,
                align: 'right',
                x: 20,
                style: {
                    fontSize: '10px'
                }
            },
            tickPixelInterval: 60

            //type:'datetime',
            //categories: {#$scale_x#},
            //endOnTick: true,
            //maxPadding: 100,
            //minRange: 50
        },
        yAxis: {
            title: {
                text: null
            },
            min: scale_min_y,
            max: scale_max_y,
            tickPixelInterval: 30
        },
        tooltip: {
            formatter: function() {
                if(scale_dates[this.x] == undefined || scale_counts[scale_dates[this.x]] == undefined) return '';
                return www_lang.otc_date + ": " + scale_dates[this.x] + '<br/>' + www_lang.otc_index + ': ' + this.y +
                    "<br/>" + www_lang.otc_company_count + ": " + scale_counts[scale_dates[this.x]];
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5,
                lineWidth: 0.8,
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 1,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, 'rgba(69,140,220,1)'],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                }
            }
            //pointRange: 50
        },
        series: [{
            //pointInterval: 500,
            data: scale_y
        }]
    });


    //市场活跃度 & 成交额指数
    $('#otcVolumeIndexchart').highcharts({
        chart: {
            type: 'areaspline',
            width: 450,
            height: 250,
            //zoomType: 'x',
            marginRight:20,
            spacingLeft: 4,
            backgroundColor: 'rgba(255, 255, 255, 0)'
        },
        title: {
            text: null
        },
        xAxis: {
            labels: {
                formatter: function() {
                    if(volume_dates[this.value] == undefined) return '';
                    return volume_dates[this.value].substr( -5 ); // clean, unformatted number for year
                },
                rotation: -30,
                align: 'right',
                style: {
                    fontSize: '10px',
                    color: 'black'
                },
                x:30
            },
            tickPixelInterval: 60,
            tickLength: 0,
            minorTickWidth: 0
        },
        yAxis: {
            title: {
                text: null
            },
            min: volume_min_y,
            max: volume_max_y,
            labels:{
                style: {
                    fontSize: '10px',
                    color: 'black'
                },
                formatter: function() {
                    return number_format( this.value ); // clean, unformatted number for year
                }
            },
            tickPixelInterval: 30,
            gridLineWidth: 1
        },
        tooltip: {
            formatter: function() {
                if(volume_dates[this.x] == undefined) return '';
                return www_lang.otc_date + ": " + volume_dates[this.x] + '<br/>' + www_lang.otc_value + ':' + number_format( this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5,
                lineWidth: 0.8,
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 1,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, 'rgba(186,213,234,0.7)'],
                        [1, 'rgba(186,213,234,0.7)']
                    ]
                }
            }
            //pointRange: 50
        },
        series: [{
            //pointInterval: 500,
            data: volume_y
        }]
    });


    //行业分布
    $('#otcIndDis').highcharts({
        chart: {
            type: 'bar',
            width: 620,
            height: 300,
            marginRight:50
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ind_y,
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                overflow: 'justify',
                style:{
                    fontWeight: 'bold'
                }
            },
            gridLineDashStyle: 'dash',
            min: ind_min_x,
            max: ind_max_x
        },
        tooltip: {
            formatter: function() {
                return  this.y + www_lang.otc_companys;
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    inside: false,
                    crop: false,
                    overflow: 'none'
                    //align:'right'
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            data: ind_x,
            color: 'rgba(66,138,222,0.9)'
        }]
    });

    //行业分布饼图
    $('#otcIndPie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 300,
            backgroundColor: 'rgba(255, 255, 255, 0)'
        },
        title: {
            text: '',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            formatter: function() {
                return this.point.name + ':<b>' + Math.round(this.point.percentage*Math.pow(10,1))/Math.pow(10,1) +'%</b>';
            }
        },
        legend:{
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'middle',
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            padding: 8,
            y: 20,
            useHTML: true,
            labelFormatter: function(){
                return '<div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:140px;" title="' + this.name + '">' + this.name +'</div>';
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: 20,
                    format: '{point.percentage:.1f} %'
                    //format: '{point.name}<br/>{point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            data: ind_pie_data
        }]
    });


});
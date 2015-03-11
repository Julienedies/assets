<!doctype html>
<html ng-app="etApp">
<head>
@include('includes.header')
@include('includes.assets')
<script type="text/javascript" src="/assets/vcn/js/libs/chart/highcharts.js"></script>
<script>
var _etApp = etApp($, angular, etConfig);

_etApp.controller('incomeCtrl', ['$scope', '$http', 'userManager', function($scope, $http, userManager){

	function init(){
		userManager.getIncome().then(function(data){
			
			$scope.income = data;
			//$scope.income.stats = [{cat:'php',ratio:40},{cat:'Js',ratio:'50'},{cat:'python',ratio:'10'}];

			},function(res){
				alert(res.data.msg);
			});
	}


	init();

	//////////////////////////////////////

	$scope.$on('logined', function(e, msg){
		init();
	});

}]);

//定义饼图指令
_etApp.directive('pie',[function() {
    return {
        restrict : 'A',
        scope : {
            pie : '='
        },
        link: function(scope, elm, attrs) {

            var width = elm.width()/2,
                height = elm.height() || width,
                radius = Math.min(width, height) / 2;

            elm = elm[0];

            scope.$watch('pie', function (data, oldVal){

                //------------------------
                //console.log(JSON.stringify(data));
				
                if(!data) return;

                //data = [{"name":"互联网产品","y":50.81},{"name":"财务","y":38.34},{"name":"技术","y":3.7},{"name":"其他","y":7.15}];

                $(elm).highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    title: {
                        text: '收益构成'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                color: '#000000',
                                connectorColor: '#000000',
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '占比',
                        data: data
                        /*
                        data: [
                            ['Firefox',   45.0],
                            ['IE',       26.8],
                            {
                                name: 'Chrome',
                                y: 12.8,
                                sliced: true,
                                selected: true
                            },
                            ['Safari',    8.5],
                            ['Opera',     6.2],
                            ['Others',   0.7]
                        ]
                        */
                    }]
                });

                //----------------------------------

            });

        }
    };
}]);
Highcharts.theme = {
		colors: ['#0168b7', '#930782', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
		chart: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
				stops: [
					[0, 'rgb(255, 255, 255)'],
					[1, 'rgb(240, 240, 255)']
				]
			},
			borderWidth: 0,
			plotBackgroundColor: 'rgba(255, 255, 255, .9)',
			plotShadow: true,
			plotBorderWidth: 1
		},
		title: {
			style: {
				color: '#222222',
				font: 'bold 1.5em "Microsoft Yahei", Simsun, sans-serif'
			}
		},
		subtitle: {
			style: {
				color: '#666666',
				font: 'bold 1em "Microsoft Yahei", Simsun, sans-serif'
			}
		},
		labels: {
			style: {
				color: '#99b'
			}
		},

		navigation: {
			buttonOptions: {
				theme: {
					stroke: '#CCCCCC'
				}
			}
		}
	};

	Highcharts.setOptions(Highcharts.theme);
	
</script>
<style>
body{
	font-family: 'Microsoft Yahei', Simsun, sans-serif;
}
table{
	margin-top:1em;
}
</style>
</head>

<body>

	<div class="wrapper pure-g" ng-controller="mainCtrl">
	
	@include('includes.top')
	
	<section id="main" class="pure-g">
		
		<article id="content" class="pure-u-1 pure-u-md-3-4" ng-if="user">
		
			<p ng-cloak ng-show="!user.id">只有登录用户才能访问!</p>
		
			<div ng-controller="incomeCtrl" ng-show="user.id">
			
				<h3 class="f2">我的回享收益</h3>
				
				<div><b>今日收益：￥</b> <b class="f2" ng-bind="income.today"></b></div>
				
				<br />
				<br />
			
				<div ng-cloak ng-show="income.history.length>=1">
					<h3><span class="f1 t1">历史收益<span></h3>
					
					<table class="pure-table pure-table-bordered">
						<thead>
							<tr>
								<th>日期</th>
								<th>收益</th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="item in income.history">
								<td ng-bind="item.day | dateFormat:'yyyy-MM-dd'"></td>
								<td ng-bind="'￥  ' + item.income"></td>
							</tr>
						</tbody>
					</table>
					
				</div>
			
				<!-- 没有收益时提示  <i class="fa fa-meh-o" style="font-size:6em;color:#2658b7;"></i> -->
				<div ng-cloak ng-show="income.history.length<1">
					<div class="center"><img src="/assets/vcn/img/face.png" style="width:6em;" /></div>
					<br />
					<br />
					<p>
					啊哦，不好意思，您现在还没有任何回享收益哦。
					<br/>想了解如何让自己的知识变现，请猛戳<a target="_blank" href="/topic/53c8d463f42739f9148b4567">如何玩转企业时间回享特权</a>、<a target="_blank" href="/topic/53e1c5a2379d7139a68b4567">【攻略贴】每天10分钟，知识也赚钱</a>。
					<br/>赶紧赚取你的牛奶和面包。
					</p>
				</div>
				
				<br/>
				
				<!-- 收益组成饼图  -->
				<div ng-show="income.stats.length>0" pie="income.stats">
				
				</div>
			
			</div>
			
		</article>
	
		<aside id="sidebar" class="pure-u-1 pure-u-md-1-4">
			
		</aside>
			
	</section>
	
	@include('includes.footer')
	
	</div>

</body>
</html>










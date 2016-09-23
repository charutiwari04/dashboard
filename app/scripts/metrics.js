'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
	.controller('MetricsCtrl', ['$scope', '$interval', function ($scope, $interval) {
		var stop;
		var refreshMetricsData = function(){
			var options = {
				chart: {
					renderTo: '',
					type: ''
				},
				title: {
					text: ''
				},
				xAxis: {
					categories: []
				},
				yAxis: {
					title: {
						text: ''
					}
				},
				series: []
			};
			// drawing line chart
			$.get('../data/IssueChart_MockData.csv', function(data){
					var lines = data.split('\n');
					$.each(lines, function(lineNo, line) {
						var items = line.split(',');
						// header line containes categories
						if (lineNo == 0) {
							$.each(items, function(itemNo, item) {
								if (itemNo > 0) options.xAxis.categories.push(item);
							});
						}
						// the rest of the lines contain data with their name in the first position
						else{
							var series = { 
								data: []
							};
							$.each(items, function(itemNo, item) {
								if (itemNo == 0) {
									series.name = item;
								} else {
									series.data.push(parseFloat(item));
								}
							});
							options.series.push(series);
						}
					});
					options.chart.renderTo = 'line-grf';
					options.chart.type = 'line';
					options.title.text = 'Paying Customers Over a Period Of Time';
					options.yAxis.title.text = 'No. of Customers';
					var chart = new Highcharts.Chart(options);
				});
				// drawing bar chart.
				$.get('../data/IssueChart_MockData-bar.csv', function(data){
					var lines = data.split('\n');
					var count=0;
					options.series = [];
					$.each(lines, function(lineNo, line) {
						var items = line.split(',');
						// header line containes categories
						if (lineNo == 0) {
							$.each(items, function(itemNo, item) {
								if (itemNo > 0) options.xAxis.categories.push(item);
							});
						}
						// the rest of the lines contain data with their name in the first position
						else {
							var series = { 
								data: []
							};
							$.each(items, function(itemNo, item) {
								if (itemNo == 0) {
									series.name = item;
								} else {
									count +=parseFloat(item);
									series.data.push(parseFloat(item));
								}
							});
							options.series.push(series);
						}
					});
					$scope.openis = count;
					options.chart.renderTo = 'bar-grf';
					options.chart.type = 'bar';
					options.title.text = 'Reported Issues Over a Period Of Time';
					options.yAxis.title.text = 'Reported Issues';
					var chart = new Highcharts.Chart(options);
				});
		};
		refreshMetricsData();
		stop = $interval(refreshMetricsData, 10000);
		$scope.$on('$destroy', function() {
			// Make sure that the interval is destroyed too
			if (angular.isDefined(stop)) {
				$interval.cancel(stop);
				stop = undefined;
			}
		});
	}]);
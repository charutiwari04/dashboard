'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MetricsCtrl', ['$scope', function ($scope) {
	var uri = '../data/IssueChart_Data.csv';
	$scope.openis = 0;
	(function pollData(){
		setTimeout(function(){
			var data_metrics =[];
			var count2008 = 0; var count2009 = 0; var count2010 = 0; var count2011 = 0; var count2012 = 0; var count2013 = 0; 
			var count2014 = 0; var count2015 = 0; var count2016 = 0;
			var	openC2008 = 0; var openC2009 = 0; var openC2010 = 0; var openC2011 = 0; var openC2012 = 0; var openC2013 = 0; 
			var openC2014 = 0; var openC2015 = 0; var openC2016 = 0;
			var line_charts= [];
			var bar_charts=[];
			var issue_count = 0;
			$scope.metricsData = [];
				$.ajax({
					type: "GET",
					url: uri,
					dataType: "text",
					async: true,
					success: function(response) {
						data_metrics = $.csv.toArrays(response);
						$.each(data_metrics, function(index, value){
							var yr=value[0].substr(0,4);
							switch(yr){
								case '2008':
									count2008++;
									if(value[4] === 'Open'){
										openC2008++;
									}
									break;
								case '2009':
									count2009++;
									if(value[4] === 'Open'){
										openC2009++;
									}
									break;
								case '2010':
									count2010++;
									if(value[4] === 'Open'){
										openC2009++;
									}
									break;
								case '2011':
									count2011++;
									if(value[4] === 'Open'){
										openC2011++;
									}
									break;
								case '2012':
									count2012++;
									if(value[4] === 'Open'){
										openC2012++;
									}
									break;
								case '2013':
									count2013++;
									if(value[4] === 'Open'){
										openC2013++;
									}
									break;
								case '2014':
									count2014++;
									if(value[4] === 'Open'){
										openC2014++;
									}
									break;
								case '2015':
									count2015++;
									if(value[4] === 'Open'){
										openC2015++;
									}
									break;
								case '2016':
									count2016++;
									if(value[4] === 'Open'){
										openC2016++;
									}
									break;
								default:
									break;
							}
						});
						line_charts.push(['Year','Paying Customers']);
						bar_charts.push(['Year', 'Reported Issues']);
						for(var i=2008; i<=2016; i++){
							var cnt1 = 'openC'.concat(i);
							var cnt2 = 'count'.concat(i);
							var arr = [];
							arr.push(Number(i));
							arr.push(Number(eval(cnt1)));
							line_charts.push(arr);
							var arrN = [];
							arrN.push(Number(i));
							arrN.push(Number(eval(cnt2)));
							bar_charts.push(arrN);
							issue_count += eval(cnt1);
						}
						var options = {
							title: 'Paying Customers Over Period of Time',
							curveType: 'function',
							legend: {position: 'bottom'},
						};
						var baroptions = {
							title: "Reported Issues Over Period of Time",
							legend: {position: 'none'},
						}
						var data = google.visualization.arrayToDataTable(line_charts);
						var databar = google.visualization.arrayToDataTable(bar_charts);
						var chart = new google.visualization.LineChart(document.getElementById('line-grf'));
						var chartbar = new google.visualization.BarChart(document.getElementById('bar-grf'));
						chart.draw(data, options);
						chartbar.draw(databar, baroptions);
						$scope.$apply(function(){
							$scope.openis = issue_count;
						});
					},
					complete: function(){
						pollData();
					},
					timeout: 5000
				});
			},5000);
		})();
  }]);
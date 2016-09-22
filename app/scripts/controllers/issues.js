'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:IssuesCtrl
 * @description
 * # IssuesCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
	.controller('IssuesCtrl', ['$scope', '$interval', function ($scope, $interval) {
		var stop;
		var refreshIssueData = function(){
			$.ajax({
				url: "../data/Issue_DATA.json",
				dataType: "json",
				async: true,
				success: function(response){
					var map = new google.visualization.DataTable();
					$('#table-div').empty();
					map.addRows(response.length);
					map.addColumn('string', 'Submission_time');
					map.addColumn('string', 'Name');
					map.addColumn('string', 'Email');
					map.addColumn('string', 'Description');
					map.addColumn('string', 'Status');
					map.addColumn('string', 'Closed_time');
					map.addColumn('string', 'Emp_Name');
					$.each(response, function(i, v){
						map.setValue(i, 0, v.submission_time);
						map.setValue(i, 1, v.Customer_Name);
						map.setValue(i, 2, v.Customer_Email);
						map.setValue(i, 3, v.Description);
						map.setValue(i, 4, v.Status);
						map.setValue(i, 5, v.Closed_Time);
						map.setValue(i, 6, v.Employee_Name);
					});
					var table = new google.visualization.Dashboard(document.getElementById('table-grf'));
					var msgTable = new google.visualization.ChartWrapper({
						chartType: 'Table',
						containerId: 'table-div',
						options: {width: '100%', height: '100%', page: 'enable', pageSize: '25'}
					});
					var control = new google.visualization.ControlWrapper({
						controlType: 'StringFilter',
						containerId: 'control-div',
						options: {
							filterColumnIndex: 3,
							caseSensitive: false,
							ui: {
								label: 'Search:'
							}
						}
					});
					table.bind(control, msgTable);
					table.draw(map);
				},
			});
		}
		refreshIssueData();
		stop = $interval(refreshIssueData, 10000);
		$scope.$on('$destroy', function() {
			// Make sure that the interval is destroyed too
			if (angular.isDefined(stop)) {
				$interval.cancel(stop);
				stop = undefined;
			}
		});
	}]);

'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
	.controller('EmployeeCtrl', ['$scope', function ($scope) {
		var data_emp =[];
		$scope.empData = [];
		(function pollEmp(){
			setTimeout(function(){
				$.ajax({
					type: "GET",
					url: '../data/Employee_DATA.csv',
					dataType: "text",
					async: true,
					success: function(response) {
						data_emp = $.csv.toArrays(response);
						var data = google.visualization.arrayToDataTable(data_emp);
						var options = {
							region: 'world',
							displayMode: 'markers',
							colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
							backgroundColor: '#81d4fa',
							datalessRegionColor: '#f8bbd0',
							defaultColor: '#f5f5f5'
						};
						$scope.$apply(function(){
							$scope.empData = data_emp;
							$scope.empData.shift();
						});
						var chart = new google.visualization.GeoChart(document.getElementById('geo-area'));
						chart.draw(data, options);
					},
					complete: function(){
						pollEmp();
					},
					timeout: 5000
				});
			},5000);
		})();
	}]);
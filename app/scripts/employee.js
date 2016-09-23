'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
	.controller('EmployeeCtrl', ['$scope', '$interval', function ($scope, $interval) {
		$scope.empData = [];
		var stop;
		var refreshEmpData = function(){
			$.get('../data/Employee_DATA.csv', function(response){
				var arr = [];
				var mapData = Highcharts.geojson(Highcharts.maps['custom/world']);
				var data_emp = $.csv.toArrays(response);
				$.each(data_emp, function(item, value){
					var obj={
						code: '',
						z : 0
					};
					obj.code = value[0];
					obj.z = parseInt(value[1]);
					arr.push(obj);
				});
				$scope.empData = data_emp;
				$('#geo-area').highcharts('Map', {
					chart: {
						borderWidth: 1
					},
					title: {
						text: 'Worldwide Employees Spacial View'
					},
					legend: {
						enabled: false
					},
					mapNavigation: {
						enabled: true,
						buttonOptions: {
							verticalAlign: 'bottom'
						}
					},
					series: [{
						name: 'Countries',
						mapData: mapData,
						color: '#E0E0E0',
						enableMouseTracking: false
					}, 
					{
						type: 'mapbubble',
						mapData: mapData,
						name: 'No. of Employees',
						joinBy: ['iso-a2', 'code'],
						data: arr,
						minSize: 4,
						maxSize: '12%',
						tooltip: {
							pointFormat: '{point.code}: {point.z} hundreds'
						}
					}]
				});
			});
		};
		refreshEmpData();
		stop = $interval(refreshEmpData, 10000);
		$scope.$on('$destroy', function() {
			// Make sure that the interval is destroyed too
			if (angular.isDefined(stop)) {
				$interval.cancel(stop);
				stop = undefined;
			}
		});
	}]);
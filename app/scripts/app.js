'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
	.module('dashboardApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl as main'
		})
		.state('employee', {
			url: '/employee',
			templateUrl: 'views/employee.html',
			controller: 'EmployeeCtrl as emp'
		})
		.state('metrics', {
			url: '/metrics',
			templateUrl: 'views/metrics.html',
			controller: 'MetricsCtrl as metric'
		})
		.state('issues', {
			url: '/issues',
			templateUrl: 'views/issues.html',
			controller: 'IssuesCtrl as issue'
		});
  }]);
  
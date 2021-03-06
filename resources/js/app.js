'use strict';

var spinnerBankAngularApp = angular.module('spinnerBankAngularApp', 
	[
	'ngRoute',
	'productos.controllers'
	])
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : '../../pages/Principal.html',
			controller : 'prodController'
		})
		.when('/producto',{
			templateUrl : '../../pages/Producto.html',
			controller : 'prodController'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
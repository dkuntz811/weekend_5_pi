console.log('js');
//remember to put in 'ngRoute' when adding routes
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: '/views/partials/home.html',
		controller: 'homeController'
	}).
	when('/add', {
		templateUrl: '/views/partials/add.html',
		controller: 'addController'
	}).
	when('/pet', {
		templateUrl: '/views/partials/pet.html',
		controller: 'petController'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);

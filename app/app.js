var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: "app/home/homeTmpl.html",
		controller: "HomeController"
	})
	.otherwise({
		redirectTo: "/home"
	})

});

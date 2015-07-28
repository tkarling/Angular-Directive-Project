angular.module("directivePractice")
.service("weatherService", function($http) {
	// console.log("init weatherService");

	this.getWeather = function(city) {
		return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city).then(function(response) {
			// console.log(response.data);
			var result = {
				name: response.data.name,
				temp: (response.data.main.temp - 273.15).toFixed(0),
				humidity: response.data.main.humidity,
				description: response.data.weather[0].description
			}
			// console.log("result", result);
			return result;
		})
	};
	// this.getWeather('Provo');

});
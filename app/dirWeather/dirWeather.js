angular.module("directivePractice")
    .directive("dirWeather", function() {
        return {
            scope: {
                currentUser: "=",
                weatherCall: "&"
            },
            templateUrl: "./app/dirWeather/dirWeather.html",
            // link: function(scope, element, attrs) {
            // 	console.log("init dirWeather");
            // }
            controller: function($scope) {
                // console.log("user in dirWeather", $scope.currentUser);
                // console.log("city", city);
                // $scope.weatherCall({data: city}).then(function(response) {

                // $scope.weatherCall({data:city}).then(function(response) {
                // 	console.log("resp in dirWeather", response);
                // 	$scope.myWeather = response;
                // });

                $scope.$watch(function() {
                    return $scope.currentUser.city
                }, function(value) {
                    console.log("When myVar changes its new value is: ", value);
	                var city = $scope.currentUser.city;
                    $scope.weatherCall({
                        data: city
                    }).then(function(response) {
                        console.log("resp in dirWeather", response);
                        $scope.myWeather = response;
                    });

                });
            }
        }
    });

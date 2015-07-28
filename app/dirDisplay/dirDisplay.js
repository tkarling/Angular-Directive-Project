angular.module("directivePractice")
    .directive("dirDisplay", function() {
        return {
            scope: {
                user: "=",
                setUser: "&"
            },
            restrict: "E",
            templateUrl: "./app/dirDisplay/dirDisplay.html",
            link: function(scope, element, attrs) {
                // console.log("init dir", attrs);
                scope.showAll = false;

                element.on('click', function() {
                    // console.log('clicked');
                    scope.showAll = !scope.showAll;
                    if (scope.showAll === true) {
                        scope.setUser({
                            user: scope.user
                        });
                    }
                    scope.$apply();
                })
            }
        }

    });

var myapp = angular.module('myapp', ["ui.router"]);
myapp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("route1");

    $stateProvider
            .state('route1', {
                url: "/route1",
                templateUrl: "route1.html"
            })
            .state('route1.list', {
                url: "/list",
                templateUrl: "route1.list.html",
                controller: function ($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })

            .state('route2', {
                url: "/route2",
                templateUrl: "route2.html",
                controller: function ($scope) {
                	$scope.greetingName = $scope.getName();
                }
            })
            .state('route2.list', {
                url: "/list",
                templateUrl: "route2.list.html"
            });
});

	myapp.controller('testController', ['$scope', '$state', function ($scope, $state) {
		    $scope.user = {
		        name: ''
		    };
		
		    $scope.getName = function () {
		        return $scope.user.name;
		    };
		
		    $scope.submit = function () {
		        $state.go('route2');
		    };
    }]);

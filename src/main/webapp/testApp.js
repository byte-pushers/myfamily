var myApp = angular.module("testApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .stage('home', {
            url: '/home',
            templateUrl: 'angularTest.html'
        })
        .stage('nextPage', {
            url: '/nextPage',
            templateUrl: 'angularTest2.html'
        });
    });

myApp.controller('testController', ['$scope', function ($scope) {
        $scope.name = 'jared';

        $scope.redirect = function () {
            $location.path('/angularTest2.html');
        };
    }]);

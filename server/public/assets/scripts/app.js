var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/home", {
            templateUrl: "/views/partials/home.html",
            controller: "ShowController"
        }).
        when("/add", {
            templateUrl: "/views/partials/add.html",
            controller: "AddController"
        }).
        when("/view", {
            templateUrl: "/views/partials/view.html",
            controller: "ShowController"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

angular.module("bestAgent", ["ngRoute", 'ngAnimate', "base64"])
.config(function($routeProvider, $locationProvider) {
    //$locationProvider.hashPrefix('');
    $routeProvider
    .when("/main", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/main.htm",
        controller : 'AppController'
    })
    .when("/wordpress/test", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/test.htm"
    })
    .when("/", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/main.htm",
        controller : 'AppController'
    })
    .when("/time", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/time.htm",
        controller : 'AppController'
    })
    .when("/priceOptions", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/price.htm",
        controller : 'AppController'
    })
    .when("/property", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/property.htm",
        controller : 'AppController'
    })
    .when("/booleanOption", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/booleanOption.htm",
        controller : 'AppController'
    })
    .when("/address", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/address.htm",
        controller : 'AppController'
    })
    .when("/info", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/info.htm",
        controller : 'AppController'
    })
    .when("/approve", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/approve.htm",
        controller : 'AppController'
    })
    .when("/zipcode", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/zipcode.htm",
        controller : 'AppController'
    })
    .when("/thanks", {
        templateUrl : "/wp-content/themes/zerif-pro/includes/thanks.htm",
        controller : 'AppController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
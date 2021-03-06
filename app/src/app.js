﻿'use strict';

/**
 * Angular App Declaration 
 */
var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'ngResource']);


/**
 * Global App Config
 * Contains routes for the whole application
 *
 */
app.config(['$routeProvider', '$httpProvider', '$mdThemingProvider', '$mdIconProvider',
function ($routeProvider, $httpProvider, $mdThemingProvider, $mdIconProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '../app/src/users/user.html',
            controller: 'UserController'
        })
        .when('/user/:userId', {
            templateUrl: '../app/src/users/user-detail.html',
            controller: 'UserDetailController'
        })
        .otherwise({
    redirectTo: '/'
        });


    $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("share", "./assets/svg/share.svg", 24)
        .icon("google_plus", "./assets/svg/google_plus.svg", 512)
        .icon("hangouts", "./assets/svg/hangouts.svg", 512)
        .icon("twitter", "./assets/svg/twitter.svg", 512)
        .icon("phone", "./assets/svg/phone.svg", 512);

    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');


}]);




'use strict';
angular.module('users', ['ngMaterial']);
//var app = angular.module('users', ['ngMaterial']);
//app.config(['$routeProvider', '$httpProvider',

//function ($routeProvider, $httpProvider) {

//    $routeProvider.
//when('/', {
//    templateUrl: '../app/src/users/user.html',
//    controller: 'UserController'
//}).

//when('/userman', {
//    templateUrl: '../app/users/user.html',
//    controller: 'UserController'
//}).
//when('#', {
//    templateUrl: '../app/users/user.html',
//    controller: 'UserController'
//})
//.otherwise({
//    redirectTo: '/'
//});
//    //	    //$httpProvider.interceptors.push('authInterceptor')
//}]);













//app.config(function ($httpProvider, $resourceProvider) {

//    console.log('test');
//    //$resourceProvider.defaults.stripTrailingSlashes = false;

//});

////angular.module('pharmsteadApp').factory('authService', authService);
////authService.$inject = ['$http', '$q', 'localStorageService'];

////function authService($http, $q, localStorageService){

////app.run(['authService', 'editableOptions', function (authService, editableOptions) {
////    authService.fillAuthData();

////}]);
//angular.module('users').run(['authService', 'editableOptions', function (authService, editableOptions) {
//    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
//    console.log('got to app run');
//    authService.fillAuthData();
//}]);
//angular.module('users')
//        .controller('indexController', [indexController]);

//function indexController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
//    console.log('index1');
//};
////app.controller('indexController', function ($scope, $location, $rootScope) {
////    console.log('index contrl');
////    //$scope.versionNumber = versionNumber.appVersion;
////    //$scope.logOut = function () {
////    //    authService.logOut();
////    //    $location.path('/home');
////    //}

////    //$scope.authentication = authService.authentication;

////    //var authdata;
////    //authService.getAuthData().then(function (data) {
////    //    authdata = data;
////    //    userSvc.get({ $filter: "UserName eq '" + authdata.userName + "'" }, function (data) {
////    //        $scope.user = data.value[0];
////    //        $scope.id = $scope.user.UserId;
////    //        $scope.userRole = $scope.user.UserUserRoles[0].UserRole.Name;
////    //    });
////    //});

////    // toastr options
////    toastr.options.showEasing = 'swing';
////    toastr.options.positionClass = "toast-bottom-right";
////    toastr.options.showMethod = 'slideDown';
////    toastr.options.closeButton = true;
////    //toastr.options.timeOut = 2000;
////});




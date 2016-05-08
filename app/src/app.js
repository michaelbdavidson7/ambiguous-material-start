'use strict';
console.log('reached top of appjs');
var app = angular.module("users", [
	"ngRoute",
	"ngResource",
	"ngMaterial", 'users']);


app.config(['$routeProvider', '$httpProvider',
	function ($routeProvider, $httpProvider) {
	    console.log('got to route provider');
	    $routeProvider.
		when('/', {
		    templateUrl: '../app/users/user.html',
		    controller: 'UserController'
		}).

		when('/userman', {
		    templateUrl: '../app/users/user.html',
		    controller: 'UserController'
		}).
		when('#', {
		    templateUrl: '../app/users/user.html',
		    controller: 'UserController'
		}).
		when('app', {
		    templateUrl: '../app/users/user.html',
		    controller: 'UserController'
		}).
		when('#', {
		    templateUrl: '../app/global/welcome_page/welcome_page.html',
		    controller: 'welcomePageCtrl',
		    controllerAs: 'vm'
		}).
		when('/doctor', {
		    templateUrl: '../app/doctor/dashboard/doctor-example.html',
		    controller: 'doctorDashCtrl',
		    controllerAs: 'vm'
		}).
		when('/doctorVideoChat', {
		    templateUrl: '../app/doctor/videoChat/doctor-video-chat.html',
		    controller: 'doctorVideoChatCtrl',
		    controllerAs: 'vm'
		}).
		when('/user', {
		    templateUrl: '../app/user/dashboard/user-example.html',
		    controller: 'userDashCtrl',
		    controllerAs: 'vm'
		}).
		when('/userVideoChat', {
		    templateUrl: '../app/user/videoChat/user-video-chat.html',
		    controller: 'userVideoChatCtrl',
		    controllerAs: 'vm'
		}).
		when('/support', {
		    templateUrl: '../app/support/dashboard/support-example.html',
		    controller: 'supportDashCtrl',
		    controllerAs: 'vm'
		}).
		when('/register', {
		    templateUrl: '../app/global/register/register.html'
		}).
		when('/login', {
		    templateUrl: '../app/global/login/login.html',
		    controller: 'loginCtrl',
		    controllerAs: 'vm'
		}).
		when('/medicineDirectory', {
		    templateUrl: '../app/global/medicine_directory/medicine-directory.html',
		    controller: 'medicineDirectoryCtrl',
		    controllerAs: 'vm'
		}).
		when('/medicineDirectory/:medId', {
		    templateUrl: '../app/global/medicine_directory/medicine-detail.html',
		    controller: 'medicineDetailCtrl',
		    controllerAs: 'vm'
		}).when("/orders", {
		    controller: "ordersController",
		    templateUrl: "/app/global/ordersFromDemo/orders.html"
		})
		.otherwise({
		    redirectTo: '/home'
		});


	    //$httpProvider.interceptors.push('authInterceptor')
	}]);

app.config(function ($httpProvider, $resourceProvider) {

    console.log('test');
    //$resourceProvider.defaults.stripTrailingSlashes = false;

});

//angular.module('pharmsteadApp').factory('authService', authService);
//authService.$inject = ['$http', '$q', 'localStorageService'];

//function authService($http, $q, localStorageService){

//app.run(['authService', 'editableOptions', function (authService, editableOptions) {
//    authService.fillAuthData();

//}]);
angular.module('users').run(['authService', 'editableOptions', function (authService, editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    console.log('got to app run');
    authService.fillAuthData();
}]);
angular.module('users')
        .controller('indexController', [indexController]);

function indexController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
    console.log('index1');
};
//app.controller('indexController', function ($scope, $location, $rootScope) {
//    console.log('index contrl');
//    //$scope.versionNumber = versionNumber.appVersion;
//    //$scope.logOut = function () {
//    //    authService.logOut();
//    //    $location.path('/home');
//    //}

//    //$scope.authentication = authService.authentication;

//    //var authdata;
//    //authService.getAuthData().then(function (data) {
//    //    authdata = data;
//    //    userSvc.get({ $filter: "UserName eq '" + authdata.userName + "'" }, function (data) {
//    //        $scope.user = data.value[0];
//    //        $scope.id = $scope.user.UserId;
//    //        $scope.userRole = $scope.user.UserUserRoles[0].UserRole.Name;
//    //    });
//    //});

//    // toastr options
//    toastr.options.showEasing = 'swing';
//    toastr.options.positionClass = "toast-bottom-right";
//    toastr.options.showMethod = 'slideDown';
//    toastr.options.closeButton = true;
//    //toastr.options.timeOut = 2000;
//});




(function () {
    'use strict';
    angular.module('users')
           .controller('index2', index2);

    function index2(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
        console.log('index12');
    };
})();

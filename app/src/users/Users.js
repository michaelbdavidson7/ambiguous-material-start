(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  //angular.module('users', [ 'ngMaterial' ]);


  angular.module('users')
         .controller('index', [index]);

  function index(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) { 
      console.log('index1');
  };

})();

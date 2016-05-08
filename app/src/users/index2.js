//(function(){
//angular.module('users')
//        .controller('index2');

//function index2(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
//    console.log('index12');
//};
//})();

(function () {
    angular.module('boardGameCo', []).controller('MainCtrl', function ($scope) {
        $scope.data = {
            Colors: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }
    });
}());
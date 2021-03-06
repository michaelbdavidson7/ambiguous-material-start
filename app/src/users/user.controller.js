(function () {

    angular
         .module('myApp')
         .controller('UserController', UserController);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    UserController.$inject = ['userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', 'boardGameCollectionSvc'];
    function UserController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log, boardGameCollectionSvc) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.makeContact = makeContact;
        self.submitUserName = submitUserName;

        // Load all registered users

        userService
              .loadAllUsers()
              .then(function (users) {
                  self.users = [].concat(users);
                  self.selected = users[0];
              });

        // *********************************
        // Internal methods
        // *********************************


        function submitUserName(userName) {
            alert(userName);
            boardGameCollectionSvc.get({}, function (data) {
                console.log(data);
            })
        }



        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser(user) {
            self.selected = angular.isNumber(user) ? $scope.users[user] : user;
        }

        /**
         * Show the Contact view in the bottom sheet
         */
        function makeContact(selectedUser) {

            $mdBottomSheet.show({
                controllerAs: "vm",
                templateUrl: './src/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', ContactSheetController],
                parent: angular.element(document.getElementById('content'))
            }).then(function (clickedItem) {
                $log.debug(clickedItem.name + ' clicked!');
            });

            /**
             * User ContactSheet controller
             */
            function ContactSheetController($mdBottomSheet) {
                this.user = selectedUser;
                this.items = [
                  { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                  { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                  { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                  { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
                ];
                this.contactUser = function (action) {
                    // The actually contact process has not been implemented...
                    // so just hide the bottomSheet

                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();

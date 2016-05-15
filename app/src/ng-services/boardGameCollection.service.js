(function(){
    'use strict';
angular
    .module("myApp")
    .factory("boardGameCollectionSvc", boardGameCollectionSvc)

boardGameCollectionSvc.$inject = ["$resource"];
function boardGameCollectionSvc($resource) {
    var id = "(:id)";
    var url = 'https://www.boardgamegeek.com/xmlapi2/collection?username=alexsr&id=13';
    //var url = config.apiUrl + "/Users";
    return $resource(url, null, {
        'get': {
            method: 'GET',
            url: url
                //+ id
                //+ '?$expand=UserUserRoles($expand=UserRole)'
        },
        'getJSON': {
            method: 'GET',
            url: url
        },
        'update': {
            method: 'PUT',
            url: url + '(:id)'
        },
        'save':
            { method: 'POST' }
    })
}


})();
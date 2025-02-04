(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'app/foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    }
    
    function FoundItemsDirectiveController() {
        var list = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;

        narrowItDown.getMatchedMenuItems = function() {
            if (narrowItDown.searchTerm) {
                var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
                promise.then(function(result) {
                    narrowItDown.found = result;
                });
            } else {
                narrowItDown.found = [];
            }
        };

        narrowItDown.removeItem = function(index) {
            narrowItDown.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            }).then(function(response) {
                var foundItems = [];
                var allItems = response.data;

                for (var category in allItems) {
                    var items = allItems[category].menu_items;
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            foundItems.push(items[i]);
                        }
                    }
                }
                return foundItems;
            });
        };
    }
})();
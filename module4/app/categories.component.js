(function() {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'app/templates/categories.template.html',
        bindings: {
          items: '<'
        }
      });
  })();

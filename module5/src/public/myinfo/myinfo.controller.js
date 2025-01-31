(function () {
    'use strict';
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['UserService', '$http'];
    function MyInfoController(UserService, $http) {
      var myInfoCtrl = this;
      myInfoCtrl.user = UserService.getUser();
    
      if (Object.keys(myInfoCtrl.user).length === 0) {
        myInfoCtrl.message = "Not Signed Up Yet. Sign up Now!";
        myInfoCtrl.notSignedUp = true;
      } else {
        myInfoCtrl.notSignedUp = false;
        var favoriteDishUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + myInfoCtrl.user.favoriteDish.charAt(0) + "/menu_items/" + myInfoCtrl.user.favoriteDish.substring(1) + ".json";
        $http.get(favoriteDishUrl).then(function (response) {
          if (response.data) {
            myInfoCtrl.favoriteDish = response.data;
            myInfoCtrl.favoriteDish.categoryShortName = myInfoCtrl.user.favoriteDish.charAt(0);
            myInfoCtrl.favoriteDish.shortName = myInfoCtrl.user.favoriteDish.substring(0);
          } else {
            myInfoCtrl.message = "No such menu number exists.";
          }
        });
      }
    }
    })();
    
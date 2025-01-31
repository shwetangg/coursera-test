(function () { 
  'use strict'; 
  angular.module('public') 
  .controller('SignUpController', SignUpController); 
  SignUpController.$inject = ['UserService', '$http']; 
  function SignUpController(UserService, $http) { 
    var signUpCtrl = this; 
    signUpCtrl.submitForm = function (form) { 
      if (form.$valid) { 
        var favoriteDishUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + signUpCtrl.user.favoriteDish.charAt(0) + "/menu_items/" + signUpCtrl.user.favoriteDish.substring(1) + ".json"; 
        $http.get(favoriteDishUrl).then(function (response) { 
          if (response.data) { 
            UserService.saveUser(signUpCtrl.user); 
            signUpCtrl.message = "Your information has been saved."; 
          } else { 
            signUpCtrl.message = "No such menu number exists."; 
          } 
        }); 
      } 
    }; 
  } 
})();
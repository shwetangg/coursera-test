(function () {
    'use strict';
    angular.module('LunchChecker', [])
    .controller('LunchCheckerController', function($scope){
        $scope.name="data";
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageClass = "";
        $scope.borderClass = "";
        $scope.checkIfTooMuch = function () {
            console.log("Check If Too Much button clicked");
            if ($scope.lunchItems.trim() === "") {
                $scope.message = "Please enter data first";
                $scope.messageClass = "message-red";
                $scope.borderClass = "border-red";
                console.log("Message: " + $scope.message);
            } else {
                var items = $scope.lunchItems.split(',')
                    .filter(item => item.trim() !== ''); // ignore empty items
                if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.messageClass = "message-green";
                    $scope.borderClass = "border-green";
                } else {
                    $scope.message = "Too much!";
                    $scope.messageClass = "message-green";
                    $scope.borderClass = "border-green";
                }
                console.log("Items: " + items);
                console.log("Message: " + $scope.message);
            }
        };
    });
})();
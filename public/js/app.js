console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// Plugin for materialize ui
var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
    }]);

});

// CLIENT side js=======================
console.log("Sanity Check: JS is working!");


angular
    .module('project_03', ['ngRoute'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '',
      controllerAs: '',
      controller: ''
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}




// Plugin for materialize ui
var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
    }]);

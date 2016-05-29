// CLIENT side js=======================
console.log("Sanity Check: JS is working!");

angular
  .module('project_03', [
    'ngRoute',
    'satellizer'
  ])
  .controller('MainController', MainController)
  .controller('TrailsIndexController', TrailsIndexController)
  .controller('TrailsNewController', TrailsNewController)
  .controller('TrailsShowController', TrailsShowController)
  .controller('TrailsEditController', TrailsEditController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)
  ;


  $(document).ready(function(){
    $('.parallax').parallax();
// Plugin for materialize ui
var app = angular.module('materializeApp', ['ui.materialize'])
    .controller('BodyController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
    }]);

  });

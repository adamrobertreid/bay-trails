// CLIENT side js=======================
console.log("Sanity Check: JS is working!");

angular
  .module('project_03', [
    'ngRoute',
    'satellizer'
  ])
  .controller('MainController', MainController)

  // Trails CRUD controllers ->
  .controller('TrailsIndexController', TrailsIndexController)
  .controller('TrailsNewController', TrailsNewController)
  .controller('TrailsShowController', TrailsShowController)
  .controller('TrailsEditController', TrailsEditController)

  // User login-logout-profile ->
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)
  ;



  $(document).ready(function(){

    uploadcare.openDialog(null, {
  crop: "disabled",
  previewStep: true,
  imagesOnly: true
}).done(function(file) {
  file.promise().done(function(fileInfo){
    console.log(fileInfo.cdnUrl);
  });
});

// Plugin for materialize ui
var app = angular.module('project_03', ['ui.materialize'])
    .controller('MainController', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
        // landing page header
        $('.parallax').parallax();

        // selections for search bar results
        $('select').material_select('destroy');
    }]);

  });

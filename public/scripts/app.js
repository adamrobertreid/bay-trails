// CLIENT side js=======================
console.log("Sanity Check: JS is working!");

angular
  .module('project_03', [
    'ngRoute',
    'satellizer',
    'ui.materialize',
    'ng-uploadcare'
  ])


  .controller('MainController', MainController)

  // Trails CRUD controllers ->
  .controller('TrailsIndexController', TrailsIndexController)
  .controller('TrailsNewController', TrailsNewController)
  .controller('TrailsShowController', TrailsShowController)
  .controller('TrailsEditController', TrailsEditController)
  .controller('AdminController', AdminController)
  .controller('AdminLoginController', AdminLoginController)
  // User login-logout-profile ->
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)

AdminLoginController.$inject = ["$location", "UserService"]; // minification protection
function AdminLoginController ($location, UserService) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.login = function() {
    UserService
      .login(vm.new_user)
      .then(function onSuccess(){
        console.log('log admin', UserService.user.admin);

        if (UserService.user.admin) {
          vm.new_user = {}; // clear sign up form
          $location.path('/admin');
        }else {
          vm.new_user = {}; // clear sign up form
          $location.path('/'); // redirect to '/profile'
        }
      });
  };
}

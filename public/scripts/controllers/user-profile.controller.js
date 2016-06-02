ProfileController.$inject = ["$location", "UserService"]; // minification protection
function ProfileController ($location, UserService) {
  var vm = this;
  vm.new_profile = {}; // form data
  // vm.getProfile = getProfile;
  vm.trails = [];
  console.log('top vm trails', vm.trails);
  getProfile();

  vm.updateProfile = function() {
    UserService
      .updateProfile(vm.new_profile)
      .then(function onSuccess() {
        vm.showEditForm = false;
      });
  };


  function getProfile(){
    UserService
    .getProfile()
    .then(function onSuccess(){
     console.log('users trails liked',UserService.profile);
     vm.trails = UserService.profile.trails;
    //  vm.trails_store.push(vm.trails);


     console.log('whats in vm.trails', vm.trails);
    });
  }

}

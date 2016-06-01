// CLIENT side js=======================
console.log("Sanity Check: JS is working!");

angular
  .module('project_03', [
    'ngRoute',
    'satellizer',
    'ui.materialize'
    // 'ng-uploadcare'
  ])
  .controller('MainController', MainController)

  // Trails CRUD controllers ->
  .controller('TrailsIndexController', TrailsIndexController)
  .controller('TrailsNewController', TrailsNewController)
  .controller('TrailsShowController', TrailsShowController)
  .controller('TrailsEditController', TrailsEditController)
  .controller('AdminController', AdminController)
  // User login-logout-profile ->
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)

//   //
//   function MainController() {
//     // var vm = this;
//     // console.log('hi im main controller');
//     // vm.select = {
//     //     value: "Option1",
//     //     choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
//     // };
//
//       // landing page header
//     $('.parallax').parallax();
//
//
//   // Initialize collapse button
//   $(".button-collapse").sideNav();
//
//
//
//           // selections for search bar results
//     $('select').material_select('destroy');
//
// }
  // function TrailsIndexController (){
  //
  //     var vm = this;
  //      console.log('hi whats in here', trails);
  //         vm.trails = trailData.getAll();
  //
  //         vm.trailNames = _.chain(vm.trails).pluck("trailName").uniq().sortBy().value();
  //         vm.locations = _.chain(vm.trails).pluck("address").uniq().sortBy().value();
  //
  //         vm.clearFilters = function(){
  //             vm.selectedTrailNames =  undefined;
  //             vm.selectedLocations = undefined;
  //         };
  //
  //     }





//   $(document).ready(function(){
//
//     uploadcare.openDialog(null, {
//   crop: "disabled",
//   previewStep: true,
//   imagesOnly: true
// }).done(function(file) {
//   file.promise().done(function(fileInfo){
//     console.log(fileInfo.cdnUrl);
//   });
// });

// Plugin for materialize ui

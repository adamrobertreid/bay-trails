TrailsNewController.$inject = ["$location", "$http"]; // minification protection
function TrailsNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.trail = {}; // form data

  ////

  function create() {
    $http
      .post('/api/trails', vm.trail)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      $location.path('/trails/' + response.data._id);
    }

    function onCreateError(response){
      console.error("Failed to create trail", response);
    }
  }
}

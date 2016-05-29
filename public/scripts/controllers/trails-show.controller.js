TrailsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function TrailsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.trail = {};

  var id = $routeParams.id;
  get(); // fetch one trail (show)

  ////

  function get() {
    $http
      .get('/api/trails/' + id)
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.trail = response.data;
    }

    function onGetError(response){
      console.error("Failed to get trail", response);
      $location.path("/");
    }
  }
}

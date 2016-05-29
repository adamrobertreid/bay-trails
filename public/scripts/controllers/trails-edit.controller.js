TrailsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function TrailsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.trail = {}; // form data

  var id = $routeParams.id;
  get(); // fetch one trail (show)

  ////

  function update() {
    $http
      .put('/api/trails/' + id, vm.trail)
      .then(onUpdateSuccess, onUpdateError);

    function onUpdateSuccess(response){
      $location.path("/trails/" + id);
    }

    function onUpdateError(response){
      console.error("Failed to update trail", response);
    }
  }

  function destroy() {
    $http
      .delete('/api/trails/' + id)
      .then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response){
      $location.path("/");
    }

    function onDeleteError(response){
      console.error("Failed to delete trail", response);
    }
  }

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

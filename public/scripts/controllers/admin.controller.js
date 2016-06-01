
AdminController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function AdminController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.create = create;
  vm.trail = {}; // form data

  var id = $routeParams._id;
  get(); // fetch one trail (show)

  ////

  function update(trail) {
    $http
      .put('/api/trails/' + trail._id, trail)
      .then(onUpdateSuccess, onUpdateError);

    function onUpdateSuccess(response){
      $location.path("/admin");
    }

    function onUpdateError(response){
      console.error("Failed to update trail", response);
    }
  }

  function destroy(trail) {
    $http
      .delete('/api/trails/' + trail._id)
      .then(onDeleteSuccess, onDeleteError);

    function onDeleteSuccess(response){
      $location.path('/admin/');
    }

    function onDeleteError(response){
      console.error("Failed to delete trail", response);
    }
  }

  function create() {
    $http
      .post('/api/trails', vm.trail)
      .then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      $location.path('/admin/');
    }

    function onCreateError(response){
      console.error("Failed to create trail", response);
    }
  }

  function get() {
    $http
      .get('/api/trails')
      .then(onGetSuccess, onGetError);

    function onGetSuccess(response){
      vm.trails = response.data;
    }

    function onGetError(response){
      console.error("Failed to get trail", response);
      $location.path("/admin");
    }
  }
}

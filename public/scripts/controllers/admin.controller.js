
AdminController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function AdminController ($location, $http, $routeParams) {
  var vm = this;
  vm.update = update;
  vm.destroy = destroy;
  vm.create = create;
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

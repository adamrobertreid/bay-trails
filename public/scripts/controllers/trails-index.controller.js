TrailsIndexController.$inject = ["$http"]; // minification protection
function TrailsIndexController ($http) {
  var vm = this;
  vm.trails = [];

  query(); // fetch all the trails (index)

  ////

  function query() {
    $http
      .get('/api/trails')
      .then(function onSuccess(response) {
        vm.trails = response.data;
      });
  }
}

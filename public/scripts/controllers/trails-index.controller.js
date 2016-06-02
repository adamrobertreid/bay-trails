TrailsIndexController.$inject = ["$http", "UserService"]; // minification protection
function TrailsIndexController ($http, UserService) {
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

  vm.favorite = function(trailId){
    UserService
    .putFavCurrentUser(trailId, {isLiked:true})
    .then(function onSuccess(){
    });

  };
}

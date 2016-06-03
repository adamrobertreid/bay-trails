UserService.$inject = ["$http", "$q", "$auth"]; // minification protection
function UserService($http, $q, $auth){
  var self = this;

  var empty_user = {
    user_id: null,
    displayName: null,
    email: null,
    admin: true
  };



  self.user = angular.extend({}, empty_user, {
    isLoggedIn: isLoggedIn


  });

  self.currentUser = setCurrentUser;
  self.signup = signup;
  self.updateProfile = updateProfile;
  self.login = login;
  self.logout = logout;
  self.putFavCurrentUser = putFavCurrentUser;
  self.getProfile = getProfile;


  //// UserService Methods

  function setCurrentUser(){
    var user = $auth.getPayload();
    if (user) {
      console.log("::: User is Logged In! :::", {user: user, token: $auth.getToken()});
    } else {
      console.log("::: No JWT found, user is not logged in. :::");
    }
    return angular.extend(self.user, user || empty_user);
  }

  function signup(user_data){
    return (
      $auth
       .signup(user_data) // signup (https://github.com/sahat/satellizer#authsignupuser-options)
       .then(
         function onSuccess(response) {
           $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
           console.log("new user sign up admin", user_data);
           setCurrentUser();
         },

         function onError(error) {
           console.error(error);
         }
       )
    );
  }

  function updateProfile(profileData) {
    return (
      $http
        .put('/api/me', profileData)
        .then(
          function (response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
            setCurrentUser();
          },

          function onError(error) {
            console.error(error);
          }
        )

    );
  }

  function putFavCurrentUser(trailId, isLiked) {
    return (
      $http
        .put('/api/me/trails/'+ trailId, isLiked)
        .then(
          function (response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
            setCurrentUser();
          },

          function onError(error) {
            console.error(error);
          }
        )

    );
  }

  function getProfile() {
    console.log("this is fav trail get");
    return (
      $http
        .get('/api/me')
        .then(
          function (response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
            console.log('get profile', response);
            self.profile = response.data;
            setCurrentUser();
          },

          function onError(error) {
            console.error(error);
          }
        )

    );
  }

  function login(userData) {
    return (
      $auth
        .login(userData) // login (https://github.com/sahat/satellizer#authloginuser-options)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
            setCurrentUser();
          },
          function onError(error) {
            console.error(error);
          }
        )
    );
  }

  function logout() {
    return (
      $auth
        .logout() // delete token (https://github.com/sahat/satellizer#authlogout)
        .then(function() {
          setCurrentUser();
        })
    );
  }

  //// Current User Methods

  function isLoggedIn(){
    return !!self.user.user_id;
  }

self.isAdmin = function(){
  return self.user.admin;
};

}

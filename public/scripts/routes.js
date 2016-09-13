configRoutes.$inject = ["$routeProvider", "$locationProvider"]; // minification protection
function configRoutes($routeProvider, $locationProvider) {

  //this allows us to use routes without hash params
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', {
      templateUrl: 'templates/main/index.html',
      controller: 'TrailsIndexController',
      controllerAs: 'trailsIndexCtrl'
    })
    // ============= ROUTES TO USER LOGIN / LOGOUT / SIGN UP PAGES =============
    .when('/signup', {
      templateUrl: 'templates/user/signup.html',
      controller: 'SignupController',
      controllerAs: 'sc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/login', {
      templateUrl: 'templates/auth/login.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/logout', {
      template: null,
      controller: 'LogoutController',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/profile', {
      templateUrl: 'templates/user/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profileCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    // =========================== ROUTES TO TRAILS PAGES ======================
    .when('/trails', {
      templateUrl: 'templates/trails/index.html',
      controller: 'TrailsIndexController',
      controllerAs: 'trailsIndexCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/trails/new', {
      templateUrl: 'templates/trails/new.html',
      controller: 'TrailsNewController',
      controllerAs: 'trailsNewCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/trails/:id', {
      templateUrl: 'templates/trails/show.html',
      controller: 'TrailsShowController',
      controllerAs: 'trailsShowCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/trails/:id/edit', {
      templateUrl: 'templates/trails/edit.html',
      controller: 'TrailsEditController',
      controllerAs: 'trailsEditCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    // =========================== ROUTES TO ADMIN PAGES ======================
    .when('/admin', {
      templateUrl: 'templates/admin/index.html',
      controller: 'AdminController',
      controllerAs: 'adminCtrl',
      resolve: {
        UserService: 'UserService',
        loginRequired: loginRequired,
        adminRequired: adminRequired
      }
    })
    .when('/admin/login', {
      templateUrl: 'templates/admin/login.html',
      controller: 'AdminLoginController',
      controllerAs: 'adminLoginCtrl',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })

    // =============== WHEN THERE IS NO ROUTE REDIRECT TO MAIN PAGE ===========
    .otherwise({redirectTo: '/'});


    function skipIfLoggedIn($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function adminRequired($location, $auth, UserService){
      if (!UserService.isAdmin()){
        $location.path('/');
      }
    }



    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }

}

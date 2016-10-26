(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        access: true
      })
      .when('/register', {
        templateUrl: 'js/components/register/register.view.html',
        controller: 'registerController',
        controllerAs: 'registerCtrl',
        access: true
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
})();

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
      .when('/login', {
        templateUrl: 'js/components/login/login.view.html',
        controller: 'loginController',
        controllerAs: 'loginCtrl',
        access: true
      })
      .when('/members', {
        templateUrl: 'js/components/members/members.view.html',
        controller: 'membersController',
        controllerAs: 'membersCtrl',
        access: true
      })
      .when('/myAcct', {
        templateUrl: 'js/components/myAcct/myAcct.view.html',
        controller: 'myAcctController',
        controllerAs: 'myAcctCtrl',
        access: true
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
})();

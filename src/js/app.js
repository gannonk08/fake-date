// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.register',
      'myApp.register.services',
      'myApp.components.login',
      'myApp.login.services',
      'myApp.components.members',
      'myApp.members.services'

    ]);

})();

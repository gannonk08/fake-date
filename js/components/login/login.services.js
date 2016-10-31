(function() {

  'use strict';

  angular
    .module('myApp.login.services', [])
    .service('loginService', loginService);

  loginService.$inject = ['$http'];

  function loginService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating/';
    this.loginUser = function(userInfo) {
      console.log(userInfo);
      return $http({
        method: 'POST',
        url: baseURL + 'auth/login',
        data: userInfo,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();

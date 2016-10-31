(function() {

  'use strict';

  angular
    .module('myApp.myAcct.services', [])
    .service('myAcctService', myAcctService);

  myAcctService.$inject = ['$http'];

  function myAcctService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://galvanize-student-apis.herokuapp.com/gdating/';
    this.getMember = function(memberID) {
      var queryURL = baseURL + 'members/' + memberID;
      return $http({
        method: 'GET',
        url: queryURL,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();

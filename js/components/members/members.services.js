(function() {

  'use strict';

  angular
    .module('myApp.members.services', [])
    .service('membersService', membersService);

  membersService.$inject = ['$http'];

  function membersService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating/';
    this.getMembers = function(queryParameters) {
      var queryURL = baseURL + 'members' + queryParameters;
      return $http({
        method: 'GET',
        url: queryURL,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();

(function() {

  'use strict';

  angular
    .module('myApp.members.services', [])
    .service('membersService', membersService);

  membersService.$inject = ['$http'];

  function membersService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://galvanize-student-apis.herokuapp.com/gdating/';
    this.getMembers = function() {
      var members = {
        limit: 0,
        offset: 100
      }
      return $http({
        method: 'GET',
        url: baseURL + 'members',
        data: members,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();

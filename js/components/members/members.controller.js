(function() {

  'use strict';

  angular
    .module('myApp.components.members', ['ngMap'])
    .controller('membersController', membersController);

  membersController.$inject = ['$scope','membersService', 'NgMap'];

  function membersController($scope, membersService, NgMap) {
    /*jshint validthis: true */

    const vm = this;
    vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCEij8OgkLRUamoyyQVViZTJPT4rWBYKCo';

    NgMap.getMap().then(function(map) {
      google.maps.event.trigger(map, 'resize');
    });

    vm.getMembers = function(queryParameters) {
      console.log(queryParameters);
      membersService.getMembers(queryParameters)
      .then((members) => {
        vm.membersDB = members.data.data;
        console.log(members);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
      vm.userInfo = {};
    };
  }

})();

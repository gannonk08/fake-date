(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['membersService'];

  function membersController(membersService) {
    /*jshint validthis: true */
    const vm = this;
    vm.getMembers = function() {
      membersService.getMembers()
      .then((members) => {
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

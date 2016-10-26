(function() {

  'use strict';

  angular
    .module('myApp.components.register', [])
    .controller('registerController', registerController);

  registerController.$inject = ['registerService'];

  function registerController(registerService) {
    /*jshint validthis: true */
    const vm = this;
    vm.formShown = false;
    vm.showAdd = function() {
      vm.formShown = !vm.formShown;
    };
    vm.registerUser = function() {
      registerService.registerUserPost(vm.newUser)
      .then((newUser) => {
        console.log(newUser);
        localStorage.setItem('token',newUser.data.data.token);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
      vm.newUser = {};
    };
  }

})();

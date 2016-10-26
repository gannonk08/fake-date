(function() {

  'use strict';

  angular
    .module('myApp.components.register', [])
    .controller('registerController', registerController);

  registerController.$inject = ['$scope'];

  function registerController($scope) {
    /*jshint validthis: true */
    const vm = this;
    vm.formShown = false;
    vm.showAdd = function() {
      vm.formShown = !vm.formShown;
    };
  }

})();

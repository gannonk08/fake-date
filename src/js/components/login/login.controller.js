(function() {

  'use strict';

  angular
    .module('myApp.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['loginService'];

  function loginController(loginService) {
    /*jshint validthis: true */
    const vm = this;
    vm.loginUser = function() {
      loginService.loginUser(vm.userInfo)
      .then((user) => {
        console.log(user);
        localStorage.setItem('acctID',user.data.data.user._id);
        localStorage.setItem('token',user.data.data.token);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
      vm.userInfo = {};
    };
  }

})();

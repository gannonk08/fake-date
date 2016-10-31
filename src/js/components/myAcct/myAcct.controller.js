(function() {

  'use strict';

  angular
    .module('myApp.components.myAcct', ['ngMap'])
    .controller('myAcctController', myAcctController);

  myAcctController.$inject = ['$scope','myAcctService', 'NgMap'];

  function myAcctController($scope, myAcctService, NgMap) {
    /*jshint validthis: true */
    const vm = this;

    vm.formShown = false;
    vm.showAdd = function() {
      console.log('form show');
      vm.formShown = !vm.formShown;
    };

    vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCEij8OgkLRUamoyyQVViZTJPT4rWBYKCo';

    NgMap.getMap().then(function(map) {
      google.maps.event.trigger(map, 'resize')
    })

    vm.getMemberInfo = function() {
      const acctID =   localStorage.getItem('acctID');
      myAcctService.getMember(acctID)
      .then((memberInfo) => {
        vm.acctInfo = memberInfo.data.data;
        console.log(vm.acctInfo);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
      vm.registerUser = function() {
        registerService.registerUserPost(vm.newUser)
        .then((newUser) => {
          localStorage.setItem('token',newUser.data.data.token);
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
        vm.newUser = {};
      };
    };
  }

})();

(function() {

  'use strict';

  angular
    .module('myApp.register.services', [])
    .service('registerService', registerService);

  registerService.$inject = ['$http'];

  function registerService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://galvanize-student-apis.herokuapp.com/gdating/';
    this.registerUserPost = function(newUser) {
      var formattedUser = {
        username: newUser.username || '',
        names: {
          firstName: newUser.firstName || '',
          lastName: newUser.lastName || ''
        },
        description: newUser.description || '',
        avatar: newUser.avatar || '',
        email: newUser.email || '',
        password: newUser.password || '',
        dob: newUser.dob || '',
        phone: newUser.phone || '',
        address: {
          zipcode: newUser.zipcode || '',
          geo: {
            lng: -104.9903,
            lat: 39.7392
          },
          suite: newUser.suite || '',
          city: newUser.city || '',
          street: newUser.street || ''
        },
        website: newUser.website || '',
        company: {
          bs: newUser.bs || '',
          catchPhrase: newUser.catchPharse || '',
          name: newUser.companyName || ''
        },
        slug: sluger(newUser.username),
        gender: newUser.gender || 3,
        interestedIn: [
          0
        ]
      };
      console.log(formattedUser);

      return $http({
        method: 'POST',
        url: baseURL + 'auth/register',
        data: formattedUser,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
  function sluger(string) {
    if (string) {
      return string + Math.floor(Math.random() * 5000) + Math.floor(Math.random() * 5000);
    }
    else {
      return 'slughead' + Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50);
    }
  }

})();

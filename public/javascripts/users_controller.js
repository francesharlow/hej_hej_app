angular.module('HejHejApp').controller('UsersController', UsersController)

UsersController.$inject = ['$http'];

function UsersController($http){
    var users = this;

    users.all = [];

    users.add = function(){
      console.log('clicked', users.new);
      var user = {name: users.new};
      $http
        .post('/users', user)
        .then(function(response){
          console.log(response.data);
          users.all.push(user);
        })
      users.new = "";
    }

    users.fetch = function(){
      $http
        .get('/users')
        .then(function(response){
          users.all = response.data;
      })
    }

    users.fetch();
}
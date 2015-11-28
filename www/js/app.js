// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('localStorageCtrl', function($scope, $localStorage){
  $scope.data = [];
  $scope.save = function(){
    $scope.data.push($scope.a);
    $scope.a = {}
    $localStorage.inputUser = $scope.data;
  }

  $scope.show = function(){
    $scope.showData = $localStorage.inputUser;
  }

  $scope.remove = function(){
    $localStorage.$reset();
    $scope.show();
  }

  $scope.del = function(id){
     $localStorage.inputUser.splice(id, 1);
  }

})

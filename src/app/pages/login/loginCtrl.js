/**
 * @author J.Laan
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login')
    .controller('LoginCtrl', LoginCtrl);

  /** @ngInject */
  function LoginCtrl($scope, $state, $document, $timeout, baConfig, baUtil, $q, toastr, toastrConfig) {

    var vm = this;
    $scope.login = {};

    function init() {
      console.log('contorller works');
    }

    $scope.userLogin = function() {
      console.log('Button works');
      var email = $scope.login.email;
      var pass = $scope.login.password;
      firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
        $state.go('userDashboard');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    };
  init();
}

})();
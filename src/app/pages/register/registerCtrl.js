/**
 * @author J.Laan
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.register')
        .controller('RegisterCtrl', RegisterCtrl);
  
    /** @ngInject */
    function RegisterCtrl($scope, $document, $timeout, baConfig, baUtil, $q, toastr, toastrConfig) {
        
      var vm = this;
      $scope.userSet = false;
      $scope.organizationSet = false;
      $scope.user = {};
  
     function init(){

      }

      $scope.saveUser = function(){
        var email = $scope.user.email;
        var pass = $scope.user.password;
        $scope.user.roleRef = db.collection('roles').doc('IUt8ZcWJB1jbwZWyRC40');
        firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
          var user = firebase.auth().currentUser;
          firebase.firestore().collection("users").doc(user.uid).set({
              firstName: $scope.user.firstName,
              lastName: $scope.user.lastName,
              email: $scope.user.email,
              city: $scope.user.city,
              street: $scope.user.street,
              houseNumber: $scope.user.houseNumber,
              postalCode: $scope.user.postalCode,
              birthDate: $scope.user.birthDate,
              roleRef: $scope.user.roleRef,
              organizerStatus: false
          })
          }, function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
          });
      }

      // $scope.saveOrganisation = function(){
      //   var email = $scope.organization.email;
      //   var pass = $scope.organization.password;
      //   $scope.user.roleRef = db.collection('roles').doc('IUt8ZcWJB1jbwZWyRC40');
      //   firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
      //     var user = firebase.auth().currentUser;
      //     firebase.firestore().collection("organisations").doc(user.uid).set({
      //         firstName: $scope.organization.firstName,
      //         lastName: $scope.organization.lastName,
      //         email: $scope.organization.email,
      //         city: $scope.usorganizationr.city,
      //         street: $scope.organization.street,
      //         houseNumber: $scope.organization.houseNumber,
      //         postalCode: $scope.organization.postalCode,
      //         birthDate: $scope.organization.birthDate,
      //         password: $scope.organization.password,
      //         roleRef: $scope.user.roleRef
      //     })
      //     }, function(error) {
      //         // Handle Errors here.
      //         var errorCode = error.code;
      //         var errorMessage = error.message;
      //     });
      // }
      //     });
      // }

      $scope.setUser = function(){
         $scope.userSet = true;
         $scope.organizationSet = false;
      }
      $scope.setOrganisation = function(){
        $scope.organizationSet = true;
        $scope.userSet = false;
      }
 
        init();
    }
  })();
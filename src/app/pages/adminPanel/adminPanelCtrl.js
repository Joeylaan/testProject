/**
 * @author J.Laan
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.adminPanel')
      .controller('AdminPanelCtrl', AdminPanelCtrl);
  
    /** @ngInject */
    function AdminPanelCtrl($scope, $state, $document, $timeout, baConfig, baUtil, $q, toastr, toastrConfig) {
  
      var vm = this;
  
      function init() {
          db.collection('Users').onSnapshot(function(snapshot){
            $timeout(function(){
                vm.users = {};
                snapshot.forEach(function (doc) {
                    vm.users[doc.id] = doc.data();
                    vm.users[doc.id].id = doc.id;
                })
                console.log(vm.users);

            })
          })
        console.log('contorller works');
        //checks if user is logged in
        firebase.auth().onAuthStateChanged(function (user) {
            $timeout(function () {
                if (user) {
                    vm.userId = user.uid;
                    console.log('userId', user.uid);
                    db.collection('users').doc(user.uid).onSnapshot(function (doc) {
                        db.collection("roles").onSnapshot(function(snapshot){
                            $timeout(function(){
                                vm.roles = {};
                                snapshot.forEach(function (doc) {
                                    vm.roles[doc.id] = doc.data();
                                    vm.roles[doc.id].id = doc.id;
                                })
                                console.log(vm.roles);
                                vm.user = doc.data();
                                vm.user.id = doc.id;
                                    vm.user.roleRef = vm.roles[vm.user.roleRef.id];
                                console.log(vm.user);
                            })
                        })
                    });
                }
                else {
                    $state.go('login');
                    $timeout(function () {
                        vm.user = undefined;
                    });
                }
            })
        });
        //checking for organizer apply
        db.collection('users').where
      }

    init();
  }
  
  })();
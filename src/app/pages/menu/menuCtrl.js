/**
 * @author J.Laan
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.menu')
      .controller('MenuCtrl', MenuCtrl);
  
    /** @ngInject */
    function MenuCtrl($scope, $state, $stateParams, $document, $timeout, baConfig, baUtil, $q, toastr, toastrConfig) {
  
      var vm = this;
      var newOrder = db.collection("orders").doc();
      $scope.order = {};
      $scope.dishes = {};
  
      function init() {
        console.log('contorller works');
        // firebase.auth().onAuthStateChanged(function (user) {
        //     $timeout(function () {
        //         if (user) {
        //             vm.userId = user.uid;
        //             console.log('userId', user.uid);
        //             db.collection('users').doc(user.uid).onSnapshot(function (doc) {
        //                 db.collection("roles").onSnapshot(function(snapshot){
        //                     $timeout(function(){
        //                         vm.roles = {};
        //                         snapshot.forEach(function (doc) {
        //                             vm.roles[doc.id] = doc.data();
        //                             vm.roles[doc.id].id = doc.id;
        //                         })
        //                         console.log(vm.roles);
        //                         vm.user = doc.data();
        //                         vm.user.id = doc.id;
        //                             vm.user.roleRef = vm.roles[vm.user.roleRef.id];
        //                         console.log(vm.user);
        //                     })
        //                 })
        //             });
        //         }
        //         else {
        //             $state.go('login');
        //             $timeout(function () {
        //                 vm.user = undefined;
        //             });
        //         }
        //     })
        // });
        db.collection("gerechten").onSnapshot(function(snapshot){
            $timeout(function(){
                if (!$stateParams.returnInfo){
                    snapshot.forEach(function (doc) {
                        $scope.dishes[doc.id] = doc.data();
                        $scope.dishes[doc.id].id = doc.id;
                        $scope.order[doc.id] = doc.data();
                        $scope.order[doc.id].quantity = 0;
                    })
                }
                if ($stateParams.returnInfo){
                    snapshot.forEach(function (doc) {
                        $scope.dishes[doc.id] = doc.data();
                        $scope.dishes[doc.id].id = doc.id;
                        $scope.order[doc.id] = doc.data();
                        $scope.order[doc.id].quantity = $stateParams.returnInfo[doc.id].quantity;
                    })
                }
                console.log("Gerechten", $scope.dishes);
            })
        })
        db.collection("orders").onSnapshot(function(snapshot){
            $scope.activeOrders = {};
            $timeout(function(){
                snapshot.forEach(function(doc){
                    $scope.activeOrders[doc.id] = doc.data();
                    $scope.activeOrders[doc.id].id = doc.id;
                        $scope.activeOrders[doc.id].order = $scope.dishes[$scope.activeOrders.order];
                })
                console.log("Active orders", $scope.activeOrders);
            })
        })
        db.collection("users").onSnapshot(function(snapshot){
            $scope.users = {};
            
            $timeout(function(){
                snapshot.forEach(function(doc){
                    var userId = doc.id;
                    $scope.users[userId] = doc.data();
                    $scope.users[userId].id = doc.id;
                    if($scope.users[userId].roleRef){
                        $scope.users[userId].roleRef.get().then(function(doc){
                            $scope.users[userId].role = doc.data();
                            $scope.users[userId].role.id = doc.id;
                        })
                    }
                })

                console.log("Users", $scope.users);
            })
        })
      }

      $scope.increase = function(id){
        console.log("Quantity counter test");
        $scope.order[id].quantity = $scope.order[id].quantity + 1; 
        console.log("Current order", $scope.order);
    }
    
    $scope.decrease = function(id){
        console.log("Quantity counter test decrease");              
        if ($scope.order[id].quantity <= 0) {
            return Error;
        } else {
            $scope.order[id].quantity = $scope.order[id].quantity - 1; 
            console.log($scope.order);
        }
    }

    $scope.confirmOrder = function(){
        $scope.filteredOrder = {};
        _.forEach($scope.order, function(order, orderKey){
            if(order.quantity){
                $scope.filteredOrder = order;
                newOrder.collection("orderList").doc().set($scope.filteredOrder).then(function(){
                    console.log("Order confirmed");
                })
            }
        })
    }

    init();
  }
  
  })();
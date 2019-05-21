/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('BaSidebarCtrl', BaSidebarCtrl);

  /** @ngInject */
  function BaSidebarCtrl($scope, $timeout, baSidebarService) {
    var vm = this;

    $scope.menuItems = baSidebarService.getMenuItems();
    $scope.defaultSidebarState = $scope.menuItems[0].stateRef;
    console.log($scope.menuItems);

    // function init() {
    //   vm.perms = {};
    //   console.log('contorller works');
    //   firebase.auth().onAuthStateChanged(function (user) {
    //       $timeout(function () {
    //           if (user) {
    //               vm.userId = user.uid;
    //               console.log('userId', user.uid);
    //               db.collection('users').doc(user.uid).onSnapshot(function (doc) {
    //                   db.collection("roles").onSnapshot(function(snapshot){
    //                       $timeout(function(){
    //                           vm.roles = {};
    //                           snapshot.forEach(function (doc) {
    //                               vm.roles[doc.id] = doc.data();
    //                               vm.roles[doc.id].id = doc.id;
    //                           })
    //                           console.log(vm.roles);
    //                           vm.user = doc.data();
    //                           vm.user.id = doc.id;
    //                               vm.user.roleRef = vm.roles[vm.user.roleRef.id];
    //                           console.log(vm.user);
    //                           angular.forEach($scope.menuItems, function (menuItems, menuItemsKey){
    //                             if(vm.user.roleRef.name == menuItems.name){
    //                               vm.perms = true;
    //                               console.log("Correct perms");
    //                               console.log(vm.perms);
    //                             }
    //                           })
    //                       })
    //                   })
    //               });
    //           }
    //           else {
    //               $state.go('login');
    //               $timeout(function () {
    //                   vm.user = undefined;
    //               });
    //           }
    //       })
    //   });
    // }

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      $scope.hoverElemHeight =  $event.currentTarget.clientHeight;
      var menuTopValue = 66;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    };

    $scope.$on('$stateChangeSuccess', function () {
      if (baSidebarService.canSidebarBeHidden()) {
        baSidebarService.setMenuCollapsed(true);
      }
    });

    // init();
  }
})();
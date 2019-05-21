/**
 * @author J.Laan
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.menu', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
        .state('menu', {
          url: '/menu',
          templateUrl: 'app/pages/menu/menu.html',
          title: 'Menu',
          controller: 'MenuCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
    }
  
  })();
  
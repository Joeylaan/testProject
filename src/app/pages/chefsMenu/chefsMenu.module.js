/**
 * @author J.Laan
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.chefsMenu', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
        .state('chefsMenu', {
          url: '/chefsMenu',
          templateUrl: 'app/pages/chefsMenu/chefsMenu.html',
          title: 'Chefs Menu',
          controller: 'ChefsMenuCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
    }
  
  })();
  
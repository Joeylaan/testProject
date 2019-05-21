/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.adminPanel', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('adminPanel', {
        url: '/adminPanel',
        templateUrl: 'app/pages/adminPanel/adminPanel.html',
        title: 'Administrator Paneel',
        controller: 'AdminPanelCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0,
        },
      });
  }

})();

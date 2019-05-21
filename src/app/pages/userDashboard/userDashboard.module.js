/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userDashboard', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('userDashboard', {
        url: '/userDashboard',
        templateUrl: 'app/pages/userDashboard/userDashboard.html',
        title: 'userDashboard',
        controller: 'UserDashboardCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0,
        },
      });
  }

})();

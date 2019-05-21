/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.userProfile', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('userProfile', {
        url: '/userProfile',
        templateUrl: 'app/pages/userProfile/userProfile.html',
        title: 'userProfile',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0,
        },
      });
  }

})();

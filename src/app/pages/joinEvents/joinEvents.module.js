/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.joinEvents', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('joinEvents', {
        url: '/joinEvents',
        templateUrl: 'app/pages/joinEvents/joinEvents.html',
        title: 'joinEvents',
        controller: 'JoinEventsCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0,
        },
      });
  }

})();

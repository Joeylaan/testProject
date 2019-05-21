/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.events', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('Deelnemer', {
        url: '/events',
        templateUrl: 'app/pages/events/events.html',
        title: 'Evenementen',
        controller: 'EventsCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0,
        },
        data:{
          role: 'Deelnemer'
        }
      });
  }
})();

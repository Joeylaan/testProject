(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.sortable',
    'ui.router',
    'ngTouch',
    'toastr',
    'smart-table',
    "xeditable",
    'ui.slimscroll',
    'ngJsTree',
    'angular-progress-button-styles',

    'BlurAdmin.pages.userDashboard',
    'BlurAdmin.pages.rankings',
    'BlurAdmin.pages.events',
    'BlurAdmin.pages.adminPanel',
    'BlurAdmin.pages.joinEvents',
    'BlurAdmin.pages.login',
    'BlurAdmin.pages.register',
    'BlurAdmin.pages.menu',
    'BlurAdmin.pages.chefsMenu'

  ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/userDashboard');
  }

})();

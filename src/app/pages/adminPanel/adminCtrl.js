/**
 * @author J.Laan
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.adminPanel')
    .controller('AdminCtrl', AdminCtrl);

  /** @ngInject */
  function AdminCtrl($scope, $state, $document, $timeout, baConfig, baUtil, $q, toastr, toastrConfig) {

    var vm = this;

    function init() {
      console.log('contorller works');
    }

    init();
  }

})();
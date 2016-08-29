'use strict';

adminRouting.$inject = ['$stateProvider'];

function adminRouting($stateProvider) {

   $stateProvider
      .state('app.admin', {
         url: '/support-admin',
         template: '<admin></admin>',
         resolve: {
            loadAdminComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./admin').default;
                     $ocLazyLoad.load({name: 'app.admin'});
                     resolve(module.component);
                  });
               });
            }]/*,
            admin: ['$q', 'AuthService', '$state', ($q, AuthService, $state) => {
               return $q((resolve, reject) => {
                  AuthService.$onAuthStateChanged((user) => {
                     resolve(user);
                  });
               }).catch(reason => {
                  $state.go('login');
               });
            }]*/
         }
      });
}

export default angular.module('app.admin.routing', []).config(adminRouting);

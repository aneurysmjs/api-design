'use strict';

adminRouting.$inject = ['$stateProvider'];

function adminRouting($stateProvider) {

  $stateProvider
     .state('admin', {
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
         }]
       }
     })
     .state('admin.admin-dashboard', {
       url: '/dashboard',
       template: '<admin-dashboard></admin-dashboard>',
       resolve: {
         loadAdminDashboardComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
           return $q((resolve) => {
             require.ensure([], () => {
               // load whole module
               let module = require('./admin-dashboard/admin-dashboard').default;
               $ocLazyLoad.load({name: 'app.admin.admin-dashboard'});
               resolve(module.component);
             });
           });
         }]
       }
     });
}

export default angular.module('app.admin.routing', []).config(adminRouting);

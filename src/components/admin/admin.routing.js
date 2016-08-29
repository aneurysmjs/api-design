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
         loadAdminDashboardComponent: ['$q', '$ocLazyLoad', 'AuthService', ($q, $ocLazyLoad, AuthService) => {
           return $q((resolve) => {
             require.ensure([], () => {
               // load whole module
               let module = require('./admin-dashboard/admin-dashboard').default;
               $ocLazyLoad.load({name: 'app.admin.admin-dashboard'});
               resolve(module.component);
             });
           });
         }],
         adminDashboard: ['$q', 'AuthService', '$state', ($q, AuthService, $state) => {
           return $q((resolve, reject) => {
             console.log(AuthService);
             AuthService.$onAuthStateChanged((user) => {
               if (user) {
                 resolve(user);
               } else {
                 $state.go('login');
               }
             });
           });
         }]
       }
     });
}

export default angular.module('app.admin.routing', []).config(adminRouting);

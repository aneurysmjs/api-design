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
     .state('admin.dashboard', {
       url: '/dashboard',
       template: '<admin-dashboard current-auth="$resolve.currentAuth"></admin-dashboard>',
       resolve: {
         loadAdminDashboardComponent: ['$q', '$ocLazyLoad', 'AuthService', ($q, $ocLazyLoad, AuthService) => {
           return $q((resolve) => {
             require.ensure([], () => {
               // load whole module
               let module = require('./admin-dashboard/admin-dashboard').default;
               $ocLazyLoad.load({name: 'app.admin.dashboard'});
               resolve(module.component);
             });
           });
         }],
         currentAuth: ['AuthService', (AuthService) => {
           // $requireSignIn returns a promise so the resolve waits for it to complete
           return AuthService.$requireSignIn();
         }]
       }
     })
     .state('admin.dashboard.users', {
       url: '/users',
       template: '<admin-users></admin-users>',
       resolve: {
         loadAdminDashboardComponent: ['$q', '$ocLazyLoad', 'AuthService', ($q, $ocLazyLoad, AuthService) => {
           return $q((resolve) => {
             require.ensure([], () => {
               // load whole module
               let module = require('./admin-dashboard/admin-users/admin-users').default;
               $ocLazyLoad.load({name: 'app.admin.dashboard.users'});
               resolve(module.component);
             });
           });
         }],
         currentAuth: ['AuthService', (AuthService) => {
           // $requireSignIn returns a promise so the resolve waits for it to complete
           return AuthService.$requireSignIn();
         }]
       }
     })
     .state('admin.dashboard.faqs', {
       url: '/faqs',
       template: `<questions questions="$resolve.questions"></questions>`,
       resolve: {
         loadAdminDashboardComponent: ['$q', '$ocLazyLoad', 'AuthService', ($q, $ocLazyLoad, AuthService) => {
           return $q((resolve) => {
             require.ensure([], () => {
               // load whole module
               let module = require('./admin-dashboard/questions/questions').default;
               $ocLazyLoad.load({name: 'app.admin.dashboard.questions'});
               resolve(module.component);
             });
           });
         }],
         currentAuth: ['AuthService', (AuthService) => {
           // $requireSignIn returns a promise so the resolve waits for it to complete
           return AuthService.$requireSignIn();
         }],
         questions: ['$firebaseArray', '$firebaseRef', ($firebaseArray, $firebaseRef) => {
           return $firebaseArray($firebaseRef.questions).$loaded();
         }]
       }
     })
     .state('admin.dashboard.mediaLibrary', {
       url: '/media',
       template: `<media-library></media-library>`,
       resolve: {
         loadAdminDashboardComponent: ['$q', '$ocLazyLoad', 'AuthService', ($q, $ocLazyLoad, AuthService) => {
           return $q((resolve) => {
             require.ensure([], () => {
               // load whole module
               let module = require('./admin-dashboard/media-library/media-library').default;
               $ocLazyLoad.load({name: 'app.admin.dashboard.media-library'});
               resolve(module.component);
             });
           });
         }],
         currentAuth: ['AuthService', (AuthService) => {
           // $requireSignIn returns a promise so the resolve waits for it to complete
           return AuthService.$requireSignIn();
         }]
       }
     });
}

export default angular.module('app.admin.routing', []).config(adminRouting);

'use strict';

homeRouting.$inject = ['$stateProvider'];

function homeRouting($stateProvider) {

   $stateProvider
      .state('app.home', {
         url: '/home',
         template: '<home></home>',
         resolve: {
            loadHomeComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./home').default;
                     $ocLazyLoad.load({name: 'app.home'});
                     resolve(module.component);
                  });
               });
            }]/*,
            home: ['$q', 'AuthService', '$state', ($q, AuthService, $state) => {
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

export default angular.module('app.home.routing', []).config(homeRouting);

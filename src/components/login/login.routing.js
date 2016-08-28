loginRouting.$inject = ['$urlRouterProvider', '$stateProvider'];

function loginRouting($urlRouterProvider, $stateProvider) {
   $urlRouterProvider.otherwise('/login');

   $stateProvider
      .state('login', {
         url: '/login',
         template: '<login></login>',
         resolve: {
            loadProfileComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./login').default;
                     $ocLazyLoad.load({name: 'login'});
                     resolve(module.component);
                  });
               });
            }]
         }
      });
}

export default angular.module('login.routing', []).config(loginRouting);

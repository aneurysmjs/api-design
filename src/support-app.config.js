import Firebase from 'firebase';

config.$inject = ['$provide', '$ocLazyLoadProvider', '$stateProvider'];

function config($provide, $ocLazyLoadProvider, $stateProvider) {

   $provide.constant('FIRE_REF', Firebase.initializeApp({
      apiKey: "AIzaSyDwUyJ5sewKQCuIH7I6t6xt4_GXevhyiDU",
      authDomain: "support-app-e6d70.firebaseapp.com",
      databaseURL: "https://support-app-e6d70.firebaseio.com",
      storageBucket: "support-app-e6d70.appspot.com",
   }));

   $stateProvider
      .state('app', {
         abstract: true,
         url: '',
         template: `
            <navigation></navigation>
            <support-app></support-app>`
      });

   $ocLazyLoadProvider.config({
      debug: false
   });

}

export default config;
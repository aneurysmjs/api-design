import Firebase from 'firebase';

config.$inject = ['$provide', '$ocLazyLoadProvider', '$stateProvider'];

function config($provide, $ocLazyLoadProvider, $stateProvider) {

   $provide.constant('FIRE_REF', Firebase.initializeApp({
      apiKey: "AIzaSyD43Dfs7kkYsbm5IQXiJtoUPV8LlIW3bfk",
      authDomain: "olgah.firebaseapp.com",
      databaseURL: "https://olgah.firebaseio.com",
      storageBucket: "firebase-olgah.appspot.com"
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
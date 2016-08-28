import Firebase from 'firebase';

config.$inject = ['$provide', '$ocLazyLoadProvider', '$stateProvider', '$mdThemingProvider'];

function config($provide, $ocLazyLoadProvider, $stateProvider, $mdThemingProvider) {

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

   $mdThemingProvider.definePalette('olgah', {
      '50': 'ffffff',
      '100': 'ffffff',
      '200': 'd5eff5',
      '300': '9bd8e7',
      '400': '83cfe1',
      '500': '6ac5db',
      '600': '51bbd5',
      '700': '39b2cf',
      '800': '2da0bc',
      '900': '278ba3',
      'A100': 'ffffff',
      'A200': 'ffffff',
      'A400': '83cfe1',
      'A700': '39b2cf',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 500 600 700 800 A100 A200 A400 A700'
   });

   $mdThemingProvider.definePalette('olgahAccent', {
      '50': '#e8eaf6',
      '100': '#c5cae9',
      '200': '#9fa8da',
      '300': '#7986cb',
      '400': '#5c6bc0',
      '500': '#3f51b5',
      '600': '#3949ab',
      '700': '#303f9f',
      '800': '#283593',
      '900': '#1a237e',
      'A100': '#8c9eff',
      'A200': '#536dfe',
      'A400': '#3d5afe',
      'A700': '#304ffe',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100'
   });

   $mdThemingProvider.theme('default')
      .primaryPalette('olgah')
      .accentPalette('olgahAccent');

}

export default config;
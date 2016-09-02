import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';
import angularfire from 'angularfire';
import ocLazyLoad from 'oclazyload';

let appLibraries = angular.module('app.libraries', [
  ngAnimate,
  ngAria,
  ngMessages,
  uiRouter,
  angularfire,
  // It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
  (() => {
    return ocLazyLoad;
  })()
]);

export default appLibraries;
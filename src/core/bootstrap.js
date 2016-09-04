import angular from 'angular';
import supportAppModule from '../support-app';

angular.bootstrap(document, [supportAppModule.name], {strictDi: true});
import angular from 'angular';
import navigationComponent from './navigation.component';
import NavigationService from './navigation.service';

let navigationModule = angular.module('support-app.components.navigation', [])
  .component('navigation', navigationComponent)
  .service('NavigationService', NavigationService);

export default navigationModule;
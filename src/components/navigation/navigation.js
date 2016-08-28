import angular from 'angular';
import navigationComponent from './navigation.component';
import NavigationService from './navigation.service';

let navigationModule = angular.module('olgah.components.navigation', [])
  .component('navigation', navigationComponent)
  .service('NavigationService', NavigationService);

export default navigationModule;
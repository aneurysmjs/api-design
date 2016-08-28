import angular from 'angular';
import homeComponent from './home.component';
import HomeService from './home.service';

let homeModule = angular.module('app.home', [])
  .component('home', homeComponent)
  .service('HomeService', HomeService);

export default homeModule;
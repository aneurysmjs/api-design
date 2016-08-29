import angular from 'angular';
import adminNavComponent from './admin-nav.component';
import AdminNavService from './admin-nav.service';

let adminNavModule = angular.module('app.admin-nav', [])
  .component('adminNav', adminNavComponent)
  .service('AdminNavService', AdminNavService);

export default adminNavModule;
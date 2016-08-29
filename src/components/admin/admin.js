import angular from 'angular';
import adminComponent from './admin.component';
import AdminService from './admin.service';

let adminModule = angular.module('app.admin', [])
  .component('admin', adminComponent)
  .service('AdminService', AdminService);

export default adminModule;
import angular from 'angular';
import adminComponent from './admin.component';
import AdminService from './admin.service';

import adminDashboard from './admin-dashboard/admin-dashboard';

let adminModule = angular.module('app.admin', [
    adminDashboard.name
  ])
  .component('admin', adminComponent)
  .service('AdminService', AdminService);

export default adminModule;
import angular from 'angular';
import adminDashboardComponent from './admin-dashboard.component';
import AdminDashboardService from './admin-dashboard.service';

import adminNav from './admin-nav/admin-nav';
import adminSidebar from './admin-sidebar/admin-sidebar';

let adminDashboardModule = angular.module('app.admin.dashboard', [
    adminNav.name,
    adminSidebar.name
  ])
  .component('adminDashboard', adminDashboardComponent)
  .service('AdminDashboardService', AdminDashboardService);

export default adminDashboardModule;
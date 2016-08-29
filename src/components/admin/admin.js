import angular from 'angular';
import adminComponent from './admin.component';
import AdminService from './admin.service';

import adminNav from './admin-nav/admin-nav';
import adminSidebar from './admin-sidebar/admin-sidebar';
import adminUsersTable from './admin-users-table/admin-users-table';

let adminModule = angular.module('app.admin', [
    adminNav.name,
    adminSidebar.name,
    adminUsersTable.name
  ])
  .component('admin', adminComponent)
  .service('AdminService', AdminService);

export default adminModule;
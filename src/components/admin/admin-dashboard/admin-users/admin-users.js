import angular from 'angular';
import adminUsersComponent from './admin-users.component';
import AdminUsersService from './admin-users.service';

import adminUsersForm from './admin-users-form/admin-users-form';
import adminUsersTable from './admin-users-table/admin-users-table';

let adminUsersModule = angular.module('app.admin.dashboard.users', [
    adminUsersForm.name,
    adminUsersTable.name
  ])
  .component('adminUsers', adminUsersComponent)
  .service('AdminUsersService', AdminUsersService);

export default adminUsersModule;
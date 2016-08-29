import angular from 'angular';
import adminUsersComponent from './admin-users.component';
import AdminUsersService from './admin-users.service';

import adminUsersForm from './admin-users-form/admin-users-form';

let adminUsersModule = angular.module('app.admin.dashboard.users', [
    adminUsersForm.name
  ])
  .component('adminUsers', adminUsersComponent)
  .service('AdminUsersService', AdminUsersService);

export default adminUsersModule;
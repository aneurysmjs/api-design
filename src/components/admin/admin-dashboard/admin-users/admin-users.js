import angular from 'angular';
import adminUsersComponent from './admin-users.component';
import AdminUsersService from './admin-users.service';

let adminUsersModule = angular.module('app.admin.dashboard.users', [])
  .component('adminUsers', adminUsersComponent)
  .service('AdminUsersService', AdminUsersService);

export default adminUsersModule;
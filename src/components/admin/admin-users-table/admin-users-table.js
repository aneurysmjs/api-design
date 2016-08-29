import angular from 'angular';
import adminUsersTableComponent from './admin-users-table.component';
import AdminUsersTableService from './admin-users-table.service';

let adminUsersTableModule = angular.module('app.admin-users-table', [])
  .component('adminUsersTable', adminUsersTableComponent)
  .service('AdminUsersTableService', AdminUsersTableService);

export default adminUsersTableModule;
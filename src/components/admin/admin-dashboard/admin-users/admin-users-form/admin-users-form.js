import angular from 'angular';
import adminUsersFormComponent from './admin-users-form.component';

let adminUsersFormModule = angular.module('app.admin-users-form', [])
  .component('adminUsersForm', adminUsersFormComponent);

export default adminUsersFormModule;
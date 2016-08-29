import angular from 'angular';
import adminSidebarComponent from './admin-sidebar.component';
import AdminSidebarService from './admin-sidebar.service';

let adminSidebarModule = angular.module('app.admin-sidebar', [])
  .component('adminSidebar', adminSidebarComponent)
  .service('AdminSidebarService', AdminSidebarService);

export default adminSidebarModule;
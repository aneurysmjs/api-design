import angular from 'angular';
import adminFaqsTreeComponent from './admin-faqs-tree.component';
import AdminFaqsTreeService from './admin-faqs-tree.service';

let adminFaqsTreeModule = angular.module('app.admin.dashboard.faqs.tree', [])
  .component('adminFaqsTree', adminFaqsTreeComponent)
  .service('AdminFaqsTreeService', AdminFaqsTreeService);

export default adminFaqsTreeModule;
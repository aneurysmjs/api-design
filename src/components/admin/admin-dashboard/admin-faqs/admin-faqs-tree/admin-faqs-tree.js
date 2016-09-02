import angular from 'angular';
import adminFaqsTreeComponent from './admin-faqs-tree.component';
import AdminFaqsTreeService from './admin-faqs-tree.service';

import adminFaqsTreeNode from './admin-faqs-tree-node/admin-faqs-tree-node';

let adminFaqsTreeModule = angular.module('app.admin.dashboard.faqs.tree', [
    adminFaqsTreeNode.name
  ])
  .component('adminFaqsTree', adminFaqsTreeComponent)
  .service('AdminFaqsTreeService', AdminFaqsTreeService);

export default adminFaqsTreeModule;
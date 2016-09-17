import angular from 'angular';
import adminFaqsTreeNodeComponent from './admin-faqs-tree-node.component';

let adminFaqsTreeNodeModule = angular.module('app.admin.faqs.tree.node', [])
  .component('adminFaqsTreeNode', adminFaqsTreeNodeComponent);

export default adminFaqsTreeNodeModule;
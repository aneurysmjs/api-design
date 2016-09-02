import template from './admin-faqs-tree-node.html';
import controller from './admin-faqs-tree-node.controller';

let adminFaqsTreeNodeComponent = {
  template,
  controller,
  bindings: {
    item: '<',
    onAdd: '&',
    onDelete: '&'
  }
};

export default adminFaqsTreeNodeComponent;
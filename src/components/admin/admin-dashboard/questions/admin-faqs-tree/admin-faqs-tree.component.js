import template from './admin-faqs-tree.html';
import controller from './admin-faqs-tree.controller';

let adminFaqsTreeComponent = {
  template,
  controller,
  bindings: {
    questionTree: '<',
    onEdit: '&'
  }
};

export default adminFaqsTreeComponent;
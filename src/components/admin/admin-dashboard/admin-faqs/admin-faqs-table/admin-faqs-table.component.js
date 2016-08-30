import template from './admin-faqs-table.html';
import controller from './admin-faqs-table.controller';

let adminFaqsTableComponent = {
  template,
  controller,
  bindings: {
    faqs: '<'
  }
};

export default adminFaqsTableComponent;

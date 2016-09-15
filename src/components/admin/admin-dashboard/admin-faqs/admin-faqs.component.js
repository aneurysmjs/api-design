import template from './admin-faqs.html';
import controller from './admin-faqs.controller';

import './admin-faqs.styl';

let adminFaqsComponent = {
  template,
  controller,
  bindings: {
    questions: '<'
  }
};

export default adminFaqsComponent;
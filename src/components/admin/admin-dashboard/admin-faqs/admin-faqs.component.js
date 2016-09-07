import template from './admin-faqs.html';
import controller from './admin-faqs.controller';

import './admin-faqs.styl';

let adminFaqsComponent = {
  template,
  controller,
  bindings: {
    faqs: '<'
  }
};

export default adminFaqsComponent;
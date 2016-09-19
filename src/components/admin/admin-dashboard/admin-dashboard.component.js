import template from './admin-dashboard.html';
import controller from './admin-dashboard.controller';

import './admin-dashboard.styl';

let adminDashboardComponent = {
  template,
  controller,
  bindings: {
    currentAuth: '<'
  }
};

export default adminDashboardComponent;

import template from './admin-users-form.html';
import controller from './admin-users-form.controller';

let adminUsersFormComponent = {
  template,
  controller,
  bindings: {
    onCreate: '&'
  }
};

export default adminUsersFormComponent;
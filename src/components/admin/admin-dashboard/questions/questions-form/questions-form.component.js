import template from './questions-form.html';
import controller from './questions-form.controller';

let questionsFormComponent = {
  template,
  controller,
  bindings: {
    onSave: '&',
    onUpdate: '&',
    question: '<'
  }
};

export default questionsFormComponent;
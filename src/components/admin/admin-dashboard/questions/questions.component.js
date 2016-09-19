import template from './questions.html';
import controller from './questions.controller';

import './questions.styl';

let questionsComponent = {
  template,
  controller,
  bindings: {
    questions: '<'
  }
};

export default questionsComponent;
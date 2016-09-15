import template from './question-tags.html';
import controller from './question-tags.controller';

import './question-tags.styl';

let questionTagsComponent = {
  template,
  controller,
  bindings: {
    tags: '<',
    onAdd: '&',
    onDelete: '&'
  }
};

export default questionTagsComponent;
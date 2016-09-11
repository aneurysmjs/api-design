import template from './file-list.html';
import controller from './file-list.controller';
import './file-list.styl';

let fileListComponent = {
  template,
  controller,
  bindings: {
    files: '<',
    onDelete: '&'
  }
};

export default fileListComponent;
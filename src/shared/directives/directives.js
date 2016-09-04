import angular from 'angular';

import uiTinymce from './tinymce/tinymce';

import ContentEditor from './content-editor/content-editor.directive';

let directivesModule = angular.module('app.shared.direcives', [
    uiTinymce.name
  ])
  .directive('contentEditor', () => new ContentEditor());

export default directivesModule;
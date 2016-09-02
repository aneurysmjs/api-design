import angular from 'angular';

import uiTinymce from './tinymce/tinymce';

let directivesModule = angular.module('app.shared.direcives', [
    uiTinymce.name
  ]);

export default directivesModule;
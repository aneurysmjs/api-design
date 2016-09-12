import angular from 'angular';

import fileList from './file-list/file-list';

let componentsModule = angular.module('app.shared.components', [
    fileList.name
  ]);

export default componentsModule;
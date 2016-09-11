import angular from 'angular';
import fileListComponent from './file-list.component';

let fileListModule = angular.module('app.shared.components.file-list', [])
  .component('fileList', fileListComponent);

export default fileListModule;
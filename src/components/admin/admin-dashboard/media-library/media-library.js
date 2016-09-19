import angular from 'angular';
import mediaLibraryComponent from './media-library.component';
import MediaLibraryService from './media-library.service';

let mediaLibraryModule = angular.module('app.admin.dashboard.media-library', [])
  .component('mediaLibrary', mediaLibraryComponent)
  .service('MediaLibraryService', MediaLibraryService);

export default mediaLibraryModule;
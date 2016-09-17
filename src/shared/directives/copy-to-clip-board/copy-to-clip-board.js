import angular from 'angular';
import CopyToClipBoardDirective from './copy-to-clip-board.directive';

let copyToClipBoardModule = angular.module('app.shared.directives.copy-to-clip-board', [])
  .directive('copyToClipBoard', () => new CopyToClipBoardDirective());

export default copyToClipBoardModule;
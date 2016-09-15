import angular from 'angular';
import questionTagsComponent from './question-tags.component';

let questionTagsModule = angular.module('app.admin.dashboard.question-tags', [])
  .component('questionTags', questionTagsComponent);

export default questionTagsModule;
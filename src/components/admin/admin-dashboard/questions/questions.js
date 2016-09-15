import angular from 'angular';
import questionsComponent from './questions.component';
import AdminQuestionsService from './questions.service';

import questionsForm from './admin-faqs-form/admin-faqs-form';
import questionsTree from './admin-faqs-tree/admin-faqs-tree';
import questionsTags from './question-tags/question-tags';

let questionsModule = angular.module('app.admin.dashboard.questions', [
    questionsForm.name,
    questionsTree.name,
    questionsTags.name
  ])
  .component('questions', questionsComponent)
  .service('AdminQuestionsService', AdminQuestionsService);

export default questionsModule;
import angular from 'angular';
import questionsFormComponent from './questions-form.component';
import QuestionsFormService from './questions-form.service';

import questionsTags from './question-tags/question-tags';

let questionsFormModule = angular.module('app.admin.dashboard.questions-form', [
    questionsTags
  ])
  .component('questionsForm', questionsFormComponent)
  .service('QuestionsFormService', QuestionsFormService);

export default questionsFormModule;
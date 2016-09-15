import angular from 'angular';
import questionsFormComponent from './questions-form.component';
import QuestionsFormService from './questions-form.service';

let questionsFormModule = angular.module('app.admin.dashboard.faqs.form', [])
   .component('questionsForm', questionsFormComponent)
   .service('QuestionsFormService', QuestionsFormService);

export default questionsFormModule;
import angular from 'angular';
import adminFaqsFormComponent from './admin-faqs-form.component';

let adminFaqsFormModule = angular.module('app.admin.dashboard.faqs.form', [])
  .component('adminFaqsForm', adminFaqsFormComponent);

export default adminFaqsFormModule;
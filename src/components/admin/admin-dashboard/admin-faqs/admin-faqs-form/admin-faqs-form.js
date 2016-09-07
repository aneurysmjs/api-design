import angular from 'angular';
import adminFaqsFormComponent from './admin-faqs-form.component';
import AdminFaqsFormService from './admin-faqs-form.service';

let adminFaqsFormModule = angular.module('app.admin.dashboard.faqs.form', [])
   .component('adminFaqsForm', adminFaqsFormComponent)
   .service('AdminFaqsFormService', AdminFaqsFormService);

export default adminFaqsFormModule;
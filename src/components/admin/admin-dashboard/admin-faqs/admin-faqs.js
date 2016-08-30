import angular from 'angular';
import adminFaqsComponent from './admin-faqs.component';
import AdminFaqsService from './admin-faqs.service';

import adminFaqsForm from './admin-faqs-form/admin-faqs-form';

let adminFaqsModule = angular.module('app.admin.dashboard.faqs', [
    adminFaqsForm.name
  ])
  .component('adminFaqs', adminFaqsComponent)
  .service('AdminFaqsService', AdminFaqsService);

export default adminFaqsModule;
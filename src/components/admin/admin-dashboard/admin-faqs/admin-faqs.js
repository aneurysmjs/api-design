import angular from 'angular';
import adminFaqsComponent from './admin-faqs.component';
import AdminFaqsService from './admin-faqs.service';

import adminFaqsForm from './admin-faqs-form/admin-faqs-form';
import adminFaqsTable from './admin-faqs-table/admin-faqs-table.component';

let adminFaqsModule = angular.module('app.admin.dashboard.faqs', [
    adminFaqsForm.name
  ])
  .component('adminFaqs', adminFaqsComponent)
  .component('adminFaqsTable', adminFaqsTable)
  .service('AdminFaqsService', AdminFaqsService);

export default adminFaqsModule;
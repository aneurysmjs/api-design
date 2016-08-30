import angular from 'angular';
import adminFaqsComponent from './admin-faqs.component';
import AdminFaqsService from './admin-faqs.service';

let adminFaqsModule = angular.module('app.admin.dashboard.faqs', [])
  .component('adminFaqs', adminFaqsComponent)
  .service('AdminFaqsService', AdminFaqsService);

export default adminFaqsModule;
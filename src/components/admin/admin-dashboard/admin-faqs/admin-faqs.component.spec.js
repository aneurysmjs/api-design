import adminFaqsModule from './admin-faqs';

describe('adminFaqs component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminFaqsModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminFaqs'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminFaqs',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminFaqs');
   });
   
});
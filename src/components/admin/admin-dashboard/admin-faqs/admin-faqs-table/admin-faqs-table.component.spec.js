import adminFaqsTableModule from './admin-faqs-table';

describe('adminFaqsTable component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminFaqsTableModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminFaqsTable'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminFaqsTable',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminFaqsTable');
   });
   
});
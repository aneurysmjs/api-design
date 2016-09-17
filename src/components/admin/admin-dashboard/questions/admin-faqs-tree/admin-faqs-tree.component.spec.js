import adminFaqsTreeModule from './admin-faqs-tree';

describe('adminFaqsTree component test', () => {
   'use strict';

   let component, scope, label, $componentController;

   beforeEach(window.module(adminFaqsTreeModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminFaqsTree'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminFaqsTree',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminFaqsTree');
   });
   
});
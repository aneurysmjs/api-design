import adminFaqsTreeNodeModule from './admin-faqs-tree-node';

describe('adminFaqsTreeNode component test', () => {
   'use strict';

   let component, scope, label, $componentController;

   beforeEach(window.module(adminFaqsTreeNodeModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminFaqsTreeNode'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminFaqsTreeNode',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminFaqsTreeNode');
   });
   
});
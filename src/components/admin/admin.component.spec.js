import adminModule from './admin';

describe('admin component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'admin'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('admin',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('admin');
   });
   
});
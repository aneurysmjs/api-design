import adminNavModule from './admin-nav';

describe('adminNav component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminNavModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminNav'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminNav',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminNav');
   });
   
});
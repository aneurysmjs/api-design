import adminDashboardModule from './admin-dashboard';

describe('adminDashboard component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminDashboardModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminDashboard'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminDashboard',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminDashboard');
   });
   
});
import adminUsersModule from './admin-users';

describe('adminUsers component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminUsersModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminUsers'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminUsers',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminUsers');
   });
   
});
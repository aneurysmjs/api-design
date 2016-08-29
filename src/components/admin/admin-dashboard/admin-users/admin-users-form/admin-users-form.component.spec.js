import adminUsersFormModule from './admin-users-form';

describe('adminUsersForm component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminUsersFormModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminUsersForm'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminUsersForm',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminUsersForm');
   });
   
});
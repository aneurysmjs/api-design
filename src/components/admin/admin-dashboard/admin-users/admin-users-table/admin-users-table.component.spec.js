import adminUsersTableModule from './admin-users-table';

describe('adminUsersTable component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminUsersTableModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminUsersTable'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminUsersTable',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminUsersTable');
   });
   
});
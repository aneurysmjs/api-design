import adminSidebarModule from './admin-sidebar';

describe('admin-sidebar component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminSidebarModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'admin-sidebar'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('admin-sidebar',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('admin-sidebar');
   });
   
});
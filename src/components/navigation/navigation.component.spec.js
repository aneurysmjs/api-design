import navigationModule from './navigation';

xdescribe('navigation component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(navigationModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'navigation'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('navigation',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('navigation');
   });
   
});
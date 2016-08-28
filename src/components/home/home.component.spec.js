import homeModule from './home';

describe('home component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(homeModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'home'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('home',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('home');
   });
   
});
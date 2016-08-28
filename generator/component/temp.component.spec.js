import <%= name %>Module from './<%= dashCaseName %>';

describe('<%= name %> component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(<%= name %>Module.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: '<%= name %>'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('<%= name %>',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('<%= name %>');
   });
   
});
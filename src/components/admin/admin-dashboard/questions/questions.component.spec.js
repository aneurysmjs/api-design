import questionsModule from './questions';

describe('questions component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(questionsModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'questions'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('questions',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('questions');
   });
   
});
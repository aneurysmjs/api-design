import questionsFormModule from './questions-form';

describe('questionsForm component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(questionsFormModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'questionsForm'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('questionsForm',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('questionsForm');
   });
   
});
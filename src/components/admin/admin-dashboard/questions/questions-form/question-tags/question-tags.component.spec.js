import questionTagsModule from './question-tags';

describe('questionTags component test', () => {
   'use strict';

   let component, scope, label, $componentController;

   beforeEach(window.module(questionTagsModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'questionTags'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('questionTags',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('questionTags');
   });
   
});
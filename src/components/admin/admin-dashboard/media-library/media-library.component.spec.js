import mediaLibraryModule from './media-library';

describe('mediaLibrary component test', () => {
   'use strict';

   let component, scope, label, $componentController;

   beforeEach(window.module(mediaLibraryModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'mediaLibrary'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('mediaLibrary',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('mediaLibrary');
   });
   
});
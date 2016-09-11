import fileListModule from './file-list';

describe('fileList component test', () => {
   'use strict';

   let component, scope, label, $componentController;

   beforeEach(window.module(fileListModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'fileList'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('fileList',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('fileList');
   });
   
});
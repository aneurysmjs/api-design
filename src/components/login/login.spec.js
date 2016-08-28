import loginModule from './login';

import shared from '../../shared/shared';

describe('login component test', () => {
   'use strict';

   let $rootScope, $state, $location, $componentController;

   beforeEach(window.module(loginModule.name));

   beforeEach(inject(($injector) => {
      $rootScope = $injector.get('$rootScope');
      $componentController = $injector.get('$componentController');
      $state = $injector.get('$state');
      $location = $injector.get('$location');
   }));

  /* describe('Login Module', () => {
      it('default component should be login', () => {
         $location.url('/login');
         $rootScope.$digest();
         expect($state.current.component).toBe('home');
      });
   });*/

   describe('Login Controller', () => {

      let controller;
      beforeEach(() => {
         controller = $componentController('login', {
            $scope: $rootScope.$new()
         });
      });

      it('has a `login` method', () => {
         expect(controller.login).toBeDefined();
      });

   });
   
});
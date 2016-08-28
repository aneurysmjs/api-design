import angular from 'angular';
import loginComponent from './login.component';
import LoginService from './login.service';

import olgahLibraries from '../../support-app.libraries';
import shared from '../../shared/shared';

let loginModule = angular.module('login', [
      olgahLibraries.name,
      shared.name
   ])
   .component('login', loginComponent)
   .service('LoginService', LoginService);

export default loginModule;
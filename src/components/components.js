'use strict';
import angular from 'angular';

import navigation from './navigation/navigation';
import loginRouting from './login/login.routing';

export default angular.module('support-app.components', [
   navigation.name,
   loginRouting.name
]);
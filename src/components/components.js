'use strict';
import angular from 'angular';

import navigation from './navigation/navigation';
import loginRouting from './login/login.routing';
import homeRouting from './home/home.routing';

export default angular.module('app.components', [
   navigation.name,
   loginRouting.name,
   homeRouting.name
]);
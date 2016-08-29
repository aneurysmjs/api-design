'use strict';
import angular from 'angular';

import navigation from './navigation/navigation';
import adminRouting from './admin/admin.routing';
import loginRouting from './login/login.routing';
import homeRouting from './home/home.routing';

export default angular.module('app.components', [
   navigation.name,
   adminRouting.name,
   loginRouting.name,
   homeRouting.name
]);
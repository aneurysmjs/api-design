'use strict';

import angular from 'angular';
import appLibraries from './support-app.libraries.js';
import shared from './shared/shared';
import components from './components/components';

import config from './support-app.config';
import supportApp from './support-app.component';

export default angular.module('app', [
      appLibraries.name,
      shared.name,
      components.name
   ])
   .config(config)
   .component('supportApp', supportApp);

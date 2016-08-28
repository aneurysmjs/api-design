'use strict';

import angular from 'angular';
import appLibraries from './app-libraries.js';
import shared from './shared/shared';
import components from './components/components';

import config from './app-config';
import olgah from './app-component';

export default angular.module('olgah', [
      appLibraries.name,
      shared.name,
      components.name
   ])
   .config(config)
   .component('olgah', olgah);

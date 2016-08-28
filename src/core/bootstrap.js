'use strict';

import angular from 'angular';
import appModule from '../olgah';

angular.bootstrap(document, [appModule.name], { strictDi: true });

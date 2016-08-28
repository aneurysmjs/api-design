'use strict';

import EventEmitterProvider from './providers/event-emitter.provider';
import BaseServiceProvider from './providers/base-service.provider';
import Services from './services/services';

export default angular.module('olgah.shared', [
      Services.name
   ])
   .provider('EventEmitter', EventEmitterProvider)
   .provider('BaseService', BaseServiceProvider);
import angular from 'angular';

import EventEmitterProvider from './providers/event-emitter.provider';
import BaseServiceProvider from './providers/base-service.provider';
import components from './components/components';
import services from './services/services';
import directives from './directives/directives';

export default angular.module('app.shared', [
    components.name,
    services.name,
    directives.name
  ])
  .provider('EventEmitter', EventEmitterProvider)
  .provider('BaseService', BaseServiceProvider);
class EventEmitterProvider {
   constructor() {}
}

EventEmitterProvider.prototype.$get = [() => (payload) => ({$event: payload})];

export default EventEmitterProvider;
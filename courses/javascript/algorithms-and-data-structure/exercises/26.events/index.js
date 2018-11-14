// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = [];
  }
  
  // Register an event handler
  on(eventName, callback) {
    this.events.push({
      eventName,
      callback
    });
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.events.filter(
      evt => evt.eventName === eventName
    ).forEach(
      evt => evt.callback()
    );
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events = this.events.filter(
      evt => evt.eventName !== eventName
    );
  }
}

module.exports = Events;

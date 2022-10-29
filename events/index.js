// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.event = {
      click: [],
      hover: [],
      exit: [],
    };
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName].push(callback);
    } else {
      this.event[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.event[eventName]) {
      for (let cb of this.event[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.event[eventName];
  }
}

module.exports = Events;

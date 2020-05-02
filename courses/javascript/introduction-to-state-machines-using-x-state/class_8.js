/**
 * Use Internal Transitions in XState to Avoid State Exit and Re-Entry
*/

import { Machine } from "xstate";

const idleMachine = Machine({
  id: 'idle',
  initial: 'idle',
  states: {
    idle: {
      entry: ['logEntry'],
      exit: ['logExit']
    }
  },
  on: {
    // this is an internal transition
    DO_NOTHING: '.idle'
  }
}, {
  actions: {
    logEntry: () => console.log('entering idle state'),
    logExit: () => console.log('exiting idle state')
  }
});
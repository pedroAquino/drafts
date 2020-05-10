/**
 * Use XState Null Events and Transient Transitions to Immediately Transition States
*/

import { Machine } from "xstate";
import { assign } from "xstate/lib/actionTypes";

const triedEnoughTimes = Machine({
  id: 'triedEnoughTimes',
  initial: 'idle',
  context: {
    tries: 0
  },
  states: {
    idle: {
      on: {
        TRY: 'trying'
      }
    },
    trying: {
      entry: ['incTries'],
      on: {
        '': [
          { target: 'success', cond: 'triedEnough' },
          { target: 'idle' }
        ]
      }
    },
    success: {}
  }
}, {
  actions: {
    incTries: assign({
      tries: ctx => ctx.tries + 1
    })
  },
  guards: {
    triedEnough: ctx => ctx.tries > 2
  }
});
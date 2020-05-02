import { Machine } from "xstate";
import { assign } from "xstate/lib/actionTypes";

const doubleCounterMachine = Machine({
  id: 'doubleCounter',
  initial: 'idle',
  context: {
    counter: 0,
    previousCounter: undefined
  },
  states: {
    idle: {
      on: {
        INC_CONT_TWICE: {
          actions: [
            (context) => console.log(`before: ${context.previousCounter}`),
            'setPreviousCount',
            'incCount',
            'incCount',
            (context) => console.log(`after: ${context.counter}`)
          ]
        }
      }
    }
  }
}, {
  actions: {
    incCount: assign({
      counter: context => context.counter + 1
    }),
    setPreviousCount: assign({
      previousCounter: context => context.counter
    })
  }
});
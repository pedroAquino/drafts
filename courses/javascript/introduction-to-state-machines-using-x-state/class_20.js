/**
 * Invoking a Promise for Asynchronous State Transitions in XState
*/

import { Machine } from "xstate";
import { assign } from "xstate/lib/actionTypes";

const fetchCuteAnimals = () => {
  return fetch('https://www.reddit.com/r/aww.json')
    .then(res => res.json())
    .then(data => data.data.children.map(child => child.data))
}

const fetchCuteAnimalsMachine = Machine({
  id: 'fetchCuteAnimalsMachine',
  initial: 'idle',
  context: {
    cuteAnimals: null,
    error: null
  },
  states: {
    idle: {
      on: { FETCH: 'loading' }
    },
    loading: {
      invoke: {
        id: 'fetchCuteAnimals',
        src: fetchCuteAnimals,
        onDone: {
          target: 'success',
          actions: ['onSuccess']
        },
        onError: {
          target: 'error',
          actions: ['onError']
        }
      }
    },
    success: {
      type: 'final'
    },
    error: {
      on: { RETRY: 'loading'}
    }
  }
}, {
  actions: {
    onError: assign({
      error: (ctx, event) => event.data
    }),
    onSuccess: assign({
      cuteAnimals: (ctx, event) => event.data
    })
  }
});
/**
 * Add Actions to Transitions to Fire Side Effects
*/

const { Machine, interpret } = require('xstate');

const lightBulbMachine = Machine({
  id: 'lightBulb',
  states: {
    lit: {
      on: { BREAK: 'broken', TOGGLE: 'unlit' }
    },
    unlit: {
      on: { 
        BREAK: {
          target: 'broken',
          actions: ['logBroken']
        }, 
        TOGGLE: 'lit' 
      }
    },
    broken: {}
  },
  initial: 'unlit',
  strict: true
}, {
  actions: {
    logBroken: (context, event) =>  {
      console.log(`yo, Im broke in the ${event.location}`) 
    }
  }
});

const service = interpret(
  lightBulbMachine
)
.start()
.onTransition(state => {
  if (state.matches('broken')) {
    console.log(state.value)
  }
})
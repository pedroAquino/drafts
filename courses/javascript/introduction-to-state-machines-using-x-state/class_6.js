/**
 * Trigger Actions When Entering and Exiting a XState State
 */

const { Machine, interpret } = require('xstate');

const lightBulbMachine = Machine({
  id: 'lightBulb',
  states: {
    lit: {
      on: { 
        BREAK: {
          target: 'broken',
          // action on transition from 'lit' to 'broken'
          actions: () => console.log('transitioning to broken state')
        }, 
        TOGGLE: 'unlit'
      },
      // action on exiting 'lit' state
      exit: () => console.log('it is so dark and cold')
    },
    unlit: {
      on: { BREAK: 'broken', TOGGLE: 'lit'}
    },
    broken: {
      // action on entering 'broken' state
      entry: ['logBroken']
    }
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

interpret(lightBulbMachine)
  .start();
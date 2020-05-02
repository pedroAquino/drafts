
const { Machine, interpret } = require('xstate');

const lightBulbMachine = Machine({
  id: 'lightBulb',
  states: {
    lit: {
      on: { 
        BREAK: {
          target: 'broken',
          // action on transition from 'lit' to 'broken'
          actions: ['logTransitionFromLitToBroken']
        }, 
        TOGGLE: 'unlit'
      },
      // action on exiting 'lit' state
      exit: ['onExitLitState']
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
    },
    logTransitionFromLitToBroken: (context, event) => {
      console.log('transitioning from lit stats to broken state')
    },
    onExitLitState: () => {
      console.log('it is so dark and cold')
    }
  }
});

interpret(lightBulbMachine)
  .start();
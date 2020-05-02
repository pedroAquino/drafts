/**
 * Use an Interpreter to instantiate a machine
*/

const { Machine, interpret } = require('xstate');

const lightBulbMachine = Machine({
  id: 'lightBulb',
  states: {
    lit: {
      on: { BREAK: 'broken', TOGGLE: 'unlit' }
    },
    unlit: {
      on: { BREAK: 'broken', TOGGLE: 'lit' }
    },
    broken: {}
  },
  initial: 'unlit',
  strict: true
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

service.send('TOGGLE');
service.send('TOGGLE');
service.send('BREAK');
service.send('BREAK');
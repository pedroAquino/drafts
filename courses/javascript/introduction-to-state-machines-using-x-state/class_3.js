/**
 * Replace Enumerated states with a state machine
 */

const { Machine } = require('xstate');

const lit = {
  on: {
    BREAK: 'broken',
    TOGGLE: 'unlit'
  }
};

const unlit = {
  on: {
    BREAK: 'broken',
    TOGGLE: 'lit'
  }
};

const broken = {
  type: 'final'
};

const states = { lit, unlit, broken };

const initial = 'unlit';

const config = {
  id: 'lightBulb',
  states,
  initial,
  strict: true
};

const lightBulbMachine = Machine(config);

console.log(
  lightBulbMachine.transition('lit', 'TOGGLE').value
);
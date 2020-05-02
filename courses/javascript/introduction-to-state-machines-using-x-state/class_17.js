/**
 * Recall Previous States with XState History States Nodes
*/

import { Machine } from "xstate";

const spaceHeaterMachine = Machine({
  id: 'spaceHeater',
  initial: 'poweredOff',
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: 'poweredOn.hist' }
    },
    poweredOn: {
      on: { TOGGLE_POWER: 'poweredOff' },
      type: 'parallel',
      states: {
        heated: {
          initial: 'low',
          states: {
            low: {
              on: { TOGGLE_HEAT: 'high' }
            },
            high: {
              on: { TOGGLE_HEAT: 'low' }
            }
          }
        },
        oscillating: {
          initial: 'disabled',
          states: {
            disabled: {
              on: { TOGGLE_OSC: 'enabled' }
            },
            enabled: {
              on: { TOGGLE_OSC: 'disabled' }
            }
          }
        },
        hist: {
          type: 'history',
          history: 'deep'
        }
      }
    }
  }
});
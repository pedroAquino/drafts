/**
 * Track Infinite States with with XState Context
*/

import { Machine } from "xstate";
import { assign } from "xstate/lib/actionTypes";

const multiColoredBulbMachine = Machine({
  id: 'multiColoredBulb',
  initial: 'unlit',
  context: {
    color: 'white'
  },
  states: {
    broken: {},
    unlit: {
      on: {
        TOGGLE: 'lit' 
      }
    },
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
        CHANGE_COLOR: {
          actions: assign({
            color: 'black'
          })
        }
      }
    }
  }
});
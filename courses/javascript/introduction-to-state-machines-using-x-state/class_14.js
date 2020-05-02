/**
 * Conditionally Transition to States with Guards in XState
*/

import { Machine } from "xstate";
import { assign } from "xstate/lib/actionTypes";

const vendingMachineMachine = Machine({
  id: 'vendingMachine',
  initial: 'idle',
  context: {
    deposited: 0
  },
  states: {
    idle: {
      on: {
        SELECT_ITEM: {
          target: 'vending',
          cond: 'hasDepositedEnough'
        },
        DEPOSIT_QUARTER: {
          actions: ['addQuarter']
        }
      }
    },
    vending: {}
  }
}, {
  actions: { 
    addQuarter: assign({
      deposited: context => context.deposited + 25
    })
  },
  guards: {
    hasDepositedEnough: context => context.deposited >= 100
  }
});
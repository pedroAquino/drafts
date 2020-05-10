/**
 * Delay XState Events and Transitions
*/

import { Machine } from "xstate";
import { assign } from "xstate/lib/actionTypes";

const traficLightMachine = Machine({
  id: 'traficLightMachine',
  initial: 'green',
  context: {
    rushHour: false
  },
  on: {
    RUSH_HOUR: {
      actions: ['rushHour']
    }
  },
  states: {
    green: {
      after: { GREEN_TIMER: 'yellow' }
    },
    yellow: {
      after: { YELLOW_TIMER: 'red' }
    },
    red: {
      after: { RED_TIMER: 'green' }
    }
  }
}, {
  actions: {
    rushHour: assign({
      rushHour: ctx => true
    })
  },
  delays: {
    GREEN_TIMER: ctx => ctx.rushHour ? 3000 * 1.5 : 3000,
    YELLOW_TIMER: ctx => ctx.rushHour ? 4000 * 1.5 : 4000,
    RED_TIMER: ctx => ctx.rushHour ? 5000 * 1.5 : 5000
  }
});
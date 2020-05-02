/**
 * Simplify State Explosion in XState through Hierarchical States
*/

import { Machine } from "xstate";

const doorMachine = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {
      on: {
        UNLOCK: 'unlocked'
      }
    },
    unlocked: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            LOCK: '#door.locked',
            OPEN: 'opened'
          }
        },
        opened: {
          on: {
            CLOSE: 'closed'
          }
        }
      }
    },
  }
});
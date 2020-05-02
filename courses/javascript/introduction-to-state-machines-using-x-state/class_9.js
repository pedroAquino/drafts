/**
 * Send Events to the Machine with the XState Send Action Creator
*/

import { Machine, send } from "xstate";

const echoMachine = Machine({
  id: 'echo',
  initial: 'listening',
  states: {
    listening: {
      on: {
        SPEAK: {
          // sending the action 'ECHO' whenthe action 'SPEAK' is called
          actions: send('ECHO')
        },
        ECHO: {
          actions: () => console.log('echo')
        }
      }
    }
  }
});
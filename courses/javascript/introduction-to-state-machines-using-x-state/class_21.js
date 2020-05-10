/**
 * Invoke Callbacks to Send and Receive Events from a Parent XState Machine
*/

import { Machine, send } from "xstate";

const echoCallbackHandler = (ctx, event) => (callBack, onEvent) => {
  onEvent(e => {
    if (e.type == 'HEAR') {
      callBack('ECHO')
    }
  })
};

const echoMachine = Machine({
  id: 'echo',
  initial: 'listening',
  states: {
    listening: {
      invoke: {
        id: 'echoCallback',
        src: echoCallbackHandler
      },
      on: {
        SPEAK: { actions: ['sendEvent'] },
        ECHO: { actions: ['echo'] }
      }
    }
  }
}, {
  actions: {
    echo: () => console.log('echo, echo'),
    sendEvent: send('HEAR', { to: 'echoCallback' })
  }
});
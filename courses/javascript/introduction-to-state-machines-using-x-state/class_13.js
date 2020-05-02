/**
 * Use Activities in XState to Run Ongoing Side Effects
*/

import { Machine } from "xstate";

const alarmClockMachine = Machine({
  id: 'alarmClock',
  initial: 'idle',
  states: {
    idle: {
      on: { 
        ALARM: 'alarming',
      }
    },
    alarming: {
      on: { STOP: 'idle' },
      activities: ['alarming']
    }
  }
}, {
  activities: {
    alarming: (context, event) => {
      const beep = () => console.log('beep');
      const intervalId = setInterval(beep, 1000);
      return () => clearInterval(intervalId);
    }
  }
});
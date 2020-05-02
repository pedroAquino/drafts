/*
  Eliminate Boolean Explosion by Enumerating States
*/


/**
 * This implementation leads to inconsistent state: { isLit: true, isBroken: true }
 * lamp is lit and broken at the same time
*/
const firstTry = () => {
  function lightBulb() {
    let isLit = false;
    let isBroken = false;
  
    return  {
      state() {
        return { isLit, isBroken }
      },
  
      toggle() {
        isLit = !isLit;
      },
  
      break() {
        isBroken = true;
      }
    };
  }
  
  const lamp = lightBulb();
  
  const log = () => console.log(lamp.state());
  
  lamp.toggle();
  lamp.break();
  
  log();
}

firstTry();

/**
 * Refactoring to get a more consistent state using enumerators
*/
const refactored = () => {

  const STATES = {
    lit: 'lit',
    unlit: 'unlit',
    broken: 'broken'
  };

  function lightBulb() {
    const  { lit, unlit, broken } = STATES;
    let state = unlit;
    
    return  {
      state() {
        return state;
      },

      toggle() {
        switch(state) {
          case lit: {
            state = unlit;
            break;
          }
          
          case unlit: {
            state = lit;
            break;
          }
        }
      },

      break() {
        state = broken;
      }
    }
  }

  const lamp = lightBulb();
  
  const log = () => console.log(lamp.state());
  
  lamp.toggle();
  lamp.break();
  
  log();

};

refactored();
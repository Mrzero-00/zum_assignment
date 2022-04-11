export function createHooks(callback){
  let hooks = [];
  let idx = 0;
  
  function useState(initVal) {
    const currentIndex = idx;
    const state = hooks[idx] || initVal;
    const setState = newVal => {
      if(newVal !== hooks[currentIndex]){
        hooks[currentIndex] = newVal;
        idx++;
        callback();
      }
    };

    if(idx===0){
      idx++;
    }
    return [state, setState];
  }

  function resetContext(){
    hooks = [];
    idx = 0;
  }

  return { useState, resetContext };
};

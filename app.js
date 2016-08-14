const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

document.write('<body></body>');

const createStore = (reducer) => {
  let state;
  let callbacks = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    callbacks.forEach((callback) => {
      callback();
    });
  };

  const subscribe = (callback) => {
    callbacks.push(callback);
    return () => {
      callbacks.filter((current)=>{
        return current !== callback
      });
    };
  }

  return { getState, dispatch, subscribe};
}

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(() => {
  render();
});

render();

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

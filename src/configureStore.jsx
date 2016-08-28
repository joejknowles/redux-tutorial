import { loadState, saveState } from './localStorage.jsx';
import throttle from 'lodash/throttle';
import todoApp from './reducers/index.jsx';
const {createStore} = Redux;

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue =rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  console.log(PRODUCTION);
  if (PRODUCTION) {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.subscribe(throttle(() => {
    saveState({todos: store.getState().todos});
  }, 1000));
  return store;
};



export default configureStore;

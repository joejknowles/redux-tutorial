import { loadState, saveState } from './localStorage.jsx';
import throttle from 'lodash/throttle';
import todoApp from './reducers/index.jsx';
const {createStore} = Redux;

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  store.subscribe(throttle(() => {
    saveState({todos: store.getState().todos});
  }, 1000));
  return store;
};


export default configureStore;

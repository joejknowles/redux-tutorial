import { loadState, saveState } from './localStorage.jsx';
import throttle from 'lodash/throttle';
import { todo, todos, visibilityFilter } from './reducers.jsx';

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((newState, key) => {
      newState[key] = reducers[key](  state[key], action);
      return newState;
    }, {});
  };
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {createStore} = Redux;
const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
  saveState({todos: store.getState().todos});
}, 1000));

export default store;

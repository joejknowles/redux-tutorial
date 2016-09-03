import todoApp from './reducers/index.jsx';
const { createStore, applyMiddleware } = Redux;
import createLogger from 'redux-logger'

const thunk = (store) => (next) => (action) => {
  if (typeof action !== 'function') {
    return next(action);
  }
  return action(store.dispatch, store.getState);
};

const configureStore = () => {
  const middlewares = [thunk];
  if (!PRODUCTION) {
    middlewares.push(createLogger());
  }
  return createStore(todoApp,
    applyMiddleware(...middlewares));
};

export default configureStore;

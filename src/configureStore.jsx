import todoApp from './reducers/index.jsx';
const { createStore, applyMiddleware } = Redux;
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const configureStore = () => {
  const middlewares = [thunk];
  if (!PRODUCTION) {
    middlewares.push(createLogger());
  }
  return createStore(todoApp,
    applyMiddleware(...middlewares));
};

export default configureStore;

import todoApp from './reducers/index.jsx';
const { createStore, applyMiddleware } = Redux;
import createLogger from 'redux-logger'
import promise from 'redux-promise'

const configureStore = () => {
  const middlewares = [promise];
  if (!PRODUCTION) {
    middlewares.push(createLogger());
  }
  return createStore(todoApp,
    applyMiddleware(...middlewares));
};

export default configureStore;

import todos from './todos.jsx'
const { combineReducers } = Redux

const todoApp = combineReducers({
  todos
});

export default todoApp;
